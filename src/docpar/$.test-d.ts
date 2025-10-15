// dprint-ignore-file
import type { Docpar } from './$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import type { Core } from './core/$.js'

type ContextStrict = Docpar.ParserContext<Possible.$.Schema, Possible.$.ArgumentsMap, never>
type ContextLoose = Docpar.ParserContext<undefined>

type Strict<$Input> = Docpar.Parse<$Input, ContextStrict>
type Loose<$Input> = Docpar.Parse<$Input, ContextLoose>

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

  // Schema-less mode - both string and object syntax
  Ts.Test.exact<Loose<'{ id }'>, OpDefaultIdLoose>,
  Ts.Test.exact<Loose<{ query: { default: { id: true } } }>, OpDefaultIdLoose>,
  Ts.Test.exact<Loose<'{ unknownField }'>, OpDefaultUnknownField>,
  Ts.Test.exact<Loose<{ query: { default: { unknownField: true } } }>, OpDefaultUnknownField>,

  // Named query with single scalar field
  Ts.Test.exact<Strict<'query q { id }'>, OpQId>,
  Ts.Test.exact<Strict<{ query: { q: { id: true } } }>, OpQId>,
  Ts.Test.exact<Loose<'query q { id }'>, D<{ name: 'q'; result: { id: unknown }; variables: {} }>>,
  Ts.Test.exact<Loose<{ query: { q: { id: true } } }>, D<{ name: 'q'; result: { id: unknown }; variables: {} }>>,
  Ts.Test.exact<Loose<'query q { unknownField }'>, OpQUnknownField>,
  Ts.Test.exact<Loose<{ query: { q: { unknownField: true } } }>, OpQUnknownField>,

  // Multiple scalar fields
  Ts.Test.exact<Strict<'{ id idNonNull }'>, OpDefaultIdAndIdNonNull>,
  Ts.Test.exact<Strict<{ query: { default: { id: true; idNonNull: true } } }>, OpDefaultIdAndIdNonNull>,
  Ts.Test.exact<Loose<'{ id unknownField }'>, OpDefaultIdAndUnknownField>,
  Ts.Test.exact<Loose<{ query: { default: { id: true; unknownField: true } } }>, OpDefaultIdAndUnknownField>,

  // Query with custom scalar (Date)
  Ts.Test.exact<Strict<'{ date }'>, OpDefaultDate>,
  Ts.Test.exact<Strict<{ query: { default: { date: true } } }>, OpDefaultDate>,
  Ts.Test.exact<Loose<'{ date }'>, OpDefaultDateLoose>,
  Ts.Test.exact<Loose<{ query: { default: { date: true } } }>, OpDefaultDateLoose>,

  // Query with spaces/formatting - tests parser handles whitespace
  Ts.Test.exact<Strict<'query q { date }'>, OpQDate>,
  Ts.Test.exact<Strict<{ query: { q: { date: true } } }>, OpQDate>,
  Ts.Test.exact<Loose<'query q { date }'>, D<{ name: 'q'; result: { date: unknown }; variables: {} }>>,
  Ts.Test.exact<Loose<{ query: { q: { date: true } } }>, D<{ name: 'q'; result: { date: unknown }; variables: {} }>>,

  // Non-null field
  Ts.Test.exact<Strict<'{ idNonNull }'>, OpDefaultIdNonNull>,
  Ts.Test.exact<Strict<{ query: { default: { idNonNull: true } } }>, OpDefaultIdNonNull>,
  Ts.Test.exact<Loose<'{ idNonNull }'>, D<{ name: 'default'; result: { idNonNull: unknown }; variables: {} }>>,
  Ts.Test.exact<Loose<{ query: { default: { idNonNull: true } } }>, D<{ name: 'default'; result: { idNonNull: unknown }; variables: {} }>>
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
  Ts.Test.exact<Strict<{ query: { default: { object: { id: true } } } }>, OpDefaultObjectWithId>,
  Ts.Test.exact<Loose<'{ unknownObj { unknownField } }'>, OpDefaultUnknownObjWithUnknownField>,
  Ts.Test.exact<Loose<{ query: { default: { unknownObj: { unknownField: true } } } }>, OpDefaultUnknownObjWithUnknownField>,

  // Nested object with multiple fields
  Ts.Test.exact<Strict<'{ object { id string } }'>, OpDefaultObjectWithIdAndString>,
  Ts.Test.exact<Strict<{ query: { default: { object: { id: true; string: true } } } }>, OpDefaultObjectWithIdAndString>,
  Ts.Test.exact<Loose<'{ obj { field1 field2 } }'>, OpDefaultUnknownObjWithTwoFields>,
  Ts.Test.exact<Loose<{ query: { default: { obj: { field1: true; field2: true } } } }>, OpDefaultUnknownObjWithTwoFields>,

  // Multiple nested objects at same level
  Ts.Test.exact<Strict<'{ object { id } objectNested { id } }'>, OpDefaultTwoObjectsWithId>,
  Ts.Test.exact<Strict<{ query: { default: { object: { id: true }; objectNested: { id: true } } } }>, OpDefaultTwoObjectsWithId>,
  Ts.Test.exact<Loose<'{ obj1 { field } obj2 { field } }'>, D<{ name: 'default'; result: { obj1: { field: unknown } | null; obj2: { field: unknown } | null }; variables: {} }>>,
  Ts.Test.exact<Loose<{ query: { default: { obj1: { field: true }; obj2: { field: true } } } }>, D<{ name: 'default'; result: { obj1: { field: unknown } | null; obj2: { field: unknown } | null }; variables: {} }>>,

  // Deep nesting (3 levels)
  Ts.Test.exact<Strict<'{ objectNested { object { id } } }'>, OpDefaultDeepNested>,
  Ts.Test.exact<Strict<{ query: { default: { objectNested: { object: { id: true } } } } }>, OpDefaultDeepNested>,
  Ts.Test.exact<Loose<'{ level1 { level2 { level3 } } }'>, OpDefaultThreeLevelUnknown>,
  Ts.Test.exact<Loose<{ query: { default: { level1: { level2: { level3: true } } } } }>, OpDefaultThreeLevelUnknown>
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
  // Note: Object syntax with $ for arguments will be tested in future (requires argument parsing in object builder)

  // Field with required argument
  Ts.Test.exact<Strict<'{ stringWithRequiredArg(string: "required") }'>, OpDefaultStringWithRequiredArg>,
  Ts.Test.exact<Loose<'{ unknownField(required: "value") }'>, OpDefaultUnknownFieldWithArgs>,

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
  Ts.Test.exact<Strict<'query A { id } query B { string }'>, OpMultiTwoQueries>,
  Ts.Test.exact<Strict<{ query: { A: { id: true }; B: { string: true } } }>, OpMultiTwoQueries>,
  Ts.Test.exact<Loose<'query A { field1 } query B { field2 }'>, OpMultiTwoQueriesLoose>,
  Ts.Test.exact<Loose<{ query: { A: { field1: true }; B: { field2: true } } }>, OpMultiTwoQueriesLoose>,

  // Query and mutation
  Ts.Test.exact<Strict<'query GetId { id } mutation SetId { idNonNull }'>, OpMultiQueryAndMutation>,
  Ts.Test.exact<Strict<{ query: { GetId: { id: true } }; mutation: { SetId: { idNonNull: true } } }>, OpMultiQueryAndMutation>,
  Ts.Test.exact<Loose<'query Get { data } mutation Set { updated }'>, OpMultiQueryAndMutationLoose>,
  Ts.Test.exact<Loose<{ query: { Get: { data: true } }; mutation: { Set: { updated: true } } }>, OpMultiQueryAndMutationLoose>
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
  Ts.Test.exact<Strict<{ mutation: { default: { id: true } } }>, OpDefaultId>,
  Ts.Test.exact<Loose<'mutation { update }'>, OpDefaultUpdate>,
  Ts.Test.exact<Loose<{ mutation: { default: { update: true } } }>, OpDefaultUpdate>,

  // Named mutation
  Ts.Test.exact<Strict<'mutation SetId { idNonNull }'>, OpSetIdIdNonNull>,
  Ts.Test.exact<Strict<{ mutation: { SetId: { idNonNull: true } } }>, OpSetIdIdNonNull>,
  Ts.Test.exact<Loose<'mutation Create { created }'>, OpCreateCreated>,
  Ts.Test.exact<Loose<{ mutation: { Create: { created: true } } }>, OpCreateCreated>
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
  Ts.Test.exact<Strict<{ query: { default: { abcEnum: true } } }>, OpDefaultAbcEnum>,
  Ts.Test.exact<Loose<'{ status }'>, OpDefaultStatus>,
  Ts.Test.exact<Loose<{ query: { default: { status: true } } }>, OpDefaultStatus>
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
  Ts.Test.exact<Loose<'query q($s: String!) { field }'>, D<{ name: 'q'; result: { field: unknown }; variables: { s: string } }>>,

  // Optional Int variable
  Ts.Test.exact<Strict<'query q($n: Int) { id }'>, OpQIdWithVarN_Optional>,
  Ts.Test.exact<Loose<'query q($n: Int) { field }'>, D<{ name: 'q'; result: { field: unknown }; variables: { n?: number | null | undefined } }>>,

  // Required Boolean variable
  Ts.Test.exact<Strict<'query q($b: Boolean!) { id }'>, OpQIdWithVarB>,
  Ts.Test.exact<Loose<'query q($b: Boolean!) { field }'>, D<{ name: 'q'; result: { field: unknown }; variables: { b: boolean } }>>,

  // Multiple required variables
  Ts.Test.exact<Strict<'query q($a: ID!, $s: String!, $n: Int!) { id }'>, OpQIdWithMultiRequiredVars>,
  Ts.Test.exact<Loose<'query q($a: ID!, $s: String!, $n: Int!) { field }'>, D<{ name: 'q'; result: { field: unknown }; variables: { a: string; s: string; n: number } }>>,

  // Mutation with variable
  Ts.Test.exact<Strict<'mutation m($a: ID!) { id }'>, OpMIdWithVarA>,
  Ts.Test.exact<Loose<'mutation m($a: ID!) { field }'>, D<{ name: 'm'; result: { field: unknown }; variables: { a: string } }>>,

  // Anonymous query with variable
  Ts.Test.exact<Strict<'query($a: ID!) { id }'>, OpDefaultIdWithVarA>,
  Ts.Test.exact<Loose<'query($a: ID!) { field }'>, OpDefaultFieldWithVarA>,

  // Variable used in field argument with nested selection
  Ts.Test.exact<Strict<'query q($a: ID!) { interfaceWithArgs(id: $a) { id } }'>, OpQInterfaceWithArgsWithVarA>,
  Ts.Test.exact<Loose<'query q($id: ID!) { obj(id: $id) { nested } }'>, OpQObjWithVarId>
>

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
  Ts.Test.exact<Strict<'{ bad }'>, DocError>
  // TODO: Object parser produces different error format than string parser
  // Ts.Test.exact<Strict<{ query: { default: { bad: true } } }>, DocError>
>

// TODO: Object parser produces different error format - needs unification with string parser error format
// Possible.gql({ query: { default: { bad: true } } })
// TODO: Runtime string parser errors need to be surfaced at compile-time in gql function
// Possible.gql('{ bad }')
