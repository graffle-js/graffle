import type { Grafaid } from '#lib/grafaid'
import type { TypeFunction } from '#lib/type-function'
import type { Context } from '#src/context/$.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import type { InferOperations } from '#src/static/gql.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { Simplify } from 'type-fest'
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
  // Overload 1: Inline document builder object (must come first to match before TypedDocumentLike)
  // @ts-expect-error
  <$Document extends GlobalRegistry.ForContext<$Context>['selectionSets']['$Document']>(
    document: $Document
  ): DocumentSender<
    TypedFullDocument.FromObject<
      InferOperations<
        $Document,
        GlobalRegistry.ForContext<$Context>['schema'],
        // @ts-expect-error
        GlobalRegistry.ForContext<$Context>['argumentsMap'],
            {
              typeHookRequestResultDataTypes: $Context extends { typeHookRequestResultDataTypes: infer $Types }
                ? $Types
                : never
          scalars: $Context extends { scalars: { current: { registry: infer $Registry } } }
            ? $Registry
            : never
        }
      >
    >,
    $Context
  >

  // Overload 2: TypedDocumentLike (gql-tada, TypedDocumentNode, etc.)
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(
    document: ValidateSDDMRequirement<$Document, $Context>
  ): DocumentSender<$Document, $Context>
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
export interface GqlMethodWithTada<$Context extends Context.Context, $TadaAPI> extends GqlMethod<$Context> {
  // Inline gql-tada strings
  <const $Query extends string>(
    query: $Query
  ): CallFunction<$TadaAPI, [$Query]> extends infer $Doc
      ? $Doc extends Grafaid.Document.Typed.TypedDocumentLike
        ? DocumentSender<$Doc, $Context>
        : DocumentSender<Grafaid.Document.Typed.TypedDocumentLike & $Doc, $Context>
      : DocumentSender<Grafaid.Document.Typed.TypedDocumentLike, $Context>

  // Inline document builder objects (inherited from GqlMethod but must be explicit for overload resolution)
  <const $Document extends object>(
    documentObject: $Document extends Grafaid.Document.Typed.TypedDocumentLike ? never : $Document
  ): GetSchemaInfo<$Context> extends { schema: infer $Schema extends Schema; map: infer $Map extends SchemaDrivenDataMap }
    ? DocumentSender<
        TypedFullDocument.FromObject<
            InferOperations<
              $Document,
              $Schema,
              $Map,
              {
                typeHookRequestResultDataTypes: $Context extends { typeHookRequestResultDataTypes: infer $Types }
                  ? $Types
                  : never
                scalars: $Context extends { scalars: { current: { registry: infer $Registry } } }
                  ? $Registry
                  : never
              }
          >
        >,
        $Context
      >
    : never
}
