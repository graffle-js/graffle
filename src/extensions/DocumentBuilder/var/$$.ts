export * from './extract.js'
export * from './infer.js'
export { type InferVariables as Infer } from './infer.js'
export * from './var.js'
export { $ } from './var.js'

import type { Builder } from './var.js'

/**
 * Utility type that wraps a type to allow variable markers.
 *
 * @remarks
 * Used in generated selection set types to allow both literal values and variable builders
 * without complex conditional types.
 *
 * @example
 * ```typescript
 * // In generated code:
 * date?: Var.Maybe<Date | null | undefined>
 * // Expands to: Date | null | undefined | Builder<Date | null | undefined>
 * ```
 */
export type Maybe<$Type> = $Type | Builder<$Type>
