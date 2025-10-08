/* oxlint-disable no-constant-condition */
import { Graffle } from '#graffle'
import { Var } from '#graffle/client'
import { db } from '#test/schema/possible/db.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { describe, expect, test } from 'vitest'
import { Possible } from '../../extensions/DocumentBuilder/__tests__/fixtures/possible/$.js'
import { TransportMemory } from '../../extensions/TransportMemory/TransportMemory.js'
const $ = Var.$
const g = Graffle
  .create()
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })

Test
  .describe('send() with documents')
  .inputType<{ doc: string; sendArgs: any[] }>()
  .describeInputs('GraphQL Documents', [
    { doc: `{ id }`, sendArgs: [] },
    { doc: `query getID { id } query getIDNonNull { idNonNull }`, sendArgs: ['getID'] },
    { doc: `query getID { id } query getIDNonNull { idNonNull }`, sendArgs: ['getIDNonNull'] },
    { doc: `query getID { id } mutation mutateID { id }`, sendArgs: ['getID'] },
    { doc: `query getID { id } mutation mutateID { id }`, sendArgs: ['mutateID'] },
  ])
  .test(async ({ input: { doc, sendArgs } }) => {
    return await g.send(doc as any, ...sendArgs)
  })

describe('TypedFullDocumentString', () => {
  test('with single operation - no operation name parameter', () => {
    const doc = Possible.document({ query: { foo: { id: true } } })
    // Type checking only
    if (false) {
      // @ts-expect-error - Unreachable code for type testing
      const result = g.send(doc)
      Ts.Test.exact<Promise<{ id: string | null } | null>>()(result)
    }
  })

  test('single operation, optional var -> no name, yes variables optional', async () => {
    const doc = Possible.document({ query: { foo: { stringWithRequiredArg: { $: { string: $.default('abc') } } } } })
    await g.send(doc)
    await g.send(doc, { string: '' })

    // Type checking only - not executed
    if (false) {
      // @ts-expect-error - invalid type
      g.send(doc, { string: 1 })

      Ts.Test.exact<Promise<{ stringWithRequiredArg: string | null } | null>>()(g.send(doc))
    }
  })

  test('single operation, required var -> variables parameter is required', async () => {
    const doc = Possible.document({ query: { foo: { stringWithRequiredArg: { $: { string: $ } } } } })

    // Type checking only - not executed
    if (false) {
      // @ts-expect-error - missing required variables
      g.send(doc)
      // @ts-expect-error - invalid type
      g.send(doc, { string: 1 })
    }

    const result = await g.send(doc, { string: '' })
    expect(result).toEqual({ stringWithRequiredArg: '' })
    Ts.Test.exact<Promise<{ stringWithRequiredArg: string | null } | null>>()(g.send(doc, { string: '' }))
  })

  test('multiple operations, no var -> operation name required', async () => {
    const doc = Possible.document({
      query: {
        a: { id: true },
        b: { idNonNull: true },
      },
    })

    // Type checking only - not executed
    if (false) {
      // @ts-expect-error - missing operation name
      g.send(doc)
      // @ts-expect-error - invalid operation name
      g.send(doc, 'c')
    }

    const resultA = await g.send(doc, 'a')
    const resultB = await g.send(doc, 'b')
    expect(resultA).toEqual({ id: db.id1 })
    expect(resultB).toEqual({ idNonNull: db.id1 })

    Ts.Test.exact<Promise<{ id: string | null } | null>>()(g.send(doc, 'a'))
    Ts.Test.exact<Promise<{ idNonNull: string } | null>>()(g.send(doc, 'b'))
  })

  test('multiple operations, 1 optional var/1 required var -> name required, var optional/var required', async () => {
    const doc = Possible.document({
      query: {
        a: { stringWithRequiredArg: { $: { string: $ } } },
        b: { stringWithRequiredArg: { $: { string: $.default('') } } },
      },
    })

    // Type checking only - not executed
    if (false) {
      // @ts-expect-error - missing operation name
      g.send(doc)
      // @ts-expect-error - invalid operation name
      g.send(doc, 'c')
      // @ts-expect-error - missing variable arguments
      g.send(doc, 'a')
    }

    const resultA = await g.send(doc, 'a', { string: '' })
    expect(resultA).toEqual({ stringWithRequiredArg: '' })

    // Type checking only - not executed
    if (false) {
      // @ts-expect-error - Unreachable code for type testing
      const resultB = g.send(doc, 'b', { string: '' })
      const resultBDefault = g.send(doc, 'b')

      Ts.Test.exact<Promise<{ stringWithRequiredArg: string | null } | null>>()(g.send(doc, 'a', { string: '' }))
      Ts.Test.exact<Promise<{ stringWithRequiredArg: string | null } | null>>()(resultB)
      Ts.Test.exact<typeof resultB>()(resultBDefault)
    }
  })

  test('send() with mixed query/mutation document and variable inference', () => {
    const doc = Possible.document({
      query: {
        a: {
          objectWithArgs: {
            $: {
              id: $.required(),
              string: $.required(),
            },
            id: true,
          },
        },
      },
      mutation: {
        b: {
          // Mutation fields in Possible schema don't accept arguments
          idNonNull: true,
        },
      },
    })

    // Type checking only - not executed
    if (false) {
      // @ts-expect-error - Unreachable code for type testing
      const client = Possible.create({ check: { preflight: false } })

      // Should accept 'id' and 'string' variables
      client.send(doc, 'a', { id: 'foo', string: 'bar' })

      // Mutation operation with no variables works
      client.send(doc, 'b')
    }
  })

  // TODO: Plain string support
  // test('plain string - no type safety', () => {
  //   const query = `{ foo { id } }`
  //   const result = client.send(query)
  //   Ts.Test.exact<Promise<{ [x: string]: any } | null>>()(result)
  // })
})
