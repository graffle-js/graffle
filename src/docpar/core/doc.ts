/**
 * GraphQL document types representing parsed documents with type information.
 */

import type { Operation, Operations } from './operation.js'

// Re-export operation types for convenience
export type { Operation, OperationName, OperationResult, OperationVariables, Operations } from './operation.js'

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
export interface UntypedDocument extends String {
  readonly __operations: {} // Empty - no type information available
  readonly __untyped: true
}

// ================================
// Typed Documents
// ================================

/**
 * A typed GraphQL document with a single operation.
 *
 * The operation is accessible via both `__operations[name]` and `__operation` (shortcut).
 * Variable requirements determine which variant this resolves to.
 *
 * @example
 * ```ts
 * // From gql-tada or TypedDocumentNode
 * const doc: SingleOperation<{ result: { id: string }, variables: {} }> = ...
 * client.gql(doc).MyOperation() // or .$send()
 * ```
 */
export interface SingleOperation<$Operation extends Operation> extends String {
  readonly __operations: Record<$Operation['name'] & string, $Operation>
  readonly __operation: $Operation // Shortcut to access the single operation
  readonly __operationCount: 'single'
}

/**
 * A typed GraphQL document with multiple operations.
 *
 * Each operation must be executed by name using `.$send('operationName', variables)`.
 * Operation methods are also available via Proxy.
 *
 * @example
 * ```ts
 * const doc: MultiOperation<{
 *   GetUser: { result: User, variables: { id: string } },
 *   ListUsers: { result: User[], variables: {} }
 * }> = ...
 *
 * client.gql(doc).GetUser({ id: '123' })
 * client.gql(doc).$send('ListUsers')
 * ```
 */
export interface MultiOperation<$Operations extends Operations> extends String {
  readonly __operations: $Operations
  readonly __operation: never // Multi-operation docs don't have a single operation
  readonly __operationCount: 'multi'
}

// ================================
// Union Type
// ================================

/**
 * Union of all TypedFullDocument variants.
 *
 * Plain GraphQL strings (no type info) are also accepted downstream and handled via
 * conditional checks for `__operations` property.
 *
 * - {@link SingleOperation} - Typed documents with one operation
 * - {@link MultiOperation} - Typed documents with multiple operations
 */
export type TypedFullDocument =
  | SingleOperation<Operation>
  | MultiOperation<Operations>

// ================================
// Type Inference Helpers
// ================================

/**
 * Convert a union type to an intersection type.
 * Used internally for union detection.
 */
type UnionToIntersection<$Union> = ($Union extends any ? (x: $Union) => void : never) extends
  (x: infer $Intersection) => void ? $Intersection
  : never

/**
 * Check if a type is a union (has multiple members).
 * Returns true if the type is a union, false otherwise.
 *
 * Uses UnionToIntersection: if a type equals its intersection form, it's not a union.
 * Wrapped in tuples to prevent distribution.
 */
// dprint-ignore
type IsUnion<$Type> =
  [$Type] extends [never]
    ? false
    : [$Type] extends [UnionToIntersection<$Type>]
      ? false
      : true

/**
 * Infer the correct TypedFullDocument variant from an operations object.
 *
 * - Parser error (has `__typename: 'ParserError'`) → Preserve the error type
 * - Empty object `{}` → {@link UntypedDocument}
 * - Single operation → {@link SingleOperation}
 * - Multiple operations → {@link MultiOperation}
 */
// dprint-ignore
export type FromObject<$Operations extends object> =
  $Operations extends { __typename: 'ParserError' }
    ? $Operations  // Preserve parser error types
    : keyof $Operations extends never
      ? UntypedDocument
      : IsUnion<keyof $Operations> extends infer $IsUnionResult
        ? $IsUnionResult extends true
          ? $Operations extends Operations
            ? MultiOperation<$Operations>
            : never
          : $IsUnionResult extends false
            ? $Operations[keyof $Operations] extends Operation
              ? SingleOperation<$Operations[keyof $Operations]>
              : never
            : never
        : never

/**
 * Check if a document is untyped (plain string).
 */
export type IsUntyped<$Doc> = $Doc extends UntypedDocument ? true : false

/**
 * Check if a document is a single operation.
 */
export type IsSingleOperation<$Doc> = $Doc extends SingleOperation<any> ? true : false

/**
 * Check if a document is multi-operation.
 */
export type IsMultiOperation<$Doc> = $Doc extends MultiOperation<any> ? true : false
