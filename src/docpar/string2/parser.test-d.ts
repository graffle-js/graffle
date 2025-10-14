// dprint-ignore-file
/**
 * Type-level tests for the string2 parser (single-pass GraphQL parser)
 */

import type { Possible } from '#test/schema/possible/client/$.js'
import type { Ts } from '@wollybeard/kit'
import type { ParseDocument as P } from './parser.js'

// Get the actual schema from Possible client
type S = Possible.$.Schema

// ==================================================================================================
//                                   Basic Field Selection
// ==================================================================================================

type _ = Ts.Test.Cases<
  // Simplest possible query - anonymous query with single scalar field
  Ts.Test.exact<P<'{ id }', S>, { default: { name: 'default'; result: { id: string | null }; variables: {} } }>,
  // Named query with single scalar field
  Ts.Test.exact<P<'query myQuery { id }', S>, { myQuery: { name: 'myQuery'; result: { id: string | null }; variables: {} } }>,
  // Multiple scalar fields
  Ts.Test.exact<P<'{ id idNonNull }', S>, { default: { name: 'default'; result: { id: string | null; idNonNull: string }; variables: {} } }>,
  // Query with custom scalar (Date)
  Ts.Test.exact<P<'{ date }', S>, { default: { name: 'default'; result: { date: Date | null }; variables: {} } }>,
  // Query with spaces/formatting
  Ts.Test.exact<P<'query myQuery { date }', S>, { myQuery: { name: 'myQuery'; result: { date: Date | null }; variables: {} } }>,
  // Non-null field
  Ts.Test.exact<P<'{ idNonNull }', S>, { default: { name: 'default'; result: { idNonNull: string }; variables: {} } }>
>

// ==================================================================================================
//                                   Nested Object Selection
// ==================================================================================================

type _Nested = Ts.Test.Cases<
  // Single nested object with one field
  Ts.Test.exact<P<'{ object { id } }', S>, { default: { name: 'default'; result: { object: { id: string | null } | null }; variables: {} } }>,
  // Nested object with multiple fields
  Ts.Test.exact<P<'{ object { id string } }', S>, { default: { name: 'default'; result: { object: { id: string | null; string: string | null } | null }; variables: {} } }>,
  // Multiple nested objects at same level
  Ts.Test.exact<P<'{ object { id } objectNested { id } }', S>, { default: { name: 'default'; result: { object: { id: string | null } | null; objectNested: { id: string | null } | null }; variables: {} } }>,
  // Deep nesting (3 levels)
  Ts.Test.exact<P<'{ objectNested { object { id } } }', S>, { default: { name: 'default'; result: { objectNested: { object: { id: string | null } | null } | null }; variables: {} } }>
>

// ==================================================================================================
//                                   Field Arguments
// ==================================================================================================

type _Arguments = Ts.Test.Cases<
  // Field with single argument
  Ts.Test.exact<P<'{ stringWithArgs(string: "hello") }', S>, { default: { name: 'default'; result: { stringWithArgs: string | null }; variables: {} } }>,
  // Field with required argument
  Ts.Test.exact<P<'{ stringWithRequiredArg(string: "required") }', S>, { default: { name: 'default'; result: { stringWithRequiredArg: string | null }; variables: {} } }>,
  // Nested object with arguments
  Ts.Test.exact<P<'{ objectWithArgs(id: "123") { id } }', S>, { default: { name: 'default'; result: { objectWithArgs: { id: string | null } | null }; variables: {} } }>
>

// ==================================================================================================
//                                   Multiple Operations
// ==================================================================================================

type _MultiOp = Ts.Test.Cases<
  // Two queries
  Ts.Test.exact<P<'query A { id } query B { string }', S>, { A: { name: 'A'; result: { id: string | null }; variables: {} }; B: { name: 'B'; result: { string: string | null }; variables: {} } }>,
  // Query and mutation
  Ts.Test.exact<P<'query GetId { id } mutation SetId { idNonNull }', S>, { GetId: { name: 'GetId'; result: { id: string | null }; variables: {} }; SetId: { name: 'SetId'; result: { idNonNull: string }; variables: {} } }>
>

// ==================================================================================================
//                                   Mutations
// ==================================================================================================

type _Mutations = Ts.Test.Cases<
  // Simple mutation
  Ts.Test.exact<P<'mutation { id }', S>, { default: { name: 'default'; result: { id: string | null }; variables: {} } }>,
  // Named mutation
  Ts.Test.exact<P<'mutation SetId { idNonNull }', S>, { SetId: { name: 'SetId'; result: { idNonNull: string }; variables: {} } }>
>

// ==================================================================================================
//                                   Special Types (Enums, Unions, etc.)
// ==================================================================================================

type _SpecialTypes = Ts.Test.Cases<
  // Enum field
  Ts.Test.exact<P<'{ abcEnum }', S>, { default: { name: 'default'; result: { abcEnum: 'A' | 'B' | 'C' | null }; variables: {} } }>
>

// ==================================================================================================
//                                   Variable Definitions
// ==================================================================================================

type _Variables = Ts.Test.Cases<
  // Required ID variable
  Ts.Test.exact<P<'query q($a: ID!) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { a: string } } }>,
  // Optional String variable
  Ts.Test.exact<P<'query q($s: String) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { s?: string | null | undefined } } }>,
  // Multiple variables (required + optional)
  Ts.Test.exact<P<'query q($a: ID!, $s: String) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { a: string; s?: string | null | undefined } } }>,
  // Required String variable
  Ts.Test.exact<P<'query q($s: String!) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { s: string } } }>,
  // Optional Int variable
  Ts.Test.exact<P<'query q($n: Int) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { n?: number | null | undefined } } }>,
  // Required Boolean variable
  Ts.Test.exact<P<'query q($b: Boolean!) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { b: boolean } } }>,
  // Multiple required variables
  Ts.Test.exact<P<'query q($a: ID!, $s: String!, $n: Int!) { id }', S>, { q: { name: 'q'; result: { id: string | null }; variables: { a: string; s: string; n: number } } }>,
  // Mutation with variable
  Ts.Test.exact<P<'mutation m($a: ID!) { id }', S>, { m: { name: 'm'; result: { id: string | null }; variables: { a: string } } }>,
  // Anonymous query with variable
  Ts.Test.exact<P<'query($a: ID!) { id }', S>, { default: { name: 'default'; result: { id: string | null }; variables: { a: string } } }>,
  // Variable used in field argument with nested selection
  Ts.Test.exact<P<'query q($a: ID!) { interfaceWithArgs(id: $a) { id } }', S>, { q: { name: 'q'; result: { interfaceWithArgs: { id: string | null } | null }; variables: { a: string } } }>
>
