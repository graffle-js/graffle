/**
 * GraphQL document types representing parsed documents with type information.
 */

import type { Operation } from './operation.js'

// Re-export operation types for convenience
export type { Operation, OperationName, OperationResult, OperationVariables } from './operation.js'

// ================================
// Untyped Document (Plain Strings)
// ================================

/**
 * Represents a plain GraphQL string with no type information.
 *
 * Used when passing raw GraphQL strings to `client.gql()`.
 * Provides fallback signatures that accept any operation name and variables.
 *
 * @example
 * ```ts
 * // Plain string - gets UntypedDocument
 * client.gql('query { id }').$send('anyName', { any: 'vars' })
 * ```
 */
export type UntypedDocument = string

// ================================
// Typed Documents
// ================================

/**
 * A typed GraphQL document containing one or more operations.
 *
 * Operations are stored as a union type for improved TypeScript performance.
 * Named operation methods and `$send` method are derived from this union.
 *
 * @example Single operation
 * ```ts
 * const doc: Document<Operation<'GetUser', { id: string }, { id: string }>> = ...
 * client.gql(doc).GetUser({ id: '123' })
 * client.gql(doc).$send()
 * ```
 *
 * @example Multiple operations
 * ```ts
 * const doc: Document<
 *   | Operation<'GetUser', User, { id: string }>
 *   | Operation<'ListUsers', User[], {}>
 * > = ...
 * client.gql(doc).GetUser({ id: '123' })
 * client.gql(doc).$send('ListUsers')
 * ```
 */
export type Document<$Operations extends Operation> = string & {
  readonly operations: $Operations
}

// ================================
// Union Type
// ================================

/**
 * Union of all TypedFullDocument variants.
 *
 * Plain GraphQL strings (no type info) are also accepted downstream and handled via
 * conditional checks for `operations` property.
 */
export type TypedFullDocument = Document<Operation>

// ================================
// Type Transformers
// ================================

/**
 * Check if a document is untyped (plain string).
 */
export type IsUntyped<$Doc> = $Doc extends UntypedDocument ? true : false

/**
 * Helper to detect if a type is a union.
 * Returns true if $T is a union type, false otherwise.
 */
type IsUnion<$T, $U = $T> = $T extends $U ? [$U] extends [$T] ? false
  : true
  : false

/**
 * Check if a document contains a single operation.
 */
export type IsSingleOperation<$Doc> = $Doc extends Document<infer $Operations>
  ? IsUnion<$Operations> extends false ? true
  : false
  : false

/**
 * Check if a document contains multiple operations.
 */
export type IsMultiOperation<$Doc> = $Doc extends Document<infer $Operations> ? IsUnion<$Operations> extends true ? true
  : false
  : false
