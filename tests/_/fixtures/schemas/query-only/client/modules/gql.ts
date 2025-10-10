import * as $$Tada from './tada.js'

import { createGql } from '#graffle/extensions/document-builder'
import type * as $$ArgumentsMap from './arguments-map.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type { Schema } from './schema/$.js'
import type * as $$SelectionSets from './selection-sets.js'

/**
 * Unified `gql` function that accepts either:
 * - A template string for gql-tada (type-only, runtime uses graphql parse)
 * - A document object for document builder
 *
 * @example Template string (gql-tada)
 * ```ts
 * const doc = gql(`query { user { id } }`)
 * // Returns: TadaDocumentNode<{ user: { id: string } }, {}>
 * ```
 *
 * @example Document object (document builder)
 * ```ts
 * const doc = gql({
 *   query: {
 *     getUser: { user: { id: true, name: true } }
 *   }
 * })
 * // Returns: TypedFullDocumentString with operation metadata
 * ```
 */
export const gql = createGql<
  $$Tada.introspection,
  Schema,
  $$SelectionSets.$Document,
  $$ArgumentsMap.ArgumentsMap
>({
  // TODO: sddm runtime value should be a subtype of ArgumentsMap type
  // Currently need 'as any' cast, but types should align properly
  sddm: sddm as any,
})
