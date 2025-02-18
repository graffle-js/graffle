// import type { TSErrorDescriptive } from '../../lib/ts-error.js'
import type { Schema } from './__.js'
import type { __typename } from './nodes/__typename.js'
import type { List } from './nodes/List.js'
import type { Nullable } from './nodes/Nullable.js'
// import type { NamedTypes } from './typeGroups.js'

// todo extends any because of infinite depth issue in generated schema types
// dprint-ignore
export type GetNamedType<$Type> =
      $Type extends List<infer $innerType>      ? GetNamedType<$innerType> :
      $Type extends Nullable<infer $innerType>  ? GetNamedType<$innerType> :
      $Type extends __typename                  ? $Type :
      $Type
// $Type extends NamedTypes                  ? $Type :
//   TSErrorDescriptive<'Unwrap', 'Unknown $Type', { $Type: $Type }>

export type Define<$Type extends Partial<Schema>> = $Type & Schema
