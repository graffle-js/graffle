import { Chain } from '../../../lib/chain/__.js'
import type { ConfigManager } from '../../../lib/config-manager/__.js'
import { type Context } from '../context.js'
import type { Extension } from './extension.js'

export interface Use_ extends Chain.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Use<this['params']>
}

export interface Use<$Args extends Chain.Extension.Parameters<Use_>> {
  /**
   * TODO Docs.
   */
  use: <$Extension extends Extension>(extension: $Extension) => Chain.Definition.MaterializeWithNewContext<
    (
      $Extension['typeHooks']['property'] extends Chain.Extension
        ? Chain.Definition.Extend<$Args['chain'], $Extension['typeHooks']['property']>
        // ? $Args['chain']
        : $Args['chain']
    ),
    // If the extension adds type hooks, merge them into the config.
    ConfigManager.SetAtPath<
      $Args['context'],
      ['config', 'typeHooks', 'onRequestResult'],
      (
        $Extension['typeHooks']['onRequestResult'] extends undefined
          ? $Args['context']['config']['typeHooks']['onRequestResult']
          // dprint-ignore
          : [
            ...$Args['context']['config']['typeHooks']['onRequestResult'],
              $Extension['typeHooks']['onRequestResult'],
            ]
      )
    >
  >
}

export const useProperties = Chain.Extension.create<Use_>((builder, context) => {
  return {
    use: (extension: Extension) => {
      return builder({
        ...context,
        extensions: [...context.extensions, extension],
      })
    },
  } as any
})
