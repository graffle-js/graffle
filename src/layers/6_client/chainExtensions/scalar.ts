import type { Simplify } from 'type-fest'
import { Builder } from '../../../lib/chain/__.js'
import type { ConfigManager } from '../../../lib/config-manager/__.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../../types/Schema/__.js'
import { type Context } from '../context.js'

export interface Scalar_ extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Simplify<ScalarExtension<this['params']>>
}

interface ScalarExtension<$Args extends Builder.Extension.Parameters<Scalar_>> {
  /**
   * TODO Docs.
   */
  scalar: null extends $Args['context']['schemaMap'] ? TypeErrorMissingSchemaMap : ScalarMethod<$Args>
}

export type TypeErrorMissingSchemaMap =
  `Error: Your client must have a schemaMap in order to apply registered scalars. Therefore we're providing this static error type message here instead of allowing you continue registering scalars that will never be applied.`

type ScalarMethod<$Args extends Builder.Extension.Parameters<Scalar_>> = {
  /**
   * TODO Docs.
   */
  <
    $Name extends GlobalRegistry.GetOrGeneric<$Args['context']['name']>['schema']['scalarNamesUnion'],
    $Decoded,
  >(
    name: $Name,
    $Codec: {
      decode: (value: string) => $Decoded
      encode: (value: $Decoded) => string
    },
  ): Builder.Definition.MaterializeWithNewContext<
    $Args['chain'],
    ConfigManager.SetAtPath<
      $Args['context'],
      ['scalars'],
      Simplify<
        Schema.Scalar.Registry.AddScalar<$Args['context']['scalars'], Schema.Scalar<$Name, $Decoded, string>>
      >
    >
  >

  /*
   * TODO Docs.
   */
  <$Scalar extends Schema.Scalar<GlobalRegistry.GetOrGeneric<$Args['context']['name']>['schema']['scalarNamesUnion']>>(
    scalar: $Scalar,
  ): Builder.Definition.MaterializeWithNewContext<
    $Args['chain'],
    ConfigManager.SetAtPath<
      $Args['context'],
      ['scalars'],
      Simplify<
        Schema.Scalar.Registry.AddScalar<$Args['context']['scalars'], $Scalar>
      >
    >
  >
}

type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]

export const scalarProperties = Builder.Extension.create<Scalar_>((builder, state) => {
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
