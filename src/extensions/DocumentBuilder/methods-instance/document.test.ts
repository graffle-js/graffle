import { Graffle } from '#graffle'
import type { Errors } from '#lib/errors'
import { TransportMemory } from '#src/extensions/TransportMemory/TransportMemory.js'
import { db } from '#test/schema/possible/db.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { describe, expect, test } from 'vitest'

// todo test with custom scalars

const graffle = Graffle
  .create({ schema: { name: `possible` } })
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })

describe(`gql with two queries`, () => {
  const withTwo = graffle.gql({
    query: {
      foo: { id: true },
      bar: { idNonNull: true },
    },
  })

  // TODO move nextjs test to somewhere else
  // todo allow sync extensions

  // graffle.use(async ({ exchange }) => {
  //   // @ts-expect-error Nextjs
  //   exchange.input.request.next = { revalidate: 60, tags: [`menu`] }
  //   return exchange({
  //     input: {
  //       ...exchange.input,
  //     },
  //   })
  // }).gql({
  //   foo: { query: { id: true } },
  //   bar: { query: { idNonNull: true } },
  // })

  test(`works`, async () => {
    await expect(withTwo.$send(`foo`)).resolves.toEqual({ id: db.id1 })
    // await expect(withTwo.$send(`bar`)).resolves.toEqual({ idNonNull: db.id1 })
  })
  test(`error if no operation name is provided`, async () => {
    // @ts-expect-error
    const error = await withTwo.$send().catch((e: unknown) => e) as Errors.ContextualAggregateError
    expect(error.errors[0]?.message).toEqual(`Must provide operation name if query contains multiple operations.`)
  })
  test(`error if wrong operation name is provided`, async () => {
    // @ts-expect-error
    const error = await withTwo.$send(`boo`).catch((e: unknown) => e) as Errors.ContextualAggregateError
    expect(error.message).toEqual(`Unknown operation named "boo".`)
  })
  // test(`error if no operations provided`, () => {
  //   expect(() => {
  //     // TODO use a pretty type error instead of never
  //     // @ts-expect-error empty-object not allowed
  //     graffle.gql({})
  //   }).toThrowErrorMatchingInlineSnapshot(`
  //     {
  //       "errors": [
  //         [Error: Document has no operations.],
  //       ],
  //     }
  //   `)
  // })
  test.skip(`error if invalid name in document`, async () => {
    // // todo
    // // @ts-expect-error
    // const sender = graffle.gql({ query: { foo$: { id: true } } })
    // await expect(sender.$send(`foo$`)).rejects.toMatchObject({
    //   errors: [{ message: `Syntax Error: Expected "{", found "$".` }],
    // })
  })
})

test(`gql with one query`, async () => {
  const sender = graffle.gql({ query: { foo: { id: true } } })
  await expect(sender.$send()).resolves.toEqual({ id: db.id1 })
})

test(`gql with one mutation`, async () => {
  const sender = graffle.gql({ mutation: { foo: { id: true } } })
  await expect(sender.$send()).resolves.toEqual({ id: db.id1 })
})

test(`error`, async () => {
  const sender = graffle.gql({ query: { foo: { error: true } } })
  await expect(sender.$send()).rejects.toMatchObject({ errors: [{ message: `Something went wrong.` }] })
})

test(`gql with one mutation and one query`, async () => {
  const sender = graffle.gql({
    mutation: {
      foo: { id: true },
    },
    query: {
      bar: { idNonNull: true },
    },
  })
  await expect(sender.$send(`foo`)).resolves.toEqual({ id: db.id1 })
  await expect(sender.$send(`bar`)).resolves.toEqual({ idNonNull: db.id1 })
})
