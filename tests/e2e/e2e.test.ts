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
		const graffle = Graffle.create({ schema: '${pokemonService.url.href}' })
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
		console.log(data?.pokemonByName)
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
		const graffle = Graffle.create({ schema: '${pokemonService.url.href}' })
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
