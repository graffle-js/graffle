import type { UnionIgnoreAnyOrUnknown } from '../../../../lib/prelude.js'
import type { Schema } from '../../../../types/Schema/_namespace.js'
import type { ContextFragment } from '../fragment.js'

export type Add<
  $Context extends ContextFragment,
  $Scalar extends Schema.Scalar,
  // todo: an "empty" representation of scalars like "null" allowing typesEncoded/Decoded to always be prsent
  // OR stop having those pre-computed properties and rely on TS caching...
  __scalars = {
    readonly map: $Context['scalars']['map'] & { readonly [_ in $Scalar['name']]: $Scalar }
    readonly typesEncoded:
      | UnionIgnoreAnyOrUnknown<$Context['scalars']['typesEncoded']>
      | $Scalar['codec']['_typeEncoded']
    readonly typesDecoded:
      | UnionIgnoreAnyOrUnknown<$Context['scalars']['typesDecoded']>
      | $Scalar['codec']['_typeDecoded']
  },
  __ = { readonly [_ in keyof $Context]: _ extends 'scalars' ? __scalars : $Context[_] },
> = __

export const contextAdd = <context extends ContextFragment, scalar extends Schema.Scalar>(
  context: context,
  scalar: scalar,
): Add<context, scalar> => {
  const scalars = Object.freeze({
    ...context.scalars,
    map: Object.freeze({
      ...context.scalars.map,
      [scalar.name]: scalar,
    }),
  })
  const fragment = {
    ...context,
    scalars,
  }
  return fragment as any
}
