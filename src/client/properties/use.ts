import type { Extension } from '../../extension/$.js'
import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { UnknownOrAnyToNever } from '../../lib/prelude.js'
import { type Context } from '../../types/context.js'
import type { Transport } from '../../types/Transport.js'
import type { Client } from '../client.js'
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
              $Extension['transport']
            >
          : $Context['requestPipelineDefinition']
        : _ extends 'extensions'
        ? [...$Context['extensions'], $Extension]
        : _ extends 'transports'
        ? Context.Updaters.AddTransportOptional<
            $Context['transports'],
            $Extension['transport']
          >
        // : _ extends 'typeHookOnRequestResult'
        // ? [...$Context['typeHookOnRequestResult'], ...$Extension['typeHooks']['onRequestResult']]
        // : _ extends 'typeHookOnRequestDocumentRootType'
        // ? [...$Context['typeHookOnRequestDocumentRootType'], ...$Extension['typeHooks']['onRequestDocumentRootType']]
        : _ extends 'typeHookRequestResultDataTypes'
        ? $Context['typeHookRequestResultDataTypes'] | UnknownOrAnyToNever<$Extension['noExpandResultDataType']>
        // Skip
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
    extensionsIndex: {
      ...context.extensionsIndex,
      [extension.name]: extension,
    },
  }

  if (extension.transport) {
    newContext.requestPipelineDefinition = {
      ...context.requestPipelineDefinition,
      overloads: [
        ...context.requestPipelineDefinition.overloads,
        extension.transport,
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

    const transportName = extension.transport.discriminant[`1`]
    const isTransportAlreadyRegistered = newContext.transports.registry[transportName] !== undefined
    if (isTransportAlreadyRegistered) {
      throw new Error(`Transport "${transportName}" is already registered.`)
    }
    const isFirstTransport = newContext.transports.current === null
    if (isFirstTransport) {
      newContext.transports.current = transportName
    }
    newContext.transports.registry[transportName] = extension.transport
    newContext.transports.configurations[transportName] = {
      ...extension.transport.configurator.default,
      // todo:
      // ...extension.transport.configuration,
    }
  }

  return newContext as any
}

export const useProperties = createProperties(({ createClient, context }) => {
  return {
    use: (extension) => {
      return createClient(useReducer(context, extension)) as any
    },
  }
})
