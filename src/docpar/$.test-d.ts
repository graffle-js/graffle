// dprint-ignore-file
import type { Grafaid } from '#lib/grafaid'
import { test } from 'vitest'
import type { Docpar } from './$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import { $ } from './object/var/var.js'
import type { Core } from './core/$.js'

type Context = {
  typeHookRequestResultDataTypes: never
  scalars: Possible.$.Schema['scalarRegistry']
}

type Strict<$Input> = Docpar.Parse<$Input, Possible.$.Schema, Possible.$.ArgumentsMap, Context>
type Loose<$Input> = Docpar.Parse<$Input, undefined, any, any>

type D<$Op extends Core.Operation> = Core.Doc.Document<$Op>

// ==================================================================================================
//                                   Basic Field Selection
// ==================================================================================================

// Expected operation types
type OpDefaultId = D<{ name: 'default'; result: { id: string | null }; variables: {} }>
type OpDefaultIdAndIdNonNull = D<{ name: 'default'; result: { id: string | null; idNonNull: string }; variables: {} }>
type OpDefaultDate = D<{ name: 'default'; result: { date: Date | null }; variables: {} }>
type OpDefaultIdNonNull = D<{ name: 'default'; result: { idNonNull: string }; variables: {} }>
type OpQId = D<{ name: 'q'; result: { id: string | null }; variables: {} }>
type OpQDate = D<{ name: 'q'; result: { date: Date | null }; variables: {} }>

// Loose mode operation types
type OpDefaultIdLoose = D<{ name: 'default'; result: { id: unknown }; variables: {} }>
type OpDefaultUnknownField = D<{ name: 'default'; result: { unknownField: unknown }; variables: {} }>
type OpDefaultIdAndUnknownField = D<{ name: 'default'; result: { id: unknown; unknownField: unknown }; variables: {} }>
type OpDefaultDateLoose = D<{ name: 'default'; result: { date: unknown }; variables: {} }>
type OpQUnknownField = D<{ name: 'q'; result: { unknownField: unknown }; variables: {} }>

type _ = Ts.Test.Cases<
  // Simplest possible query - anonymous query with single scalar field
  Ts.Test.exact<Strict<'{ id }'>, OpDefaultId>,
  Ts.Test.exact<Strict<{ query: { default: { id: true } } }>, OpDefaultId>,

  // Schema-less mode (string syntax only - object syntax requires schema)
  Ts.Test.exact<Loose<'{ id }'>, OpDefaultIdLoose>,
  Ts.Test.exact<Loose<'{ unknownField }'>, OpDefaultUnknownField>,

  // Named query with single scalar field
  Ts.Test.exact<Strict<'query q { id }'>, OpQId>,
  Ts.Test.bid<Strict<{ query: { q: { id: true } } }>, OpQId>,
  Ts.Test.exact<Loose<'query q { unknownField }'>, OpQUnknownField>,

  // Multiple scalar fields
  Ts.Test.exact<Strict<'{ id idNonNull }'>, OpDefaultIdAndIdNonNull>,
  Ts.Test.bid<Strict<{ query: { default: { id: true; idNonNull: true } } }>, OpDefaultIdAndIdNonNull>,
  Ts.Test.exact<Loose<'{ id unknownField }'>, OpDefaultIdAndUnknownField>,

  // Query with custom scalar (Date)
  Ts.Test.exact<Strict<'{ date }'>, OpDefaultDate>,
  Ts.Test.bid<Strict<{ query: { default: { date: true } } }>, OpDefaultDate>,
  Ts.Test.exact<Loose<'{ date }'>, OpDefaultDateLoose>,

  // Query with spaces/formatting
  Ts.Test.exact<Strict<'query q { date }'>, OpQDate>,

  // Non-null field
  Ts.Test.exact<Strict<'{ idNonNull }'>, OpDefaultIdNonNull>
>

// ==================================================================================================
//                                   Nested Object Selection
// ==================================================================================================

