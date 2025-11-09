/**
 * Unified parser context types for document parsing.
 *
 * Supports both schema-driven and schema-less parsing modes through conditional types.
 */

import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'

/**
 * Unified parser context that supports both schema-driven and schema-less modes.
 *
 * When `$Schema extends Schema`, provides full type information from the schema.
 * When `$Schema` is `undefined`, falls back to schema-less mode with unknown types.
 *
 * @param $Schema - Schema for type inference. Defaults to `Schema` for schema-driven mode.
 *                  Pass `undefined` explicitly for schema-less mode.
 * @param $SDDM - Schema-Driven Data Map for runtime custom scalar encoding
 * @param $TypeHooks - Union of extension result data types preserved during simplification
 *
 * @example Schema-driven mode
 * ```ts
 * type Context = ParserContext<MySchema>
 * // → ParserContext.WithSchema<MySchema, any, never>
 * ```
 *
 * @example Schema-less mode
 * ```ts
 * type Context = ParserContext<undefined>
 * // → ParserContext.SchemaLess
 * ```
 */
export type ParserContext<
  $Schema = GraphqlKit.Schema.Type,
  $SDDM = any,
  $TypeHooks = never,
> = $Schema extends GraphqlKit.Schema.Type ? ParserContext.WithSchema<$Schema, $SDDM, $TypeHooks>
  : ParserContext.SchemaLess

export namespace ParserContext {
  /**
   * Cheap constraint for parser context.
   * Avoids expensive type comparisons during constraint checks on large schemas.
   *
   * Use this in type parameter constraints to keep type-checking fast.
   *
   * @example
   * ```typescript
   * // ❌ Slow - forces expensive type comparison on every constraint check
   * export type Parse<$Input, $Context extends ParserContext<any, any, any>>
   *
   * // ✅ Fast - resolves conditional type once
   * export type Parse<$Input, $Context extends ParserContext.Cheap>
   * ```
   */
  export type Cheap = ParserContext<any, any, any>

  /**
   * Context when schema is provided - full type information available.
   */
  export interface WithSchema<
    $Schema extends GraphqlKit.Schema.Type,
    $SDDM,
    $TypeHooks,
  > {
    /** The GraphQL schema providing type definitions */
    readonly schema: $Schema
    /** Schema-Driven Data Map for runtime custom scalar encoding */
    readonly sddm: $SDDM
    /** Registry of scalar types from the schema */
    readonly scalars: $Schema['scalarRegistry']
    /** Union of extension result data types preserved during simplification */
    readonly typeHookRequestResultDataTypes: $TypeHooks
  }

  /**
   * Context when schema is not provided - types default to unknown.
   */
  export interface SchemaLess {
    /** No schema available in schema-less mode */
    readonly schema: undefined
    /** No SDDM available in schema-less mode */
    readonly sddm: undefined
    /** Empty scalars registry in schema-less mode */
    readonly scalars: {}
    /** No type hooks in schema-less mode */
    readonly typeHookRequestResultDataTypes: never
  }
}
