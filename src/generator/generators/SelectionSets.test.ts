import { Env, Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import { describe, expect, test } from 'vitest'
import { generate } from '../generator/generate.js'

describe('custom root type names', () => {
  const generateAndGetDocument = async (sdl: string) => {
    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl } })
      const filePath = Fs.Path.join(Env.env.cwd, Fs.Path.fromLiteral('./graffle/modules/selection-sets/_document.ts'))
      const content = yield* Fs.readString(filePath)
      return content
    })

    const content = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer({}))),
    )
    const match = content.match(/export interface \$Document[^}]+\}/s)
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
