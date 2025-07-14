import * as MemFS from 'memfs'
import * as Fs from 'node:fs/promises'
import { beforeEach, describe, expect, test } from 'vitest'
import { generate } from '../generator/generate.js'

const fs = MemFS.fs.promises as any as typeof Fs

const readGeneratedSelectionSets = () => 
  MemFS.fs.readFileSync('./graffle/modules/selection-sets.ts', 'utf8')

beforeEach(async () => {
  try {
    await fs.rmdir(process.cwd(), { recursive: true })
  } catch {}
  await fs.mkdir(process.cwd(), { recursive: true })
})

describe('Issue #1353 - Custom root type names', () => {
  test('uses dynamic root type names instead of hardcoded Query/Mutation', async () => {
    // Schema with custom root type names that would break with hardcoded references
    const schema = `
      schema {
        query: QueryRoot
        mutation: MutationRoot
      }

      type QueryRoot {
        getString: String
      }

      type MutationRoot {
        setString(value: String!): String
      }
    `

    await generate({ fs, schema: { type: 'sdl', sdl: schema } })
    const selectionSets = readGeneratedSelectionSets()

    // Find the $Document interface
    const documentMatch = selectionSets.match(/export interface \$Document[^}]+\}/s)
    expect(documentMatch).toBeTruthy()
    const documentInterface = documentMatch![0]

    // Should use actual root type names from schema, not hardcoded "Query"/"Mutation"
    expect(documentInterface).toContain('QueryRoot<_$Scalars>')
    expect(documentInterface).toContain('MutationRoot<_$Scalars>')
    
    // Should NOT contain hardcoded type names
    expect(documentInterface).not.toContain('Query<_$Scalars>')
    expect(documentInterface).not.toContain('Mutation<_$Scalars>')
  })

  test('works with standard Query/Mutation names', async () => {
    // Standard schema should still work
    const schema = `
      type Query {
        getString: String
      }

      type Mutation {
        setString(value: String!): String
      }
    `

    await generate({ fs, schema: { type: 'sdl', sdl: schema } })
    const selectionSets = readGeneratedSelectionSets()

    // Find the $Document interface
    const documentMatch = selectionSets.match(/export interface \$Document[^}]+\}/s)
    expect(documentMatch).toBeTruthy()
    const documentInterface = documentMatch![0]

    // Should use standard names
    expect(documentInterface).toContain('Query<_$Scalars>')
    expect(documentInterface).toContain('Mutation<_$Scalars>')
  })

  test('handles query-only schema', async () => {
    const schema = `
      schema {
        query: CustomQuery
      }

      type CustomQuery {
        getString: String
      }
    `

    await generate({ fs, schema: { type: 'sdl', sdl: schema } })
    const selectionSets = readGeneratedSelectionSets()

    const documentMatch = selectionSets.match(/export interface \$Document[^}]+\}/s)
    expect(documentMatch).toBeTruthy()
    const documentInterface = documentMatch![0]

    // Should have query but no mutation
    expect(documentInterface).toContain('query?: Record<string, CustomQuery<_$Scalars>>')
    expect(documentInterface).not.toContain('mutation?:')
  })
})