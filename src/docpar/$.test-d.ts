// dprint-ignore-file
import type { Docpar } from './$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import type { Core } from './core/$.js'
import { $ } from './object/var/var.js'
import { createGql } from '#src/static/gql.js'

type $ = typeof $

type ContextStrict = Docpar.ParserContext<Possible.$.Schema, Possible.$.ArgumentsMap, never>
type ContextLoose = Docpar.ParserContext<undefined>

type Strict<$Input> = Docpar.Parse<$Input, ContextStrict>
type Loose<$Input> = Docpar.Parse<$Input, ContextLoose>

// Local gql functions for testing
const gqlYe = createGql<Possible.$.Schema, any, Possible.$.ArgumentsMap>({
  sddm: Possible.schemaMap as any
})

const gqlNo = createGql<undefined, any, any>({
  sddm: undefined as any
})

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

type _ = Ts.Assert.Cases<
  // Simplest possible query - anonymous query with single scalar field
  Ts.Assert.exact<Strict<'{ id }'>, OpDefaultId>,
  Ts.Assert.exact<Strict<{ query: { default: { id: true } } }>, OpDefaultId>,

  // Schema-less mode - both string and object syntax
  Ts.Assert.exact<Loose<'{ id }'>, OpDefaultIdLoose>,
  Ts.Assert.exact<Loose<{ query: { default: { id: true } } }>, OpDefaultIdLoose>,
  Ts.Assert.exact<Loose<'{ unknownField }'>, OpDefaultUnknownField>,
  Ts.Assert.exact<Loose<{ query: { default: { unknownField: true } } }>, OpDefaultUnknownField>,

  // Named query with single scalar field
  Ts.Assert.exact<Strict<'query q { id }'>, OpQId>,
  Ts.Assert.exact<Strict<{ query: { q: { id: true } } }>, OpQId>,
  Ts.Assert.exact<Loose<'query q { id }'>, D<{ name: 'q'; result: { id: unknown }; variables: {} }>>,
  Ts.Assert.exact<Loose<{ query: { q: { id: true } } }>, D<{ name: 'q'; result: { id: unknown }; variables: {} }>>,
  Ts.Assert.exact<Loose<'query q { unknownField }'>, OpQUnknownField>,
  Ts.Assert.exact<Loose<{ query: { q: { unknownField: true } } }>, OpQUnknownField>,

  // Multiple scalar fields
  Ts.Assert.exact<Strict<'{ id idNonNull }'>, OpDefaultIdAndIdNonNull>,
  Ts.Assert.exact<Strict<{ query: { default: { id: true; idNonNull: true } } }>, OpDefaultIdAndIdNonNull>,
  Ts.Assert.exact<Loose<'{ id unknownField }'>, OpDefaultIdAndUnknownField>,
  Ts.Assert.exact<Loose<{ query: { default: { id: true; unknownField: true } } }>, OpDefaultIdAndUnknownField>,

  // Query with custom scalar (Date)
  Ts.Assert.exact<Strict<'{ date }'>, OpDefaultDate>,
  Ts.Assert.exact<Strict<{ query: { default: { date: true } } }>, OpDefaultDate>,
  Ts.Assert.exact<Loose<'{ date }'>, OpDefaultDateLoose>,
  Ts.Assert.exact<Loose<{ query: { default: { date: true } } }>, OpDefaultDateLoose>,

  // Query with spaces/formatting - tests parser handles whitespace
  Ts.Assert.exact<Strict<'query q { date }'>, OpQDate>,
  Ts.Assert.exact<Strict<{ query: { q: { date: true } } }>, OpQDate>,
  Ts.Assert.exact<Loose<'query q { date }'>, D<{ name: 'q'; result: { date: unknown }; variables: {} }>>,
  Ts.Assert.exact<Loose<{ query: { q: { date: true } } }>, D<{ name: 'q'; result: { date: unknown }; variables: {} }>>,

  // Non-null field
  Ts.Assert.exact<Strict<'{ idNonNull }'>, OpDefaultIdNonNull>,
  Ts.Assert.exact<Strict<{ query: { default: { idNonNull: true } } }>, OpDefaultIdNonNull>,
  Ts.Assert.exact<Loose<'{ idNonNull }'>, D<{ name: 'default'; result: { idNonNull: unknown }; variables: {} }>>,
  Ts.Assert.exact<Loose<{ query: { default: { idNonNull: true } } }>, D<{ name: 'default'; result: { idNonNull: unknown }; variables: {} }>>
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

