import { groupBy, pascalCase } from 'es-toolkit'
import * as FS from 'node:fs/promises'
import { documentQueryContinents, publicGraphQLSchemaEndpoints } from '../../examples/$/helpers.js'
import { deleteFiles } from '../lib/deleteFiles.js'
import { computeCombinations, type Example } from './helpers.js'

interface ExampleTransformed extends Example {
  snippet: {
    content: string
  }
  snippetDetail: {
    content: string
  }
}

export const generateDocs = async (examples: Example[]) => {
  const examplesTransformed = examples
    .map(transformOther)
    .map(transformRewriteGraffleImports)
    .map(transformRewriteHelperImports)
    .map(transformOther)
    .map(transformMarkdown)

  await Promise.all([
    generateExampleSnippets(examplesTransformed),
    generateExamplePages(examplesTransformed),
    generateExampleLinksSnippets(examplesTransformed),
  ])
}

/**
 * Define Generators
 * -----------------
 */

const generateExampleSnippets = async (examplesTransformed: ExampleTransformed[]) => {
  const exampleGroups = Object.values(groupBy(examplesTransformed, example => example.group.dirName))
  {
    // Delete all existing to handle case of renaming or deleting examples.
    await deleteFiles({
      pattern: `./website/content/_snippets/examples/**/*.md`,
    })
    await Promise.all(
      exampleGroups.map(async (examples) => {
        const groupName = examples[0]!.group.humanName
        await FS.mkdir(`./website/content/_snippets/examples/${groupName}`, { recursive: true })
        await Promise.all(examples.map(async (example) => {
          const snippetFilePath = `./website/content/_snippets/examples/${groupName}/${example.fileName.canonical}.md`
          const snippetDetailFilePath =
            `./website/content/_snippets/examples/${groupName}/${example.fileName.canonical}.detail.md`
          await Promise.all([
            FS.writeFile(snippetFilePath, example.snippet.content),
            FS.writeFile(snippetDetailFilePath, example.snippetDetail.content),
          ])
          console.log(`Generated example doc snippet in markdown at`, snippetFilePath)
        }))
      }),
    )
  }

  console.log(`Generated a Vitepress snippet for each example.`)
}

const generateExamplePages = async (examplesTransformed: ExampleTransformed[]) => {
  const exampleGroups = Object.values(groupBy(examplesTransformed, example => example.group.dirName))

  // Delete all existing to handle case of renaming or deleting examples.
  await deleteFiles({
    pattern: `./website/content/examples/**/*`,
    options: {
      ignore: [`./website/content/examples/index.md`, `./website/content/examples/01_about/**/*.md`],
    },
  })

  await Promise.all(
    exampleGroups.map(async (examples) => {
      const groupName = examples[0]!.group.dirName
      await FS.mkdir(`./website/content/examples/${groupName}`, { recursive: true })
      await Promise.all(examples.map(async (example) => {
        const exampleMarkdownFilePath = `./website/content/examples/${groupName}/${example.fileName.canonical}.md`
        await FS.writeFile(exampleMarkdownFilePath, example.file.content)
        console.log(`Generated example doc page in markdown at`, exampleMarkdownFilePath)
      }))
    }),
  )
  console.log(`Generated a Vitepress page for each example.`)
}

const generateExampleLinksSnippets = async (examplesTransformed: ExampleTransformed[]) => {
  // Delete all existing to handle case of renaming or deleting examples.
  await deleteFiles({ pattern: `./website/content/_snippets/example-links/*.md` })

  const groups = examplesTransformed.reduce<Record<string, Example[]>>((groups, example) => {
    const combinations = computeCombinations(example.tags).filter(_ => {
      return _.length > 0
    })
    const combinationNames = combinations.map(combo => combo.join(`_`))
    for (const combo of combinationNames) {
      if (!groups[combo]) {
        groups[combo] = [example]
      } else {
        groups[combo].push(example)
      }
    }
    return groups
  }, {})

  await Promise.all(
    Object.entries(groups).map(async ([groupName, examples]) => {
      const codeLinks = examples.map(example => {
        return `<a href="../../examples/${example.group.humanName}/${example.fileName.canonical}">${example.fileName.canonicalTitle}</a>`
      }).join(` <span class="ExampleLinksSeparator"></span> `)
      const code =
        `<p class="ExampleLinks">Examples <span class="ExampleLinksTitleSeparator">-></span> ${codeLinks}</p>`
      await FS.writeFile(`./website/content/_snippets/example-links/${groupName}.md`, code)
    }),
  )
  console.log(`Generated a Vitepress Markdown partial for each example tags combination.`)
}

