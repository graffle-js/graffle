import type { Base } from '../../core/helpers.js'
import type { Any, Named } from '../typeGroups.js'
import type { List } from './List.js'

type InnerType = Named | List<any>

export type Nullable<$InnerType extends InnerType> = Base.Nullable<$InnerType>

// dprint-ignore
type UnwrapNullable<$Type> =
    $Type extends Nullable<infer $innerType>  ? UnwrapNullable<$innerType>
                                              : $Type

export const unwrapNullable = <$Type extends Any>(type: $Type): UnwrapNullable<$Type> => {
  if (type.kind === `nullable`) return type.type
  // @ts-expect-error fixme
  return type
}