// Expected operation types
type OpDefaultObjectWithId = D<{ name: 'default'; result: { object: { id: string | null } | null }; variables: {} }>
type OpDefaultObjectWithIdAndString = D<{ name: 'default'; result: { object: { id: string | null; string: string | null } | null }; variables: {} }>
type OpDefaultTwoObjectsWithId = D<{ name: 'default'; result: { object: { id: string | null } | null; objectNested: { id: string | null } | null }; variables: {} }>
type OpDefaultDeepNested = D<{ name: 'default'; result: { objectNested: { object: { id: string | null } | null } | null }; variables: {} }>

// Loose mode operation types
type OpDefaultUnknownObjWithUnknownField = D<{ name: 'default'; result: { unknownObj: { unknownField: unknown } | null }; variables: {} }>
type OpDefaultUnknownObjWithTwoFields = D<{ name: 'default'; result: { obj: { field1: unknown; field2: unknown } | null }; variables: {} }>
type OpDefaultThreeLevelUnknown = D<{ name: 'default'; result: { level1: { level2: { level3: unknown } | null } | null }; variables: {} }>

type _Nested = Ts.Test.Cases<
  // Single nested object with one field
  Ts.Test.exact<Strict<'{ object { id } }'>, OpDefaultObjectWithId>,
  Ts.Test.bid<Strict<{ query: { default: { object: { id: true } } } }>, OpDefaultObjectWithId>,
  Ts.Test.exact<Loose<'{ unknownObj { unknownField } }'>, OpDefaultUnknownObjWithUnknownField>,

  // Nested object with multiple fields
  Ts.Test.exact<Strict<'{ object { id string } }'>, OpDefaultObjectWithIdAndString>,
  Ts.Test.bid<Strict<{ query: { default: { object: { id: true; string: true } } } }>, OpDefaultObjectWithIdAndString>,
  Ts.Test.exact<Loose<'{ obj { field1 field2 } }'>, OpDefaultUnknownObjWithTwoFields>,

  // Multiple nested objects at same level
  Ts.Test.exact<Strict<'{ object { id } objectNested { id } }'>, OpDefaultTwoObjectsWithId>,

  // Deep nesting (3 levels)
  Ts.Test.exact<Strict<'{ objectNested { object { id } } }'>, OpDefaultDeepNested>,
  Ts.Test.bid<Strict<{ query: { default: { objectNested: { object: { id: true } } } } }>, OpDefaultDeepNested>,
  Ts.Test.exact<Loose<'{ level1 { level2 { level3 } } }'>, OpDefaultThreeLevelUnknown>
>

// ==================================================================================================
//                                   Field Arguments
// ==================================================================================================

// Expected operation types
type OpDefaultStringWithArgs = D<{ name: 'default'; result: { stringWithArgs: string | null }; variables: {} }>
type OpDefaultStringWithRequiredArg = D<{ name: 'default'; result: { stringWithRequiredArg: string | null }; variables: {} }>
type OpDefaultObjectWithArgs = D<{ name: 'default'; result: { objectWithArgs: { id: string | null } | null }; variables: {} }>

// Loose mode operation types
type OpDefaultUnknownFieldWithArgs = D<{ name: 'default'; result: { unknownField: unknown }; variables: {} }>
type OpDefaultUnknownObjWithArgs = D<{ name: 'default'; result: { unknownObj: { field: unknown } | null }; variables: {} }>

type _Arguments = Ts.Test.Cases<
  // Field with single argument
  Ts.Test.exact<Strict<'{ stringWithArgs(string: "hello") }'>, OpDefaultStringWithArgs>,
  Ts.Test.exact<Loose<'{ unknownField(arg: "value") }'>, OpDefaultUnknownFieldWithArgs>,

  // Field with required argument
  Ts.Test.exact<Strict<'{ stringWithRequiredArg(string: "required") }'>, OpDefaultStringWithRequiredArg>,

  // Nested object with arguments
  Ts.Test.exact<Strict<'{ objectWithArgs(id: "123") { id } }'>, OpDefaultObjectWithArgs>,
  Ts.Test.exact<Loose<'{ unknownObj(id: "123") { field } }'>, OpDefaultUnknownObjWithArgs>
>

// ==================================================================================================
//                                   Multiple Operations
// ==================================================================================================

