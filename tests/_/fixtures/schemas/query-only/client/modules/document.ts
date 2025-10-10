import type { OperationMetadata, TypedDocument, TypedFullDocument } from '#graffle/client'
import { createStaticRootType } from '#graffle/extensions/document-builder'
import type * as $$StaticBuilder from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type * as SelectionSets from './selection-sets.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'

/**
 * Context for static document type inference.
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Configuration for static document builders.
 * Generated code always has SDDM enabled since the generator creates the schema-driven data map.
 */
type DocumentConfig = {
  schema: $$Schema.Schema
  sddmEnabled: true
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
// Note: This interface conforms to StaticDocumentBuilder<DocumentConfig, OperationTypeNode.QUERY>

export interface QueryBuilder {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.id` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.id()
   * ```
   */
  id: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { id: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.idNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = query.idNonNull()
   * ```
   */
  idNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { idNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY, { sddm }) as any
