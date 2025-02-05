import { type Context } from '../../../types/context.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../../types/Schema/__.js'
import type { Client } from '../../client.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

export interface ScalarMethod<
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
  ): Client<ContextScalarsAdd<$Context, Schema.Scalar<$Name, $Decoded, string>>>
  <$Scalar extends Schema.Scalar<_Schema['scalarNamesUnion']>>(
    scalar: $Scalar,
  ): Client<ContextScalarsAdd<$Context, $Scalar>>
}

export namespace ScalarMethod {
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

export interface ContextFragmentScalars {
  readonly scalars: Schema.Scalar.Registry
}

export interface ContextFragmentScalarsEmpty extends ContextFragmentScalars {
  readonly scalars: Schema.Scalar.Registry.Empty
}

export const contextFragmentScalarsEmpty: ContextFragmentScalarsEmpty = {
  scalars: Schema.Scalar.Registry.empty,
}

export type ContextScalarsAdd<
  $Context extends Context,
  $Scalar extends Schema.Scalar,
  __scalars = {
    map: $Context['scalars']['map'] & { [_ in $Scalar['name']]: $Scalar }
    typesEncoded: $Context['scalars']['typesEncoded'] | $Scalar['codec']['_typeEncoded']
    typesDecoded: $Context['scalars']['typesDecoded'] | $Scalar['codec']['_typeDecoded']
  },
  __ = { [_ in keyof $Context]: _ extends 'scalars' ? __scalars : $Context[_] },
> = __

export const contextScalarsAdd = (context: Context, scalar: Schema.Scalar): ContextFragmentScalars => {
  const scalars = Object.freeze({
    ...context.scalars,
    map: Object.freeze({
      ...context.scalars.map,
      [scalar.name]: scalar,
    }),
  })
  const fragment = {
    scalars,
  }
  return fragment
}
