import type { Extension } from '../../extension/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { type Context } from '../../types/context.js'
import { type Client, type ExtensionChainable, type ExtensionChainableRegistry } from '../client.js'
import { createProperties } from '../helpers.js'

export type UseMethod<
  $Context extends Context,
  out $Extension_ extends object,
  out $ExtensionChainable_ extends ExtensionChainableRegistry,
> = <extension extends Extension>(extension: extension) => Client<
  UseReducer<$Context, extension>,
  $Extension_,
  // @ts-expect-error
  extension['builder']['type'] extends ExtensionChainable
    // @ts-expect-error
    ? { [_ in extension['builder']['type']['name']]: extension['builder']['type'] }
    : $ExtensionChainable_
>

// dprint-ignore
export type UseReducer<
  $Context extends Context,
  $Extension extends Extension,
> =
  AddTypeHooks<
    AddTransport<
      AddExtension<
        $Context,
        $Extension
      >,
      $Extension
    >,
    $Extension
  >

export const useReducer = <
  const $Context extends Context,
  $Extension extends Extension,
>(context: $Context, extension: $Extension): UseReducer<$Context, $Extension> => {
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

type AddTransport<
  $Context extends Context,
  $Extension extends Extension,
> = Context.Updaters.AddTransportOptional<
  $Context,
  $Extension['transport']
>

type AddTypeHooks<
  $Context extends Context,
  $Extension extends Extension,
> = ConfigManager.UpdateKeyWithAppendMany<
  $Context,
  'typeHookOnRequestResult',
  $Extension['typeHooks']['onRequestResult']
>

type AddExtension<
  $Context extends Context,
  $Extension extends Extension,
> = ConfigManager.UpdateKeyWithAppendOne<
  $Context,
  'extensions',
  $Extension
>
