import type { ConfigManager } from '../../../lib/config-manager/__.js'
import type { Fluent } from '../../../lib/fluent/__.js'
import { type ClientContext, defineProperties, type FnParametersProperty } from '../fluent.js'
import type { Extension } from './extension.js'

export interface UseFn extends Fluent.FnProperty<`use`> {
  // @ts-expect-error untyped params
  return: Use<this['params']>
}

export interface Use<$Args extends FnParametersProperty> {
  /**
   * TODO Docs.
   */
  // @ts-expect-error todo
  <$Extension extends Extension>(extension?: $Extension): Fluent.IncrementWithStateSet<ClientContext, $Args, {
    // context: $Args['state']['context'],
    // If the extension adds type hooks, merge them into the config.
    context: ConfigManager.SetAtPath<
      $Args['state']['context'],
      ['config', 'typeHooks', 'onRequestResult'],
      (
        $Extension['typeHooks']['onRequestResult'] extends undefined
          ? $Args['state']['context']['config']['typeHooks']['onRequestResult']
          // dprint-ignore
          : [
            ...$Args['state']['context']['config']['typeHooks']['onRequestResult'],
              $Extension['typeHooks']['onRequestResult'],
            ]
      )
    >
    // If the extension adds properties, merge them into the state.
    properties:
      & $Args['state']['properties']
      & (
        $Extension['typeHooks']['property'] extends Fluent.FnProperty
          ? Fluent.ToFnPropertyObject<$Extension['typeHooks']['property']>
          : {}
      )
  }>
}

export const useProperties = defineProperties((builder, state) => {
  return {
    use: (extension: Extension) => {
      return builder({
        ...state,
        extensions: [...state.extensions, extension],
      })
    },
  }
})
