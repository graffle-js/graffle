/**
 * Type transformer that converts an operations object into the appropriate TypedFullDocument variant.
 */

import type { Operation, Operations } from '../core/operation.js'
import type { MultiOperation, SingleOperation, UntypedDocument } from '../core/doc.js'

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

// ================================
// Main Transformer
// ================================

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