type _Nested = Ts.Assert.Cases<
  // Single nested object with one field
  Ts.Assert.exact<Strict<'{ object { id } }'>, OpDefaultObjectWithId>,
  Ts.Assert.exact<Strict<{ query: { default: { object: { id: true } } } }>, OpDefaultObjectWithId>,
  Ts.Assert.exact<Loose<'{ unknownObj { unknownField } }'>, OpDefaultUnknownObjWithUnknownField>,
  Ts.Assert.exact<Loose<{ query: { default: { unknownObj: { unknownField: true } } } }>, OpDefaultUnknownObjWithUnknownField>,

  // Nested object with multiple fields
  Ts.Assert.exact<Strict<'{ object { id string } }'>, OpDefaultObjectWithIdAndString>,
  Ts.Assert.exact<Strict<{ query: { default: { object: { id: true; string: true } } } }>, OpDefaultObjectWithIdAndString>,
  Ts.Assert.exact<Loose<'{ obj { field1 field2 } }'>, OpDefaultUnknownObjWithTwoFields>,
  Ts.Assert.exact<Loose<{ query: { default: { obj: { field1: true; field2: true } } } }>, OpDefaultUnknownObjWithTwoFields>,

  // Multiple nested objects at same level
  Ts.Assert.exact<Strict<'{ object { id } objectNested { id } }'>, OpDefaultTwoObjectsWithId>,
  Ts.Assert.exact<Strict<{ query: { default: { object: { id: true }; objectNested: { id: true } } } }>, OpDefaultTwoObjectsWithId>,
  Ts.Assert.exact<Loose<'{ obj1 { field } obj2 { field } }'>, D<{ name: 'default'; result: { obj1: { field: unknown } | null; obj2: { field: unknown } | null }; variables: {} }>>,
  Ts.Assert.exact<Loose<{ query: { default: { obj1: { field: true }; obj2: { field: true } } } }>, D<{ name: 'default'; result: { obj1: { field: unknown } | null; obj2: { field: unknown } | null }; variables: {} }>>,

  // Deep nesting (3 levels)
  Ts.Assert.exact<Strict<'{ objectNested { object { id } } }'>, OpDefaultDeepNested>,
  Ts.Assert.exact<Strict<{ query: { default: { objectNested: { object: { id: true } } } } }>, OpDefaultDeepNested>,
  Ts.Assert.exact<Loose<'{ level1 { level2 { level3 } } }'>, OpDefaultThreeLevelUnknown>,
  Ts.Assert.exact<Loose<{ query: { default: { level1: { level2: { level3: true } } } } }>, OpDefaultThreeLevelUnknown>
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

type _Arguments = Ts.Assert.Cases<
  // Field with single argument
  Ts.Assert.exact<Strict<'{ stringWithArgs(string: "hello") }'>, OpDefaultStringWithArgs>,
  Ts.Assert.exact<Loose<'{ unknownField(arg: "value") }'>, OpDefaultUnknownFieldWithArgs>,
  // Note: Object syntax with $ for arguments will be tested in future (requires argument parsing in object builder)

  // Field with required argument
  Ts.Assert.exact<Strict<'{ stringWithRequiredArg(string: "required") }'>, OpDefaultStringWithRequiredArg>,
  Ts.Assert.exact<Loose<'{ unknownField(required: "value") }'>, OpDefaultUnknownFieldWithArgs>,

  // Nested object with arguments
  Ts.Assert.exact<Strict<'{ objectWithArgs(id: "123") { id } }'>, OpDefaultObjectWithArgs>,
  Ts.Assert.exact<Loose<'{ unknownObj(id: "123") { field } }'>, OpDefaultUnknownObjWithArgs>
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

