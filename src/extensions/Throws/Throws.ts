import type { Client, ExtensionChainable } from '../../client/client.js'
import { type Context, create } from '../../entrypoints/extensionkit.js'
import { type ConfigInit, type OutputConfig } from '../../entrypoints/main.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'

export const Throws = create({
  name: `Throws`,
  create: ({ builder }) => {
    return {
      builder: builder<BuilderExtension>(({ client, property, path }) => {
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
  // @ts-expect-error
  return: BuilderExtension_<this['params'][0]>
}

interface BuilderExtension_<$Context extends Context> {
  // return: BuilderExtension_<AssertExtends<this['params'], Builder.Extension.Parameters<BuilderExtension>>>
  throws: () => Client<
    {
      [_ in keyof $Context]: _ extends 'output' ? ThrowsifyConfig<$Context['output']>
        : $Context[_]
    },
    // todo
    {} // this['params'][1]
  >
}

type ThrowsifyConfig<$OutputConfig extends OutputConfig> = ConfigManager.SetKey<
  $OutputConfig,
  'errors',
  { other: 'throw'; execution: 'throw' }
>
