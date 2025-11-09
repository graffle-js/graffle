import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'

/**
 * Runtime configuration for object-to-GraphQL document conversion.
 *
 * ⚠️ **DISTINCT from {@link Core.ParserContext}:**
 * - **Core.ParserContext**: Type-level phantom type with required fields (used for compile-time inference in `Docpar.Parse<>`)
 * - **ObjectParserContext**: Runtime configuration object with optional fields (used for runtime behavior in `toGraphQLDocument()`)
 *
 * **Fields actually used at runtime:**
 * - `sddm` - Schema-driven data map for custom scalar encoding
 * - `scalars` - Scalar type mappings
 * - `hoistArguments` - Whether to extract arguments to GraphQL variables
 *
 * **Phantom fields (for type compatibility only):**
 * - `schema` - Never accessed at runtime (type inference is compile-time)
 * - `typeHookRequestResultDataTypes` - Never accessed at runtime
 *
 * The optional nature of fields reflects runtime needs: if `sddm` or `scalars` are undefined,
 * the converter falls back to default behavior. The phantom fields exist only for structural
 * compatibility with type-level contexts.
 *
 * @param $Schema - Schema type (for type compatibility, not used at runtime)
 * @param $SDDM - Schema-Driven Data Map for custom scalar encoding
 * @param $TypeHooks - Type hooks (for type compatibility, not used at runtime)
 *
 * @example Runtime configuration
 * ```typescript
 * const doc = gql({ query: { user: { id: true } } }, {
 *   hoistArguments: false,  // Runtime: control variable extraction
 *   scalars: myScalars,     // Runtime: custom scalar encoding
 * })
 * ```
 */
export type ObjectParserContext<
  $Schema = any,
  $SDDM = any,
  $TypeHooks = never,
> = {
  schema?: $Schema
  sddm?: $SDDM
  scalars?: GraphqlKit.Schema.Type.Scalars.ScalarMap
  typeHookRequestResultDataTypes?: $TypeHooks
  hoistArguments?: boolean | undefined
}

export namespace ObjectParserContext {
  /**
   * Cheap constraint for object parser context.
   * Avoids expensive type comparisons during constraint checks on large schemas.
   *
   * Use this in type parameter constraints to keep type-checking fast.
   */
  export type Cheap = {
    schema?: any
    sddm?: any
    scalars?: any
    typeHookRequestResultDataTypes?: any
    hoistArguments?: boolean | undefined
  }
}