/**
 * Define Transformers
 * -------------------
 */

/**
 * 1. Convert Graffle imports into ones that can read from website project packages.
 *    These appear correct from point of view of a user who has installed Graffle into their project.
 */

const transformRewriteGraffleImports = (example: Example) => {
  const defaultSchema = `pokemon`

  let newContent = example.file.content
    .replaceAll(/from '..\/\$\/graffle\/__.js'/g, `from './graffle/__.js'`)
    // The examples that use Pokemon schema are mapped to the default schema in the documentation.
    // This works with Twoslash because we generate a pokemon schema in the website root directory.
    .replaceAll(new RegExp(`(import.*./)${defaultSchema}`, `g`), `$1graffle`)
    .replaceAll(new RegExp(`(import.*{.*)${pascalCase(defaultSchema)}(.*})`, `g`), `$1Graffle$2`)
    // Any $ imports are entirely removed.
    .replaceAll(/import.*'.*\$.*'\n/g, ``)

  newContent = `
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

${newContent.trim()}`

  return {
    ...example,
    file: {
      ...example.file,
      content: newContent,
    },
  }
}

/**
 * 1. Examples in repo use some helper functions. Inline these for presentation on the website.
 */
const transformRewriteHelperImports = (example: Example) => {
  const consoleLog = `console.log`
  const newContent = example.file.content
    .replaceAll(/^import.*\$\/helpers.*$\n/gm, ``)
    .replaceAll(`documentQueryContinents`, `{ document: \`${documentQueryContinents.document}\` }`)
    .replaceAll(`publicGraphQLSchemaEndpoints.Pokemon`, `\`${publicGraphQLSchemaEndpoints.Pokemon}\``)
    .replaceAll(/interceptAndShowOutput.*\n\n?/g, ``)
    .replaceAll(/interceptAndShowUncaughtErrors.*\n\n?/g, ``)
    .replaceAll(/showJson|show/g, consoleLog)
  // We disabled this because the popover gets in the way of output below often.
  // .replaceAll(/(^console.log.*$)/gm, `$1\n//${` `.repeat(consoleLog.length - 1)}^?`)

  return {
    ...example,
    file: {
      ...example.file,
      content: newContent,
    },
  }
}

/**
 * 1. Remove eslint directives.
 */
const transformOther = (example: Example) => {
  const newContent = example.file.content.replaceAll(`/* eslint-disable */`, ``).replaceAll(
    /.*\/\/ dprint-ignore.*\n/g,
    ``,
  )
  return {
    ...example,
    file: {
      ...example.file,
      content: newContent,
    },
  }
}

/**
 * 1. Disable outline aside. Usually empty and provides for wider
 *    code blocks that sometimes have long lines (granted,
 *    not ideal on mobile but better on desktop).
 * 2. Add twoslash code block.
 */
const transformMarkdown = (example: Example) => {
  const outputBlocks = example.output.blocks.map(block => {
    return `
<!-- dprint-ignore-start -->
\`\`\`${example.isUsingJsonOutput ? `json` : `txt`}
${block}
\`\`\`
<!-- dprint-ignore-end -->
`.trim()
  }).join(`\n`)

  const codeBlock = `
<!-- dprint-ignore-start -->
\`\`\`ts twoslash
${example.file.content.trim()}
\`\`\`
<!-- dprint-ignore-end -->
  `.trim()

  const outputs = outputBlocks.length === 0
    ? ``
    : `
#### Outputs

${outputBlocks}
`.trim()

  const newContent = `
---
aside: false
---

# ${example.fileName.canonicalTitle}${example.description ? `\n\n${example.description}\n` : ``}

${codeBlock}

${outputs}
`.trim()

  const snippet = {
    content: `
<div class="ExampleSnippet">
<a href="../../examples/${example.group.humanName}/${example.fileName.canonical}">${example.fileName.canonicalTitle}</a>

${[codeBlock, outputBlocks].filter(_ => _ !== ``).join(`\n\n`).trim()}

</div>
    `.trim(),
  }

  const snippetDetail = {
    content: `
::: details Example
${snippet.content}
:::
    `.trim(),
  }

  return {
    ...example,
    snippet,
    snippetDetail,
    file: {
      ...example.file,
      content: newContent,
    },
  }
}
