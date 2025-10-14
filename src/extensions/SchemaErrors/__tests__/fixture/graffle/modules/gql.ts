import * as $$StringIntrospection from './string-introspection.js'

import { createGql } from '#graffle/extensions/document-builder'
import type * as $$ArgumentsMap from './arguments-map.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type { Schema } from './schema/$.js'
import type * as $$SelectionSets from './selection-sets/$.js'
import type * as $$Tada from './string-introspection.js'

/**
 * Unified `gql` function that accepts either:
 * - A template string for GraphQL syntax with full type inference
 * - A document object for document builder
 *
 * @example GraphQL string syntax
 * ```ts
 * const doc = gql(`query { user { id } }`)
 * // Returns: TypedFullDocument.SingleOperation<{ user: { id: string } }, {}>
 * ```
 *
 * @example Document object syntax
 * ```ts
 * const doc = gql({
 *   query: {
 *     getUser: { user: { id: true, name: true } }
 *   }
 * })
 * // Returns: TypedFullDocument.SingleOperation with operation metadata
 * ```
 */
export const gql = createGql<
  Schema,
  $$SelectionSets.$Document,
  $$ArgumentsMap.ArgumentsMap
>({
  // TODO: sddm runtime value should be a subtype of ArgumentsMap type
  // Currently need 'as any' cast, but types should align properly
  sddm: sddm as any,
})
