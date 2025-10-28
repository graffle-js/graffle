import { Obj } from '@wollybeard/kit'
import type { Configurator } from '@wollybeard/kit'
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

  const noChange = Obj.isEmpty(configurationInput)
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
  $SetCurrent extends boolean = false,
> = {
  [__CK__ in keyof $Context]:
    __CK__ extends 'transports' ?
      {
        [__TK__ in keyof $Context['transports']]:
          __TK__ extends 'current'
            ? $SetCurrent extends true
              ? $TransportName
              : $Context['transports']['current'] :
          __TK__ extends 'configurations' ? {
            [__TCK__ in keyof $Context['transports']['configurations']]:
              __TCK__ extends $TransportName ?
                Configurator.ApplyConfiguratorInputResolver$Func<
                  $Context['transports']['registry'][$TransportName]['configurator'],
                  $Context['transports']['configurations'][$TransportName],
                  $ConfigurationInput
                >
              : $Context['transports']['configurations'][__TCK__]
          } :
          $Context['transports'][__TK__]
      } :
    $Context[__CK__]
}
