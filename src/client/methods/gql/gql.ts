import type { Context } from '#src/context/_.js'
import type { Configuration } from '#src/context/fragments/configuration/_.js'
import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { ParseGraphQLObject, ParseGraphQLString } from '#src/static/gql.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'

import type { DocumentNode } from '@0no-co/graphql.web'
import type { DocumentSender, UntypedSender } from './DocumentSender.js'

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
type ValidateSDDMRequirement<$Document extends GraphqlKit.Document.Typed.TypedDocumentLike, $Context> =
  GraphqlKit.Document.Typed.RequiresSDDMOf<$Document> extends true
    ? Configuration.Schema.HasMap<$Context> extends true
      ? $Document
      : `Error: This document requires SDDM but your client configuration lacks it.`
    : $Document

/**
 * Extract schema and arguments map from context for document object inference.
 *
 * @see {@link Configuration.Schema.Info}
 */
export type GetSchemaInfo<$Context> = Configuration.Schema.Info<$Context>

/**
 * Check if GlobalRegistry is configured for this context.
 */
// dprint-ignore
type HasGlobalRegistry<$Context> =
  GlobalRegistry.ForContext<$Context> extends never
    ? false
    : true

/**
 * Extract document object constraint from GlobalRegistry if available.
 */
// dprint-ignore
type DocumentObjectConstraint<$Context> =
  HasGlobalRegistry<$Context> extends true
    ? GlobalRegistry.ForContext<$Context> extends { selectionSets: { $Document: infer $Doc } }
      ? $Doc
      : never
    : never

// dprint-ignore
/**
 * Execute a GraphQL document using GraphQL syntax or document builder.
 *
 * Accepts:
 * - Typed GraphQL documents (from codegen or static builders)
 * - Inline document builder objects
 *
 * Returns a {@link DocumentSender} with operation methods.
 *
 * The builder provides operation methods (one per operation in the document) that can be called
 * directly, or you can use the `.$send()` method to execute an operation by name.
 *
 * Extends {@link GraphqlKit.LSP.GraphQLStringDocumentFnProperties} to provide LSP detection
 * properties (`__name`, `scalar`, `persisted`) that GraphQLSP uses to identify gql functions
 * and determine which schema to use for validation and autocomplete.
 *
 * @example
 * ```ts
 * // GraphQL document string (with type inference)
 * const builder = graffle.gql('{ pokemons { name } }')
 * const data = await builder.myQuery()
 * ```
 *
 * @example
 * ```ts
 * // Inline document object
 * const data = await graffle.gql({ query: { myQuery: { id: true } } }).$send()
 * ```
 *
 * @remarks
 * TODO: Currently relies on $Document's default $DefaultSelectionContext parameter.
 * This works for statically-defined scalars but may not support runtime-added scalars
 * via `.use({ scalars: ... })`. If dynamic scalar context becomes a requirement,
 * revisit with HKT approach:
 * - Create SelectionSets TypeFunction that accepts context parameter
 * - Use TypeFunction.Call to apply runtime context to SelectionSets
 * - Extract $Document from result with applied context
 *
 * @see https://github.com/0no-co/GraphQLSP/blob/main/packages/graphqlsp/src/ast/checks.ts#L100-L124
 */
// dprint-ignore
export interface GqlMethod<$Context extends Context.Context>
  extends GraphqlKit.LSP.GraphQLStringDocumentFnProperties<
    Configuration.Schema.Name<$Context>,
    any,
    any
  > {
  // Overload
  // dprint-ignore
  <const $doc extends GraphqlKit.Document.Typed.String | string | DocumentNode | GraphqlKit.Document.TypedFull.TypedFullDocument>(
    document: ValidateSDDMRequirement<$doc, $Context>
  ):
  string extends $doc                                   ?
    $doc extends GraphqlKit.Document.Typed.String            ? DocumentSender<$doc, $Context> :
                                                            UntypedSender<$Context> :
  $doc extends GraphqlKit.Document.TypedFull.TypedFullDocument      ? DocumentSender<$doc, $Context> :
  $doc extends string                                   ? HasGlobalRegistry<$Context> extends true
                                                            ? ParseGraphQLString<$Context, $doc> extends infer $Parsed
                                                              ? $Parsed extends { __typename: 'ParserError' }
                                                                ? $Parsed
                                                                : $Parsed extends GraphqlKit.Document.TypedFull.TypedFullDocument
                                                                  ? DocumentSender<$Parsed, $Context>
                                                                  : never
                                                              : never
                                                            : UntypedSender<$Context> :
  $doc extends GraphqlKit.Document.Typed.TypedDocumentLike ? DocumentSender<$doc, $Context> :
                                                          never

  // Overload: Inline document builder object (must be last as it's least specific)
  <$Document extends DocumentObjectConstraint<$Context>>(
    document: $Document
  ): ParseGraphQLObject<
      $Context,
      // @ts-expect-error
      $Document
    > extends infer $Parsed
    ? $Parsed extends { __typename: 'ParserError' }
      ? $Parsed
      : $Parsed extends GraphqlKit.Document.TypedFull.TypedFullDocument
        ? DocumentSender<$Parsed, $Context>
        : never
    : never
}

export namespace GqlMethod {
  /**
   * Arguments accepted by the instance gql method.
   *
   * Can be either:
   * - TypedDocumentLike (TypedDocumentNode, TypedDocumentString, etc.)
   * - Document builder object
   */
  export type Arguments =
    | [document: GraphqlKit.Document.Typed.TypedDocumentLike]
    | [documentObject: object]

  export type NormalizedArguments =
    | { type: 'typedDocument'; document: GraphqlKit.Document.Typed.TypedDocumentLike }
    | { type: 'object'; document: object }

  export const normalizeArguments = (args: Arguments): NormalizedArguments => {
    const first = args[0]

    // TypedDocumentLike documents are strings or have specific properties
    const isTypedDocumentLike = typeof first === 'string'
      || 'definitions' in first // DocumentNode
      || '__meta__' in first // TypedDocumentNode

    if (isTypedDocumentLike) {
      return {
        type: 'typedDocument',
        document: first as GraphqlKit.Document.Typed.TypedDocumentLike,
      }
    }

    return {
      type: 'object',
      document: first,
    }
  }
}
