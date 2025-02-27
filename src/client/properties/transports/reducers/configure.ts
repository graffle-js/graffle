import type { Configurator } from '../../../../lib/configurator/configurator.js'
import { isObjectEmpty } from '../../../../lib/prelude.js'
import type { ContextFragment } from '../fragment.js'

export const configure = <
  context extends ContextFragment,
  transportName extends string,
  configurationInput extends Configurator.Configuration,
>(
  context: context,
  transportName: transportName,
  configurationInput: configurationInput,
): Configure<context, transportName, configurationInput> => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = isObjectEmpty(configurationInput)
  if (noChange) return context as any

  // todo: Graceful error handling. Clearly track error being from which extension.
  const transportConfiguration = transport.configurator.inputResolver({
    current: context.transports.configurations[transport.name]!,
    input: configurationInput,
  })

  const transports = {
    ...context.transports,
    current: transport.name,
    configurations: Object.freeze({
      ...context.transports.configurations,
      [transport.name]: transportConfiguration,
    }),
  }

  return {
    ...context,
    transports,
    requestPipelineDefinition: context.requestPipelineDefinition,
  } as any
}

// dprint-ignore
export type Configure<
  $Context extends ContextFragment,
  $TransportName extends string,
  $ConfigurationInput extends Configurator.Configuration,
> = {
  [__k__ in keyof $Context]:
    __k__ extends 'transports' ?
      {
        [__k2__ in keyof $Context['transports']]:
          __k2__ extends 'configurations' ? {
            [__k3__ in keyof $Context['transports']['configurations']]:
              __k3__ extends $TransportName ?
                Configurator.ApplyInputResolver$Func<
                  $Context['transports']['registry'][$TransportName]['configurator'],
                  $Context['transports']['configurations'][$TransportName],
                  $ConfigurationInput
                >
              : $Context['transports']['configurations'][__k3__]
          } :
          $Context['transports'][__k2__]
      } :
    $Context[__k__]
}
