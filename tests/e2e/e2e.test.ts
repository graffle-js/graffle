import { expect } from 'vitest'
import { test } from '../_/helpers.js'

// Register the snapshot serializer
expect.addSnapshotSerializer({
  test(value: unknown): boolean {
    // Check if this is a stdio tuple [unknown, string, string]
    if (!Array.isArray(value) || value.length !== 3) {
      return false
    }
    // Check if the second and third elements are strings (stdout and stderr)
    return typeof value[1] === 'string' && typeof value[2] === 'string'
  },

  serialize(value: [unknown, string, string]): string {
    const [stdin, stdout, stderr] = value

    // Normalize full paths containing temp directories
    // Replace entire paths like /private/var/folders/xx/xxx/T/xxxxx with <TMP_PATH>
    const normalizedStdout = stdout
      .replace(/\/private\/var\/folders\/[^/]+\/[^/]+\/T\/[a-f0-9]{20,}/gi, '<TMP_PATH>')
      .replace(/\/var\/folders\/[^/]+\/[^/]+\/T\/[a-f0-9]{20,}/gi, '<TMP_PATH>')
      .replace(/\/tmp\/[a-f0-9]+/gi, '<TMP_PATH>')

    const normalizedStderr = stderr
      .replace(/\/private\/var\/folders\/[^/]+\/[^/]+\/T\/[a-f0-9]{20,}/gi, '<TMP_PATH>')
      .replace(/\/var\/folders\/[^/]+\/[^/]+\/T\/[a-f0-9]{20,}/gi, '<TMP_PATH>')
      .replace(/\/tmp\/[a-f0-9]+/gi, '<TMP_PATH>')

    // Format output to be human-readable by preserving the actual string content
    const formatValue = (val: unknown): string => {
      if (val === undefined) return 'undefined'
      if (val === '') return '""'
      if (typeof val === 'string') {
        // For multiline strings, show them as-is with backticks
        if (val.includes('\n')) {
          return '`' + val + '`'
        }
        // For single line strings, use quotes
        return JSON.stringify(val)
      }
      return JSON.stringify(val, null, 2)
    }

    return `[
  ${formatValue(stdin)},
  ${formatValue(normalizedStdout)},
  ${formatValue(normalizedStderr)},
]`
  },
})

// - new project no generation
// 	- type error if try give name to constructor

// - new project with 1 client generation
// 	- type error if try give name to constructor
// 	- can use static client
// 	- can use generated client import

// - new project with 2 client generation
// 	- type error if give wrong name to constructor
// 	- can give right name to constructor
// 	- can use static client
// 	- can use generated clients import

// ...?

test(`client works without generation`, async ({ project, pokemonService }) => {
  await project.fs.writeAsync(
    `main.ts`,
    `
		import { Graffle } from 'graffle'
		const graffle = Graffle.create().transport({ url: '${pokemonService.url.href}' })
		const data = await graffle.gql\`
      query ($name: String!) {
        pokemonByName (name: $name) {
          name
          hp
          attack
          defense
          trainer {
            name
          }
        }
      }
    \`.$send({ name: 'Pikachu' })
		console.log(data?.['pokemonByName'])
		`,
  )
  const result = await project.run`pnpm tsx main`
  expect(result.stdio).toMatchSnapshot()
})

test(`client works with generation`, async ({ project, pokemonService }) => {
  await project.fs.writeAsync(
    `main.ts`,
    `
		import { Graffle } from 'graffle'
		import { DocumentBuilder } from 'graffle/extensions/document-builder'

		const graffle = Graffle.create().use(DocumentBuilder).transport({ url: '${pokemonService.url.href}' })
		const data = await graffle.query.pokemonByName({
			$: { name: 'Pikachu' },
			name: true,
			hp: true,
			attack: true,
			defense: true,
			trainer: {
				name: true,
			},
		})
		console.log(data)
		`,
  )
  {
    const result = await project.run`pnpm graffle --schema ${pokemonService.url.href}`
    expect(result.stdio).toMatchSnapshot()
  }
  {
    await project.run`pnpm check:types`
  }
  {
    const result = await project.run`pnpm tsx main`
    expect(result.stdio).toMatchSnapshot()
  }
})

test(`client uses dprint formatter if installed`, async ({ project }) => {
  await project.addDprintConfig()
  const path = await project.addPokemonSchemaSDL()

  await project.run`pnpm add --save-dev dprint @dprint/formatter @dprint/typescript`

  const genResult = await project.run`pnpm graffle --schema ${path.relative} --format`
  const genResultStdout = genResult.stdout as string
  expect(genResultStdout.includes(`No TypeScript formatter found`)).toEqual(false)

  // Verify the generated code passes dprint validation
  await project.run`pnpm dprint check graffle/**/*`
})

test(`client uses prettier formatter if installed`, async ({ project }) => {
  const path = await project.addPokemonSchemaSDL()

  await project.run`pnpm add --save-dev prettier`

  const genResult = await project.run`pnpm graffle --schema ${path.relative} --format`
  const genResultStdout = genResult.stdout as string
  expect(genResultStdout.includes(`No TypeScript formatter found`)).toEqual(false)

  // Verify the generated code passes prettier validation
  await project.run`pnpm prettier --check graffle/**/*`
})

test(`project uses graffle config file if present`, async ({ project, onTestFinished }) => {
  // Clean up global side effects caused by this e2e test in development.
  const isCI = process.env[`CI`]
  if (!isCI) {
    onTestFinished(async () => {
      // If tests worked then this is already removed so catch expected error.
      await project.run(`pnpm`, [`-g`, `remove`, `tsx`]).catch(() => {})
      await project.run(`pnpm`, [`env`, `use`, `--global`, `lts`])
    })
  }
  const path = await project.addPokemonSchemaSDL()
  const configFilePaths = {
    ts: `graffle.config.ts`,
    js: `graffle.config.js`,
  }
  const usingConfigFilePatterns = {
    ts: new RegExp(`using file config found at.*${configFilePaths.ts}`, `i`),
    js: new RegExp(`using file config found at.*${configFilePaths.js}`, `i`),
  }
  const configContent = `
    import { Generator } from 'graffle/generator'
    export default Generator.configure({
      schema: {
        type: 'sdlFile',
        dirOrFilePath: '${path.relative}',
      },
    })
  `
  project.fs.write(configFilePaths.ts, configContent)

  {
    // TypeScript with local tsx (installed with project by default)
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.ts)
  }
  {
    // JavaScript with local tsx
    project.fs.rename(configFilePaths.ts, configFilePaths.js)
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.js)
  }
  {
    // TypeScript with global tsx
    await project.run(`pnpm`, [`remove`, `tsx`])
    project.fs.rename(configFilePaths.js, configFilePaths.ts)
    await project.run(`pnpm`, [`-g`, `add`, `tsx`])
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.ts)
  }

  // Cover --experimental-strip-types
  await project.run(`pnpm`, [`-g`, `remove`, `tsx`])

  {
    // TypeScript with --experimental-strip-types
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.ts)
  }
  {
    // JavaScript with --experimental-strip-types
    project.fs.rename(configFilePaths.ts, configFilePaths.js)
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.js)
    // expect(result.stderr).toMatch(/type Stripping is an experimental feature/i)
  }
  {
    // JavaScript with older Node.js version
    await project.run(`pnpm`, [`env`, `use`, `--global`, `22.5`])
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.js)
    expect(result.stderr).not.toMatch(/type Stripping is an experimental feature/i)
  }
})
