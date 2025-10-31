import type * as $$ArgumentsMap from './arguments-map.js';
import type { Schema } from './schema/$.js';
import type * as $$SelectionSets from './selection-sets/$.js';
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
export declare const gql: import("../../../../../../../build/static/gql.js").gql<Schema<import("./scalar.js").$Registry>, $$SelectionSets.$Document<$$SelectionSets.$DefaultSelectionContext>, $$ArgumentsMap.ArgumentsMap>;
//# sourceMappingURL=gql.d.ts.map