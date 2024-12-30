import type { Extension } from '../../extension/__.js'
import type { Anyware } from '../../lib/anyware/__.js'
import type { UnknownOrAnyToNever } from '../../lib/prelude.js'
import { type Context } from '../../types/context.js'
import type { Transport } from '../../types/Transport.js'
import { type Client } from '../client.js'
import { createProperties } from '../helpers.js'

export type UseMethod<
  $Context extends Context,
  out $Extension_ extends object,
> = <extension extends Extension>(extension: extension) => Client<
  UseOneReducer<$Context, extension>,
  $Extension_
>

// todo: type to use multiple to reduce type instantiation
// useful for presets

// dprint-ignore
export type UseOneReducer<
  $Context extends Context,
  $Extension extends Extension,
> = {
      [_ in keyof $Context]:
        _ extends 'requestPipelineDefinition'
        ?  $Extension['transport'] extends Transport
          ? Anyware.PipelineDefinition.Updaters.AddOverload<
              $Context['requestPipelineDefinition'],
              $Extension['transport']['requestPipelineOverload']
            >
          : $Context['requestPipelineDefinition']
        : _ extends 'extensions'
        ? [...$Context['extensions'], $Extension]
        : _ extends 'transports'
        ? Context.Updaters.AddTransportOptional<
            $Context['transports'],
            $Extension['transport']
          >
        : _ extends 'typeHookOnRequestResult'
        ? [...$Context['typeHookOnRequestResult'], ...$Extension['typeHooks']['onRequestResult']]
        : _ extends 'typeHookOnRequestDocumentRootType'
        ? [...$Context['typeHookOnRequestDocumentRootType'], ...$Extension['typeHooks']['onRequestDocumentRootType']]
        : _ extends 'typeHookRequestResultDataTypes'
        ? $Context['typeHookRequestResultDataTypes'] | UnknownOrAnyToNever<$Extension['typeHooks']['requestResultDataTypes']>
        : $Context[_]
    }

// todo rename to useOneReducer
export const useReducer = <
  const $Context extends Context,
  $Extension extends Extension,
>(context: $Context, extension: $Extension): UseOneReducer<$Context, $Extension> => {
  const newContext: Context = {
    ...context,
    extensions: [...context.extensions, extension],
  }

  if (extension.transport) {
    newContext.requestPipelineDefinition = {
      ...context.requestPipelineDefinition,
      overloads: [
        ...context.requestPipelineDefinition.overloads,
        extension.transport.requestPipelineOverload,
      ],
    }
    newContext.transports = {
      current: context.transports.current,
      registry: {
        ...context.transports.registry,
      },
      configurations: {
        ...context.transports.configurations,
      },
    }

    const isTransportAlreadyRegistered = newContext.transports.registry[extension.transport.name] !== undefined
    if (isTransportAlreadyRegistered) {
      throw new Error(`Transport "${extension.transport.name}" is already registered.`)
    }
    const isFirstTransport = newContext.transports.current === null
    if (isFirstTransport) {
      newContext.transports.current = extension.transport.name
    }
    newContext.transports.registry[extension.transport.name] = extension.transport
    newContext.transports.configurations[extension.transport.name] = {
      ...extension.transport.configDefaults,
      ...extension.transport.config,
    }
  }

  return newContext as any
}

export const useProperties = createProperties((builder, context) => {
  return {
    use: (extension) => {
      return builder(useReducer(context, extension)) as any
    },
  }
})