// Expected operation types
type OpMultiTwoQueries = D<
  | { name: 'A'; result: { id: string | null }; variables: {} }
  | { name: 'B'; result: { string: string | null }; variables: {} }
>
type OpMultiQueryAndMutation = D<
  | { name: 'GetId'; result: { id: string | null }; variables: {} }
  | { name: 'SetId'; result: { idNonNull: string }; variables: {} }
>

// Loose mode operation types
type OpMultiTwoQueriesLoose = D<
  | { name: 'A'; result: { field1: unknown }; variables: {} }
  | { name: 'B'; result: { field2: unknown }; variables: {} }
>
type OpMultiQueryAndMutationLoose = D<
  | { name: 'Get'; result: { data: unknown }; variables: {} }
  | { name: 'Set'; result: { updated: unknown }; variables: {} }
>

type _MultiOp = Ts.Test.Cases<
  // Two queries
  Ts.Test.bid<Strict<'query A { id } query B { string }'>, OpMultiTwoQueries>,
  Ts.Test.exact<Loose<'query A { field1 } query B { field2 }'>, OpMultiTwoQueriesLoose>,

  // Query and mutation
  Ts.Test.exact<Strict<'query GetId { id } mutation SetId { idNonNull }'>, OpMultiQueryAndMutation>,
  Ts.Test.bid<Strict<{ query: { GetId: { id: true } }; mutation: { SetId: { idNonNull: true } } }>, OpMultiQueryAndMutation>,
  Ts.Test.exact<Loose<'query Get { data } mutation Set { updated }'>, OpMultiQueryAndMutationLoose>
>

// ==================================================================================================
//                                   Mutations
// ==================================================================================================

// Expected operation types (reuse OpDefaultId from earlier)
type OpSetIdIdNonNull = D<{ name: 'SetId'; result: { idNonNull: string }; variables: {} }>

// Loose mode operation types
type OpDefaultUpdate = D<{ name: 'default'; result: { update: unknown }; variables: {} }>
type OpCreateCreated = D<{ name: 'Create'; result: { created: unknown }; variables: {} }>

type _Mutations = Ts.Test.Cases<
  // Simple mutation (reuses OpDefaultId)
  Ts.Test.exact<Strict<'mutation { id }'>, OpDefaultId>,
  Ts.Test.bid<Strict<{ mutation: { default: { id: true } } }>, OpDefaultId>,
  Ts.Test.exact<Loose<'mutation { update }'>, OpDefaultUpdate>,

  // Named mutation
  Ts.Test.exact<Strict<'mutation SetId { idNonNull }'>, OpSetIdIdNonNull>,
  Ts.Test.bid<Strict<{ mutation: { SetId: { idNonNull: true } } }>, OpSetIdIdNonNull>,
  Ts.Test.exact<Loose<'mutation Create { created }'>, OpCreateCreated>
>

// ==================================================================================================
//                                   Special Types (Enums, Unions, etc.)
// ==================================================================================================

// Expected operation types
type OpDefaultAbcEnum = D<{ name: 'default'; result: { abcEnum: 'A' | 'B' | 'C' | null }; variables: {} }>

// Loose mode operation types
type OpDefaultStatus = D<{ name: 'default'; result: { status: unknown }; variables: {} }>

type _SpecialTypes = Ts.Test.Cases<
  // Enum field
  Ts.Test.exact<Strict<'{ abcEnum }'>, OpDefaultAbcEnum>,
  Ts.Test.bid<Strict<{ query: { default: { abcEnum: true } } }>, OpDefaultAbcEnum>,
  Ts.Test.exact<Loose<'{ status }'>, OpDefaultStatus>
>
// ==================================================================================================
//                                   Variable Definitions
// ==================================================================================================

