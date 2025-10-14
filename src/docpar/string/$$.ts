/**
 * Single-pass GraphQL string parser exports
 */

import type { ParseDocument } from './parser.js'

export type { ParseDocument } from './parser.js'
export type { AbstractSetupSchema, OutputField, OutputObject, Schema, SchemaOfSetup } from './schema.js'

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
    ? ParseDocument<$Definitions, $Schema>
    : ParseDocument<$Definitions, undefined>
  : never

/**
 * schemaOfSetup - transform setup config into schema.
 * For Graffle, this is mostly a passthrough.
 */
export type schemaOfSetup<$Setup extends import('./schema.js').AbstractSetupSchema> =
  import('./schema.js').SchemaOfSetup<$Setup>

/**
 * GraphQLTadaAPI - type for the gql function.
 * Minimal stub for compatibility.
 */
export interface GraphQLTadaAPI<$Schema, $Config> {
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
