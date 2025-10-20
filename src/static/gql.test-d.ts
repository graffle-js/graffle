// dprint-ignore-file
import type { Grafaid } from '#lib/grafaid'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import { $ } from '#src/docpar/object/var/var.js'
import type { Core } from '#src/docpar/core/$.js'
import { test } from 'vitest'

type D<$Op extends Core.Operation> = Core.Doc.Document<$Op>

// ==================================================================================================
//                                 Static Root Type Builder Type Output Inference
// ==================================================================================================

// dprint-ignore
test('static root type builder > type output inference', () => {
  // Nested object args
  const q0 = Possible.query.objectNestedWithArgs({ object: { $: { int: $ }, id:true}})
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{objectNestedWithArgs:{object:{id:null|string}|null}|null}, { int?: number | null | undefined }, true>>()(q0)

  // Scalar fields
  const q1 = Possible.query.string(true)
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ string: string | null }, {}, true>>()(q1)

  const q2 = Possible.query.idNonNull(true)
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ idNonNull: string }, {}, true>>()(q2)

  // Custom scalar - without custom scalar codecs defined
  const q3 = Possible.query.date(true)
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ date: Date | null }, {}, true>>()(q3)

  // Lists
  const q5 = Possible.query.listInt(true)
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, {}, true>>()(q5)

  const q6 = Possible.query.listIntNonNull(true)
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, {}, true>>()(q6)

  const q7 = Possible.query.listListInt(true)
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, {}, true>>()(q7)

  // Object with fields
  const q8 = Possible.query.object({ id: true })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ object: { id:string|null } | null }, {}, true>>()(q8)

  // Field with $
  const q9 = Possible.query.stringWithArgs({ $: { boolean: $ } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean?: boolean | null | undefined }, true>>()(q9)

  // Required argument with $
  const q10 = Possible.query.stringWithRequiredArg({ $: { string: $ } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }, true>>()(q10) // NOT undefined!

  // Required argument with $ with default
  const q11 = Possible.query.stringWithRequiredArg({ $: { string: $.default('abc') } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string?: string | undefined }, true>>()(q11)

  // $ with custom name
  const q12 = Possible.query.stringWithArgs({ $: { boolean: $.name('isActive') } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive?: boolean | null | undefined }, true>>()(q12)

  // $.required() on optional argument
  const q12b = Possible.query.stringWithArgs({ $: { string: $.required() } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }, true>>()(q12b) // NOT undefined!

  // List argument with $
  const q13 = Possible.query.stringWithListArg({ $: { ints: $ } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints?: readonly (number)[] | null | undefined }, true>>()(q13)

  const q14 = Possible.query.stringWithListArgRequired({ $: { ints: $ } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: readonly number[] }, true>>()(q14)

  // Multiple $ types
  const q15 = Possible.query.stringWithArgs({ $: { boolean: $, string: $ } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<
    { stringWithArgs: string | null },
    { boolean?: boolean | null | undefined, string?: string | null | undefined },
    true
  >>()(q15)

  // Mixed $ and literals
  const q16 = Possible.query.stringWithArgs({ $: { boolean: true, string: $, int: 42 } })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string?: string | null | undefined }, true>>()(q16)

  // Alias with $ on nested object field
  const q20 = Possible.query.objectNestedWithArgs({
    object: ['object2', { $: { int: $ }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $ } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$}}]
  })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<
    { objectNestedWithArgs: { object2: { id: string | null } | null } | null },
    { int?: number | null | undefined },
    true
  >>()(q20)

  // Alias short array syntax (scalars/enums without required args only)
  const q21 = Possible.query.$batch({ id: ['myId'] })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ myId: string | null }, {}, true>>()(q21)

  const q22 = Possible.query.$batch({ string: ['myString'] })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ myString: string | null }, {}, true>>()(q22)

  const q23 = Possible.query.$batch({ abcEnum: ['myEnum'] })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ myEnum: 'A' | 'B' | 'C' | null }, {}, true>>()(q23)

  // Alias string syntax (scalars/enums without required args only)
  const q24 = Possible.query.$batch({ id: 'myId' })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ myId: string | null }, {}, true>>()(q24)

  const q25 = Possible.query.$batch({ string: 'myString' })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ myString: string | null }, {}, true>>()(q25)

  const q26 = Possible.query.$batch({ abcEnum: 'myEnum' })
  Ts.Assert.exact.of.as<Grafaid.Document.Typed.String<{ myEnum: 'A' | 'B' | 'C' | null }, {}, true>>()(q26)

  // @ts-expect-error - short array alias not allowed on non-scalar
  const q27 = Possible.query.$batch({ object: ['myObject'] })

  // @ts-expect-error - string alias not allowed on non-scalar
  const q28 = Possible.query.$batch({ object: 'myObject' })

  // @ts-expect-error - short array alias not allowed on scalar with required args
  const q29 = Possible.query.$batch({ stringWithRequiredArg: ['myString'] })

  // @ts-expect-error - string alias not allowed on scalar with required args
  const q30 = Possible.query.$batch({ stringWithRequiredArg: 'myString' })
})

