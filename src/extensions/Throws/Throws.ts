import type { Builder, Context } from '../../entrypoints/extensionkit.js'
import { createBuilderExtension, createExtension } from '../../entrypoints/extensionkit.js'
import { type AssertExtends, type BuilderConfig, type WithInput } from '../../entrypoints/main.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'

export const Throws = createExtension({
  name: `Throws`,
  create: () => {
    return {
      builder: createBuilderExtension<BuilderExtension>(({ client, property, path }) => {
        if (property !== `throws` || path.length !== 0) return undefined

        // todo redesign input to allow to force throw always
        // todo pull pre-configured config from core
        const throwsifiedInput: WithInput = {
          output: {
            envelope: {
              enabled: client._.config.output.envelope.enabled,
              // @ts-expect-error
              errors: { execution: false, other: false, schema: false },
            },
            // @ts-expect-error
            errors: { execution: `throw`, other: `throw`, schema: `throw` },
          },
        }
        return () => client.with(throwsifiedInput)
      }),
    }
  },
})

interface BuilderExtension extends Builder.Extension {
  context: Context
  return: BuilderExtension_<AssertExtends<this['params'], Builder.Extension.Parameters<BuilderExtension>>>
}

interface BuilderExtension_<$Args extends Builder.Extension.Parameters<BuilderExtension>> {
  /**
   * TODO
   */
  throws: () => Builder.Definition.MaterializeWith<
    $Args['definition'],
    ConfigManager.UpdateAtKey<
      $Args['context'],
      'config',
      // @ts-expect-error fixme
      ThrowsifyConfig<$Args['context']['config']>
    >
  >
}

type ThrowsifyConfig<$BuilderConfig extends BuilderConfig> = ConfigManager.SetAtKeyPath<
  $BuilderConfig,
  ['output', 'errors'],
  { other: 'throw'; execution: 'throw' }
>
