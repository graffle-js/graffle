import { $ } from '#src/extensions/DocumentBuilder/var/var.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { Ts } from '@wollybeard/kit'
import type { TadaDocumentNode } from 'gql.tada'

// ==================================================================================================
//                                   Single operation, no variables
// ==================================================================================================

Ts.Test.exact<TadaDocumentNode<{ date: Date | null }, {}, void>>()(
  Possible.gql(`query { date }`),
)

Ts.Test.exact<TadaDocumentNode<{ date: unknown }, {}, void>>()(
  PossibleNoCustomScalars.gql(`query { date }`),
)

Ts.Test.exact<
  TypedFullDocument.SingleOperation<{
    result: { date: Date | null }
    variables: {}
  }>
>()(
  Possible.gql({ query: { myQuery: { date: true } } }),
)

Ts.Test.exact<
  TypedFullDocument.SingleOperation<{
    result: { date: string | null }
    variables: {}
  }>
>()(
  PossibleNoCustomScalars.gql({ query: { myQuery: { date: true } } }),
)

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

Ts.Test.exact<
  TadaDocumentNode<
    {
      interfaceWithArgs: { __typename?: 'Object1ImplementingInterface' | undefined; id: string | null } | {
        __typename?: 'Object2ImplementingInterface' | undefined
        id: string | null
      } | null
    },
    { id: string },
    void
  >
>()(
  Possible.gql(`query GetById($id: ID!) { interfaceWithArgs(id: $id) { id } }`),
)

Ts.Test.exact<
  TypedFullDocument.SingleOperation<{
    result: { interfaceWithArgs: { id: string | null } | null }
    variables: { id: string }
  }>
>()(
  Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }),
)

// ==================================================================================================
//                                 Single operation, optional variables
// ==================================================================================================

Ts.Test.exact<TadaDocumentNode<{ stringWithArgs: string | null }, { string?: string | null }, void>>()(
  Possible.gql(`query Search($string: String) { stringWithArgs(string: $string) }`),
)

Ts.Test.exact<
  TypedFullDocument.SingleOperation<
    { result: { stringWithArgs: string | null }; variables: { string?: string | undefined } }
  >
>()(Possible.gql({ query: { searchStrings: { stringWithArgs: { $: { string: $ }, __typename: true } } } }))

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

Ts.Test.exact<TadaDocumentNode<{ id: string | null }, {}, void>>()(
  Possible.gql(`query GetUser { id } query GetPost { string }`),
)

Ts.Test.exact<
  TypedFullDocument.MultiOperation<
    {
      getUser: { result: { id: string | null }; variables: {} }
      getPost: { result: { string: string | null }; variables: {} }
    }
  >
>()(Possible.gql({ query: { getUser: { id: true }, getPost: { string: true } } }))

// ==================================================================================================
//                                   Multiple operations with variables
// ==================================================================================================

Ts.Test.exact<
  TadaDocumentNode<
    {
      interfaceWithArgs: { __typename?: 'Object1ImplementingInterface' | undefined; id: string | null } | {
        __typename?: 'Object2ImplementingInterface' | undefined
        id: string | null
      } | null
    },
    { id: string },
    void
  >
>()(
  Possible.gql(`
    query GetById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    query Search($string: String) { stringWithArgs(string: $string) }
  `),
)

Ts.Test.exact<
  TypedFullDocument.MultiOperation<{
    getById: {
      result: { interfaceWithArgs: { id: string | null } | null }
      variables: { id: string }
    }
    search: {
      result: { stringWithArgs: string | null }
      variables: { string?: string | undefined }
    }
  }>
>()(
  Possible.gql({
    query: {
      getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } },
      search: { stringWithArgs: { $: { string: $ }, __typename: true } },
    },
  }),
)

// ==================================================================================================
//                                           Error cases
// ==================================================================================================

// @ts-expect-error - invalid document object
Possible.gql({ query: { foo: true } })
// If GQL LSP is running, this will be an error in IDE
Possible.gql(`query { foo }`)
