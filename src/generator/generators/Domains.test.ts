import { describe, expect, test } from 'vitest'
import { defaults } from '../config/defaults.js'
import { generateModules } from '../generator/generate.js'

// Suppress warnings in tests
defaults.lint.missingGraphqlSP = false

test('generates domains directory structure', async () => {
  const { modules } = await generateModules({
    schema: {
      type: 'sdl',
      sdl: `
        type Query {
          pokemonByName(name: String!): String
          trainerById(id: ID!): String
        }
      `,
    },
    methodsOrganization: {
      logical: true,
      domains: {
        rules: [
          {
            pattern: 'pokemonByName',
            path: 'pokemon',
            methodName: 'getOne',
          },
          {
            pattern: 'trainerById',
            path: 'trainer',
            methodName: 'getOne',
          },
        ],
      },
    },
  })

  // Should have generated domains modules
  const domainsRoot = modules.find(m => m.filePath === 'domains/$$.ts')
  expect(domainsRoot).toBeDefined()
  expect(domainsRoot!.content).toContain('export * as pokemon')
  expect(domainsRoot!.content).toContain('export * as trainer')

  // Should have generated pokemon namespace
  const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
  expect(pokemonMethods).toBeDefined()
  expect(pokemonMethods!.content).toContain('export const getOne')
  expect(pokemonMethods!.content).toContain('pokemonByName')

  const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/index.ts')
  expect(pokemonIndex).toBeDefined()
  expect(pokemonIndex!.content).toContain("export * from './methods.js'")

  // Should have generated trainer namespace
  const trainerMethods = modules.find(m => m.filePath === 'domains/trainer/methods.ts')
  expect(trainerMethods).toBeDefined()
  expect(trainerMethods!.content).toContain('export const getOne')
  expect(trainerMethods!.content).toContain('trainerById')
})

test('generates method aliases using Cartesian product', async () => {
  const { modules } = await generateModules({
    schema: {
      type: 'sdl',
      sdl: `
        type Query {
          pokemonByName(name: String!): String
        }
      `,
    },
    methodsOrganization: {
      domains: {
        rules: [
          {
            pattern: 'pokemonByName',
            path: ['pokemon', 'poke'],
            methodName: ['getOne', 'get'],
          },
        ],
      },
    },
  })

  // Should generate both namespace aliases
  const domainsRoot = modules.find(m => m.filePath === 'domains/$$.ts')
  expect(domainsRoot!.content).toContain('export * as pokemon')
  expect(domainsRoot!.content).toContain('export * as poke')

  // Both should point to the same path
  const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/index.ts')
  expect(pokemonIndex).toBeDefined()

  // Should have method aliases
  expect(pokemonIndex!.content).toContain('getOne as get')
})

test('skips domain generation when domains config is false', async () => {
  const { modules } = await generateModules({
    schema: {
      type: 'sdl',
      sdl: 'type Query { ok: Boolean }',
    },
    methodsOrganization: {
      logical: true,
      domains: false,
    },
  })

  // Should not have any domains modules
  const domainsModules = modules.filter(m => m.filePath?.startsWith('domains/'))
  expect(domainsModules).toHaveLength(0)
})
