import { _ } from '../../lib/prelude.js'
import type { ClientTransports } from '../../types/context.js'
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
        <config extends Partial<$Context['transports']['registry'][$Context['transports']['current']]['config']>>
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
          config extends $Context['transports']['registry'][name]['config'] = {}
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
                              configKey extends $Context['transports']['current']
                                ?
                                  {
                                    [configValueKey in keyof $Context['transports']['configurations'][configKey]]:
                                      configValueKey extends keyof config
                                        ? config[configValueKey]
                                        : $Context['transports']['configurations'][configKey][configValueKey]
                                  }
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

export const builderExtensionTransport = createProperties((builder, state) => {
  return {
    addTransport: (transport: any) => {
      const newState = {
        ...state,
        transport: {
          ...state.transports,
          registry: {
            ...state.transports.registry,
            [transport.name]: transport,
          },
        },
      }
      if (!state.transports.current) {
        newState.transport.current = transport.name
        newState.transport.configurations[transport.name] = {} // todo initial configuration...
      }
      return builder(newState)
    },
    setTransport: (name: string, config?: any) => {
      return builder({
        ...state,
        transports: {
          ...state.transports,
          configurations: {
            ...state.transports.configurations,
            [name]: config ?? state.transports.configurations[name],
          },
          current: name,
        },
      })
    },
  }
})
