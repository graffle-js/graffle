import type { Ts } from '@wollybeard/kit'
import type { Core } from '../core/$.js'

// ================================
// Type Inference Helpers
// ================================

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
    : [$Type] extends [Ts.Union.ToIntersection<$Type>]
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
  $Operations extends Core.ParserError
    ? $Operations  // Preserve parser error types
    : keyof $Operations extends never
      ? Core.UntypedDocument
      : IsUnion<keyof $Operations> extends infer $IsUnionResult
        ? $IsUnionResult extends true
          ? $Operations extends Core.Operations
            ? Core.MultiOperation<$Operations>
            : never
          : $IsUnionResult extends false
            ? $Operations[keyof $Operations] extends Core.Operation
              ? Core.SingleOperation<$Operations[keyof $Operations]>
              : never
            : never
        : never
