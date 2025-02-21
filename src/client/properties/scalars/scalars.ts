import type { ObjectMergeShallow, Objekt } from '../../../lib/prelude.js'
import { type Context } from '../../../types/context.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../../types/Schema/__.js'
import type { Client } from '../../client.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

export interface Method<
  $Context extends Context,
  // Variables
  _Schema extends GlobalRegistry.GetOrGeneric<
    $Context['configuration']['schema']['current']['name']
  >['schema'] = GlobalRegistry.GetOrGeneric<
    $Context['configuration']['schema']['current']['name']
  >['schema'],
> {
  /**
   * TODO Docs.
   */
  <$Name extends _Schema['scalarNamesUnion'], $Decoded>(
    name: $Name,
    $Codec: {
      decode: (value: string) => $Decoded
      encode: (value: $Decoded) => string
    },
  ): Client<ContextAdd<$Context, Schema.Scalar<$Name, $Decoded, string>>>
  <$Scalar extends Schema.Scalar<_Schema['scalarNamesUnion']>>(
    scalar: $Scalar,
  ): Client<ContextAdd<$Context, $Scalar>>
}

export namespace Method {
  export type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]
  export const normalizeArguments = (args: Arguments): Schema.Scalar => {
    if (typeof args[0] === `string`) return Schema.Scalar.create(args[0], args[1]!)
    return args[0]
  }

  export type TypeErrorMissingSchemaMap =
    `Error: Your client must have a schemaMap in order to apply registered scalars. Therefore we're providing this static error type message here instead of allowing you continue registering scalars that will never be applied.`
}

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ContextFragment {
  readonly scalars: Schema.Scalar.Registry
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly scalars: Schema.Scalar.Registry.Empty
}

export const contextFragmentScalarsEmpty: ContextFragmentEmpty = {
  scalars: Schema.Scalar.Registry.empty,
}

// ------------------------------------------------------------
// Reducers
// ------------------------------------------------------------

export type ContextAdd<
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
): ContextAdd<context, scalar> => {
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

export type ContextSet<
  $Context extends ContextFragment,
  $Fragment extends ContextFragment,
> = ObjectMergeShallow<$Context, $Fragment>

export const contextSet = <context extends ContextFragment, fragment extends ContextFragment>(
  context: context,
  fragment: ContextFragment,
): ContextSet<context, fragment> => {
  return {
    ...context,
    ...fragment,
  } as any
}
