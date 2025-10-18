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
  // Should import pre-curried helper from core
  expect(pokemonMethods!.content).toContain("import { $$query } from")
  // Should use simplified syntax with imported helper
  expect(pokemonMethods!.content).toContain("export const getOne = $$query('pokemonByName')")

  const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/$$.ts')
  expect(pokemonIndex).toBeDefined()
  expect(pokemonIndex!.content).toContain("export * from './methods.js'")

  // Should have generated trainer namespace
  const trainerMethods = modules.find(m => m.filePath === 'domains/trainer/methods.ts')
  expect(trainerMethods).toBeDefined()
  expect(trainerMethods!.content).toContain("import { $$query } from")
  expect(trainerMethods!.content).toContain("export const getOne = $$query('trainerById')")
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
  const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/$$.ts')
  expect(pokemonIndex).toBeDefined()

  // Should have method aliases
  expect(pokemonIndex!.content).toContain('getOne as get')
})

test('imports only operation helpers needed for namespace', async () => {
  const { modules } = await generateModules({
    schema: {
      type: 'sdl',
      sdl: `
        type Query {
          getUser(id: ID!): String
        }
        type Mutation {
          createUser(name: String!): String
        }
      `,
    },
    methodsOrganization: {
      domains: {
        rules: [
          { pattern: 'getUser', path: 'user.query' },
          { pattern: 'createUser', path: 'user.mutation' },
        ],
      },
    },
  })

  // Query namespace should only import $$query helper
  const queryMethods = modules.find(m => m.filePath === 'domains/user/query/methods.ts')
  expect(queryMethods).toBeDefined()
  expect(queryMethods!.content).toContain('import { $$query } from')
  expect(queryMethods!.content).not.toContain('$$mutation')

  // Mutation namespace should only import $$mutation helper
  const mutationMethods = modules.find(m => m.filePath === 'domains/user/mutation/methods.ts')
  expect(mutationMethods).toBeDefined()
  expect(mutationMethods!.content).toContain('import { $$mutation } from')
  expect(mutationMethods!.content).not.toContain('$$query')
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
