import type { ConfigManager } from '../../../lib/config-manager/__.js'
import type { Fluent } from '../../../lib/fluent/__.js'
import type { SchemaKit } from '../../1_Schema/__.js'
import { type ClientContext, defineProperties, type FnParametersProperty } from '../fluent.js'

export interface ScalarFn extends Fluent.FnProperty<`scalar`> {
  // @ts-expect-error untyped params
  return: Scalar<this['params']>
}

export interface Scalar<$Args extends FnParametersProperty> {
  /**
   * TODO Docs.
   */
  // @ts-expect-error todo
  <$Scalar extends SchemaKit.Scalar.Scalar>(scalar: $Scalar): Fluent.IncrementWithStateSet<ClientContext, $Args, {
    context: ConfigManager.SetAtPath<
      $Args['state']['context'],
      ['scalars', $Scalar['name']],
      $Scalar
    >
    properties: $Args['state']['properties']
  }>
}

export const scalarProperties = defineProperties((builder, state) => {
  return {
    scalar: (scalar: SchemaKit.Scalar.Scalar) => {
      return builder({
        ...state,
        scalars: {
          ...state.scalars,
          [scalar.name]: scalar,
        },
      })
    },
  }
})
