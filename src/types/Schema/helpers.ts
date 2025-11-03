import type { Schema } from './_.js'
import * as Nodes from './nodes/__.js'
import type { List } from './nodes/List.js'
import type { Nullable } from './nodes/Nullable.js'
import * as Standard from './standard/scalars/scalars.js'

/**
 * Unwrap a type to get its named type, ditching inline types like List and Nullable.
 */
// todo extends any because of infinite depth issue in generated schema types
// dprint-ignore
export type GetNamedType<$Type> =
      $Type extends List<infer $innerType>      ? GetNamedType<$innerType> :
      $Type extends Nullable<infer $innerType>  ? GetNamedType<$innerType> :
      $Type extends Nodes.__typename                  ? $Type :
      $Type

/**
 * Define a schema type
 */
export type Define<$Type extends Partial<Schema>> = $Type & Schema

/**
 * Type-level lookup of a scalar by name from registry, with fallback to standard scalars or unknown.
 *
 * Resolves scalar types in this priority:
 * 1. Custom scalars from the provided registry
 * 2. Standard GraphQL scalars (String, Int, Float, Boolean, ID)
 * 3. UnknownScalar for unrecognized names
 *
 * @see {@link lookupCustomScalarOrFallbackToUnknown} Runtime version
 */
// dprint-ignore
export type LookupCustomScalarOrFallbackToUnknown<$Name extends string, $Scalars extends Nodes.Scalar.Registry> =
  $Name extends keyof $Scalars['map']  ? $Scalars['map'][$Name]
  : $Name extends 'String'              ? typeof Standard.String
  : $Name extends 'Int'                 ? typeof Standard.Int
  : $Name extends 'Float'               ? typeof Standard.Float
  : $Name extends 'Boolean'             ? typeof Standard.Boolean
  : $Name extends 'ID'                  ? typeof Standard.ID
  :                                       typeof Nodes.Scalar.UnknownScalar

/**
 * Runtime lookup of a scalar by name from registry, with fallback to standard scalars or unknown.
 *
 * Resolves scalars in this priority:
 * 1. Custom scalars from the provided registry map
 * 2. Standard GraphQL scalars (String, Int, Float, Boolean, ID)
 * 3. UnknownScalar for unrecognized scalar names
 *
 * @param scalars - Map of custom scalar codecs
 * @param name - Scalar type name to look up
 * @returns The matching scalar or UnknownScalar
 *
 * @see {@link LookupCustomScalarOrFallbackToUnknown} Type-level version
 */
export const lookupCustomScalarOrFallbackToUnknown = (scalars: Nodes.Scalar.ScalarMap, name: string): Nodes.Scalar => {
  const scalar = scalars[name]
  if (scalar) return scalar

  // Handle standard GraphQL scalars
  switch (name) {
    case 'String':
      return Standard.String
    case 'Int':
      return Standard.Int
    case 'Float':
      return Standard.Float
    case 'Boolean':
      return Standard.Boolean
    case 'ID':
      return Standard.ID
    default:
      return Nodes.Scalar.UnknownScalar
  }
}
