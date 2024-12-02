import { expect } from 'vitest'
import { test } from '../_/helpers.js'

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
    \`.send({ name: 'Pikachu' })
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
		const graffle = Graffle.create().transport({ url: '${pokemonService.url.href}' })
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
    const result = await project.run`pnpm graffle --schema http://localhost:3001/graphql`
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

  await project.run`pnpm dprint check graffle/**/*`
})

test(`client uses prettier formatter if installed`, async ({ project }) => {
  // await project.addDprintConfig()
  const path = await project.addPokemonSchemaSDL()

  await project.run`pnpm add --save-dev prettier`

  const genResult = await project.run`pnpm graffle --schema ${path.relative} --format`
  const genResultStdout = genResult.stdout as string
  expect(genResultStdout.includes(`No TypeScript formatter found`)).toEqual(false)

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
    expect(result.stderr).toMatch(/type Stripping is an experimental feature/i)
  }
  {
    // JavaScript with older Node.js version
    await project.run(`pnpm`, [`env`, `use`, `--global`, `22.5`])
    const result = await project.run(`pnpm`, [`graffle`])
    expect(result.stdout).toMatch(usingConfigFilePatterns.js)
    expect(result.stderr).not.toMatch(/type Stripping is an experimental feature/i)
  }
})
