import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { expect, test } from 'vitest'
import { Possible } from '../__tests__/fixtures/possible/$.js'
import { Var } from '../var/$.js'
import type { InferOperations } from './document.js'

const $ = Var.$
type $ = typeof $

// dprint-ignore
Test.describe('static document builder')
  .i <TypedFullDocument.TypedFullDocumentString>()
  .o<{ y: string[]; n?: string[] }>()
  .cases(
    [[Possible.document({ query: { getUser: { id: true, idNonNull: true } } })],                                                   { y: [`query getUser`, `id`, `idNonNull`] }],
    [[Possible.document({ query: { getUser: { id: true }, getPost: { idNonNull: true } } })],                                      { y: [`query getUser`, `query getPost`, `id`, `idNonNull`] }],
    [[Possible.document({ query: { getUserWithArg: { stringWithRequiredArg: { $: { string: $ } } } } })],                          { y: [`query getUserWithArg`, `$string:`, `stringWithRequiredArg`] }],
    [[Possible.document({ query: { getUser: { id: true } }, mutation: { updateUser: { id: true } } })],                            { y: [`query getUser`, `mutation updateUser`, `id`] }],
  )
  .test((doc, expectations) => {
    for (const y of expectations.y) {
      expect(doc).toContain(y)
    }

    if (expectations.n) {
      for (const n of expectations.n) {
        expect(doc).not.toContain(n)
      }
    }
  })

test('document is type checked', () => {
  Possible.document({
    // @ts-expect-error invalid document - $ syntax requires Var.$ marker, not boolean literal
    query: { foo: { stringWithRequiredArg: { $: { string: true /* <-- should be $ */ } } } },
  })
})

// ====================================================================
//            INTEGRATION: send() with mixed query/mutation
// ====================================================================

test('send() with mixed query/mutation document and $ prefix stripping', () => {
  const doc = Possible.document({
    query: {
      getUserWithArgs: {
        objectWithArgs: {
          $: {
            // $-prefixed keys should map to variable names without $
            $id: $.required(),
            $string: $.required(),
          },
          id: true,
        },
      },
    },
    mutation: {
      updateUser: {
        // Mutation fields in Possible schema don't accept arguments
        idNonNull: true,
      },
    },
  })

  // Create a typed client (not executing, just testing types)
  const client = Possible.create({ check: { preflight: false } })

  // @ts-expect-error - variables must include 'id' and 'string' (without $ prefix), not '$id' and '$string'
  client.send(doc, 'getUserWithArgs', { $id: 'foo', $string: 'bar' })

  // Should accept 'id' and 'string' (without $ prefix)
  client.send(doc, 'getUserWithArgs', { id: 'foo', string: 'bar' })

  // Mutation operation with no variables works
  client.send(doc, 'updateUser')
})
