import { MutationOnly } from '#test/schema/mutation-only/client/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { QueryOnly } from '#test/schema/query-only/client/$.js'
import { Ts } from '@wollybeard/kit'
import { test } from 'vitest'

const g = Possible.create({ check: { preflight: false } })

test(`requires input`, () => {
  // @ts-expect-error missing input
  g.gql()
  // todo
  // // @ts-expect-error empty object
  // graffle.gql({})
})

test(`gql with one query`, async () => {
  const sender = g.gql({ query: { foo: { id: true } } })
  const result = await sender.$send()
  Ts.Test.bid<null | { id: string | null }>()(result)
})

test(`gql with two queries`, async () => {
  const sender = g.gql({
    query: {
      foo: { id: true },
      bar: { date: true },
    },
  })
  Ts.Test.parameters<['foo' | 'bar']>()(sender.$send)
  const result = await sender.$send(`foo`)
  Ts.Test.bid<null | { id: string | null }>()(result)
})

test(`gql with two queries of different root types`, async () => {
  const sender = g.gql({
    query: {
      foo: { id: true },
    },
    mutation: {
      bar: { idNonNull: true },
    },
  })
  Ts.Test.parameters<['foo' | 'bar']>()(sender.$send)
  const result = await sender.$send(`foo`)
  Ts.Test.bid<null | { id: string | null }>()(result)
})

test.skip(`root operation not available if it is not in schema`, () => {
  // TODO: This test needs to be updated for gql() behavior
  // gql() doesn't validate operation availability at call time like document() did
  const queryOnly = QueryOnly.create({ check: { preflight: false } })
  queryOnly.gql({
    query: { foo: { id: true } },
    // mutation: { foo: { id: true } },
  })
  const mutationOnly = MutationOnly.create({ check: { preflight: false } })
  mutationOnly.gql({
    mutation: { bar: { id: true } },
    // query: { foo: { id: true } },
  })
})
