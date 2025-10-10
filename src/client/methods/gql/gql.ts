import type { Grafaid } from '#lib/grafaid'
import type { DocumentSender } from './DocumentSender.js'

/**
 * Validates that documents requiring SDDM are only used with SDDM-enabled contexts.
 *
 * This is a compile-time check that prevents documents generated with SDDM
 * (Schema-Driven Data Map) from being executed by clients without SDDM support.
 * SDDM documents contain type metadata and custom scalar information that require
 * the full schema to be available for proper encoding/decoding.
 *
 * Note: Documents with RequiresSDDM=false can be used with any client.
 * Documents with RequiresSDDM=true require clients configured with schema.map.
 */
// dprint-ignore
type HasSDDM<$Context> =
  $Context extends { configuration: { schema: { current: { map: infer $Map } } } }
    ? $Map extends undefined ? false : true
    : false

// dprint-ignore
type ValidateSDDMRequirement<$Document extends Grafaid.Document.Typed.TypedDocumentLike, $Context> =
  Grafaid.Document.Typed.RequiresSDDMOf<$Document> extends true
    ? HasSDDM<$Context> extends true
      ? $Document
      : `❌ This document requires SDDM. Configure client with schema.map`
    : $Document

// dprint-ignore
/**
 * Execute a GraphQL document using GraphQL syntax.
 *
 * Accepts typed GraphQL documents (from gql-tada, codegen, or static builders) and returns
 * a {@link DocumentSender} with operation methods.
 *
 * The builder provides operation methods (one per operation in the document) that can be called
 * directly, or you can use the `.$send()` method to execute an operation by name.
 *
 * @example
 * ```ts
 * // GraphQL document string (with gql-tada type inference)
 * const builder = graffle.gql('{ pokemons { name } }')
 * const data = await builder.myQuery()
 * ```
 *
 * @example
 * ```ts
 * // Using .$send()
 * const data = await graffle.gql({ pokemons { name } }).$send('myQuery', { id: '123' })
 * ```
 */
export interface GqlMethod<$Context> {
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(
    document: ValidateSDDMRequirement<$Document, $Context>
  ): DocumentSender<$Document, $Context>
}

export namespace GqlMethod {
  /**
   * Arguments accepted by the instance gql method.
   *
   * Only accepts TypedDocumentLike (no document builder objects at instance level).
   */
  export type Arguments = [document: Grafaid.Document.Typed.TypedDocumentLike]

  export const normalizeArguments = (args: Arguments) => {
    return {
      document: args[0],
    }
  }
}

// Helper type to extract return type of calling a function with specific arguments
type CallFunction<F, Args extends readonly unknown[]> = F extends (...args: Args) => infer R ? R : never

// dprint-ignore
/**
 * Adapter interface for gql-tada integration.
 *
 * Maps gql-tada's type-level GraphQL string parsing to Graffle's DocumentSender.
 * This enables full type inference from GraphQL strings while maintaining Graffle's API.
 *
 * Extends the base GqlMethod interface to add gql-tada string inference while preserving
 * support for typed documents and template literals.
 *
 * @remarks
 * Uses gql-tada's initGraphQLTada type to parse GraphQL strings at the type level,
 * extracting Result and Variables types. Returns DocumentSender for runtime execution.
 *
 * Type-only imports ensure zero runtime overhead.
 */
export interface GqlMethodWithTada<$Context, $TadaAPI> extends GqlMethod<$Context> {
  <const $Query extends string>(
    query: $Query
  ): CallFunction<$TadaAPI, [$Query]> extends infer $Doc
      ? $Doc extends Grafaid.Document.Typed.TypedDocumentLike
        ? DocumentSender<$Doc, $Context>
        : DocumentSender<Grafaid.Document.Typed.TypedDocumentLike & $Doc, $Context>
      : DocumentSender<Grafaid.Document.Typed.TypedDocumentLike, $Context>
}
