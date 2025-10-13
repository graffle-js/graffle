import type { Docpar } from '#docpar'
import { $ } from '#src/docpar/object/var/var.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import type { IsNever } from 'type-fest'

// ==================================================================================================
//                                   Single operation, no variables
// ==================================================================================================

type SingleOpNoVars = Docpar.TypedFullDocument.SingleOperation<
  Docpar.TypedFullDocument.Operation<'myQuery', { date: Date | null }, {}>
>

Ts.Test.exact<SingleOpNoVars>()(Possible.gql(`query myQuery { date }`))
Ts.Test.exact<SingleOpNoVars>()(Possible.gql({ query: { myQuery: { date: true } } }))

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

type SingleOpRequiredVars = Docpar.TypedFullDocument.SingleOperation<
  Docpar.TypedFullDocument.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
>

Ts.Test.exact<SingleOpRequiredVars>()(Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`))
// dprint-ignore
Ts.Test.exact<SingleOpRequiredVars>()(Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }),
)

// ==================================================================================================
//                                 Single operation, optional variables
// ==================================================================================================

type SingleOpOptionalVars = Docpar.TypedFullDocument.SingleOperation<
  Docpar.TypedFullDocument.Operation<
    'search',
    { stringWithArgs: string | null },
    { string?: string | null | undefined }
  >
>

Ts.Test.exact<SingleOpOptionalVars>()(
  Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`),
)
Ts.Test.exact<SingleOpOptionalVars>()(
  Possible.gql({ query: { search: { stringWithArgs: { $: { string: $ }, __typename: true } } } }),
)

// ==================================================================================================
//                                   Anonymous operation (no name)
// ==================================================================================================

type DefaultOpNoVars = Docpar.TypedFullDocument.SingleOperation<
  Docpar.TypedFullDocument.Operation<'default', { id: string | null }, {}>
>

type DefaultOpWithScalar = Docpar.TypedFullDocument.SingleOperation<
  Docpar.TypedFullDocument.Operation<'default', { date: Date | null }, {}>
>

type DefaultOpOptionalVars = Docpar.TypedFullDocument.SingleOperation<
  Docpar.TypedFullDocument.Operation<
    'default',
    { stringWithArgs: string | null },
    { string?: string | null | undefined }
  >
>

// todo: use fixed test lib
const x = Possible.gql(`{ id }`)
const y: IsNever<typeof x> = false

Ts.Test.exact<DefaultOpNoVars>()(Possible.gql(`{ id }`))
Ts.Test.exact<DefaultOpNoVars>()(Possible.gql({ query: { default: { id: true } } }))

Ts.Test.exact<DefaultOpWithScalar>()(Possible.gql(`{ date }`))
Ts.Test.exact<DefaultOpWithScalar>()(Possible.gql({ query: { default: { date: true } } }))

Ts.Test.exact<DefaultOpOptionalVars>()(Possible.gql(`query ($string: String) { stringWithArgs(string: $string) }`))
Ts.Test.exact<DefaultOpOptionalVars>()(Possible.gql({ query: { default: { stringWithArgs: { $: { string: $ } } } } }))

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

type MultiOpNoVars = Docpar.TypedFullDocument.MultiOperation<{
  getUser: Docpar.TypedFullDocument.Operation<'getUser', { id: string | null }, {}>
  addId: Docpar.TypedFullDocument.Operation<'addId', { id: string | null }, {}>
}>

Ts.Test.exact<MultiOpNoVars>()(Possible.gql(`
  query getUser { id }
  mutation addId { id }
`))
Ts.Test.exact<MultiOpNoVars>()(Possible.gql({
  query: { getUser: { id: true } },
  mutation: { addId: { id: true } },
}))

// ==================================================================================================
//                                   Multiple operations with variables
// ==================================================================================================

type MultiOpWithVars = Docpar.TypedFullDocument.MultiOperation<{
  getById: Docpar.TypedFullDocument.Operation<
    'getById',
    { interfaceWithArgs: { id: string | null } | null },
    { id: string }
  >
  setId: Docpar.TypedFullDocument.Operation<'setId', { idNonNull: string }, {}>
}>

Ts.Test.exact<MultiOpWithVars>()(
  Possible.gql(`
    query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation setId { idNonNull }
  `),
)
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
