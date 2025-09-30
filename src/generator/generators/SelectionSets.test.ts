import * as MemFS from 'memfs'
import * as Fs from 'node:fs/promises'
import { beforeEach, describe, expect, test } from 'vitest'
import { generate } from '../generator/generate.js'

const fs = MemFS.fs.promises as any as typeof Fs

beforeEach(async () => {
  try {
    await fs.rmdir(process.cwd(), { recursive: true })
  } catch {}
  await fs.mkdir(process.cwd(), { recursive: true })
})

describe('custom root type names', () => {
  const generateAndGetDocument = async (sdl: string) => {
    await generate({ fs, schema: { type: 'sdl', sdl } })
    const content = MemFS.fs.readFileSync('./graffle/modules/selection-sets.ts', 'utf8')
    const match = content.toString().match(/export interface \$Document[^}]+\}/s)
    expect(match).toBeTruthy()
    return match![0]
  }

  test('uses dynamic root type names instead of hardcoded Query/Mutation', async () => {
    const doc = await generateAndGetDocument(`
      schema { query: QueryRoot, mutation: MutationRoot }
      type QueryRoot { x: String }
      type MutationRoot { y: String }
    `)

    expect(doc).toContain('QueryRoot<_$Context>')
    expect(doc).toContain('MutationRoot<_$Context>')
    expect(doc).not.toContain(': Query<')
    expect(doc).not.toContain(': Mutation<')
  })

  test('works with standard names', async () => {
    const doc = await generateAndGetDocument(`
      type Query { x: String }
      type Mutation { y: String }
    `)

    expect(doc).toContain('Query<_$Context>')
    expect(doc).toContain('Mutation<_$Context>')
  })

  test('handles query-only schema', async () => {
    const doc = await generateAndGetDocument(`
      schema { query: MyQuery }
      type MyQuery { x: String }
    `)

    expect(doc).toContain('MyQuery<_$Context>')
    expect(doc).not.toContain('mutation?:')
  })
})
