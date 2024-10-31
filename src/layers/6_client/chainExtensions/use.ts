import type { Extension } from '../../../extension/extension.js'
import { Builder } from '../../../lib/chain/__.js'
import type { ConfigManager } from '../../../lib/config-manager/__.js'
import { type Context } from '../context.js'

export interface Use_ extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Use<this['params']>
}

export interface Use<$Args extends Builder.Extension.Parameters<Use_>> {
  /**
   * TODO Docs.
   */
  use: <$Extension extends Extension>(extension: $Extension) => Builder.Definition.MaterializeWithNewContext<
    (
      ConfigManager.GetOptional<$Extension, ['builder', 'type']> extends Builder.Extension
        ? Builder.Definition.Extend<$Args['chain'], ConfigManager.GetOptional<$Extension, ['builder', 'type']>>
        : $Args['chain']
    ),
    // If the extension adds type hooks, merge them into the config.
    ConfigManager.SetAtPath<
      $Args['context'],
      ['typeHooks', 'onRequestResult'],
      // dprint-ignore
      (
        $Extension['typeHooks']['onRequestResult'] extends undefined
          ? $Args['context']['typeHooks']['onRequestResult']
          : [
            ...$Args['context']['typeHooks']['onRequestResult'],
              $Extension['typeHooks']['onRequestResult'],
            ]
      )
    >
  >
}

export const useProperties = Builder.Extension.create<Use_>((builder, context) => {
  return {
    use: (extension: Extension) => {
      return builder({
        ...context,
        extensions: [...context.extensions, extension],
      })
    },
  } as any
})
