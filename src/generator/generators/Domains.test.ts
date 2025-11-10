import { Test } from '@wollybeard/kit/test'
import { describe, expect, test, vi } from 'vitest'
import type { FieldGroupingRule } from '../config/configInit.js'
import { defaults } from '../config/defaults.js'
import { generateModules } from '../generator/generate.js'
import { checkRulePrecedence } from './MethodsRoot.js'

// Suppress warnings in tests
defaults.lint.missingGraphqlSP = false

// ========================================
// Existing Integration Tests
// ========================================

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
  const domainsRoot = modules.find(m => m.filePath === 'domains/__.ts')
  expect(domainsRoot).toBeDefined()
  expect(domainsRoot!.content).toContain('export * as pokemon')
  expect(domainsRoot!.content).toContain('export * as trainer')

  // Should have generated pokemon namespace
  const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
  expect(pokemonMethods).toBeDefined()
  // Should import pre-curried helper from core
  expect(pokemonMethods!.content).toContain('import { $$query } from')
  // Should use simplified syntax with imported helper
  expect(pokemonMethods!.content).toContain("export const getOne = $$query('pokemonByName')")

  const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/__.ts')
  expect(pokemonIndex).toBeDefined()
  expect(pokemonIndex!.content).toContain("export * from './methods.js'")

  // Should have generated trainer namespace
  const trainerMethods = modules.find(m => m.filePath === 'domains/trainer/methods.ts')
  expect(trainerMethods).toBeDefined()
  expect(trainerMethods!.content).toContain('import { $$query } from')
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
  const domainsRoot = modules.find(m => m.filePath === 'domains/__.ts')
  expect(domainsRoot!.content).toContain('export * as pokemon')
  expect(domainsRoot!.content).toContain('export * as poke')

  // Both should point to the same path
  const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/__.ts')
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
      domains: false,
    },
  })

  // Should not have any domains modules
  const domainsModules = modules.filter(m => m.filePath?.startsWith('domains/'))
  expect(domainsModules).toHaveLength(0)
})

test('throws error on conflicts within same namespace', async () => {
  await expect(async () => {
    await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            getPokemon(id: ID!): String
            findPokemon(name: String!): String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: 'getPokemon', path: 'pokemon', methodName: 'get' },
            { pattern: 'findPokemon', path: 'pokemon', methodName: 'get' },
          ],
        },
      },
    })
  }).rejects.toThrow(/Namespace organization conflict/)
})

test('allows same method name in different nested namespaces', async () => {
  const { modules } = await generateModules({
    schema: {
      type: 'sdl',
      sdl: `
        type Query {
          getPokemon(id: ID!): String
          listPokemon: String
        }
      `,
    },
    methodsOrganization: {
      domains: {
        rules: [
          { pattern: 'getPokemon', path: 'pokemon.query', methodName: 'get' },
          { pattern: 'listPokemon', path: 'pokemon.list', methodName: 'get' },
        ],
      },
    },
  })

  // Should generate nested structure without conflicts
  const domainsRoot = modules.find(m => m.filePath === 'domains/__.ts')
  expect(domainsRoot).toBeDefined()
  expect(domainsRoot!.content).toContain('export * as pokemon')

  // Should have pokemon parent interface with nested children
  const methodsRoot = modules.find(m => m.name === 'MethodsRoot')
  expect(methodsRoot).toBeDefined()
  expect(methodsRoot!.content).toContain('interface PokemonMethods')
  expect(methodsRoot!.content).toContain('query: PokemonQueryMethods')
  expect(methodsRoot!.content).toContain('list: PokemonListMethods')
})

// ========================================
// Pattern Matching Tests
// ========================================

describe('pattern matching', () => {
  test('string pattern exact match', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
            pokemonById: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: 'pokemonByName', path: 'pokemon', methodName: 'getOne' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain("export const getOne = $$query('pokemonByName')")
    // pokemonById should not be included
    expect(pokemonMethods!.content).not.toContain('pokemonById')
  })

  test('RegExp pattern match', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
            pokemonById: String
            pokemons: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            // Don't specify methodName to avoid conflicts - use field names as method names
            { pattern: /^pokemonBy/, path: 'pokemon' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    // Both pokemonByName and pokemonById should match
    expect(pokemonMethods!.content).toContain('pokemonByName')
    expect(pokemonMethods!.content).toContain('pokemonById')
    // pokemons should not match
    expect(pokemonMethods!.content).not.toContain('pokemons')
  })

  test('omits fields that do not match any rule', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
            unmatchedField: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: 'pokemonByName', path: 'pokemon', methodName: 'getOne' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('pokemonByName')
    expect(pokemonMethods!.content).not.toContain('unmatchedField')
  })

  test('uses static method name from rule', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^pokemon/, path: 'pokemon', methodName: 'getOne' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const getOne')
  })

  test('omits methodName when not provided in rule', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: 'pokemonByName', path: 'pokemon' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    // Should use field name as method name
    expect(pokemonMethods!.content).toContain('export const pokemonByName')
  })

  test('uses dynamic method name function', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Mutation {
            addPokemon: String
            deletePokemon: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            {
              pattern: /^(add|delete)Pokemon$/,
              path: 'pokemon',
              methodName: (fieldName) => {
                if (fieldName.startsWith('add')) return 'create'
                if (fieldName.startsWith('delete')) return 'remove'
                return fieldName
              },
            },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const create')
    expect(pokemonMethods!.content).toContain('export const remove')
  })
})

