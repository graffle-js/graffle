import { createGql } from '#graffle/extensions/document-builder'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type * as $$SchemaMap from './schema-driven-data-map.js'
import type { Schema } from './schema/$.js'
import type * as $$SelectionSets from './selection-sets/$.js'

/**
 * Unified `gql` function that accepts either:
 * - A template string for GraphQL syntax with full type inference
 * - A document object for document builder
 *
 * @example GraphQL string syntax
 * ```ts
 * const doc = gql(`query { user { id } }`)
 * // Returns: GraphqlKit.Document.TypedFull.SingleOperation<{ user: { id: string } }, {}>
 * ```
 *
 * @example Document object syntax
 * ```ts
 * const doc = gql({
 *   query: {
 *     getUser: { user: { id: true, name: true } }
 *   }
 * })
 * // Returns: GraphqlKit.Document.TypedFull.SingleOperation with operation metadata
 * ```
 */
export const gql = createGql<
  Schema,
  $$SelectionSets.$Document,
  $$SchemaMap.SchemaDrivenDataMap
>({
  sddm: sddm,
})