// Expected operation types
type OpQIdWithVarA = D<{ name: 'q'; result: { id: string | null }; variables: { a: string } }>
type OpQIdWithVarS_Optional = D<{ name: 'q'; result: { id: string | null }; variables: { s?: string | null | undefined } }>
type OpQIdWithVarD = D<{ name: 'q'; result: { id: string | null }; variables: { d: Date } }>
type OpQIdWithMultiVars = D<{ name: 'q'; result: { id: string | null }; variables: { a: string; s?: string | null | undefined } }>
type OpQIdWithVarS = D<{ name: 'q'; result: { id: string | null }; variables: { s: string } }>
type OpQIdWithVarN_Optional = D<{ name: 'q'; result: { id: string | null }; variables: { n?: number | null | undefined } }>
type OpQIdWithVarB = D<{ name: 'q'; result: { id: string | null }; variables: { b: boolean } }>
type OpQIdWithMultiRequiredVars = D<{ name: 'q'; result: { id: string | null }; variables: { a: string; s: string; n: number } }>
type OpMIdWithVarA = D<{ name: 'm'; result: { id: string | null }; variables: { a: string } }>
type OpDefaultIdWithVarA = D<{ name: 'default'; result: { id: string | null }; variables: { a: string } }>
type OpQInterfaceWithArgsWithVarA = D<{ name: 'q'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { a: string } }>

// Loose mode operation types
type OpQFieldWithVarA = D<{ name: 'q'; result: { field: unknown }; variables: { a: string } }>
type OpQFieldWithVarS_Optional = D<{ name: 'q'; result: { field: unknown }; variables: { s?: string | null | undefined } }>
type OpQFieldWithVarD = D<{ name: 'q'; result: { field: unknown }; variables: { d: unknown } }>
type OpQFieldWithMultiVars = D<{ name: 'q'; result: { field: unknown }; variables: { id: string; name?: string | null | undefined } }>
type OpDefaultFieldWithVarA = D<{ name: 'default'; result: { field: unknown }; variables: { a: string } }>
type OpQObjWithVarId = D<{ name: 'q'; result: { obj: { nested: unknown } | null }; variables: { id: string } }>

type _Variables = Ts.Test.Cases<
  // Required ID variable
  Ts.Test.exact<Strict<'query q($a: ID!) { id }'>, OpQIdWithVarA>,
  Ts.Test.exact<Loose<'query q($a: ID!) { field }'>, OpQFieldWithVarA>,

  // Optional String variable
  Ts.Test.exact<Strict<'query q($s: String) { id }'>, OpQIdWithVarS_Optional>,
  Ts.Test.exact<Loose<'query q($s: String) { field }'>, OpQFieldWithVarS_Optional>,

  // Custom scalar variable (Date mapped to Date type in strict, unknown in schema-less)
  Ts.Test.exact<Strict<'query q($d: Date!) { id }'>, OpQIdWithVarD>,
  Ts.Test.exact<Loose<'query q($d: Date!) { field }'>, OpQFieldWithVarD>,

  // Multiple variables (required + optional)
  Ts.Test.exact<Strict<'query q($a: ID!, $s: String) { id }'>, OpQIdWithMultiVars>,
  Ts.Test.exact<Loose<'query q($id: ID!, $name: String) { field }'>, OpQFieldWithMultiVars>,

  // Required String variable
  Ts.Test.exact<Strict<'query q($s: String!) { id }'>, OpQIdWithVarS>,

  // Optional Int variable
  Ts.Test.exact<Strict<'query q($n: Int) { id }'>, OpQIdWithVarN_Optional>,

  // Required Boolean variable
  Ts.Test.exact<Strict<'query q($b: Boolean!) { id }'>, OpQIdWithVarB>,

  // Multiple required variables
  Ts.Test.exact<Strict<'query q($a: ID!, $s: String!, $n: Int!) { id }'>, OpQIdWithMultiRequiredVars>,

  // Mutation with variable
  Ts.Test.exact<Strict<'mutation m($a: ID!) { id }'>, OpMIdWithVarA>,

  // Anonymous query with variable
  Ts.Test.exact<Strict<'query($a: ID!) { id }'>, OpDefaultIdWithVarA>,
  Ts.Test.exact<Loose<'query($a: ID!) { field }'>, OpDefaultFieldWithVarA>,

  // Variable used in field argument with nested selection
  Ts.Test.exact<Strict<'query q($a: ID!) { interfaceWithArgs(id: $a) { id } }'>, OpQInterfaceWithArgsWithVarA>,
  Ts.Test.exact<Loose<'query q($id: ID!) { obj(id: $id) { nested } }'>, OpQObjWithVarId>
