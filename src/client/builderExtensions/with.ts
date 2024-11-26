import { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
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
  with: <$Input extends WithInput>(
    input: $Input,
    // todo fixme
    // eslint-disable-next-line
    // @ts-ignore Passes after generation
  ) => Builder.Definition.MaterializeWith<
    $Args['definition'],
    ConfigManager.SetKeysOptional<
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
        input: {
          ...state.input,
          output: input.output,
        },
      })
    },
  }
})
