import type { PartialOrUndefined } from '../../lib/prelude.js'
import type { ClientTransports, ClientTransportsConfiguration } from '../../types/context.js'
import { type Context } from '../../types/context.js'
import { type Client, type ExtensionChainableRegistry } from '../client.js'
import { createProperties } from '../helpers.js'

// dprint-ignore
export type TransportMethod<
  $Context extends Context,
  $Extension extends object,
  $ExtensionChainable extends ExtensionChainableRegistry
> =
  $Context['transports'] extends ClientTransports.States.NonEmpty
    ? {
        /**
         * Configure the current transport.
         * TODO
         */
        <config extends PartialOrUndefined<$Context['transports']['registry'][$Context['transports']['current']]['config']>>
          (config: config):
            Client<
              {
                [_ in keyof $Context]:
                  _ extends 'transports'
                    ? {
                        registry: $Context['transports']['registry']
                        current: $Context['transports']['current']
                        configurations:
                          keyof config extends never
                            ? $Context['transports']['configurations']
                            : {
                                [configKey in keyof $Context['transports']['configurations']]:
                                  configKey extends $Context['transports']['current']
                                // configuration contains a PARTIAL of configuration.
                                // therefore we have to & the given config, since it may add NEW keys
                                    ? {
                                        [configValueKey in keyof $Context['transports']['configurations'][configKey]]:
                                          configValueKey extends keyof config
                                            ? unknown
                                            : $Context['transports']['configurations'][configKey][configValueKey]
                                      } & config
                                    : $Context['transports']['configurations'][configKey]
                              }
                      }
                    : $Context[_]
              },
              $Extension,
              $ExtensionChainable
            >
        /**
         * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
         * TODO
         */
        <
          name extends ClientTransports.GetNames<$Context['transports']>,
          config extends undefined | $Context['transports']['registry'][name]['config'] = undefined
        >
          (name: name, config?: config):
            Client<
              {
                [_ in keyof $Context]:
                  _ extends 'transports'
                    ? {
                        registry: $Context['transports']['registry']
                        current: name
                        configurations: keyof config extends never
                          ? $Context['transports']['configurations']
                          : {
                            [configKey in keyof $Context['transports']['configurations']]:
                              configKey extends name
                                ?
                                  {
                                    [configValueKey in keyof $Context['transports']['configurations'][configKey]]:
                                      configValueKey extends keyof config
                                        ? unknown
                                        : $Context['transports']['configurations'][configKey][configValueKey]
                                  } & config
                                  & {debug:config}
                                : $Context['transports']['configurations'][configKey]
                          }
                      }
                    : $Context[_]
              },
              $Extension,
              $ExtensionChainable
            >
      }
    : never

export const transportProperties = createProperties((builder, state) => {
  return {
    transport: (...args: [config: object] | [transportName: string, config?: object]) => {
      const transportName = typeof args[0] === `string` ? args[0] : state.transports.current
      const transportConfig = (typeof args[0] === `string` ? args[1] : args[0]) ?? {}
      if (!transportName) {
        throw new Error(`No transport is currently set.`)
      }
      const newContext = reducerTransportConfig(state, transportName, transportConfig)
      return builder(newContext)
    },
  } as any
})

const reducerTransportConfig = (
  state: Context,
  transportName: string,
  config: ClientTransportsConfiguration,
): Context => {
  const newConfiguration = {
    ...state.transports.configurations[transportName] ?? {},
    ...config,
  }

  // hack: transport need to provide this function
  if (transportName === `http`) {
    // @ts-expect-error
    if (config.headers) {
      // @ts-expect-error
      newConfiguration.headers = {
        // @ts-expect-error
        ...state.transports.configurations[transportName]?.headers,
        // @ts-expect-error
        ...config.headers,
      }
    }
  }

  return {
    ...state,
    transports: {
      ...state.transports,
      current: transportName,
      configurations: {
        ...state.transports.configurations,
        [transportName]: newConfiguration,
      },
    },
  }
}
