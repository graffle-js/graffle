import type { Client } from '../../client/client.js'
import { Extension } from '../../entrypoints/extension.js'
import { type ConfigInit, type OutputConfig } from '../../entrypoints/main.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'

export const Throws = Extension
  .create(`Throws`)
  .constructor(({ client, context }) => {
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

    const properties: Properties = {
      throws: () => client.with(throwsifiedConfigInit),
    } as any

    return {
      properties,
    }
  })

interface Properties extends Extension.PropertiesTypeFunction {
  // @ts-expect-error
  return: Properties_<this['parameters']>
}

interface Properties_<$Parameters extends Extension.PropertiesTypeFunctionParameters> {
  throws: () => Client<
    {
      [_ in keyof $Parameters['context']]: _ extends 'output' ? ThrowsifyConfig<$Parameters['context']['output']>
        : $Parameters['context'][_]
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