>

// ==================================================================================================
//                                   Variable Definitions (with gql function)
// ==================================================================================================

type SingleOpNoVars = D<{ name: 'myQuery'; result: { date: Date | null }; variables: {} }>

Ts.Test.exact<SingleOpNoVars>()(Possible.gql(`query myQuery { date }`))
Ts.Test.bid<SingleOpNoVars>()(Possible.gql({ query: { myQuery: { date: true } } }))

type SingleOpRequiredVars = D<{ name: 'getById'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }>

Ts.Test.exact<SingleOpRequiredVars>()(Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`))
// dprint-ignore
Ts.Test.bid<SingleOpRequiredVars>()(Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }))

type SingleOpOptionalVars = D<{ name: 'search'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>

Ts.Test.exact<SingleOpOptionalVars>()(Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`))
Ts.Test.bid<SingleOpOptionalVars>()(Possible.gql({ query: { search: { stringWithArgs: { $: { string: $ }, __typename: true } } } }))

type DefaultOpWithScalar = D<{ name: 'default'; result: { date: Date | null }; variables: {} }>

Ts.Test.exact<DefaultOpWithScalar>()(Possible.gql(`{ date }`))
Ts.Test.bid<DefaultOpWithScalar>()(Possible.gql({ query: { default: { date: true } } }))

