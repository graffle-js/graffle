import { type Context } from '../../types/context.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../types/Schema/__.js'
import type { Client } from '../client.js'
import { createProperties } from '../helpers.js'

export type TypeErrorMissingSchemaMap =
  `Error: Your client must have a schemaMap in order to apply registered scalars. Therefore we're providing this static error type message here instead of allowing you continue registering scalars that will never be applied.`

export type ScalarMethod<
  $Context extends Context,
  out $Extension extends object,
> // out $ExtensionChainable extends ExtensionChainableRegistry,
 = {
  /**
   * TODO Docs.
   */
  <
    $Name extends GlobalRegistry.GetOrGeneric<
      $Context['configurationIndex']['schema']['name']
    >['schema']['scalarNamesUnion'],
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
    $Extension
  > // $ExtensionChainable

  <
    $Scalar extends Schema.Scalar<
      GlobalRegistry.GetOrGeneric<$Context['configurationIndex']['schema']['name']>['schema']['scalarNamesUnion']
    >,
  >(
    scalar: $Scalar,
  ): Client<
    {
      [_ in keyof $Context]: _ extends 'scalars' ? {
          map: $Context[_]['map'] & { [_ in $Scalar['name']]: $Scalar }
          typesEncoded: $Context[_]['typesEncoded'] | Schema.Scalar.GetEncoded<$Scalar>
          typesDecoded: $Context[_]['typesDecoded'] | Schema.Scalar.GetDecoded<$Scalar>
        }
        : $Context[_]
    },
    $Extension
  > // $ExtensionChainable
}

// todo review if really needed for keeping type instance count low v
// We do not use this above to reduce type instance count
export type AddScalar<$Context extends Context, $Scalar extends Schema.Scalar> = {
  [_ in keyof $Context]: _ extends 'scalars' ? {
      map: $Context[_]['map'] & { [_ in $Scalar['name']]: $Scalar }
      typesEncoded: $Context[_]['typesEncoded'] | Schema.Scalar.GetEncoded<$Scalar>
      typesDecoded: $Context[_]['typesDecoded'] | Schema.Scalar.GetDecoded<$Scalar>
    }
    : $Context[_]
}

type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]

export const scalarProperties = createProperties(({ createClient, context }) => {
  return {
    scalar: (...args: Arguments) => {
      const scalar = Schema.Scalar.isScalar(args[0])
        ? args[0]
        : Schema.Scalar.create(args[0], args[1]!)

      return createClient({
        ...context,
        scalars: {
          ...context.scalars,
          map: {
            ...context.scalars.map,
            [scalar.name]: scalar,
          },
        },
      })
    },
  } as any
})