type _MultiOp = Ts.Assert.Cases<
  // Two queries
  Ts.Assert.exact<Strict<'query A { id } query B { string }'>, OpMultiTwoQueries>,
  Ts.Assert.exact<Strict<{ query: { A: { id: true }; B: { string: true } } }>, OpMultiTwoQueries>,
  Ts.Assert.exact<Loose<'query A { field1 } query B { field2 }'>, OpMultiTwoQueriesLoose>,
  Ts.Assert.exact<Loose<{ query: { A: { field1: true }; B: { field2: true } } }>, OpMultiTwoQueriesLoose>,

  // Query and mutation
  Ts.Assert.exact<Strict<'query GetId { id } mutation SetId { idNonNull }'>, OpMultiQueryAndMutation>,
  Ts.Assert.exact<Strict<{ query: { GetId: { id: true } }; mutation: { SetId: { idNonNull: true } } }>, OpMultiQueryAndMutation>,
  Ts.Assert.exact<Loose<'query Get { data } mutation Set { updated }'>, OpMultiQueryAndMutationLoose>,
  Ts.Assert.exact<Loose<{ query: { Get: { data: true } }; mutation: { Set: { updated: true } } }>, OpMultiQueryAndMutationLoose>
>

// ==================================================================================================
//                                   Mutations
// ==================================================================================================

// Expected operation types (reuse OpDefaultId from earlier)
type OpSetIdIdNonNull = D<{ name: 'SetId'; result: { idNonNull: string }; variables: {} }>

// Loose mode operation types
type OpDefaultUpdate = D<{ name: 'default'; result: { update: unknown }; variables: {} }>
type OpCreateCreated = D<{ name: 'Create'; result: { created: unknown }; variables: {} }>

type _Mutations = Ts.Assert.Cases<
  // Simple mutation (reuses OpDefaultId)
  Ts.Assert.exact<Strict<'mutation { id }'>, OpDefaultId>,
  Ts.Assert.exact<Strict<{ mutation: { default: { id: true } } }>, OpDefaultId>,
  Ts.Assert.exact<Loose<'mutation { update }'>, OpDefaultUpdate>,
  Ts.Assert.exact<Loose<{ mutation: { default: { update: true } } }>, OpDefaultUpdate>,

  // Named mutation
  Ts.Assert.exact<Strict<'mutation SetId { idNonNull }'>, OpSetIdIdNonNull>,
  Ts.Assert.exact<Strict<{ mutation: { SetId: { idNonNull: true } } }>, OpSetIdIdNonNull>,
  Ts.Assert.exact<Loose<'mutation Create { created }'>, OpCreateCreated>,
  Ts.Assert.exact<Loose<{ mutation: { Create: { created: true } } }>, OpCreateCreated>
>

// ==================================================================================================
//                                   Special Types (Enums, Unions, etc.)
// ==================================================================================================

// Expected operation types
type OpDefaultAbcEnum = D<{ name: 'default'; result: { abcEnum: 'A' | 'B' | 'C' | null }; variables: {} }>

// Loose mode operation types
type OpDefaultStatus = D<{ name: 'default'; result: { status: unknown }; variables: {} }>

type _SpecialTypes = Ts.Assert.Cases<
  // Enum field
  Ts.Assert.exact<Strict<'{ abcEnum }'>, OpDefaultAbcEnum>,
  Ts.Assert.exact<Strict<{ query: { default: { abcEnum: true } } }>, OpDefaultAbcEnum>,
  Ts.Assert.exact<Loose<'{ status }'>, OpDefaultStatus>,
  Ts.Assert.exact<Loose<{ query: { default: { status: true } } }>, OpDefaultStatus>
>
// ==================================================================================================
//                                   Variable Definitions
// ==================================================================================================

// Required String variable
type d1YeSchema = D<{ name: 'q'; result: { stringWithRequiredArg: string | null }; variables: { string: string } }>
type d1NoSchema = D<{ name: 'q'; result: { stringWithRequiredArg: unknown }; variables: { string: string } }>
Ts.Assert.exact.ofAs<d1YeSchema>()(gqlYe('query q($string: String!) { stringWithRequiredArg(string: $string) }'))
Ts.Assert.exact.ofAs<d1NoSchema>()(gqlNo('query q($string: String!) { stringWithRequiredArg(string: $string) }'))
Ts.Assert.exact.ofAs<d1YeSchema>()(gqlYe({ query: { q: { stringWithRequiredArg: { $: { string: $ } } } } }))
Ts.Assert.exact.ofAs<d1NoSchema>()(gqlNo({ query: { q: { stringWithRequiredArg: { $: { string: $.String().required() } } } } }))

