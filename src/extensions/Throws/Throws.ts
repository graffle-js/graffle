import type { Client, ExtensionChainable } from '../../client/client.js'
import { create } from '../../entrypoints/extensionkit.js'
import { type ConfigInit, type OutputConfig } from '../../entrypoints/main.js'
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

interface BuilderExtension extends ExtensionChainable {
  name: 'throws'
  // return: BuilderExtension_<AssertExtends<this['params'], Builder.Extension.Parameters<BuilderExtension>>>
  return: () => Client<
    // @ts-expect-error
    {
      // @ts-expect-error
      [_ in keyof this['params'][0]]: _ extends 'output' ? ThrowsifyConfig<this['params'][0]['output']>
        // @ts-expect-error
        : this['params'][0][_]
    },
    // @ts-expect-error
    this['params'][1],
    // @ts-expect-error
    this['params'][2]
  >
}

type ThrowsifyConfig<$OutputConfig extends OutputConfig> = ConfigManager.SetKey<
  $OutputConfig,
  'errors',
  { other: 'throw'; execution: 'throw' }
>
