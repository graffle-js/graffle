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
//                   INFER OPERATIONS TYPE TESTS
// ====================================================================
// dprint-ignore
type _1 = Ts.Cases<
  // InferOperations with both query and mutation operations
  Ts.AssertEqual<
    InferOperations<
      {
        query: {
          getUser: { id: true }
        }
        mutation: {
          updateUser: { idNonNull: true }
        }
      },
      Possible.$.Schema,
      Possible.$.ArgumentsMap,
      { typeHookRequestResultDataTypes: never; scalars: {} }
    >,
    {
      getUser: { result: { id: string | null }; variables: {} }
      updateUser: { result: { idNonNull: string }; variables: {} }
    }
  >,
  // InferOperations with mutation variables including $-prefixed keys
  Ts.AssertEqual<
    InferOperations<
      {
        mutation: {
          addItem: {
            id: {
              $: {
                $type: $
                name: $
              }
            }
          }
        }
      },
      Possible.$.Schema,
      Possible.$.ArgumentsMap,
      { typeHookRequestResultDataTypes: never; scalars: {} }
    >,
    {
      addItem: {
        result: { id: string | null }
        variables: { type?: string | undefined; name?: string | undefined }
      }
    }
  >
>