// Optional String variable
type d2YeSchema = D<{ name: 'q'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>
type d2NoSchema = D<{ name: 'q'; result: { stringWithArgs: unknown }; variables: { string?: string | null | undefined } }>
Ts.Assert.exact.ofAs<d2YeSchema>()(gqlYe('query q($string: String) { stringWithArgs(string: $string) }'))
Ts.Assert.exact.ofAs<d2NoSchema>()(gqlNo('query q($string: String) { stringWithArgs(string: $string) }'))
Ts.Assert.exact.ofAs<d2YeSchema>()(gqlYe({ query: { q: { stringWithArgs: { $: { string: $ } } } } }))
Ts.Assert.exact.ofAs<d2NoSchema>()(gqlNo({ query: { q: { stringWithArgs: { $: { string: $.String() } } } } }))

// Custom scalar variable (Date)
type d3YeSchema = D<{ name: 'q'; result: { dateArg: Date | null }; variables: { date?: Date | null | undefined } }>
type d3NoSchema = D<{ name: 'q'; result: { dateArg: unknown }; variables: { date?: unknown } }>
Ts.Assert.exact.ofAs<d3YeSchema>()(gqlYe('query q($date: Date) { dateArg(date: $date) }'))
Ts.Assert.exact.ofAs<d3NoSchema>()(gqlNo('query q($date: Date) { dateArg(date: $date) }'))
Ts.Assert.exact.ofAs<d3YeSchema>()(gqlYe({ query: { q: { dateArg: { $: { date: $ } } } } }))
Ts.Assert.exact.ofAs<d3NoSchema>()(gqlNo({ query: { q: { dateArg: { $: { date: $ } } } } }))
// special thing -- string documents cannot do this
type varForce = D<{ name: 'q'; result: { dateArg: unknown }; variables: { date?: string|null } }>
Ts.Assert.exact.ofAs<varForce>()(gqlNo({ query: { q: { dateArg: { $: { date: $.String() } } } } }))

// Multiple optional variables
type d4YeSchema = D<{ name: 'q'; result: { objectWithArgs: { id: string | null } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined } }>
type d4NoSchema = D<{ name: 'q'; result: { objectWithArgs: { id: unknown } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined } }>
Ts.Assert.exact.ofAs<d4YeSchema>()(gqlYe('query q($id: ID, $string: String) { objectWithArgs(id: $id, string: $string) { id } }'))
Ts.Assert.exact.ofAs<d4NoSchema>()(gqlNo('query q($id: ID, $string: String) { objectWithArgs(id: $id, string: $string) { id } }'))
Ts.Assert.exact.ofAs<d4YeSchema>()(gqlYe({ query: { q: { objectWithArgs: { $: { id: $, string: $ }, id: true } } } }))
Ts.Assert.exact.ofAs<d4NoSchema>()(gqlNo({ query: { q: { objectWithArgs: { $: { id: $.ID(), string: $.String() }, id: true } } } }))

// Boolean variable
type d5YeSchema = D<{ name: 'q'; result: { stringWithArgs: string | null }; variables: { boolean?: boolean | null | undefined } }>
type d5NoSchema = D<{ name: 'q'; result: { stringWithArgs: unknown }; variables: { boolean?: boolean | null | undefined } }>
Ts.Assert.exact.ofAs<d5YeSchema>()(gqlYe('query q($boolean: Boolean) { stringWithArgs(boolean: $boolean) }'))
Ts.Assert.exact.ofAs<d5NoSchema>()(gqlNo('query q($boolean: Boolean) { stringWithArgs(boolean: $boolean) }'))
Ts.Assert.exact.ofAs<d5YeSchema>()(gqlYe({ query: { q: { stringWithArgs: { $: { boolean: $ } } } } }))
Ts.Assert.exact.ofAs<d5NoSchema>()(gqlNo({ query: { q: { stringWithArgs: { $: { boolean: $.Boolean() } } } } }))

// Int variable
type d6YeSchema = D<{ name: 'q'; result: { stringWithArgs: string | null }; variables: { int?: number | null | undefined } }>
type d6NoSchema = D<{ name: 'q'; result: { stringWithArgs: unknown }; variables: { int?: number | null | undefined } }>
Ts.Assert.exact.ofAs<d6YeSchema>()(gqlYe('query q($int: Int) { stringWithArgs(int: $int) }'))
Ts.Assert.exact.ofAs<d6NoSchema>()(gqlNo('query q($int: Int) { stringWithArgs(int: $int) }'))
Ts.Assert.exact.ofAs<d6YeSchema>()(gqlYe({ query: { q: { stringWithArgs: { $: { int: $ } } } } }))
Ts.Assert.exact.ofAs<d6NoSchema>()(gqlNo({ query: { q: { stringWithArgs: { $: { int: $.Int() } } } } }))

// Multiple optional variables (3 vars)
type d7YeSchema = D<{ name: 'q'; result: { objectWithArgs: { id: string | null } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined; int?: number | null | undefined } }>
type d7NoSchema = D<{ name: 'q'; result: { objectWithArgs: { id: unknown } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined; int?: number | null | undefined } }>
Ts.Assert.exact.ofAs<d7YeSchema>()(gqlYe('query q($id: ID, $string: String, $int: Int) { objectWithArgs(id: $id, string: $string, int: $int) { id } }'))
Ts.Assert.exact.ofAs<d7NoSchema>()(gqlNo('query q($id: ID, $string: String, $int: Int) { objectWithArgs(id: $id, string: $string, int: $int) { id } }'))
Ts.Assert.exact.ofAs<d7YeSchema>()(gqlYe({ query: { q: { objectWithArgs: { $: { id: $, string: $, int: $ }, id: true } } } }))
Ts.Assert.exact.ofAs<d7NoSchema>()(gqlNo({ query: { q: { objectWithArgs: { $: { id: $.ID(), string: $.String(), int: $.Int() }, id: true } } } }))

// Anonymous query with variable
type d8YeSchema = D<{ name: 'default'; result: { stringWithRequiredArg: string | null }; variables: { string: string } }>
type d8NoSchema = D<{ name: 'default'; result: { stringWithRequiredArg: unknown }; variables: { string: string } }>
Ts.Assert.exact.ofAs<d8YeSchema>()(gqlYe('query($string: String!) { stringWithRequiredArg(string: $string) }'))
Ts.Assert.exact.ofAs<d8NoSchema>()(gqlNo('query($string: String!) { stringWithRequiredArg(string: $string) }'))
Ts.Assert.exact.ofAs<d8YeSchema>()(gqlYe({ query: { default: { stringWithRequiredArg: { $: { string: $ } } } } }))
Ts.Assert.exact.ofAs<d8NoSchema>()(gqlNo({ query: { default: { stringWithRequiredArg: { $: { string: $.String().required() } } } } }))

// Variable with nested selection (interfaceWithArgs id is required in schema)
type d9YeSchema = D<{ name: 'q'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }>
type d9NoSchema = D<{ name: 'q'; result: { interfaceWithArgs: { id: unknown } | null }; variables: { id: string } }>
Ts.Assert.exact.ofAs<d9YeSchema>()(gqlYe('query q($id: ID!) { interfaceWithArgs(id: $id) { id } }'))
Ts.Assert.exact.ofAs<d9NoSchema>()(gqlNo('query q($id: ID!) { interfaceWithArgs(id: $id) { id } }'))
Ts.Assert.exact.ofAs<d9YeSchema>()(gqlYe({ query: { q: { interfaceWithArgs: { $: { id: $ }, id: true } } } }))
Ts.Assert.exact.ofAs<d9NoSchema>()(gqlNo({ query: { q: { interfaceWithArgs: { $: { id: $.ID().required() }, id: true } } } }))

// Enum argument with $ prefix
type d10YeSchema = D<{ name: 'q'; result: { stringWithArgEnum: string | null }; variables: { ABCEnum?: 'A' | 'B' | 'C' | null | undefined } }>
Ts.Assert.exact.ofAs<d10YeSchema>()(gqlYe({ query: { q: { stringWithArgEnum: { $: { $ABCEnum: $ } } } } }))

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

type _ErrorCases = Ts.Assert.Cases<
  Ts.Assert.exact<Strict<'{ bad }'>, DocError>
  // TODO: Object parser produces different error format than string parser
  // Ts.Assert.exact.ofAs<Strict<{ query: { default: { bad: true } } }>, DocError>
>

// TODO: Object parser produces different error format - needs unification with string parser error format
// Possible.gql({ query: { default: { bad: true } } })
// TODO: Runtime string parser errors need to be surfaced at compile-time in gql function
// Possible.gql('{ bad }')
