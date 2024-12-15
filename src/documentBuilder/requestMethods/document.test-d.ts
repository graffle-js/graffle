import { expectTypeOf, test } from 'vitest'
import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { MutationOnly } from '../../../tests/_/schemas/mutation-only/graffle/__.js'
import { QueryOnly } from '../../../tests/_/schemas/query-only/graffle/__.js'

const g = Graffle.create({ checkPreflight: false })

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
  const queryOnly = QueryOnly.create({ checkPreflight: false })
  queryOnly.document({
    query: { foo: { id: true } },
    // @ts-expect-error mutation not in schema
    mutation: { foo: { id: true } },
  })
  const mutationOnly = MutationOnly.create({ checkPreflight: false })
  mutationOnly.document({
    mutation: { bar: { id: true } },
    // @ts-expect-error query not in schema
    query: { foo: { id: true } },
  })
})
