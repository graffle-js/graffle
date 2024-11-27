import { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { ConfigInit, NormalizeConfigInit } from '../Configuration/ConfigInit.js'
import { type Context } from '../context.js'

export interface BuilderExtensionWith extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: With<this['params']>
}

export interface With<$Args extends Builder.Extension.Parameters<BuilderExtensionWith>> {
  /**
   * TODO With Docs.
   */
  with: <$ConfigInit extends ConfigInit>(
    configInit: $ConfigInit,
    // todo fixme
    // eslint-disable-next-line
    // @ts-ignore Passes after generation
  ) => Builder.Definition.MaterializeWith<
    $Args['definition'],
    ConfigManager.SetKeysOptional<
      $Args['context'],
      & NormalizeConfigInit<$Args['context']['input'] & $ConfigInit>
      & {
        input: $Args['context']['input'] & $ConfigInit
      }
    >
  >
}

export const builderExtensionWith = Builder.Extension.create<BuilderExtensionWith>((builder, state) => {
  return {
    with: (input: ConfigInit) => {
      return builder({
        ...state,
        input: {
          ...state.input,
          output: input.output,
        },
      })
    },
  }
})
