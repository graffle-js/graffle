import type { Schema } from '../../../../types/Schema/__.js'
import type { ContextFragment } from '../fragment.js'

export type Add<
  $Context extends ContextFragment,
  $Scalar extends Schema.Scalar,
  __scalars = {
    map: $Context['scalars']['map'] & { [_ in $Scalar['name']]: $Scalar }
    typesEncoded: $Context['scalars']['typesEncoded'] | $Scalar['codec']['_typeEncoded']
    typesDecoded: $Context['scalars']['typesDecoded'] | $Scalar['codec']['_typeDecoded']
  },
  __ = { [_ in keyof $Context]: _ extends 'scalars' ? __scalars : $Context[_] },
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