type DefaultOpOptionalVars = D<{ name: 'default'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>

Ts.Test.exact<DefaultOpOptionalVars>()(Possible.gql(`query ($string: String) { stringWithArgs(string: $string) }`))
Ts.Test.bid<DefaultOpOptionalVars>()(Possible.gql({ query: { default: { stringWithArgs: { $: { string: $ } } } } }))

type MultiOpNoVars = D<
  | { name: 'getUser'; result: { id: string | null }; variables: {} }
  | { name: 'addId'; result: { id: string | null }; variables: {} }
>

Ts.Test.exact<MultiOpNoVars>()(Possible.gql(`
  query getUser { id }
  mutation addId { id }
`))
Ts.Test.bid<MultiOpNoVars>()(Possible.gql({
  query: { getUser: { id: true } },
  mutation: { addId: { id: true } },
}))

type MultiOpWithVars = D<
  | { name: 'getById'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }
  | { name: 'setId'; result: { idNonNull: string }; variables: {} }
>

Ts.Test.exact<MultiOpWithVars>()(
  Possible.gql(`
    query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation setId { idNonNull }
  `),
)
Ts.Test.bid<MultiOpWithVars>()(
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

type DocError = {
  __typename: 'ParserError'
  error: 'FieldNotFound'
  message: "Field 'bad' does not exist on type 'Query'"
  fieldName: 'bad'
  parentName: 'Query'
  availableFields: 'string' | 'object' | '__typename' | 'InputObjectNested' | 'abcEnum' | 'date' | 'id' | 'InputObjectNestedNonNull' | 'argInputObjectCircular' | 'bigintField' | 'bigintFieldNonNull' | 'dateArg' | 'dateArgInputObject' | 'dateArgList' | 'dateArgNonNull' | 'dateArgNonNullList' | 'dateArgNonNullListNonNull' | 'dateInterface1' | 'dateList' | 'dateListList' | 'dateListNonNull' | 'dateNonNull' | 'dateObject1' | 'dateUnion' | 'error' | 'idNonNull' | 'interface' | 'interfaceHierarchyChildA' | 'interfaceHierarchyChildB' | 'interfaceHierarchyGrandparents' | 'interfaceHierarchyParents' | 'interfaceNonNull' | 'interfaceWithArgs' | 'listInt' | 'listIntNonNull' | 'listListInt' | 'listListIntNonNull' | 'lowerCaseUnion' | 'objectList' | 'objectListNonNull' | 'objectNested' | 'objectNestedWithArgs' | 'objectNonNull' | 'objectWithArgs' | 'result' | 'resultNonNull' | 'stringWithArgEnum' | 'stringWithArgInputObject' | 'stringWithArgInputObjectEnum' | 'stringWithArgInputObjectRequired' | 'stringWithArgs' | 'stringWithListArg' | 'stringWithListArgRequired' | 'stringWithRequiredArg' | 'unionFooBar' | 'unionFooBarNonNull' | 'unionFooBarWithArgs' | 'unionObject' | 'unionObjectNonNull'
}

type _ErrorCases = Ts.Test.Cases<
  Ts.Test.bid<Strict<'{ bad }'>, DocError>
  // TODO: Object parser produces different error format than string parser
  // Ts.Test.bid<Strict<{ query: { default: { bad: true } } }>, DocError>
>

// TODO: Object parser produces different error format - needs unification with string parser error format
// Possible.gql({ query: { default: { bad: true } } })
// TODO: Runtime string parser errors need to be surfaced at compile-time in gql function
// Possible.gql('{ bad }')

// ==================================================================================================
//                                   Root Type Builders
// ==================================================================================================


test('static root type builders > type input validation', () => {
  // @ts-expect-error - Builder<1> should not be assignable to Builder<string>
  Possible.query.stringWithRequiredArg({
    $: {
      string: $.default(1),
    },
  })
})

// dprint-ignore
test('static root type builders > type output inference', () => {
  // Nested object args
  const q0 = Possible.query.objectNestedWithArgs({ object: { $: { int: $ }, id:true}})
  Ts.Test.exact<Grafaid.Document.Typed.String<{objectNestedWithArgs:{object:{id:null|string}|null}|null}, { int?: number | null | undefined }, true>>()(q0)

  // Scalar fields
  const q1 = Possible.query.string(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ string: string | null }, {}, true>>()(q1)

  const q2 = Possible.query.idNonNull(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ idNonNull: string }, {}, true>>()(q2)

  // Custom scalar - without custom scalar codecs defined
  const q3 = Possible.query.date(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ date: Date | null }, {}, true>>()(q3)

  // Lists
  const q5 = Possible.query.listInt(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, {}, true>>()(q5)

  const q6 = Possible.query.listIntNonNull(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, {}, true>>()(q6)

  const q7 = Possible.query.listListInt(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, {}, true>>()(q7)

  // Object with fields
  const q8 = Possible.query.object({ id: true })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ object: { id:string|null } | null }, {}, true>>()(q8)

  // Field with $
  const q9 = Possible.query.stringWithArgs({ $: { boolean: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean?: boolean | null | undefined }, true>>()(q9)

  // Required argument with $
  const q10 = Possible.query.stringWithRequiredArg({ $: { string: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }, true>>()(q10) // NOT undefined!

  // Required argument with $ eith default
  const q11 = Possible.query.stringWithRequiredArg({ $: { string: $.default('abc') } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string?: string | undefined }, true>>()(q11)

  // $ with custom name
  const q12 = Possible.query.stringWithArgs({ $: { boolean: $.name('isActive') } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive?: boolean | null | undefined }, true>>()(q12)

  // $.required() on optional argument
  const q12b = Possible.query.stringWithArgs({ $: { string: $.required() } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }, true>>()(q12b) // NOT undefined!

  // List argument with $
  const q13 = Possible.query.stringWithListArg({ $: { ints: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints?: readonly (number)[] | null | undefined }, true>>()(q13)

  const q14 = Possible.query.stringWithListArgRequired({ $: { ints: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: readonly number[] }, true>>()(q14)

  // Multiple $ types
  const q15 = Possible.query.stringWithArgs({ $: { boolean: $, string: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<
    { stringWithArgs: string | null },
    { boolean?: boolean | null | undefined, string?: string | null | undefined },
    true
  >>()(q15)

  // Mixed $ and literals
  const q16 = Possible.query.stringWithArgs({ $: { boolean: true, string: $, int: 42 } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string?: string | null | undefined }, true>>()(q16)

  // Alias with $ on nested object field
  const q20 = Possible.query.objectNestedWithArgs({
    object: ['object2', { $: { int: $ }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $ } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$}}]
  })
  Ts.Test.exact<Grafaid.Document.Typed.String<
    { objectNestedWithArgs: { object2: { id: string | null } | null } | null },
    { int?: number | null | undefined },
    true
  >>()(q20)
})
