import { MutationOnly } from '#test/schema/mutation-only/client/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { QueryOnly } from '#test/schema/query-only/client/$.js'
import { expectTypeOf, test } from 'vitest'

const g = Possible.create({ check: { preflight: false } })

test(`requires input`, () => {
  // @ts-expect-error missing input
  g.document()
  // todo
  // // @ts-expect-error empty object
  // graffle.document({})
})

test(`document with one query`, async () => {
  const run = g.document({ query: { foo: { id: true } } }).run
  type $Parameters = Parameters<typeof run>
  expectTypeOf<$Parameters>().toEqualTypeOf<[]>()
  const result = await run()
  expectTypeOf(result).toEqualTypeOf<null | { id: string | null }>()
})

test(`document with two queries`, async () => {
  const run = g.document({
    query: {
      foo: { id: true },
      bar: { date: true },
    },
  }).run
  type $Parameters = Parameters<typeof run>
  expectTypeOf<$Parameters>().toEqualTypeOf<['foo' | 'bar']>()
  const result = await run(`foo`)
  expectTypeOf(result).toEqualTypeOf<null | { id: string | null }>()
})

test(`document with two queries of different root types`, async () => {
  const run = g.document({
    query: {
      foo: { id: true },
    },
    mutation: {
      bar: { idNonNull: true },
    },
  }).run
  type $Parameters = Parameters<typeof run>
  expectTypeOf<$Parameters>().toEqualTypeOf<['foo' | 'bar']>()
  const result = await run(`foo`)
  expectTypeOf(result).toEqualTypeOf<null | { id: string | null }>()
})

test(`root operation not available if it is not in schema`, () => {
  const queryOnly = QueryOnly.create({ check: { preflight: false } })
  queryOnly.document({
    query: { foo: { id: true } },
    // @ts-expect-error mutation not in schema
    mutation: { foo: { id: true } },
  })
  const mutationOnly = MutationOnly.create({ check: { preflight: false } })
  mutationOnly.document({
    mutation: { bar: { id: true } },
    // @ts-expect-error query not in schema
    query: { foo: { id: true } },
  })
})
