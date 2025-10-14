/**
 * Type traversal utilities for Graffle schema format.
 *
 * These utilities decode inlineType format and extract TypeScript types.
 */

import type { OutputField, OutputObject, Schema } from './schema.js'
import type { Scalar } from '#src/types/Schema/nodes/Scalar/Scalar.js'
import type { GetDecoded } from '#src/types/Schema/nodes/Scalar/helpers.js'

/**
 * Decode inlineType array into TypeScript type.
 *
 * inlineType encoding:
 * - [0] = nullable
 * - [1] = non-null
 * - [0, [1]] = nullable list of non-null items
 * - [1, [1]] = non-null list of non-null items
 * - etc.
 */
export type DecodeInlineType<$InlineType, $NamedType, $Schema extends Schema> =
  $InlineType extends [infer $First, ...infer $Rest]
    ? $First extends 0
      // Nullable wrapper
      ? $Rest extends [infer $Inner]
        ? DecodeInlineType<$Inner, $NamedType, $Schema> | null
        : ResolveNamedType<$NamedType, $Schema> | null  // Terminal: nullable named type
      : $First extends 1
        // NonNull wrapper
        ? $Rest extends [infer $Inner]
          ? NonNullable<DecodeInlineType<$Inner, $NamedType, $Schema>>
          : ResolveNamedType<$NamedType, $Schema>  // Terminal: NonNull<NamedType>
        : never
    : ResolveNamedType<$NamedType, $Schema> | null  // Empty or invalid = nullable named type

/**
 * Get the output type for a field, resolving inlineType and applying nullability/list wrappers.
 */
export type GetFieldOutputType<$Field extends OutputField, $Schema extends Schema> =
  DecodeInlineType<$Field['inlineType'], $Field['namedType'], $Schema>

/**
 * Apply inlineType wrappers to an already-resolved type (for nested selections).
 * This is used when we've already parsed a nested selection and need to apply nullable/list wrappers.
 */
export type ApplyInlineType<$InlineType, $ResolvedType> =
  $InlineType extends [infer $First, ...infer $Rest]
    ? $First extends 0
      // Nullable wrapper
      ? $Rest extends [infer $Inner]
        ? ApplyInlineType<$Inner, $ResolvedType> | null
        : $ResolvedType | null  // Terminal: nullable
      : $First extends 1
        // NonNull wrapper
        ? $Rest extends [infer $Inner]
          ? NonNullable<ApplyInlineType<$Inner, $ResolvedType>>
          : $ResolvedType  // Terminal: NonNull
        : never
    : $ResolvedType | null  // Empty or invalid = nullable

/**
 * Resolve a named type to its TypeScript type.
 * Scalars are decoded using GetDecoded, objects require nested selection.
 */
type ResolveNamedType<$Type, $Schema extends Schema> =
  $Type extends Scalar
    ? GetDecoded<$Type>
  : $Type extends OutputObject
    ? $Type  // Objects need nested selection - return the type itself
  : $Type extends { kind: 'Interface' }
    ? $Type  // Interfaces need nested selection
  : $Type extends { kind: 'Union' }
    ? $Type  // Unions need nested selection
  : $Type extends { kind: 'Enum'; membersUnion: infer $Union }
    ? $Union
  : unknown
