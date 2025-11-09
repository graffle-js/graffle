import type { Ts } from '@wollybeard/kit'
import type { Core } from './core/_.js'
import type { Object } from './object/_.js'
import type { String } from './string/_.js'

/**
 * Unified GraphQL document parser that dispatches based on input type.
 *
 * - String inputs are parsed via the string parser
 * - Object inputs are parsed via the object parser
 *
 * Both produce equivalent Document<Operation> types.
 *
 * Supports both schema-driven and schema-less modes via ParserContext.
 *
 * This is a pure parser - it doesn't know about GlobalRegistry or client context.
 * For context-aware parsing, see `ParseGraphQLString` and `ParseGraphQLObject` in `#src/static/gql.js`.
 *
 * @example
 * ```ts
 * // String syntax with schema
 * type Doc1 = Parse<'{ id }', ParserContext<MySchema>>
 *
 * // Object syntax with schema
 * type Doc2 = Parse<{ query: { default: { id: true } } }, ParserContext<MySchema, MySDDM>>
 *
 * // Schema-less mode
 * type Doc3 = Parse<'{ id }', ParserContext<undefined>>
 * ```
 */
// dprint-ignore
export type Parse<
  $Input,
  $Context,
  ___$Result = Parse_<$Input, $Context>,
> =
  [___$Result] extends [Ts.Err.StaticError]   ? ___$Result :
  [___$Result] extends [Core.Doc.Operation]   ? Core.Doc.Document<___$Result> :
                                                Ts.Err.StaticError<'Parse', { result: ___$Result }>

// dprint-ignore
type Parse_<
    $Input,
    $Context,
  > =
    $Input extends string         ? $Context extends { schema: infer $Schema }
                                      ? String.Parse<$Input, $Schema>
                                      : never
    : $Input extends object        ? $Context extends { schema: any; sddm: any; scalars: any; typeHookRequestResultDataTypes: any }
                                      ? Object.Parse<$Input, $Context>
                                      : never
    :                                                                                               never
