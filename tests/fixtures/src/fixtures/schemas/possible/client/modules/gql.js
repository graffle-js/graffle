import { createGql } from '#graffle/extensions/document-builder';
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js';
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
export const gql = createGql({
    // TODO: sddm runtime value should be a subtype of ArgumentsMap type
    // Currently need 'as any' cast, but types should align properly
    sddm: sddm,
});
//# sourceMappingURL=gql.js.map