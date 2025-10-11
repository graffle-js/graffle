import { $ } from '#src/extensions/DocumentBuilder/var/var.js'
import type { TadaDocumentNode } from '#src/lib/gql-tada/index.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { Ts } from '@wollybeard/kit'

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
  TypedFullDocument.SingleOperation<
    TypedFullDocument.Operation<'myQuery', { date: Date | null }, {}>
  >
>()(
  Possible.gql({ query: { myQuery: { date: true } } }),
)

Ts.Test.exact<
  TypedFullDocument.SingleOperation<
    TypedFullDocument.Operation<'myQuery', { date: string | null }, {}>
  >
>()(
  PossibleNoCustomScalars.gql({ query: { myQuery: { date: true } } }),
)

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

Ts.Test.exact<
  TadaDocumentNode<
    { interfaceWithArgs: { id: string | null } | null },
    { id: string },
    void
  >
>()(
  Possible.gql(`query GetById($id: ID!) { interfaceWithArgs(id: $id) { id } }`),
)

Ts.Test.exact<
  TypedFullDocument.SingleOperation<
    TypedFullDocument.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
  >
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
    TypedFullDocument.Operation<'searchStrings', { stringWithArgs: string | null }, { string?: string | undefined }>
  >
>()(Possible.gql({ query: { searchStrings: { stringWithArgs: { $: { string: $ }, __typename: true } } } }))

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

Ts.Test.exact<TadaDocumentNode<{ id: string | null }, {}, void>>()(
  Possible.gql(`query GetUser { id } mutation AddId { id }`),
)

Ts.Test.exact<
  TypedFullDocument.MultiOperation<{
    getUser: TypedFullDocument.Operation<'getUser', { id: string | null }, {}>
    addId: TypedFullDocument.Operation<'addId', { id: string | null }, {}>
  }>
>()(Possible.gql({ query: { getUser: { id: true } }, mutation: { addId: { id: true } } }))

// ==================================================================================================
//                                   Multiple operations with variables
// ==================================================================================================

Ts.Test.exact<
  TadaDocumentNode<
    { interfaceWithArgs: { id: string | null } | null },
    { id: string },
    void
  >
>()(
  Possible.gql(`
    query GetById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation SetId { idNonNull }
  `),
)

Ts.Test.exact<
  TypedFullDocument.MultiOperation<{
    getById: TypedFullDocument.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
    setId: TypedFullDocument.Operation<'setId', { idNonNull: string }, {}>
  }>
>()(
  Possible.gql({
    query: {
      getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } },
    },
    mutation: {
      setId: { idNonNull: true },
    },
  }),
)

// ==================================================================================================
//                                           Error cases
// ==================================================================================================

// @ts-expect-error - invalid document object
Possible.gql({ query: { foo: true } })
// If GQL LSP is running, this will be an error in IDE, but its not a TS error e.g. we cannot use expect-error here
// Possible.gql(`query { foo }`)
