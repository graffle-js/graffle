import { type Context } from '../../types/context.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../types/Schema/__.js'
import type { GetDecoded, GetEncoded } from '../../types/Schema/nodes/Scalar/helpers.js'
import { type Client } from '../client.js'
import type { ExtensionChainableRegistry } from '../client.js'
import { createProperties } from '../helpers.js'

export type TypeErrorMissingSchemaMap =
  `Error: Your client must have a schemaMap in order to apply registered scalars. Therefore we're providing this static error type message here instead of allowing you continue registering scalars that will never be applied.`

export type ScalarMethod<
  $Context extends Context,
  out $Extension extends object,
  out $ExtensionChainable extends ExtensionChainableRegistry,
> = {
  /**
   * TODO Docs.
   */
  <
    $Name extends GlobalRegistry.GetOrGeneric<$Context['name']>['schema']['scalarNamesUnion'],
    $Decoded,
  >(
    name: $Name,
    $Codec: {
      decode: (value: string) => $Decoded
      encode: (value: $Decoded) => string
    },
  ): Client<
    {
      [_ in keyof $Context]: _ extends 'scalars' ? {
          map: $Context[_]['map'] & { [_ in $Name]: Schema.Scalar<$Name, $Decoded, string> }
          typesEncoded: $Context[_]['typesEncoded'] | string
          typesDecoded: $Context[_]['typesDecoded'] | $Decoded
        }
        : $Context[_]
    },
    $Extension,
    $ExtensionChainable
  >

  <$Scalar extends Schema.Scalar<GlobalRegistry.GetOrGeneric<$Context['name']>['schema']['scalarNamesUnion']>>(
    scalar: $Scalar,
  ): Client<
    {
      [_ in keyof $Context]: _ extends 'scalars' ? {
          map: $Context[_]['map'] & { [_ in $Scalar['name']]: $Scalar }
          typesEncoded: $Context[_]['typesEncoded'] | GetEncoded<$Scalar>
          typesDecoded: $Context[_]['typesDecoded'] | GetDecoded<$Scalar>
        }
        : $Context[_]
    },
    $Extension,
    $ExtensionChainable
  >
}

type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]

export const scalarProperties = createProperties((builder, state) => {
  return {
    scalar: (...args: Arguments) => {
      const scalar = Schema.Scalar.isScalar(args[0])
        ? args[0]
        : Schema.Scalar.create(args[0], args[1]!)

      return builder({
        ...state,
        scalars: {
          ...state.scalars,
          map: {
            ...state.scalars.map,
            [scalar.name]: scalar,
          },
        },
      })
    },
  } as any
})
