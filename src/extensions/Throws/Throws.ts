import type { Client } from '../../client/client.js'
import type { Add } from '../../context/fragments/configuration/fragment.js'
import type { Properties } from '../../context/fragments/properties/_namespace.js'
import { Extension } from '../../entrypoints/extension.js'
// import { type Normalized } from '../../entrypoints/main.js'
// import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { Context } from '../../context/context.js'
import type { Configurators } from '../../types/configurators/_namespace.js'

export const Throws = Extension(`throws`)
  .properties(({ configuration, client }) => {
    // todo redesign input to allow to force throw always
    // todo pull pre-configured config from core
    const throwsConfiguration: Configurators.Output.Input = {
      envelope: {
        enabled: configuration.output.current.envelope.enabled,
        // @ts-expect-error
        errors: { execution: false, other: false, schema: false },
      },
      // @ts-expect-error
      errors: { execution: `throw`, other: `throw`, schema: `throw` },
    }

    const properties: Properties = {
      throws: () => client.with({ output: throwsConfiguration }),
    } as any

    return properties
  })

interface Properties extends Properties.PropertiesComputerTypeFunction {
  return: Properties_<this['context']>
}
// dprint-ignore
interface Properties_<$Context extends Context> {
  throws: () => Client<
    Add<$Context, { output: { errors: { execution: 'throw'; other: 'throw' }}}>
  >
}
