// dprint-ignore-file
import type { Grafaid } from '#lib/grafaid'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import { $ } from '#src/docpar/object/var/var.js'
import type { Core } from '#src/docpar/core/$.js'
import { test } from 'vitest'

type D<$Op extends Core.Operation> = Core.Doc.Document<$Op>
const Q = Possible.query
const A = Ts.Assert.exact

// ==================================================================================================
//                                 Static Root Type Builder Type Output Inference
// ==================================================================================================

// dprint-ignore
test('static root type builder > type output inference', () => {
  // Nested object args
  const q0 = Q.objectNestedWithArgs({ object: { $: { int: $ }, id:true}})
  A.ofAs<Grafaid.Document.Typed.String<{objectNestedWithArgs:{object:{id:null|string}|null}|null}, { int?: number | null | undefined }, true>>()(q0)

  // Scalar fields
  const q1 = Q.string(true)
  A.ofAs<Grafaid.Document.Typed.String<{ string: string | null }, {}, true>>()(q1)

  const q2 = Q.idNonNull(true)
  A.ofAs<Grafaid.Document.Typed.String<{ idNonNull: string }, {}, true>>()(q2)

  // Custom scalar - without custom scalar codecs defined
  const q3 = Q.date(true)
  A.ofAs<Grafaid.Document.Typed.String<{ date: Date | null }, {}, true>>()(q3)

  // Lists
  const q5 = Q.listInt(true)
  A.ofAs<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, {}, true>>()(q5)

  const q6 = Q.listIntNonNull(true)
  A.ofAs<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, {}, true>>()(q6)

  const q7 = Q.listListInt(true)
  A.ofAs<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, {}, true>>()(q7)

  // Object with fields
  const q8 = Q.object({ id: true })
  A.ofAs<Grafaid.Document.Typed.String<{ object: { id:string|null } | null }, {}, true>>()(q8)

  // Field with $
  const q9 = Q.stringWithArgs({ $: { boolean: $ } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean?: boolean | null | undefined }, true>>()(q9)

  // Required argument with $
  const q10 = Q.stringWithRequiredArg({ $: { string: $ } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }, true>>()(q10) // NOT undefined!

  // Required argument with $ with default
  const q11 = Q.stringWithRequiredArg({ $: { string: $.default('abc') } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string?: string | undefined }, true>>()(q11)

  // $ with custom name
  const q12 = Q.stringWithArgs({ $: { boolean: $.name('isActive') } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive?: boolean | null | undefined }, true>>()(q12)

  // $.required() on optional argument
  const q12b = Q.stringWithArgs({ $: { string: $.required() } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }, true>>()(q12b) // NOT undefined!

  // List argument with $
  const q13 = Q.stringWithListArg({ $: { ints: $ } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints?: readonly (number)[] | null | undefined }, true>>()(q13)

  const q14 = Q.stringWithListArgRequired({ $: { ints: $ } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: readonly number[] }, true>>()(q14)

  // Multiple $ types
  const q15 = Q.stringWithArgs({ $: { boolean: $, string: $ } })
  A.ofAs<Grafaid.Document.Typed.String<
    { stringWithArgs: string | null },
    { boolean?: boolean | null | undefined, string?: string | null | undefined },
    true
  >>()(q15)

  // Mixed $ and literals
  const q16 = Q.stringWithArgs({ $: { boolean: true, string: $, int: 42 } })
  A.ofAs<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string?: string | null | undefined }, true>>()(q16)

  // Alias with $ on nested object field
  const q20 = Q.objectNestedWithArgs({
    object: ['object2', { $: { int: $ }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $ } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$}}]
  })

  A.ofAs<Grafaid.Document.Typed.String<
    { objectNestedWithArgs: { object2: { id: string | null } | null } | null },
    { int?: number | null | undefined },
    true
  >>()(q20)

  // Alias short array syntax (scalars/enums without required args only)
  const q21 = Q.$batch({ id: ['myId'] })
  A.ofAs<Grafaid.Document.Typed.String<{ myId: string | null }, {}, true>>()(q21)

  const q22 = Q.$batch({ string: ['myString'] })
  A.ofAs<Grafaid.Document.Typed.String<{ myString: string | null }, {}, true>>()(q22)

  const q23 = Q.$batch({ abcEnum: ['myEnum'] })
  A.ofAs<Grafaid.Document.Typed.String<{ myEnum: 'A' | 'B' | 'C' | null }, {}, true>>()(q23)

  // Alias string syntax (scalars/enums without required args only)
  const q24 = Q.$batch({ id: 'myId' })
  A.ofAs<Grafaid.Document.Typed.String<{ myId: string | null }, {}, true>>()(q24)

  const q25 = Q.$batch({ string: 'myString' })
  A.ofAs<Grafaid.Document.Typed.String<{ myString: string | null }, {}, true>>()(q25)

  const q26 = Q.$batch({ abcEnum: 'myEnum' })
  A.ofAs<Grafaid.Document.Typed.String<{ myEnum: 'A' | 'B' | 'C' | null }, {}, true>>()(q26)

  // @ts-expect-error - short array alias not allowed on non-scalar
  const q27 = Q.$batch({ object: ['myObject'] })

  // @ts-expect-error - string alias not allowed on non-scalar
  const q28 = Q.$batch({ object: 'myObject' })

  // @ts-expect-error - short array alias not allowed on scalar with required args
  const q29 = Q.$batch({ stringWithRequiredArg: ['myString'] })

  // @ts-expect-error - string alias not allowed on scalar with required args
  const q30 = Q.$batch({ stringWithRequiredArg: 'myString' })
})

// ==================================================================================================
//                                   Single operation, no variables
// ==================================================================================================

type SingleOpNoVars = D<{ name: 'myQuery'; result: { date: Date | null }; variables: {} }>

A.ofAs<SingleOpNoVars>()(Possible.gql(`query myQuery { date }`))
Ts.Assert.equiv.ofAs<SingleOpNoVars>()(Possible.gql({ query: { myQuery: { date: true } } }))

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

type SingleOpRequiredVars = D<{ name: 'getById'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }>

Ts.Assert.equiv.ofAs<SingleOpRequiredVars>()(Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`))
// dprint-ignore
Ts.Assert.equiv.ofAs<SingleOpRequiredVars>()(Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }))

// ==================================================================================================
//                                 Single operation, optional variables
// ==================================================================================================

type SingleOpOptionalVars = D<{ name: 'search'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>

A.ofAs<SingleOpOptionalVars>()(
  Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`),
)
Ts.Assert.equiv.ofAs<SingleOpOptionalVars>()(
  Possible.gql({ query: { search: { stringWithArgs: { $: { string: $ }, __typename: true } } } }),
)

// ==================================================================================================
//                                   Anonymous operation (no name)
// ==================================================================================================

type DefaultOpNoVars = D<{ name: 'default'; result: { id: string | null }; variables: {} }>

type DefaultOpWithScalar = D<{ name: 'default'; result: { date: Date | null }; variables: {} }>

type DefaultOpOptionalVars = D<{ name: 'default'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>

A.ofAs<DefaultOpNoVars>()(Possible.gql(`{ id }`))
Ts.Assert.equiv.ofAs<DefaultOpNoVars>()(Possible.gql({ query: { default: { id: true } } }))

A.ofAs<DefaultOpWithScalar>()(Possible.gql(`{ date }`))
Ts.Assert.equiv.ofAs<DefaultOpWithScalar>()(Possible.gql({ query: { default: { date: true } } }))

A.ofAs<DefaultOpOptionalVars>()(Possible.gql(`query ($string: String) { stringWithArgs(string: $string) }`))
Ts.Assert.equiv.ofAs<DefaultOpOptionalVars>()(Possible.gql({ query: { default: { stringWithArgs: { $: { string: $ } } } } }))

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

type MultiOpNoVars = D<
  | { name: 'getUser'; result: { id: string | null }; variables: {} }
  | { name: 'addId'; result: { id: string | null }; variables: {} }
>

A.ofAs<MultiOpNoVars>()(Possible.gql(`
  query getUser { id }
  mutation addId { id }
`))
Ts.Assert.equiv.ofAs<MultiOpNoVars>()(Possible.gql({
  query: { getUser: { id: true } },
  mutation: { addId: { id: true } },
}))

// ==================================================================================================
//                                   Multiple operations with variables
// ==================================================================================================

type MultiOpWithVars = D<
  | { name: 'getById'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }
  | { name: 'setId'; result: { idNonNull: string }; variables: {} }
>

Ts.Assert.equiv.ofAs<MultiOpWithVars>()(
  Possible.gql(`
    query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation setId { idNonNull }
  `),
)
Ts.Assert.equiv.ofAs<MultiOpWithVars>()(
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
