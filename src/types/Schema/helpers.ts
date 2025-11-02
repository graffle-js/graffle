import type { Schema } from './_.js'
import type { __typename } from './nodes/__typename.js'
import type { List } from './nodes/List.js'
import type { Nullable } from './nodes/Nullable.js'
// import type { NamedTypes } from './typeGroups.js'

/**
 * Unwrap a type to get its named type, ditching inline types like List and Nullable.
 */
// todo extends any because of infinite depth issue in generated schema types
// dprint-ignore
export type GetNamedType<$Type> =
      $Type extends List<infer $innerType>      ? GetNamedType<$innerType> :
      $Type extends Nullable<infer $innerType>  ? GetNamedType<$innerType> :
      $Type extends __typename                  ? $Type :
      $Type

/**
 * Define a schema type
 */
export type Define<$Type extends Partial<Schema>> = $Type & Schema