// ==================================================================================================
//                                   Single operation, no variables
// ==================================================================================================

type SingleOpNoVars = D<{ name: 'myQuery'; result: { date: Date | null }; variables: {} }>

Ts.Assert.exact.of.as<SingleOpNoVars>()(Possible.gql(`query myQuery { date }`))
Ts.Assert.equiv.of.as<SingleOpNoVars>()(Possible.gql({ query: { myQuery: { date: true } } }))

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

type SingleOpRequiredVars = D<{ name: 'getById'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }>

Ts.Assert.equiv.of.as<SingleOpRequiredVars>()(Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`))
// dprint-ignore
Ts.Assert.equiv.of.as<SingleOpRequiredVars>()(Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }))

// ==================================================================================================
//                                 Single operation, optional variables
// ==================================================================================================

type SingleOpOptionalVars = D<{ name: 'search'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>

Ts.Assert.exact.of.as<SingleOpOptionalVars>()(
  Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`),
)
Ts.Assert.equiv.of.as<SingleOpOptionalVars>()(
  Possible.gql({ query: { search: { stringWithArgs: { $: { string: $ }, __typename: true } } } }),
)

// ==================================================================================================
//                                   Anonymous operation (no name)
// ==================================================================================================

type DefaultOpNoVars = D<{ name: 'default'; result: { id: string | null }; variables: {} }>

type DefaultOpWithScalar = D<{ name: 'default'; result: { date: Date | null }; variables: {} }>

type DefaultOpOptionalVars = D<{ name: 'default'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>

Ts.Assert.exact.of.as<DefaultOpNoVars>()(Possible.gql(`{ id }`))
Ts.Assert.equiv.of.as<DefaultOpNoVars>()(Possible.gql({ query: { default: { id: true } } }))

Ts.Assert.exact.of.as<DefaultOpWithScalar>()(Possible.gql(`{ date }`))
Ts.Assert.equiv.of.as<DefaultOpWithScalar>()(Possible.gql({ query: { default: { date: true } } }))

Ts.Assert.exact.of.as<DefaultOpOptionalVars>()(Possible.gql(`query ($string: String) { stringWithArgs(string: $string) }`))
Ts.Assert.equiv.of.as<DefaultOpOptionalVars>()(Possible.gql({ query: { default: { stringWithArgs: { $: { string: $ } } } } }))

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

type MultiOpNoVars = D<
  | { name: 'getUser'; result: { id: string | null }; variables: {} }
  | { name: 'addId'; result: { id: string | null }; variables: {} }
>

Ts.Assert.exact.of.as<MultiOpNoVars>()(Possible.gql(`
  query getUser { id }
  mutation addId { id }
`))
Ts.Assert.equiv.of.as<MultiOpNoVars>()(Possible.gql({
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

Ts.Assert.equiv.of.as<MultiOpWithVars>()(
  Possible.gql(`
    query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation setId { idNonNull }
  `),
)
Ts.Assert.equiv.of.as<MultiOpWithVars>()(
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
