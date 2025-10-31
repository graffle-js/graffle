/**
 * GraphQL-level global type registry for schema types.
 *
 * This allows generated code and extensions to register schema types globally,
 * making them available for type-level lookups without explicit imports.
 */

declare global {
  export namespace GraphQLGlobal {
    /**
     * Registry of schema types keyed by schema name.
     *
     * Generated code augments this interface to register schemas:
     *
     * @example
     * ```typescript
     * declare global {
     *   namespace GraphQLGlobal {
     *     interface Schemas {
     *       pokemon: PokemonSchema
     *     }
     *   }
     * }
     * ```
     */
    interface Schemas {}
  }
}

/**
 * Union of all registered schema names.
 * Defaults to `string` if no schemas are registered.
 */
export type RegisteredSchemaNames =
  keyof GraphQLGlobal.Schemas extends never
    ? string
    : keyof GraphQLGlobal.Schemas

/**
 * Generic extension type for schema extensibility.
 * Extensions can add custom type information to schemas via this structure.
 */
export type TypeExtensions = Record<string, Record<string, unknown>>
