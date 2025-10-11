import type { Grafaid } from '#lib/grafaid'
import type { Context } from '#src/context/$.js'
import type { GraphQLTadaAPI, schemaOfSetup, TadaDocumentNode } from '#src/lib/gql-tada/index.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import type { ParseGraphQLObject, ParseGraphQLString } from '#src/static/gql.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import type { Schema } from '#src/types/Schema/$.js'
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

/**
 * Extract schema and arguments map from context for document object inference.
 */
// dprint-ignore
export type GetSchemaInfo<$Context> =
  $Context extends {
    configuration: {
      schema: {
        current: {
          name: infer $Name extends string
          map: infer $Map
        }
      }
    }
  }
    ? $Name extends keyof GraffleGlobal.Clients
      ? {
          schema: GraffleGlobal.Clients[$Name]['schema']
          map: $Map
        }
      : never
    : never

/**
 * Extract GraphQLTadaAPI type from context for LSP detection.
 *
 * This type provides the `scalar`, `persisted`, and `__name` properties that GraphQLSP LSP
 * looks for to identify gql-tada functions and determine which schema to use in multi-schema mode.
 */
// dprint-ignore
type TadaAPIFromContext<$Context> = GraphQLTadaAPI<
  schemaOfSetup<{
    introspection: GlobalRegistry.ForContext<$Context>['tadaIntrospection']
    scalars: {
      [k in keyof GlobalRegistry.ForContext<$Context>['schema']['scalarRegistry']['map']]:
        Schema.Scalar.GetDecoded<GlobalRegistry.ForContext<$Context>['schema']['scalarRegistry']['map'][k]>
    }
  }>,
  { isMaskingDisabled: false }
>

/**
 * Extract schema name from context for multi-schema LSP support.
 *
 * Falls back to `never` if no schema name is configured.
 */
// dprint-ignore
type SchemaNameFromContext<$Context> =
  $Context extends { configuration: { schema: { current: { name: infer $Name } } } }
    ? $Name
    : never

// dprint-ignore
/**
 * Execute a GraphQL document using GraphQL syntax or document builder.
 *
 * Accepts:
 * - Typed GraphQL documents (from gql-tada, codegen, or static builders)
 * - Inline document builder objects
 *
 * Returns a {@link DocumentSender} with operation methods.
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
 */
// dprint-ignore
export interface GqlMethod<$Context extends Context.Context> {
  // Overload
  // dprint-ignore
  <const $doc extends Grafaid.Document.Typed.String | string | DocumentNode | TypedFullDocument.TypedFullDocument>(
    document: $doc
  ):
  string extends $doc                                   ?
    $doc extends Grafaid.Document.Typed.String            ? DocumentSender<$doc, $Context> :
                                                            UntypedSender :
  $doc extends TypedFullDocument.TypedFullDocument      ? DocumentSender<$doc, $Context> :
  $doc extends TadaDocumentNode                         ? DocumentSender<$doc, $Context> :
  $doc extends string                                   ? DocumentSender<ParseGraphQLString<$Context, $doc>, $Context> :
  $doc extends Grafaid.Document.Typed.TypedDocumentLike ? DocumentSender<$doc, $Context> :
                                                          never

  // Overload: Inline document builder object (must be last as it's least specific)
  // @ts-expect-error
  <$Document extends GlobalRegistry.ForContext<$Context>['selectionSets']['$Document']>(
    document: $Document
  ): DocumentSender<ParseGraphQLObject<$Context, $Document>, $Context>

  /**
   * LSP detection property - identifies the schema name for multi-schema support.
   *
   * This property is used by GraphQLSP LSP in multi-schema mode to determine which
   * schema to use for validation and autocomplete. When multiple schemas are configured
   * in tsconfig.json, the LSP extracts this value to look up the appropriate schema.
   */
  readonly __name: SchemaNameFromContext<$Context>

  /**
   * LSP detection property - validates scalar/enum values against schema types.
   *
   * This property is required by GraphQLSP LSP to identify this as a gql-tada function.
   * The LSP checks for the existence of both `scalar` and `persisted` properties.
   */
  scalar: TadaAPIFromContext<$Context>['scalar']

  /**
   * LSP detection property - creates persisted document nodes.
   *
   * This property is required by GraphQLSP LSP to identify this as a gql-tada function.
   * The LSP checks for the existence of both `scalar` and `persisted` properties.
   */
  persisted: TadaAPIFromContext<$Context>['persisted']
}

export namespace GqlMethod {
  /**
   * Arguments accepted by the instance gql method.
   *
   * Can be either:
   * - TypedDocumentLike (gql-tada, TypedDocumentNode, etc.)
   * - Document builder object
   */
  export type Arguments =
    | [document: Grafaid.Document.Typed.TypedDocumentLike]
    | [documentObject: object]

  export const normalizeArguments = (args: Arguments) => {
    const first = args[0]

    // TypedDocumentLike documents are strings or have specific properties
    const isTypedDocumentLike = typeof first === 'string'
      || 'definitions' in first // DocumentNode
      || '__meta__' in first // TadaDocumentNode

    return {
      type: isTypedDocumentLike ? 'typedDocument' as const : 'object' as const,
      document: first,
    }
  }
}