// ========================================
// Capture Groups Tests
// ========================================

describe('capture groups', () => {
  test('named capture groups in namespace', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
            trainerByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)ByName$/, path: '$resource', methodName: 'getOne' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const getOne')

    const trainerMethods = modules.find(m => m.filePath === 'domains/trainer/methods.ts')
    expect(trainerMethods).toBeDefined()
    expect(trainerMethods!.content).toContain('export const getOne')
  })

  test('indexed capture groups in namespace', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            trainerByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(\w+)ByName$/, path: '$1', methodName: 'getOne' },
          ],
        },
      },
    })

    const trainerMethods = modules.find(m => m.filePath === 'domains/trainer/methods.ts')
    expect(trainerMethods).toBeDefined()
    expect(trainerMethods!.content).toContain('export const getOne')
  })

  test('capture groups in methodName', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
            pokemonById: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^pokemonBy(\w+)$/, path: 'pokemon', methodName: 'getBy$1' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const getByName')
    expect(pokemonMethods!.content).toContain('export const getById')
  })

  test('multiple indexed capture groups', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(\w+)By(\w+)$/, path: '$1', methodName: 'getBy$2' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const getByName')
  })

  test('mixed named and indexed groups', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Mutation {
            addPokemon: String
            updateTrainer: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<action>add|update)(\w+)$/, path: '$2', methodName: '$action' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/Pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const add')

    const trainerMethods = modules.find(m => m.filePath === 'domains/Trainer/methods.ts')
    expect(trainerMethods).toBeDefined()
    expect(trainerMethods!.content).toContain('export const update')
  })

  test('function methodName receives match object', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            {
              pattern: /^(\w+)By(\w+)$/,
              path: '$1',
              methodName: (fieldName, operationType, match) => {
                return match ? `getBy${match[2]}` : fieldName
              },
            },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const getByName')
  })

  test('function methodName with named groups', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Mutation {
            addPokemon: String
            deletePokemon: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            {
              pattern: /^(?<action>add|update|delete)(?<resource>\w+)$/,
              path: '$resource',
              methodName: (fieldName, operationType, match) => {
                if (!match?.groups) return 'unknown'
                const action = match.groups['action']
                if (action === 'add') return 'create'
                if (action === 'delete') return 'remove'
                return action ?? 'unknown'
              },
            },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/Pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const create')
    expect(pokemonMethods!.content).toContain('export const remove')
  })

  test('full integration with multiple resources', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
            trainerByName: String
            battleById: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)By(Name|Id)$/, path: '$resource', methodName: 'getBy$2' },
          ],
        },
      },
    })

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const getByName')

    const trainerMethods = modules.find(m => m.filePath === 'domains/trainer/methods.ts')
    expect(trainerMethods).toBeDefined()
    expect(trainerMethods!.content).toContain('export const getByName')

    const battleMethods = modules.find(m => m.filePath === 'domains/battle/methods.ts')
    expect(battleMethods).toBeDefined()
    expect(battleMethods!.content).toContain('export const getById')
  })
})

// ========================================
// String Transformations Tests
// ========================================

