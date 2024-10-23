import type { ConfigManager } from '../../../lib/config-manager/__.js'
import type { Fluent } from '../../../lib/fluent/__.js'
import { Schema } from '../../../types/Schema/__.js'
import { type ClientContext, defineProperties, type FnParametersProperty } from '../fluent.js'

export interface ScalarFn extends Fluent.FnProperty<`scalar`> {
  // @ts-expect-error untyped params
  return: Scalar<this['params']>
}

export interface Scalar<$Args extends FnParametersProperty> {
  /**
   * TODO Docs.
   */
  // TODO limit $Name to what is in the schema.
  <$Name extends string, $Decoded>(name: $Name, $Codec: {
    decode: (value: string) => $Decoded
    encode: (value: $Decoded) => string
  }): Fluent.IncrementWithStateSet<ClientContext, $Args, {
    context: ConfigManager.SetAtPath<
      $Args['state']['context'],
      ['scalars'],
      Schema.Scalar.Registry.AddScalar<$Args['state']['context']['scalars'], Schema.Scalar<$Name, $Decoded, string>>
    >
    properties: $Args['state']['properties']
  }>
  /**
   * TODO Docs.
   */
  <$Scalar extends Schema.Scalar>(scalar: $Scalar): Fluent.IncrementWithStateSet<ClientContext, $Args, {
    context: ConfigManager.SetAtPath<
      $Args['state']['context'],
      ['scalars'],
      Schema.Scalar.Registry.AddScalar<$Args['state']['context']['scalars'], $Scalar>
    >
    properties: $Args['state']['properties']
  }>
}

type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]

export const scalarProperties = defineProperties((builder, state) => {
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
  }
})
