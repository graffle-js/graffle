export * from './extract.js'
export * from './infer.js'
export { type InferVariables as Infer } from './infer.js'
export * from './var.js'

import type { Builder, BuilderTyped } from './var.js'

/**
 * Utility type for schema-ful mode that allows bare $ variable markers.
 *
 * @remarks
 * In schema-ful mode, variable types are inferred from ArgumentsMap,
 * so bare `$` markers are allowed. The type will be looked up from the schema.
 *
 * @example
 * ```typescript
 * // Schema-ful generated code:
 * date?: Var.MaybeSchemaful<Date | null | undefined>
 * // Expands to: Date | null | undefined | Builder<Date | null | undefined>
 *
 * // Usage:
 * { $: { date: $ } }  // ✅ Type inferred from ArgumentsMap
 * ```
 */
export type MaybeSchemaful<$Type> = $Type | Builder<$Type>

/**
 * Utility type for schema-less mode that requires typed $ variable markers.
 *
 * @remarks
 * In schema-less mode, ArgumentsMap is not available, so variable types
 * must be explicitly provided using typed markers like `$.String()`.
 *
 * @example
 * ```typescript
 * // Schema-less generated code:
 * date?: Var.MaybeSchemaless<unknown | null | undefined>
 * // Expands to: unknown | null | undefined | BuilderTyped<string>
 *
 * // Usage:
 * { $: { date: $.String() } }  // ✅ Type explicitly provided
 * { $: { date: $ } }            // ❌ Error: bare $ not allowed
 * ```
 */
export type MaybeSchemaless<$Type> = $Type | BuilderTyped<string>

/**
 * Context-aware utility type that dispatches to schema-ful or schema-less variant.
 *
 * @remarks
 * Used in dynamic scenarios where schema may be added at runtime via chaining API.
 * Checks if context has ArgumentsMap and dispatches accordingly.
 *
 * @example
 * ```typescript
 * // Dynamic client with schema addition:
 * const client = Graffle.create()
 *   .with({ schema: { definition } })  // Schema added dynamically
 *
 * // Uses Maybe<T, Context> which dispatches based on context
 * client.gql({ query: { ... } })
 * ```
 */
export type Maybe<$Type, $Context = any> = $Context extends { argumentsMap: any } ? MaybeSchemaful<$Type>
  : MaybeSchemaless<$Type>

/**
 * Conditional return type for deferred execution based on variable presence.
 *
 * @remarks
 * When a selection set contains variables (using $ markers), the method returns
 * a DocumentRunner instead of auto-executing. This allows users to provide variables
 * at runtime via the .run(variables) method.
 *
 * @typeParam $Variables - The inferred variables from the selection set
 * @typeParam $Result - The result type that would be returned
 * @typeParam $DocumentRunner - The DocumentRunner type to return when variables are present
 *
 * @example
 * ```typescript
 * // No variables - returns Promise
 * graffle.query.user({ id: true }) // => Promise<{ id: string }>
 *
 * // Has variables - returns DocumentRunner
 * graffle.query.user({ $: { id: $ }, id: true }) // => DocumentRunner<{ id: string }, { id: string }>
 * runner.document // => "query($id: ID!) { user(id: $id) { id } }"
 * runner.run({ id: '123' }) // => Promise<{ id: string }>
 * ```
 */
// dprint-ignore
export type MethodReturn<$Variables, $Result, $DocumentRunner> =
  [keyof $Variables] extends [never]
    ? Promise<$Result>
    : $DocumentRunner
