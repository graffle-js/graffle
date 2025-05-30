import { describe, expect, test } from 'vitest'
import { db } from '../../../../tests/_/fixtures/schemas/possible/db.js'
import { possibleSchema } from '../../../../tests/_/fixtures/schemas/possible/schema.js'
import { Graffle } from '../../../exports/index.js'
import type { Errors } from '../../../lib/errors/_namespace.js'
import { TransportMemory } from '../../TransportMemory/TransportMemory.js'
import { DocumentBuilder } from '../DocumentBuilder.js'

// todo test with custom scalars

const graffle = Graffle
  .create({ schema: { name: `possible` } })
  .use(TransportMemory)
  .use(DocumentBuilder)
  .transport(`memory`, { schema: possibleSchema })

describe(`document with two queries`, () => {
  const withTwo = graffle.document({
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
  // }).document({
  //   foo: { query: { id: true } },
  //   bar: { query: { idNonNull: true } },
  // })

  test(`works`, async () => {
    const { run } = withTwo
    await expect(run(`foo`)).resolves.toEqual({ id: db.id1 })
    // await expect(run(`bar`)).resolves.toEqual({ idNonNull: db.id1 })
  })
  test(`error if no operation name is provided`, async () => {
    const { run } = withTwo
    // @ts-expect-error
    const error = await run().catch((e: unknown) => e) as Errors.ContextualAggregateError
    expect(error.errors[0]?.message).toEqual(`Must provide operation name if query contains multiple operations.`)
  })
  test(`error if wrong operation name is provided`, async () => {
    const { run } = withTwo
    // @ts-expect-error
    const error = await run(`boo`).catch((e: unknown) => e) as Errors.ContextualAggregateError
    expect(error.message).toEqual(`Unknown operation named "boo".`)
  })
  test(`error if no operations provided`, () => {
    expect(() => {
      // TODO use a pretty type error instead of never
      // @ts-expect-error empty-object not allowed
      graffle.document({})
    }).toThrowErrorMatchingInlineSnapshot(`
      {
        "errors": [
          [Error: Document has no operations.],
        ],
      }
    `)
  })
  test.skip(`error if invalid name in document`, async () => {
    // // todo
    // // @ts-expect-error
    // const { run } = graffle.document({ query: { foo$: { id: true } } })
    // await expect(run(`foo$`)).rejects.toMatchObject({
    //   errors: [{ message: `Syntax Error: Expected "{", found "$".` }],
    // })
  })
})

test(`document with one query`, async () => {
  const { run } = graffle.document({ query: { foo: { id: true } } })
  await expect(run()).resolves.toEqual({ id: db.id1 })
})

test(`document with one mutation`, async () => {
  const { run } = graffle.document({ mutation: { foo: { id: true } } })
  await expect(run()).resolves.toEqual({ id: db.id1 })
})

test(`error`, async () => {
  const { run } = graffle.document({ query: { foo: { error: true } } })
  await expect(run()).rejects.toMatchObject({ errors: [{ message: `Something went wrong.` }] })
})

test(`document with one mutation and one query`, async () => {
  const { run } = graffle.document({
    mutation: {
      foo: { id: true },
    },
    query: {
      bar: { idNonNull: true },
    },
  })
  await expect(run(`foo`)).resolves.toEqual({ id: db.id1 })
  await expect(run(`bar`)).resolves.toEqual({ idNonNull: db.id1 })
})