describe('string transformations', () => {
  test('kebab-case transformation', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonSpeciesByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)ByName$/, path: '${kebab:resource}', methodName: 'getOne' },
          ],
        },
      },
    })

    const methods = modules.find(m => m.filePath === 'domains/pokemon-species/methods.ts')
    expect(methods).toBeDefined()
    expect(methods!.content).toContain('export const getOne')
  })

  test('PascalCase transformation', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)ByName$/, path: '${pascal:resource}', methodName: 'getOne' },
          ],
        },
      },
    })

    const methods = modules.find(m => m.filePath === 'domains/Pokemon/methods.ts')
    expect(methods).toBeDefined()
    expect(methods!.content).toContain('export const getOne')
  })

  test('snake_case transformation', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonSpeciesByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)ByName$/, path: '${snake:resource}', methodName: 'getOne' },
          ],
        },
      },
    })

    const methods = modules.find(m => m.filePath === 'domains/pokemon_species/methods.ts')
    expect(methods).toBeDefined()
    expect(methods!.content).toContain('export const getOne')
  })

  test('transformations work with indexed groups', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonSpeciesByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(\w+)ByName$/, path: '${kebab:1}', methodName: 'getOne' },
          ],
        },
      },
    })

    const methods = modules.find(m => m.filePath === 'domains/pokemon-species/methods.ts')
    expect(methods).toBeDefined()
    expect(methods!.content).toContain('export const getOne')
  })

  test('transformations work in methodName', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)ByName$/, path: 'api', methodName: 'get${pascal:resource}' },
          ],
        },
      },
    })

    const methods = modules.find(m => m.filePath === 'domains/api/methods.ts')
    expect(methods).toBeDefined()
    expect(methods!.content).toContain('export const getPokemon')
  })

  test('multiple transformations in one template', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            getPokemon: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            {
              pattern: /^(?<prefix>get)(?<resource>\w+)$/,
              path: '${kebab:resource}',
              methodName: '${lower:prefix}${pascal:resource}',
            },
          ],
        },
      },
    })

    const methods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(methods).toBeDefined()
    expect(methods!.content).toContain('export const getPokemon')
  })

  test('unknown transformation leaves template unchanged', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^(?<resource>\w+)ByName$/, path: '${unknown:resource}', methodName: 'getOne' },
          ],
        },
      },
    })

    // Should generate with literal ${unknown:resource} in path
    const methods = modules.find(m => m.filePath?.includes('${unknown:resource}'))
    expect(methods).toBeDefined()
  })
})

// ========================================
// Rule Precedence Tests
// ========================================

describe('rule precedence', () => {
  test('applies all matching rules (multi-match)', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: /^pokemon/, path: 'poke', methodName: 'customName' },
            { pattern: /^pokemon/, path: 'pokemon', methodName: 'secondMatch' },
          ],
        },
      },
    })

    // Both namespaces should be generated
    const pokeMethods = modules.find(m => m.filePath === 'domains/poke/methods.ts')
    expect(pokeMethods).toBeDefined()
    expect(pokeMethods!.content).toContain('export const customName')

    const pokemonMethods = modules.find(m => m.filePath === 'domains/pokemon/methods.ts')
    expect(pokemonMethods).toBeDefined()
    expect(pokemonMethods!.content).toContain('export const secondMatch')
  })

  test('warns when RegExp shadows later string pattern', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const rules: FieldGroupingRule[] = [
      { pattern: /^pokemon/, path: 'pokemon' },
      { pattern: 'pokemonByName', path: 'specific', methodName: 'getOne' },
    ]

    checkRulePrecedence(rules)

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Rule precedence warning'))
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('pokemonByName'))
    consoleSpy.mockRestore()
  })

  test('warns when duplicate string patterns exist', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const rules: FieldGroupingRule[] = [
      { pattern: 'pokemonByName', path: 'pokemon', methodName: 'getOne' },
      { pattern: 'pokemonByName', path: 'pokemon', methodName: 'getDuplicate' },
    ]

    checkRulePrecedence(rules)

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Rule precedence warning'))
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('duplicate'))
    consoleSpy.mockRestore()
  })
})

// ========================================
// Enhanced Aliases Tests
// ========================================

describe('aliases', () => {
  test('methodName array creates multiple method aliases', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: 'pokemonByName', path: 'pokemon', methodName: ['getOne', 'get', 'find'] },
          ],
        },
      },
    })

    const pokemonIndex = modules.find(m => m.filePath === 'domains/pokemon/__.ts')
    expect(pokemonIndex).toBeDefined()
    // Should have all three method aliases
    expect(pokemonIndex!.content).toContain('getOne as get')
    expect(pokemonIndex!.content).toContain('getOne as find')
  })

  test('nested namespace aliases work with dot-notation', async () => {
    const { modules } = await generateModules({
      schema: {
        type: 'sdl',
        sdl: `
          type Query {
            pokemonByName: String
          }
        `,
      },
      methodsOrganization: {
        domains: {
          rules: [
            { pattern: 'pokemonByName', path: ['api.v2.pokemon', 'v2.poke'], methodName: 'getOne' },
          ],
        },
      },
    })

    // Both nested namespaces should exist
    const apiPokemonMethods = modules.find(m => m.filePath === 'domains/api/v2/pokemon/methods.ts')
    expect(apiPokemonMethods).toBeDefined()
    expect(apiPokemonMethods!.content).toContain('export const getOne')

    const v2PokeMethods = modules.find(m => m.filePath === 'domains/v2/poke/methods.ts')
    expect(v2PokeMethods).toBeDefined()
    expect(v2PokeMethods!.content).toContain('export const getOne')
  })
})
