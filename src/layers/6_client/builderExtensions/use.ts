import type { Extension } from '../../../extension/extension.js'
import { Builder } from '../../../lib/builder/__.js'
import type { ConfigManager } from '../../../lib/config-manager/__.js'
import { type Context } from '../context.js'

export interface BuilderExtensionUse extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Use<this['params']>
}

export interface Use<$Args extends Builder.Extension.Parameters<BuilderExtensionUse>> {
  /**
   * TODO Docs.
   */
  use: <$Extension extends Extension>(extension: $Extension) => UseExtensionDo<$Args, $Extension>
}

export type UseExtensionDo<
  $Args extends Builder.Extension.Parameters<BuilderExtensionUse>,
  $Extension extends Extension,
> = Builder.Definition.MaterializeWithNewContext<
  // Apply any builder extensions.
  (
    ConfigManager.GetOptional<$Extension, ['builder', 'type']> extends Builder.Extension
      ? Builder.Definition.AddExtension<$Args['chain'], ConfigManager.GetOptional<$Extension, ['builder', 'type']>>
      : $Args['chain']
  ),
  // Extend context.
  ConfigManager.SetMany<
    $Args['context'],
    [
      [
        ['typeHooks', 'onRequestResult'],
        ConfigManager.AppendOptional<
          $Args['context']['typeHooks']['onRequestResult'],
          $Extension['typeHooks']['onRequestResult']
        >,
      ],
      [
        ['extensions'],
        [...$Args['context']['extensions'], $Extension],
      ],
    ]
  >
>

export const builderExtensionUse = Builder.Extension.create<BuilderExtensionUse>((builder, context) => {
  return {
    use: (extension: Extension) => {
      return builder({
        ...context,
        extensions: [...context.extensions, extension],
      })
    },
  } as any
})
