import type { Tuple, Writeable } from '#/lib/prelude'
import type { RequestPipeline } from '#/requestPipeline/RequestPipeline'
import type { Anyware } from '#lib/anyware'
import type { Transport } from '../dataType/$.js'
import type { ContextFragment, ContextTransports_Configurations, ContextTransports_Registry } from '../fragment.js'

export const addMany = <
  context extends ContextFragment,
  const transports extends readonly Transport.Data[],
>(
  context: context,
  transports: transports,
): AddMany<context, transports> => {
  const firstTransport = transports[0]
  if (!firstTransport) return context as any

  const isFirstTransportEverRegistered = context.transports.current === undefined
  const contextNewCurrent = isFirstTransportEverRegistered ? firstTransport.name : context.transports.current

  const contextNewRegistry: ContextTransports_Registry = { ...context.transports.registry }

  const contextNewConfigurations: ContextTransports_Configurations = { ...context.transports.configurations }

  const contextNewOverloads: Writeable<RequestPipeline.BaseDefinition['overloads']> = [
    ...context.requestPipelineDefinition.overloads,
  ]

  for (const transport of transports) {
    const { name } = transport

    const isTransportAlreadyRegistered = contextNewRegistry[name] !== undefined
    if (isTransportAlreadyRegistered) {
      // dprint-ignore
      const errorMessage: AlreadyRegisteredError<string> = `There is already a transport registered with the name "${name}".`
      throw new Error(errorMessage)
    }

    contextNewRegistry[name] = transport
    contextNewConfigurations[name] = transport.configurator.default
    contextNewOverloads.push(transport)
  }

  return {
    ...context,
    requestPipelineDefinition: Object.freeze({
      ...context.requestPipelineDefinition,
      overloads: Object.freeze(contextNewOverloads),
    }),
    transports: {
      current: contextNewCurrent,
      registry: Object.freeze(contextNewRegistry),
      configurations: Object.freeze(contextNewConfigurations),
    },
  } as any
}

// dprint-ignore
export type AddMany<
  $Context extends ContextFragment,
  $Transports extends readonly Transport.Data[]
> = {
  [_ in keyof $Context]:
		_ extends 'requestPipelineDefinition' ?
			 Anyware.PipelineDefinition.Updaters.AddOverloadMany<$Context['requestPipelineDefinition'], $Transports> :
    _ extends 'transports' ?
      {

        readonly configurations:
          & Tuple.IndexByToValueDepth2<$Transports, 'name', 'configurator', 'default'>
          // shallow merge + avoids more type instantiations
          & {
              [
                _ in keyof $Context['transports']['configurations']
                  as _ extends keyof Tuple.IndexByToValueDepth2<$Transports, 'name', 'configurator', 'default'>
                    ? never
                    : _
              ]:
                $Context['transports']['configurations'][_]
            }
        readonly current: $Context['transports']['current'] extends undefined
          ? $Transports[0]['name']
          : $Context['transports']['current']
        readonly registry:
          & $Context['transports']['registry']
          & Tuple.IndexBy<$Transports, 'name'>
      } :
    $Context[_]
}

export type AlreadyRegisteredError<
  $TransportName extends string,
> = `There is already a transport registered with the name "${$TransportName}".`
