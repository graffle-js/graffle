import { Var } from '#exports/client.js'
import { Graffle } from '#graffle'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { describe, expect, test } from 'vitest'
import { db } from '../../../tests/_/fixtures/schemas/possible/db.js'
import { possibleSchema } from '../../../tests/_/fixtures/schemas/possible/schema.js'
import { Possible } from '../../extensions/DocumentBuilder/__tests__/fixtures/possible/$.js'
import { TransportMemory } from '../../extensions/TransportMemory/TransportMemory.js'
const $ = Var.$
const g = Graffle
  .create()
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })

// Runtime tests using Test.describe table-driven pattern
// dprint-ignore
Test.describe('send() with documents')
  .i<{ doc: string; sendArgs: any[] }>()
  .o<object>()
  .casesIn('GraphQL Documents')(
    { n: 'single operation',              i: { doc: `{ id }`,                                                                                             sendArgs: [] },            o: { id: db.id1 } },
    { n: 'multiple ops - first',          i: { doc: `query getID { id } query getIDNonNull { idNonNull }`,                                                sendArgs: ['getID'] },     o: { id: db.id1 } },
    { n: 'multiple ops - second',         i: { doc: `query getID { id } query getIDNonNull { idNonNull }`,                                                sendArgs: ['getIDNonNull'] }, o: { idNonNull: db.id1 } },
    { n: 'mixed query/mutation - query',  i: { doc: `query getID { id } mutation mutateID { id }`,                                                        sendArgs: ['getID'] },     o: { id: db.id1 } },
    { n: 'mixed query/mutation - mutation', i: { doc: `query getID { id } mutation mutateID { id }`,                                                      sendArgs: ['mutateID'] },  o: { id: db.id1 } },
  )
  .test(async ({ doc, sendArgs }, expected) => {
    const result = await g.send(doc as any, ...sendArgs)
    expect(result).toEqual(expected)
  })

describe('TypedFullDocumentString', () => {
  test('with single operation - no operation name parameter', () => {
    const doc = Possible.document({ query: { foo: { id: true } } })
    const result = g.send(doc)
    Ts.assertEqual<Promise<{ id: string | null } | null>>()(result)
  })

  test('single operation, optional var -> no name, yes variables optional', () => {
    const doc = Possible.document({ query: { foo: { stringWithRequiredArg: { $: { string: $.default('abc') } } } } })
    g.send(doc)
    g.send(doc, { string: '' })
    // @ts-expect-error - inavlid type
    g.send(doc, { string: 1 })
    Ts.assertEqual<Promise<{ stringWithRequiredArg: string | null } | null>>()(g.send(doc))
  })

  test('single operation, required var -> variables parameter is required', () => {
    const doc = Possible.document({ query: { foo: { stringWithRequiredArg: { $: { string: $ } } } } })
    // @ts-expect-error - missing required variables
    g.send(doc)
    // @ts-expect-error - inavlid type
    g.send(doc, { string: 1 })
    Ts.assertEqual<Promise<{ stringWithRequiredArg: string | null } | null>>()(g.send(doc, { string: '' }))
  })

  test('multiple operations, no var -> operation name required', () => {
    const doc = Possible.document({
      query: {
        a: { id: true },
        b: { idNonNull: true },
      },
    })
    // @ts-expect-error - misisng operation name
    g.send(doc)
    // @ts-expect-error - invalid operation name
    g.send(doc, 'c')
    Ts.assertEqual<Promise<{ id: string | null } | null>>()(g.send(doc, 'a'))
    Ts.assertEqual<Promise<{ idNonNull: string } | null>>()(g.send(doc, 'b'))
  })

  test('multiple operations, 1 optional var/1 required var -> name required, var optional/var required', () => {
    const doc = Possible.document({
      query: {
        a: { stringWithRequiredArg: { $: { string: $ } } },
        b: { stringWithRequiredArg: { $: { string: $.default('') } } },
      },
    })
    // @ts-expect-error - misisng operation name
    g.send(doc)
    // @ts-expect-error - invalid operation name
    g.send(doc, 'c')
    // @ts-expect-error - missing variable arguments
    g.send(doc, 'a')
    Ts.assertEqual<Promise<{ stringWithRequiredArg: string | null } | null>>()(g.send(doc, 'a', { string: '' }))
    const resultB = g.send(doc, 'b', { string: '' })
    Ts.assertEqual<Promise<{ stringWithRequiredArg: string | null } | null>>()(resultB)
    Ts.assertEqual<typeof resultB>()(g.send(doc, 'b'))
  })

  // TODO: Plain string support
  // test('plain string - no type safety', () => {
  //   const query = `{ foo { id } }`
  //   const result = client.send(query)
  //   Ts.assertEqual<Promise<{ [x: string]: any } | null>>()(result)
  // })
})
