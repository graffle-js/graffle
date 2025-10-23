/**
 * Single-pass GraphQL string parser exports
 */

import type { Ts } from '@wollybeard/kit'
import type { Doc } from '../$$.js'
import type { ParseDocument } from './parser.js'

export type { ParseDocument } from './parser.js'
export type { AbstractSetupSchema, OutputField, OutputObject, Schema, SchemaOfSetup } from './schema.js'

/**
 * Parse GraphQL string into operations (raw, unwrapped).
 *
 * Returns a union of operations without Doc.Document wrapper.
 * For the wrapped version, use the unified Parse in docpar/parse.ts.
 *
 * @param $Input - The GraphQL document string to parse
 * @param $Schema - Optional schema for type-safe parsing (undefined for schema-less mode)
 *
 * @example
 * ```ts
 * type Ops = Parse<'{ id }', MySchema>
 * // Returns: Operation<'default', { id: string }, {}> (raw operation, no Document wrapper)
 * ```
 */
export type Parse<$Input extends string, $Schema> = Ts.Simplify.Top<
  getDocumentOperations<
    parseDocument<$Input>['definitions'],
    $Schema
  >
> extends infer $OperationsRecord ? $OperationsRecord extends { __typename: 'ParserError' } ? $OperationsRecord
  : [$OperationsRecord] extends [Record<string, any>]
    ? [$OperationsRecord[keyof $OperationsRecord]] extends [infer $Op] ? [$Op] extends [Doc.Operation] ? $Op
      : string
    : string
  : string
  : string

/**
 * parseDocument - captures the input string to pass to getDocumentOperations.
 */
export type parseDocument<$Input extends string> = {
  definitions: $Input // Capture input for single-pass parsing
}

/**
 * getDocumentOperations - performs single-pass parsing with the schema.
 * Supports both schema-driven and schema-less modes.
 */
export type getDocumentOperations<
  $Definitions,
  $Schema,
> = $Definitions extends string
  ? $Schema extends import('./schema.js').Schema
    ? ParseDocument<$Definitions, import('../core/Context.js').ParserContext<$Schema>>
  : ParseDocument<$Definitions, import('../core/Context.js').ParserContext<undefined>>
  : never

/**
 * schemaOfSetup - transform setup config into schema.
 * For Graffle, this is mostly a passthrough.
 */
export type schemaOfSetup<$Setup extends import('./schema.js').AbstractSetupSchema> =
  import('./schema.js').SchemaOfSetup<$Setup>

/**
 * GraphQLStringAPI - type for the gql function.
 * Minimal stub for LSP compatibility.
 */
export interface GraphQLStringAPI<$Schema, $Config> {
  readonly __name: string
  scalar: any
  persisted: any
}

/**
 * Abstract setup cache - not used in string2
 */
export interface AbstractSetupCache {
  readonly __cacheDisabled: unknown
  [key: string]: unknown
}

// Re-export commonly used types
export type { GetFieldOutputType } from './typeTraversal.js'
