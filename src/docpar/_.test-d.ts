// dprint-ignore-file
import type { Docpar } from './_.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import type { Core } from './core/_.js'
import { $ } from './object/var/var.js'
import { createGql } from '#src/static/gql.js'

const A = Ts.Assert

type $ = typeof $

type ContextStrict = Docpar.ParserContext<Possible.$.Schema, Possible.$.SchemaDrivenDataMap, never>
type ContextLoose = Docpar.ParserContext<undefined>

type Strict<$Input extends Docpar.Input> = Docpar.Parse<$Input, ContextStrict>
type Loose<$Input extends Docpar.Input> = Docpar.Parse<$Input, ContextLoose>

// Local gql functions for testing
const gqlYe = createGql<Possible.$.Schema, any, Possible.$.SchemaDrivenDataMap>({
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

// Simplest possible query - anonymous query with single scalar field
A.exact.ofAs<OpDefaultId>().onAs<Strict<'{ id }'>>()
A.exact.ofAs<OpDefaultId>().onAs<Strict<{ query: { default: { id: true } } }>>()

// Schema-less mode - both string and object syntax
A.exact.ofAs<OpDefaultIdLoose>().onAs<Loose<'{ id }'>>()
A.exact.ofAs<OpDefaultIdLoose>().onAs<Loose<{ query: { default: { id: true } } }>>()
A.exact.ofAs<OpDefaultUnknownField>().onAs<Loose<'{ unknownField }'>>()
A.exact.ofAs<OpDefaultUnknownField>().onAs<Loose<{ query: { default: { unknownField: true } } }>>()

// Named query with single scalar field
A.exact.ofAs<OpQId>().onAs<Strict<'query q { id }'>>()
A.exact.ofAs<OpQId>().onAs<Strict<{ query: { q: { id: true } } }>>()
A.exact.ofAs<D<{ name: 'q'; result: { id: unknown }; variables: {} }>>()
       .onAs<Loose<'query q { id }'>>()
A.exact.ofAs<D<{ name: 'q'; result: { id: unknown }; variables: {} }>>()
       .onAs<Loose<{ query: { q: { id: true } } }>>()
A.exact.ofAs<OpQUnknownField>().onAs<Loose<'query q { unknownField }'>>()
A.exact.ofAs<OpQUnknownField>()
       .onAs<Loose<{ query: { q: { unknownField: true } } }>>()

// Multiple scalar fields
A.exact.ofAs<OpDefaultIdAndIdNonNull>().onAs<Strict<'{ id idNonNull }'>>()
A.exact.ofAs<OpDefaultIdAndIdNonNull>()
       .onAs<Strict<{ query: { default: { id: true; idNonNull: true } } }>>()
A.exact.ofAs<OpDefaultIdAndUnknownField>().onAs<Loose<'{ id unknownField }'>>()
A.exact.ofAs<OpDefaultIdAndUnknownField>()
       .onAs<Loose<{ query: { default: { id: true; unknownField: true } } }>>()

// Query with custom scalar (Date)
A.exact.ofAs<OpDefaultDate>().onAs<Strict<'{ date }'>>()
A.exact.ofAs<OpDefaultDate>().onAs<Strict<{ query: { default: { date: true } } }>>()
A.exact.ofAs<OpDefaultDateLoose>().onAs<Loose<'{ date }'>>()
A.exact.ofAs<OpDefaultDateLoose>().onAs<Loose<{ query: { default: { date: true } } }>>()

// Query with spaces/formatting - tests parser handles whitespace
A.exact.ofAs<OpQDate>().onAs<Strict<'query q { date }'>>()
A.exact.ofAs<OpQDate>().onAs<Strict<{ query: { q: { date: true } } }>>()
A.exact.ofAs<D<{ name: 'q'; result: { date: unknown }; variables: {} }>>()
       .onAs<Loose<'query q { date }'>>()
A.exact.ofAs<D<{ name: 'q'; result: { date: unknown }; variables: {} }>>()
       .onAs<Loose<{ query: { q: { date: true } } }>>()

// Non-null field
A.exact.ofAs<OpDefaultIdNonNull>().onAs<Strict<'{ idNonNull }'>>()
A.exact.ofAs<OpDefaultIdNonNull>()
       .onAs<Strict<{ query: { default: { idNonNull: true } } }>>()
A.exact.ofAs<D<{ name: 'default'; result: { idNonNull: unknown }; variables: {} }>>()
       .onAs<Loose<'{ idNonNull }'>>()
A.exact.ofAs<D<{ name: 'default'; result: { idNonNull: unknown }; variables: {} }>>()
       .onAs<Loose<{ query: { default: { idNonNull: true } } }>>()


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

// Single nested object with one field
A.exact.ofAs<OpDefaultObjectWithId>().onAs<Strict<'{ object { id } }'>>()
A.exact.ofAs<OpDefaultObjectWithId>()
       .onAs<Strict<{ query: { default: { object: { id: true } } } }>>()
A.exact.ofAs<OpDefaultUnknownObjWithUnknownField>()
       .onAs<Loose<'{ unknownObj { unknownField } }'>>()
A.exact.ofAs<OpDefaultUnknownObjWithUnknownField>()
       .onAs<Loose<{ query: { default: { unknownObj: { unknownField: true } } } }>>()

// Nested object with multiple fields
A.exact.ofAs<OpDefaultObjectWithIdAndString>()
       .onAs<Strict<'{ object { id string } }'>>()
A.exact.ofAs<OpDefaultObjectWithIdAndString>()
       .onAs<Strict<{ query: { default: { object: { id: true; string: true } } } }>>()
A.exact.ofAs<OpDefaultUnknownObjWithTwoFields>()
       .onAs<Loose<'{ obj { field1 field2 } }'>>()
A.exact.ofAs<OpDefaultUnknownObjWithTwoFields>()
       .onAs<Loose<{ query: { default: { obj: { field1: true; field2: true } } } }>>()

// Multiple nested objects at same level
A.exact.ofAs<OpDefaultTwoObjectsWithId>()
       .onAs<Strict<'{ object { id } objectNested { id } }'>>()
A.exact.ofAs<OpDefaultTwoObjectsWithId>()
       .onAs<Strict<{ query: { default: { object: { id: true }; objectNested: { id: true } } } }>>()
A.exact.ofAs<D<{ name: 'default'; result: { obj1: { field: unknown } | null; obj2: { field: unknown } | null }; variables: {} }>>()
       .onAs<Loose<'{ obj1 { field } obj2 { field } }'>>()
A.exact.ofAs<D<{ name: 'default'; result: { obj1: { field: unknown } | null; obj2: { field: unknown } | null }; variables: {} }>>()
       .onAs<Loose<{ query: { default: { obj1: { field: true }; obj2: { field: true } } } }>>()

// Deep nesting (3 levels)
A.exact.ofAs<OpDefaultDeepNested>()
       .onAs<Strict<'{ objectNested { object { id } } }'>>()
A.exact.ofAs<OpDefaultDeepNested>()
       .onAs<Strict<{ query: { default: { objectNested: { object: { id: true } } } } }>>()
A.exact.ofAs<OpDefaultThreeLevelUnknown>()
       .onAs<Loose<'{ level1 { level2 { level3 } } }'>>()
A.exact.ofAs<OpDefaultThreeLevelUnknown>()
       .onAs<Loose<{ query: { default: { level1: { level2: { level3: true } } } } }>>()


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

// Field with single argument
A.exact.ofAs<OpDefaultStringWithArgs>()
       .onAs<Strict<'{ stringWithArgs(string: "hello") }'>>()
A.exact.ofAs<OpDefaultUnknownFieldWithArgs>()
       .onAs<Loose<'{ unknownField(arg: "value") }'>>()
// Note: Object syntax with $ for arguments will be tested in future (requires argument parsing in object builder)

// Field with required argument
A.exact.ofAs<OpDefaultStringWithRequiredArg>()
       .onAs<Strict<'{ stringWithRequiredArg(string: "required") }'>>()
A.exact.ofAs<OpDefaultUnknownFieldWithArgs>()
       .onAs<Loose<'{ unknownField(required: "value") }'>>()

// Nested object with arguments
A.exact.ofAs<OpDefaultObjectWithArgs>()
       .onAs<Strict<'{ objectWithArgs(id: "123") { id } }'>>()
A.exact.ofAs<OpDefaultUnknownObjWithArgs>()
       .onAs<Loose<'{ unknownObj(id: "123") { field } }'>>()


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

// Two queries
A.exact.ofAs<OpMultiTwoQueries>()
       .onAs<Strict<'query A { id } query B { string }'>>()
A.exact.ofAs<OpMultiTwoQueries>()
       .onAs<Strict<{ query: { A: { id: true }; B: { string: true } } }>>()
A.exact.ofAs<OpMultiTwoQueriesLoose>()
       .onAs<Loose<'query A { field1 } query B { field2 }'>>()
A.exact.ofAs<OpMultiTwoQueriesLoose>()
       .onAs<Loose<{ query: { A: { field1: true }; B: { field2: true } } }>>()

// Query and mutation
A.exact.ofAs<OpMultiQueryAndMutation>()
       .onAs<Strict<'query GetId { id } mutation SetId { idNonNull }'>>()
A.exact.ofAs<OpMultiQueryAndMutation>()
       .onAs<Strict<{ query: { GetId: { id: true } }; mutation: { SetId: { idNonNull: true } } }>>()
A.exact.ofAs<OpMultiQueryAndMutationLoose>()
       .onAs<Loose<'query Get { data } mutation Set { updated }'>>()
A.exact.ofAs<OpMultiQueryAndMutationLoose>()
       .onAs<Loose<{ query: { Get: { data: true } }; mutation: { Set: { updated: true } } }>>()


// ==================================================================================================
//                                   Mutations
// ==================================================================================================

// Expected operation types (reuse OpDefaultId from earlier)
type OpSetIdIdNonNull = D<{ name: 'SetId'; result: { idNonNull: string }; variables: {} }>

// Loose mode operation types
type OpDefaultUpdate = D<{ name: 'default'; result: { update: unknown }; variables: {} }>
type OpCreateCreated = D<{ name: 'Create'; result: { created: unknown }; variables: {} }>

// Simple mutation (reuses OpDefaultId)
A.exact.ofAs<OpDefaultId>().onAs<Strict<'mutation { id }'>>()
A.exact.ofAs<OpDefaultId>().onAs<Strict<{ mutation: { default: { id: true } } }>>()
A.exact.ofAs<OpDefaultUpdate>().onAs<Loose<'mutation { update }'>>()
A.exact.ofAs<OpDefaultUpdate>().onAs<Loose<{ mutation: { default: { update: true } } }>>()

// Named mutation
A.exact.ofAs<OpSetIdIdNonNull>().onAs<Strict<'mutation SetId { idNonNull }'>>()
A.exact.ofAs<OpSetIdIdNonNull>().onAs<Strict<{ mutation: { SetId: { idNonNull: true } } }>>()
A.exact.ofAs<OpCreateCreated>().onAs<Loose<'mutation Create { created }'>>()
A.exact.ofAs<OpCreateCreated>().onAs<Loose<{ mutation: { Create: { created: true } } }>>()


// ==================================================================================================
//                                   Special Types (Enums, Unions, etc.)
// ==================================================================================================

// Expected operation types
type OpDefaultAbcEnum = D<{ name: 'default'; result: { abcEnum: 'A' | 'B' | 'C' | null }; variables: {} }>

// Loose mode operation types
type OpDefaultStatus = D<{ name: 'default'; result: { status: unknown }; variables: {} }>

// Enum field
A.exact.ofAs<OpDefaultAbcEnum>().onAs<Strict<'{ abcEnum }'>>()
A.exact.ofAs<OpDefaultAbcEnum>().onAs<Strict<{ query: { default: { abcEnum: true } } }>>()
A.exact.ofAs<OpDefaultStatus>().onAs<Loose<'{ status }'>>()
A.exact.ofAs<OpDefaultStatus>().onAs<Loose<{ query: { default: { status: true } } }>>()

// ==================================================================================================
//                                   List Types
// ==================================================================================================

// Expected operation types - Scalar lists
type OpDefaultListIntNonNull = D<{ name: 'default'; result: { listIntNonNull: number[] }; variables: {} }>
type OpDefaultListInt = D<{ name: 'default'; result: { listInt: null | (null | number)[] }; variables: {} }>
type OpDefaultListListIntNonNull = D<{ name: 'default'; result: { listListIntNonNull: number[][] }; variables: {} }>
type OpDefaultListListInt = D<{ name: 'default'; result: { listListInt: null | (null | (null | number)[])[] }; variables: {} }>

// Expected operation types - Custom scalar lists
type OpDefaultDateList = D<{ name: 'default'; result: { dateList: Date[] | null }; variables: {} }>
type OpDefaultDateListNonNull = D<{ name: 'default'; result: { dateListNonNull: Date[] }; variables: {} }>

// Expected operation types - Object lists
type OpDefaultObjectList = D<{ name: 'default'; result: { objectList: { id: string | null }[] | null }; variables: {} }>
type OpDefaultObjectListNonNull = D<{ name: 'default'; result: { objectListNonNull: { id: string | null }[] }; variables: {} }>

// Loose mode operation types
type OpDefaultListIntNonNullLoose = D<{ name: 'default'; result: { listIntNonNull: unknown }; variables: {} }>
type OpDefaultListIntLoose = D<{ name: 'default'; result: { listInt: unknown }; variables: {} }>
type OpDefaultDateListLoose = D<{ name: 'default'; result: { dateList: unknown }; variables: {} }>
type OpDefaultObjectListLoose = D<{ name: 'default'; result: { objectList: { id: unknown } | null }; variables: {} }>

// Non-null list of non-null scalars - [Int!]!
A.exact.ofAs<OpDefaultListIntNonNull>().onAs<Strict<'{ listIntNonNull }'>>()
A.exact.ofAs<OpDefaultListIntNonNull>()
       .onAs<Strict<{ query: { default: { listIntNonNull: true } } }>>()
A.exact.ofAs<OpDefaultListIntNonNullLoose>().onAs<Loose<'{ listIntNonNull }'>>()
A.exact.ofAs<OpDefaultListIntNonNullLoose>()
       .onAs<Loose<{ query: { default: { listIntNonNull: true } } }>>()

// Nullable list of nullable scalars - [Int]
A.exact.ofAs<OpDefaultListInt>().onAs<Strict<'{ listInt }'>>()
A.exact.ofAs<OpDefaultListInt>()
       .onAs<Strict<{ query: { default: { listInt: true } } }>>()
A.exact.ofAs<OpDefaultListIntLoose>().onAs<Loose<'{ listInt }'>>()
A.exact.ofAs<OpDefaultListIntLoose>()
       .onAs<Loose<{ query: { default: { listInt: true } } }>>()

// Non-null list of non-null lists of non-null scalars - [[Int!]!]!
A.exact.ofAs<OpDefaultListListIntNonNull>().onAs<Strict<'{ listListIntNonNull }'>>()
A.exact.ofAs<OpDefaultListListIntNonNull>()
       .onAs<Strict<{ query: { default: { listListIntNonNull: true } } }>>()

// Nullable list of nullable lists of nullable scalars - [[Int]]
A.exact.ofAs<OpDefaultListListInt>().onAs<Strict<'{ listListInt }'>>()
A.exact.ofAs<OpDefaultListListInt>()
       .onAs<Strict<{ query: { default: { listListInt: true } } }>>()

// Custom scalar lists - [Date]
A.exact.ofAs<OpDefaultDateList>().onAs<Strict<'{ dateList }'>>()
A.exact.ofAs<OpDefaultDateList>()
       .onAs<Strict<{ query: { default: { dateList: true } } }>>()
A.exact.ofAs<OpDefaultDateListLoose>().onAs<Loose<'{ dateList }'>>()
A.exact.ofAs<OpDefaultDateListLoose>()
       .onAs<Loose<{ query: { default: { dateList: true } } }>>()

// Custom scalar lists - [Date!]!
A.exact.ofAs<OpDefaultDateListNonNull>().onAs<Strict<'{ dateListNonNull }'>>()
A.exact.ofAs<OpDefaultDateListNonNull>()
       .onAs<Strict<{ query: { default: { dateListNonNull: true } } }>>()

// Object lists with selections - [Object]
A.exact.ofAs<OpDefaultObjectList>().onAs<Strict<'{ objectList { id } }'>>()
A.exact.ofAs<OpDefaultObjectList>()
       .onAs<Strict<{ query: { default: { objectList: { id: true } } } }>>()
A.exact.ofAs<OpDefaultObjectListLoose>().onAs<Loose<'{ objectList { id } }'>>()
A.exact.ofAs<OpDefaultObjectListLoose>()
       .onAs<Loose<{ query: { default: { objectList: { id: true } } } }>>()

// Object lists with selections - [Object!]!
A.exact.ofAs<OpDefaultObjectListNonNull>().onAs<Strict<'{ objectListNonNull { id } }'>>()
A.exact.ofAs<OpDefaultObjectListNonNull>()
       .onAs<Strict<{ query: { default: { objectListNonNull: { id: true } } } }>>()

// ==================================================================================================
//                                   Variable Definitions
// ==================================================================================================

// Required String variable
type d1YeSchema = D<{ name: 'q'; result: { stringWithRequiredArg: string | null }; variables: { string: string } }>
type d1NoSchema = D<{ name: 'q'; result: { stringWithRequiredArg: unknown }; variables: { string: string } }>
A.exact.ofAs<d1YeSchema>().on(gqlYe('query q($string: String!) { stringWithRequiredArg(string: $string) }'))
A.exact.ofAs<d1NoSchema>().on(gqlNo('query q($string: String!) { stringWithRequiredArg(string: $string) }'))
A.exact.ofAs<d1YeSchema>().on(gqlYe({ query: { q: { stringWithRequiredArg: { $: { string: $ } } } } }))
A.exact.ofAs<d1NoSchema>().on(gqlNo({ query: { q: { stringWithRequiredArg: { $: { string: $.String().required() } } } } }))

// Optional String variable
type d2YeSchema = D<{ name: 'q'; result: { stringWithArgs: string | null }; variables: { string?: string | null | undefined } }>
type d2NoSchema = D<{ name: 'q'; result: { stringWithArgs: unknown }; variables: { string?: string | null | undefined } }>
A.exact.ofAs<d2YeSchema>().on(gqlYe('query q($string: String) { stringWithArgs(string: $string) }'))
A.exact.ofAs<d2NoSchema>().on(gqlNo('query q($string: String) { stringWithArgs(string: $string) }'))
A.exact.ofAs<d2YeSchema>().on(gqlYe({ query: { q: { stringWithArgs: { $: { string: $ } } } } }))
A.exact.ofAs<d2NoSchema>().on(gqlNo({ query: { q: { stringWithArgs: { $: { string: $.String() } } } } }))

// Custom scalar variable (Date)
type d3YeSchema = D<{ name: 'q'; result: { dateArg: Date | null }; variables: { date?: Date | null | undefined } }>
type d3NoSchema = D<{ name: 'q'; result: { dateArg: unknown }; variables: { date?: unknown } }>
A.exact.ofAs<d3YeSchema>().on(gqlYe('query q($date: Date) { dateArg(date: $date) }'))
A.exact.ofAs<d3NoSchema>().on(gqlNo('query q($date: Date) { dateArg(date: $date) }'))
A.exact.ofAs<d3YeSchema>().on(gqlYe({ query: { q: { dateArg: { $: { date: $ } } } } }))
A.exact.ofAs<d3NoSchema>().on(gqlNo({ query: { q: { dateArg: { $: { date: $ } } } } }))
// special thing -- string documents cannot do this
type varForce = D<{ name: 'q'; result: { dateArg: unknown }; variables: { date?: string|null } }>
A.exact.ofAs<varForce>().on(gqlNo({ query: { q: { dateArg: { $: { date: $.String() } } } } }))

// Multiple optional variables
type d4YeSchema = D<{ name: 'q'; result: { objectWithArgs: { id: string | null } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined } }>
type d4NoSchema = D<{ name: 'q'; result: { objectWithArgs: { id: unknown } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined } }>
A.exact.ofAs<d4YeSchema>().on(gqlYe('query q($id: ID, $string: String) { objectWithArgs(id: $id, string: $string) { id } }'))
A.exact.ofAs<d4NoSchema>().on(gqlNo('query q($id: ID, $string: String) { objectWithArgs(id: $id, string: $string) { id } }'))
A.exact.ofAs<d4YeSchema>().on(gqlYe({ query: { q: { objectWithArgs: { $: { id: $, string: $ }, id: true } } } }))
A.exact.ofAs<d4NoSchema>().on(gqlNo({ query: { q: { objectWithArgs: { $: { id: $.ID(), string: $.String() }, id: true } } } }))

// Boolean variable
type d5YeSchema = D<{ name: 'q'; result: { stringWithArgs: string | null }; variables: { boolean?: boolean | null | undefined } }>
type d5NoSchema = D<{ name: 'q'; result: { stringWithArgs: unknown }; variables: { boolean?: boolean | null | undefined } }>
A.exact.ofAs<d5YeSchema>().on(gqlYe('query q($boolean: Boolean) { stringWithArgs(boolean: $boolean) }'))
A.exact.ofAs<d5NoSchema>().on(gqlNo('query q($boolean: Boolean) { stringWithArgs(boolean: $boolean) }'))
A.exact.ofAs<d5YeSchema>().on(gqlYe({ query: { q: { stringWithArgs: { $: { boolean: $ } } } } }))
A.exact.ofAs<d5NoSchema>().on(gqlNo({ query: { q: { stringWithArgs: { $: { boolean: $.Boolean() } } } } }))

// Int variable
type d6YeSchema = D<{ name: 'q'; result: { stringWithArgs: string | null }; variables: { int?: number | null | undefined } }>
type d6NoSchema = D<{ name: 'q'; result: { stringWithArgs: unknown }; variables: { int?: number | null | undefined } }>
A.exact.ofAs<d6YeSchema>().on(gqlYe('query q($int: Int) { stringWithArgs(int: $int) }'))
A.exact.ofAs<d6NoSchema>().on(gqlNo('query q($int: Int) { stringWithArgs(int: $int) }'))
A.exact.ofAs<d6YeSchema>().on(gqlYe({ query: { q: { stringWithArgs: { $: { int: $ } } } } }))
A.exact.ofAs<d6NoSchema>().on(gqlNo({ query: { q: { stringWithArgs: { $: { int: $.Int() } } } } }))

// Multiple optional variables (3 vars)
type d7YeSchema = D<{ name: 'q'; result: { objectWithArgs: { id: string | null } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined; int?: number | null | undefined } }>
type d7NoSchema = D<{ name: 'q'; result: { objectWithArgs: { id: unknown } | null }; variables: { id?: string | null | undefined; string?: string | null | undefined; int?: number | null | undefined } }>
A.exact.ofAs<d7YeSchema>().on(gqlYe('query q($id: ID, $string: String, $int: Int) { objectWithArgs(id: $id, string: $string, int: $int) { id } }'))
A.exact.ofAs<d7NoSchema>().on(gqlNo('query q($id: ID, $string: String, $int: Int) { objectWithArgs(id: $id, string: $string, int: $int) { id } }'))
A.exact.ofAs<d7YeSchema>().on(gqlYe({ query: { q: { objectWithArgs: { $: { id: $, string: $, int: $ }, id: true } } } }))
A.exact.ofAs<d7NoSchema>().on(gqlNo({ query: { q: { objectWithArgs: { $: { id: $.ID(), string: $.String(), int: $.Int() }, id: true } } } }))

// Anonymous query with variable
type d8YeSchema = D<{ name: 'default'; result: { stringWithRequiredArg: string | null }; variables: { string: string } }>
type d8NoSchema = D<{ name: 'default'; result: { stringWithRequiredArg: unknown }; variables: { string: string } }>
A.exact.ofAs<d8YeSchema>().on(gqlYe('query($string: String!) { stringWithRequiredArg(string: $string) }'))
A.exact.ofAs<d8NoSchema>().on(gqlNo('query($string: String!) { stringWithRequiredArg(string: $string) }'))
A.exact.ofAs<d8YeSchema>().on(gqlYe({ query: { default: { stringWithRequiredArg: { $: { string: $ } } } } }))
A.exact.ofAs<d8NoSchema>().on(gqlNo({ query: { default: { stringWithRequiredArg: { $: { string: $.String().required() } } } } }))

// Variable with nested selection (interfaceWithArgs id is required in schema)
type d9YeSchema = D<{ name: 'q'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { id: string } }>
type d9NoSchema = D<{ name: 'q'; result: { interfaceWithArgs: { id: unknown } | null }; variables: { id: string } }>
A.exact.ofAs<d9YeSchema>().on(gqlYe('query q($id: ID!) { interfaceWithArgs(id: $id) { id } }'))
A.exact.ofAs<d9NoSchema>().on(gqlNo('query q($id: ID!) { interfaceWithArgs(id: $id) { id } }'))
A.exact.ofAs<d9YeSchema>().on(gqlYe({ query: { q: { interfaceWithArgs: { $: { id: $ }, id: true } } } }))
A.exact.ofAs<d9NoSchema>().on(gqlNo({ query: { q: { interfaceWithArgs: { $: { id: $.ID().required() }, id: true } } } }))

// Enum argument with $ prefix
type d10YeSchema = D<{ name: 'q'; result: { stringWithArgEnum: string | null }; variables: { ABCEnum?: 'A' | 'B' | 'C' | null | undefined } }>
A.exact.ofAs<d10YeSchema>().on(gqlYe({ query: { q: { stringWithArgEnum: { $: { $ABCEnum: $ } } } } }))

// ==================================================================================================
//                                           Error cases
// ==================================================================================================

type E = Docpar.Errors.ErrorFieldNotFound<{
  fieldName: 'bad'
  parentName: 'Object1'
  availableFields: "string" | "boolean" | "__typename" | "ABCEnum" | "id" | "int" | "float"
  path: 'todo'
}>

// String parser short-circuits and returns error directly
A.exact.ofAs<E>().onAs<Strict<'{ object { bad } }'>>()
// todo
// Object parser preserves structure with error as field value (embedded in result)
// A.exact.of({} as E).onAs<Strict<{ query: { default: { object: { bad: true } } } }>>()
