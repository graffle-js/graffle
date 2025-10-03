// import type { Context } from '../../context/context.js'
import type { Properties } from '../../context/fragments/properties/$.js'
import { Extension } from '../../exports/extension.js'
import type { GraffleKit } from '../../exports/kit.js'

export const Throws = Extension
  .create(`throws`)
  .properties(({ configuration, client }) => {
    // todo redesign input to allow to force throw always
    // todo pull pre-configured config from core
    const throwsConfiguration: GraffleKit.Context.Configuration.Output.Configurator['input'] = {
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
  .return()

interface Properties extends Properties.PropertiesComputer$Func {
  // @ts-expect-error: untyped parameters
  return: Properties_<this['parameters']['context']>
}

// dprint-ignore
interface Properties_<$Context extends GraffleKit.Context> {
  throws: () => GraffleKit.Client<
    GraffleKit.Context.Configuration.Add<$Context, { output: { errors: { execution: 'throw'; other: 'throw' }}}>
  >
}
