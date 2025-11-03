import { Codec } from '#src/types/Codec/_.js'
import { Obj, Ts } from '@wollybeard/kit'
import type { Scalar } from '../nodes/Scalar/_.js'

export type ScalarMap = Record<string, Scalar>

/**
 * Extract decoded types from a scalar map for type-safe GraphQL operations.
 *
 * Transforms `{ DateTime: Scalar<'DateTime', Date, string> }` into `{ DateTime: Date }`.
 */
// dprint-ignore
export type GetDecodedMap<$Map extends ScalarMap> = {
  [k in keyof $Map]: Codec.GetDecoded<$Map[k]['codec']>
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
    typesEncoded: Ts.AnyAndUnknownToNever<$Registry['typesEncoded']> | Codec.GetEncoded<$Scalar['codec']>
    typesDecoded: Ts.AnyAndUnknownToNever<$Registry['typesDecoded']> | Codec.GetDecoded<$Scalar['codec']>
  }
}
