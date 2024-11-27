import type { Builder, Context } from '../../entrypoints/extensionkit.js'
import { create } from '../../entrypoints/extensionkit.js'
import { type AssertExtends, type ConfigInit, type OutputConfig } from '../../entrypoints/main.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'

export const Throws = create({
  name: `Throws`,
  create: () => {
    return {
      builder: (create) =>
        create<BuilderExtension>(({ client, property, path }) => {
          if (property !== `throws` || path.length !== 0) return undefined

          // todo redesign input to allow to force throw always
          // todo pull pre-configured config from core
          const throwsifiedInput: ConfigInit = {
            output: {
              envelope: {
                enabled: client._.output.envelope.enabled,
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
    ConfigManager.SetKey<
      $Args['context'],
      'output',
      ThrowsifyConfig<$Args['context']['output']>
    >
  >
}

type ThrowsifyConfig<$OutputConfig extends OutputConfig> = ConfigManager.SetKey<
  $OutputConfig,
  'errors',
  { other: 'throw'; execution: 'throw' }
>
