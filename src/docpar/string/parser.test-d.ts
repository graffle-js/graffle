// dprint-ignore-file
import type { Possible } from '#test/schema/possible/client/$.js'
import type { Ts } from '@wollybeard/kit'
import type { ParseDocument } from './parser.js'

type S = Possible.$.Schema
type PStrict<$Input extends string> = ParseDocument<$Input, S>
type PLoose<$Input extends string> = ParseDocument<$Input, undefined>

// ==================================================================================================
//                                   Basic Field Selection
// ==================================================================================================

type _ = Ts.Test.Cases<
  // Simplest possible query - anonymous query with single scalar field
  Ts.Test.exact<PStrict<'{ id }'>, { default: { name: 'default'; result: { id: string | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ id }'>, { default: { name: 'default'; result: { id: unknown }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ unknownField }'>, { default: { name: 'default'; result: { unknownField: unknown }; variables: {} } }>,

  // Named query with single scalar field
  Ts.Test.exact<PStrict<'query q { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'query q { unknownField }'>, { q: { name: 'q'; result: { unknownField: unknown }; variables: {} } }>,

  // Multiple scalar fields
  Ts.Test.exact<PStrict<'{ id idNonNull }'>, { default: { name: 'default'; result: { id: string | null; idNonNull: string }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ id unknownField }'>, { default: { name: 'default'; result: { id: unknown; unknownField: unknown }; variables: {} } }>,

  // Query with custom scalar (Date)
  Ts.Test.exact<PStrict<'{ date }'>, { default: { name: 'default'; result: { date: Date | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ date }'>, { default: { name: 'default'; result: { date: unknown }; variables: {} } }>,

  // Query with spaces/formatting
  Ts.Test.exact<PStrict<'query q { date }'>, { q: { name: 'q'; result: { date: Date | null }; variables: {} } }>,

  // Non-null field
  Ts.Test.exact<PStrict<'{ idNonNull }'>, { default: { name: 'default'; result: { idNonNull: string }; variables: {} } }>
>

// ==================================================================================================
//                                   Nested Object Selection
// ==================================================================================================

type _Nested = Ts.Test.Cases<
  // Single nested object with one field
  Ts.Test.exact<PStrict<'{ object { id } }'>, { default: { name: 'default'; result: { object: { id: string | null } | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ unknownObj { unknownField } }'>, { default: { name: 'default'; result: { unknownObj: { unknownField: unknown } | null }; variables: {} } }>,

  // Nested object with multiple fields
  Ts.Test.exact<PStrict<'{ object { id string } }'>, { default: { name: 'default'; result: { object: { id: string | null; string: string | null } | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ obj { field1 field2 } }'>, { default: { name: 'default'; result: { obj: { field1: unknown; field2: unknown } | null }; variables: {} } }>,

  // Multiple nested objects at same level
  Ts.Test.exact<PStrict<'{ object { id } objectNested { id } }'>, { default: { name: 'default'; result: { object: { id: string | null } | null; objectNested: { id: string | null } | null }; variables: {} } }>,

  // Deep nesting (3 levels)
  Ts.Test.exact<PStrict<'{ objectNested { object { id } } }'>, { default: { name: 'default'; result: { objectNested: { object: { id: string | null } | null } | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ level1 { level2 { level3 } } }'>, { default: { name: 'default'; result: { level1: { level2: { level3: unknown } | null } | null }; variables: {} } }>
>

// ==================================================================================================
//                                   Field Arguments
// ==================================================================================================

type _Arguments = Ts.Test.Cases<
  // Field with single argument
  Ts.Test.exact<PStrict<'{ stringWithArgs(string: "hello") }'>, { default: { name: 'default'; result: { stringWithArgs: string | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ unknownField(arg: "value") }'>, { default: { name: 'default'; result: { unknownField: unknown }; variables: {} } }>,

  // Field with required argument
  Ts.Test.exact<PStrict<'{ stringWithRequiredArg(string: "required") }'>, { default: { name: 'default'; result: { stringWithRequiredArg: string | null }; variables: {} } }>,

  // Nested object with arguments
  Ts.Test.exact<PStrict<'{ objectWithArgs(id: "123") { id } }'>, { default: { name: 'default'; result: { objectWithArgs: { id: string | null } | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ unknownObj(id: "123") { field } }'>, { default: { name: 'default'; result: { unknownObj: { field: unknown } | null }; variables: {} } }>
>

// ==================================================================================================
//                                   Multiple Operations
// ==================================================================================================

type _MultiOp = Ts.Test.Cases<
  // Two queries
  Ts.Test.exact<PStrict<'query A { id } query B { string }'>, { A: { name: 'A'; result: { id: string | null }; variables: {} }; B: { name: 'B'; result: { string: string | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'query A { field1 } query B { field2 }'>, { A: { name: 'A'; result: { field1: unknown }; variables: {} }; B: { name: 'B'; result: { field2: unknown }; variables: {} } }>,

  // Query and mutation
  Ts.Test.exact<PStrict<'query GetId { id } mutation SetId { idNonNull }'>, { GetId: { name: 'GetId'; result: { id: string | null }; variables: {} }; SetId: { name: 'SetId'; result: { idNonNull: string }; variables: {} } }>,
  Ts.Test.exact<PLoose<'query Get { data } mutation Set { updated }'>, { Get: { name: 'Get'; result: { data: unknown }; variables: {} }; Set: { name: 'Set'; result: { updated: unknown }; variables: {} } }>
>

// ==================================================================================================
//                                   Mutations
// ==================================================================================================

type _Mutations = Ts.Test.Cases<
  // Simple mutation
  Ts.Test.exact<PStrict<'mutation { id }'>, { default: { name: 'default'; result: { id: string | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'mutation { update }'>, { default: { name: 'default'; result: { update: unknown }; variables: {} } }>,

  // Named mutation
  Ts.Test.exact<PStrict<'mutation SetId { idNonNull }'>, { SetId: { name: 'SetId'; result: { idNonNull: string }; variables: {} } }>,
  Ts.Test.exact<PLoose<'mutation Create { created }'>, { Create: { name: 'Create'; result: { created: unknown }; variables: {} } }>
>

// ==================================================================================================
//                                   Special Types (Enums, Unions, etc.)
// ==================================================================================================

type _SpecialTypes = Ts.Test.Cases<
  // Enum field
  Ts.Test.exact<PStrict<'{ abcEnum }'>, { default: { name: 'default'; result: { abcEnum: 'A' | 'B' | 'C' | null }; variables: {} } }>,
  Ts.Test.exact<PLoose<'{ status }'>, { default: { name: 'default'; result: { status: unknown }; variables: {} } }>
>

// ==================================================================================================
//                                   Variable Definitions
// ==================================================================================================

type _Variables = Ts.Test.Cases<
  // Required ID variable
  Ts.Test.exact<PStrict<'query q($a: ID!) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { a: string } } }>,
  Ts.Test.exact<PLoose<'query q($a: ID!) { field }'>, { q: { name: 'q'; result: { field: unknown }; variables: { a: string } } }>,

  // Optional String variable
  Ts.Test.exact<PStrict<'query q($s: String) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { s?: string | null | undefined } } }>,
  Ts.Test.exact<PLoose<'query q($s: String) { field }'>, { q: { name: 'q'; result: { field: unknown }; variables: { s?: string | null | undefined } } }>,

  // Custom scalar variable (Date mapped to Date type in strict, unknown in schema-less)
  Ts.Test.exact<PStrict<'query q($d: Date!) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { d: Date } } }>,
  Ts.Test.exact<PLoose<'query q($d: Date!) { field }'>, { q: { name: 'q'; result: { field: unknown }; variables: { d: unknown } } }>,

  // Multiple variables (required + optional)
  Ts.Test.exact<PStrict<'query q($a: ID!, $s: String) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { a: string; s?: string | null | undefined } } }>,
  Ts.Test.exact<PLoose<'query q($id: ID!, $name: String) { field }'>, { q: { name: 'q'; result: { field: unknown }; variables: { id: string; name?: string | null | undefined } } }>,

  // Required String variable
  Ts.Test.exact<PStrict<'query q($s: String!) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { s: string } } }>,

  // Optional Int variable
  Ts.Test.exact<PStrict<'query q($n: Int) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { n?: number | null | undefined } } }>,

  // Required Boolean variable
  Ts.Test.exact<PStrict<'query q($b: Boolean!) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { b: boolean } } }>,

  // Multiple required variables
  Ts.Test.exact<PStrict<'query q($a: ID!, $s: String!, $n: Int!) { id }'>, { q: { name: 'q'; result: { id: string | null }; variables: { a: string; s: string; n: number } } }>,

  // Mutation with variable
  Ts.Test.exact<PStrict<'mutation m($a: ID!) { id }'>, { m: { name: 'm'; result: { id: string | null }; variables: { a: string } } }>,

  // Anonymous query with variable
  Ts.Test.exact<PStrict<'query($a: ID!) { id }'>, { default: { name: 'default'; result: { id: string | null }; variables: { a: string } } }>,
  Ts.Test.exact<PLoose<'query($a: ID!) { field }'>, { default: { name: 'default'; result: { field: unknown }; variables: { a: string } } }>,

  // Variable used in field argument with nested selection
  Ts.Test.exact<PStrict<'query q($a: ID!) { interfaceWithArgs(id: $a) { id } }'>, { q: { name: 'q'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { a: string } } }>,
  Ts.Test.exact<PLoose<'query q($id: ID!) { obj(id: $id) { nested } }'>, { q: { name: 'q'; result: { obj: { nested: unknown } | null }; variables: { id: string } } }>
>
