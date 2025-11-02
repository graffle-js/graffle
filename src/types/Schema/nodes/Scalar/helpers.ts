import { Obj, Ts } from '@wollybeard/kit'
import { Boolean, Float, ID, Int, String } from '../../standard/scalars/scalars.js'
import type { Scalar } from './_.js'
import { createCodec, type Mapper } from './codec.js'

/**
 * Scalar representing an unknown custom scalar type without a codec definition.
 *
 * When a GraphQL schema contains a custom scalar (e.g., `Date`, `DateTime`, `JSON`)
 * but no codec is provided in the scalar registry, this scalar is used as a fallback.
 *
 * The decoded type is `unknown`, forcing users to either:
 * 1. Define a proper codec for the custom scalar, or
 * 2. Explicitly handle the unknown type at runtime
 *
 * This aligns with gql-tada's behavior and provides better type safety than
 * the previous fallback to `string`.
 */
export const UnknownScalar: Scalar<string, unknown, any> = {
  kind: 'Scalar',
  name: '__unknown__',
  codec: createCodec({
    encode: (value: unknown) => value as any,
    decode: (value: any) => value as unknown,
  }),
}

// dprint-ignore
export type GetEncoded<$Scalar extends Scalar> =
  $Scalar extends Scalar<infer _, infer __, infer $Encoded>
    ? $Encoded
    : never

// dprint-ignore
export type GetDecoded<$Scalar extends Scalar> =
  $Scalar extends Scalar<infer _, infer $Decoded, infer __>
    ? $Decoded
    : never

/**
 * Extract decoded types from a scalar map for type-safe GraphQL operations.
 *
 * Transforms `{ DateTime: Scalar<'DateTime', Date, string> }` into `{ DateTime: Date }`.
 */
// dprint-ignore
export type GetDecodedMap<$Map extends ScalarMap> = {
  [k in keyof $Map]: GetDecoded<$Map[k]>
}

export interface Registry<
  $Map extends ScalarMap = ScalarMap,
  $TypesEncoded = any,
  $TypesDecoded = any,
> {
  map: $Map
  typesEncoded: $TypesEncoded
  typesDecoded: $TypesDecoded
}

export interface RegistryEmpty {
  map: Obj.EmptyObject
  // Superficially "never" sounds right
  // But then it cannot be a sub-type of the generic Registry
  // TODO: could we use `unknown` instead?
  typesEncoded: any
  typesDecoded: any
}

export namespace Registry {
  export type Empty = RegistryEmpty

  export const empty = {
    map: Obj.emptyObject,
  } as RegistryEmpty

  export type AddScalar<$Registry extends Registry, $Scalar extends Scalar> = {
    map: $Registry['map'] & { [_ in $Scalar['name']]: $Scalar }
    typesEncoded: Ts.AnyAndUnknownToNever<$Registry['typesEncoded']> | GetEncoded<$Scalar>
    typesDecoded: Ts.AnyAndUnknownToNever<$Registry['typesDecoded']> | GetDecoded<$Scalar>
  }
}

export type ScalarMap = Record<string, Scalar>

// dprint-ignore
export type LookupCustomScalarOrFallbackToUnknown<$Name extends string, $Scalars extends Registry> =
  $Name extends keyof $Scalars['map']  ? $Scalars['map'][$Name]
  : $Name extends 'String'              ? typeof String
  : $Name extends 'Int'                 ? typeof Int
  : $Name extends 'Float'               ? typeof Float
  : $Name extends 'Boolean'             ? typeof Boolean
  : $Name extends 'ID'                  ? typeof ID
  :                                       typeof UnknownScalar

export const lookupCustomScalarOrFallbackToUnknown = (scalars: ScalarMap, name: string): Scalar => {
  const scalar = scalars[name]
  if (scalar) return scalar

  // Handle standard GraphQL scalars
  switch (name) {
    case 'String':
      return String
    case 'Int':
      return Int
    case 'Float':
      return Float
    case 'Boolean':
      return Boolean
    case 'ID':
      return ID
    default:
      return UnknownScalar
  }
}

/**
 * Apply a codec's mapper function (decode or encode) to a GraphQL value.
 *
 * If value is an array then its members are traversed recursively.
 *
 * Null values are returned as is.
 */
export const applyCodec = <$Mapper extends Mapper>(
  mapper: $Mapper,
  value: any,
): null | ReturnType<$Mapper> | ReturnType<$Mapper>[] => {
  if (value === null) {
    return null
  }

  if (Array.isArray(value)) {
    return value.map(item => applyCodec(mapper, item)) as ReturnType<$Mapper>
  }

  return mapper(value) as ReturnType<$Mapper>
}

export const isScalar = (value: unknown): value is Scalar =>
  typeof value === `object` && value !== null && `codec` in value && typeof value.codec === `object`
