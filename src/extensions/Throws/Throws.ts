import type { Client, ExtensionChainable } from '../../client/client.js'
import { type Context } from '../../entrypoints/extension.js'
import { type ConfigInit, type OutputConfig } from '../../entrypoints/main.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'

export const Throws = Extension
  .create(`Throws`)
  .properties<Properties>(({ client, context }) => {
    // todo redesign input to allow to force throw always
    // todo pull pre-configured config from core
    const throwsifiedConfigInit: ConfigInit = {
      output: {
        envelope: {
          enabled: context.output.envelope.enabled,
          // @ts-expect-error
          errors: { execution: false, other: false, schema: false },
        },
        // @ts-expect-error
        errors: { execution: `throw`, other: `throw`, schema: `throw` },
      },
    }
    return {
      throws: () => client.with(throwsifiedConfigInit),
    }
  })

interface Properties extends ExtensionChainable {
  // @ts-expect-error
  return: Properties_<this['params'][0]>
}

interface Properties_<$Context extends Context> {
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
