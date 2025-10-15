import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { Core } from './core/$.js'
import type { Object } from './object/$.js'
import type { String } from './string/$.js'

/**
 * Unified GraphQL document parser that dispatches based on input type.
 *
 * - String inputs are parsed via the string parser (uses only $Schema)
 * - Object inputs are parsed via the object parser (uses all 4 parameters)
 *
 * Both produce equivalent Document<Operation> types.
 *
 * Supports both schema-driven and schema-less modes (pass `undefined` for $Schema).
 *
 * This is a pure parser - it doesn't know about GlobalRegistry or client context.
 * For context-aware parsing, see `ParseGraphQLString` and `ParseGraphQLObject` in `#src/static/gql.js`.
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
  $Input extends string         ? String.Parse<$Input, $Schema> extends Core.ParserError      ? String.Parse<$Input, $Schema>
                                  : String.Parse<$Input, $Schema> extends Core.Doc.Operation   ? Core.Doc.Document<String.Parse<$Input, $Schema>>
                                  :                                                               never
  : $Input extends object        ? $Schema extends Schema                                      ? $ArgumentsMap extends SchemaDrivenDataMap ? $Context extends object ? Core.Doc.Document<Object.Parse<$Input, $Schema, $ArgumentsMap, $Context>>
                                  :                                                               never
                                  :                                                               never
                                  :                                                               never
  :                                                                                               never
