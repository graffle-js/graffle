import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { InferOperationsInDocument } from './InferOperations.js'

/**
 * Parse GraphQL document object into operations (raw, unwrapped).
 *
 * Returns a union of operations without Doc.Document wrapper.
 * For the wrapped version, use the unified Parse in docpar/parse.ts.
 *
 * @param $Input - The document builder object
 * @param $Schema - Schema for type-safe parsing
 * @param $ArgumentsMap - SDDM arguments map
 * @param $Context - Client context
 *
 * @example
 * ```ts
 * type Ops = Parse<{ query: { default: { id: true } } }, MySchema, MyArgsMap, MyContext>
 * // Returns: Operation<'default', { id: string }, {}> (raw operation, no Document wrapper)
 * ```
 */
export type Parse<
  $Input extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context extends object,
> = InferOperationsInDocument<$Input, $Schema, $ArgumentsMap, $Context>
