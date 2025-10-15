import type { IsUnion } from '#src/lib/prelude.js'
import type { Core } from '../core/$.js'

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
