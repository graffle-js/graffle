/**
 * Schema type definitions for string2 parser.
 *
 * Re-exports Graffle's existing schema types.
 */

import type { Schema } from '#src/types/Schema/_.js'

export type { Schema } from '#src/types/Schema/_.js'
export type { Enum } from '#src/types/Schema/nodes/Enum.js'
export type { Interface } from '#src/types/Schema/nodes/Interface.js'
export type { OutputField } from '#src/types/Schema/nodes/OutputField.js'
export type { OutputObject } from '#src/types/Schema/nodes/OutputObject.js'
export type { Scalar } from '#src/types/Schema/nodes/Scalar/Scalar.js'
export type { Union } from '#src/types/Schema/nodes/Union.js'

/**
 * Abstract setup schema - what users provide to configure the parser.
 * Flexible to accept both old (introspection) and new (schema) formats during transition.
 */
export interface AbstractSetupSchema {
  schema?: Schema // New format
  introspection?: any // Old format (for compatibility)
  scalars?: Record<string, any>
}

/**
 * Transform setup into usable schema.
 * For Graffle, this is mostly a passthrough since schema is already in the right format.
 * During transition, handles both `schema` and `introspection` formats.
 */
export type SchemaOfSetup<$Setup extends AbstractSetupSchema> = $Setup['schema'] extends Schema ? $Setup['schema']
  : $Setup['introspection'] // Fallback to introspection during transition
