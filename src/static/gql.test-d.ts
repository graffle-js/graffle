import { $ } from '#src/extensions/DocumentBuilder/var/var.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'

// ==================================================================================================
//                                   Single operation, no variables
// ==================================================================================================

type SingleOpNoVars = TypedFullDocument.SingleOperation<
  TypedFullDocument.Operation<'myQuery', { date: Date | null }, {}>
>

Ts.Test.exact<SingleOpNoVars>()(Possible.gql(`query myQuery { date }`))
Ts.Test.exact<SingleOpNoVars>()(Possible.gql({ query: { myQuery: { date: true } } }))

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

type SingleOpRequiredVars = TypedFullDocument.SingleOperation<
  TypedFullDocument.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
>

Ts.Test.exact<SingleOpRequiredVars>()(Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`))
// dprint-ignore
Ts.Test.exact<SingleOpRequiredVars>()(Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }),
)

// ==================================================================================================
//                                 Single operation, optional variables
// ==================================================================================================

// String syntax (GraphQL parser includes | null for nullable optional variables)
Ts.Test.exact<
  TypedFullDocument.SingleOperation<
    TypedFullDocument.Operation<'search', { stringWithArgs: string | null }, { string?: string | null | undefined }>
  >
>()(
  Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`),
)

// Object syntax (DocumentBuilder excludes | null for optional variables)
Ts.Test.exact<
  TypedFullDocument.SingleOperation<
    TypedFullDocument.Operation<'search', { stringWithArgs: string | null }, { string?: string | undefined }>
  >
>()(
  Possible.gql({ query: { search: { stringWithArgs: { $: { string: $ }, __typename: true } } } }),
)

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

type MultiOpNoVars = TypedFullDocument.MultiOperation<{
  getUser: TypedFullDocument.Operation<'getUser', { id: string | null }, {}>
  addId: TypedFullDocument.Operation<'addId', { id: string | null }, {}>
}>

// String syntax
Ts.Test.exact<MultiOpNoVars>()(
  Possible.gql(`query getUser { id } mutation addId { id }`),
)

// Object syntax
Ts.Test.exact<MultiOpNoVars>()(
  Possible.gql({ query: { getUser: { id: true } }, mutation: { addId: { id: true } } }),
)

// ==================================================================================================
//                                   Multiple operations with variables
// ==================================================================================================

type MultiOpWithVars = TypedFullDocument.MultiOperation<{
  getById: TypedFullDocument.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
  setId: TypedFullDocument.Operation<'setId', { idNonNull: string }, {}>
}>

// String syntax
Ts.Test.exact<MultiOpWithVars>()(
  Possible.gql(`
    query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation setId { idNonNull }
  `),
)

// Object syntax
Ts.Test.exact<MultiOpWithVars>()(
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
