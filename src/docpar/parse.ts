import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { Simplify } from 'type-fest'
import * as Doc from './core/doc.js'
import type { InferOperations } from './gql.js'
import type { String } from './string/$.js'

/**
 * Unified GraphQL document parser that dispatches based on input type.
 *
 * - String inputs are parsed via the string parser (uses only $Schema)
 * - Object inputs are parsed via the object parser (uses all 4 parameters)
 *
 * Both produce equivalent TypedFullDocument types.
 *
 * Supports both schema-driven and schema-less modes (pass `undefined` for $Schema).
 *
 * @example
 * ```ts
 * // String syntax with schema
 * type Doc1 = Parse<'{ id }', MySchema, MyArgsMap, MyContext>
 *
 * // Object syntax with schema
 * type Doc2 = Parse<{ query: { default: { id: true } } }, MySchema, MyArgsMap, MyContext>
 *
 * // Schema-less mode
 * type Doc3 = Parse<'{ id }', undefined, any, any>
 * ```
 */
// dprint-ignore
export type Parse<
  $Input,
  $Schema,
  $ArgumentsMap = any,
  $Context = any,
> =
  $Input extends string
    ? String.Parse<$Input, $Schema>
    : $Schema extends Schema
      ? $ArgumentsMap extends SchemaDrivenDataMap
        ? Doc.FromObject<Simplify<InferOperations<$Input, $Schema, $ArgumentsMap, $Context>>>
        : never
      : never
