import { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { mergeHeadersInit, mergeRequestInit } from '../../lib/http.js'
import { type Context } from '../context.js'
import type { WithInput } from '../Settings/inputIncrementable/inputIncrementable.js'
import type { NormalizeInput } from '../Settings/InputToConfig.js'

export interface BuilderExtensionWith extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: With<this['params']>
}

export interface With<$Args extends Builder.Extension.Parameters<BuilderExtensionWith>> {
  /**
   * TODO With Docs.
   */
  with: <$Input extends WithInput<$Args['context']['config']>>(
    input: $Input,
    // todo fixme
    // eslint-disable-next-line
    // @ts-ignore Passes after generation
  ) => Builder.Definition.MaterializeWithNewContext<
    $Args['chain'],
    ConfigManager.SetProperties<
      $Args['context'],
      {
        input: $Args['context']['input'] & $Input
        config: NormalizeInput<$Args['context']['input'] & $Input>
      }
    >
  >
}

export const builderExtensionWith = Builder.Extension.create<BuilderExtensionWith>((builder, state) => {
  return {
    with: (input: WithInput) => {
      return builder({
        ...state,
        // @ts-expect-error fixme
        input: {
          ...state.input,
          output: input.output,
          transport: {
            ...state.input.transport,
            ...input.transport,
            headers: mergeHeadersInit(state.input.transport?.headers, input.transport?.headers),
            raw: mergeRequestInit(state.input.transport?.raw, input.transport?.raw),
          },
        },
      })
    },
  }
})
