import { capitalize, kebabCase } from 'es-toolkit'
import { execa } from 'execa'
import { globby } from 'globby'
import * as Path from 'node:path'
import stripAnsi from 'strip-ansi'
import { showPartition } from '../../examples/$/helpers.js'
import { type File, readFiles } from '../lib/readFiles.js'
import {
  getOutputEncoderFilePathFromExampleFilePath,
  getOutputFilePathFromExampleFilePath,
  outputEncoderExtension,
} from './generate-outputs.js'

export const directories = {
  outputs: `./examples/__outputs__`,
  examples: `./examples`,
  tests: `./examples/__tests__`,
}

export const examplesIgnorePatterns = [`./examples/$`, directories.outputs, directories.tests]

export const readExampleFiles = (name?: string) =>
  readFiles({
    pattern: `./examples/*/*.ts`,
    options: { ignore: examplesIgnorePatterns },
  }).then(files => {
    const filesFiltered = name ? files.filter(file => file.path.full.match(name)) : files
    return {
      all: files,
      filtered: filesFiltered,
    }
  })

export const readExamples = async (filterName?: string): Promise<Example[]> => {
  const exampleFiles = await readExampleFiles(filterName)

  const outputFiles = await readFiles({
    pattern: `./examples/__outputs__/*/*.output.txt`,
  })

  const encoderFilePaths = await globby(`${directories.outputs}/**/*${outputEncoderExtension}`)

  const examples = exampleFiles.filtered.map((example) => {
    const group = parseGroup(example.path.full)
    const fileName = parseFileName(example.name, group.humanName)

    const outputFilePath = getOutputFilePathFromExampleFilePath(example.path.full)
    const outputEncoderFilePath = getOutputEncoderFilePathFromExampleFilePath(example.path.full)
    const outputFile = outputFiles.find(file => {
      return Path.relative(file.path.full, outputFilePath) === ``
    })
    if (!outputFile) throw new Error(`Could not find output file for ${example.name}`)

    const testEncoderFilePath = encoderFilePaths.find((filePath) => {
      return Path.relative(filePath, outputEncoderFilePath) === ``
    })

    const { description, content } = extractDescription(example.content)

    return {
      file: {
        ...example,
        content,
      },
      group,
      fileName,
      output: {
        file: outputFile,
        blocks: outputFile.content.split(showPartition + `\n`).map(block => block.trim()).filter(Boolean),
        encoder: testEncoderFilePath
          ? {
            filePath: testEncoderFilePath,
          }
          : undefined,
      },
      isUsingJsonOutput: example.content.includes(`showJson`),
      description,
      tags: parseTags(example.name),
    }
  })

  return examples
}

const parseGroup = (filePath: string) => {
  const dirName = Path.dirname(filePath).split(`/`).pop()!
  const humanName = dirName.replace(/^\d+_/, ``)
  return {
    dirName,
    humanName,
  }
}

const parseFileName = (fileName: string, group: string): Example['fileName'] => {
  const fileNameWithoutGroup = fileName
  const [tagsExpression, titleExpression] = fileNameWithoutGroup.split(`__`)
  // If group name is duplicated by tags then omit that from the canonical title.
  const tags = tagsExpression ? parseTags(tagsExpression) : null
  const tagsExpressionWithoutGroupName = tags
    ? (tags.length > 1 ? tags.map(tag => tag === group ? `` : tag).filter(Boolean) : tags).join(` `)
    : null
  const canonicalTitleExpression = titleExpression ?? tagsExpressionWithoutGroupName ?? `impossible`
  return {
    canonical: kebabCase(canonicalTitleExpression),
    canonicalTitle: toTitle(canonicalTitleExpression),
    tags: tagsExpression ?? `impossible`,
    title: titleExpression ?? null,
  }
}

const parseTags = (fileName: string) => {
  const [tagsExpression] = fileName.replace(/^[^|]+\|/, ``).split(`__`)
  if (!tagsExpression) return []
  const tags = tagsExpression.split(`_`)
  return tags
}

export interface Example {
  description: string | null
  file: File
  fileName: {
    canonical: string
    canonicalTitle: string
    tags: string
    title: string | null
  }
  group: {
    humanName: string
    dirName: string
  }
  output: {
    file: File
    blocks: string[]
    encoder?: {
      filePath: string
    }
  }
  isUsingJsonOutput: boolean
  tags: Tag[]
}

type Tag = string

const extractDescription = (fileContent: string) => {
  const pattern = /^\/\*\*([\s\S]*?)\*\//
  const jsdocMatch = fileContent.match(pattern)

  if (jsdocMatch) {
    const description = jsdocMatch[1]!.trim().replaceAll(/^\s*\* /gm, ``)
    return {
      description,
      content: fileContent.replace(pattern, ``),
    }
  }

  return {
    description: null,
    content: fileContent,
  }
}

export const toTitle = (name: string) => kebabCase(name).split(`-`).map(capitalize).join(` `)

export const computeCombinations = (arr: string[]): string[][] => {
  const result: string[][] = []

  const generateCombinations = (currentCombination: string[], index: number) => {
    if (index === arr.length) {
      result.push([...currentCombination])
      return
    }

    // Include the current element
    generateCombinations([...currentCombination, arr[index]!], index + 1)

    // Exclude the current element
    generateCombinations(currentCombination, index + 1)
  }

  generateCombinations([], 0)

  return result
}

export const runExample = async (filePath: string) => {
  // The filePath might be like "./examples/20_output/foo.ts" or "./20_output/foo.ts"
  // We need to run it from the examples directory with the path relative to that directory

  // Check if we're already in the examples directory
  const currentDir = process.cwd()
  const examplesDir = currentDir.endsWith('/examples')
    ? currentDir
    : Path.join(currentDir, 'examples')

  // Get the absolute path to the example file
  const absoluteExamplePath = Path.isAbsolute(filePath)
    ? filePath
    : Path.join(examplesDir, filePath.replace(/^\.\/examples\//, './').replace(/^examples\//, './'))

  // Use the example runner wrapper that handles error formatting
  const runnerPath = Path.join(
    currentDir.endsWith('/examples') ? Path.dirname(currentDir) : currentDir,
    'scripts/generate-examples-derivatives/example-runner.ts',
  )

  // Pass environment variables including any POKEMON_SCHEMA_URL from vitest
  const result = await execa({
    reject: false,
    env: {
      ...process.env,
      // Ensure the subprocess gets the server URL if set by vitest
      POKEMON_SCHEMA_URL: process.env['POKEMON_SCHEMA_URL'],
    },
  })`pnpm tsx ${runnerPath} ${absoluteExamplePath}`

  let exampleOutput = ``

  // Always capture stdout since that's where our formatted output goes
  // The runner handles all error formatting, so we just capture the output
  exampleOutput = result.stdout || ''

  // If there's no stdout but there is stderr, something went wrong with the runner itself
  if (!exampleOutput && result.stderr) {
    exampleOutput = result.stderr
  }

  exampleOutput = stripAnsi(exampleOutput)

  return exampleOutput
}

// Removed: rewriteDynamicError function is no longer needed
// Errors are now properly formatted in the example-runner.ts wrapper
