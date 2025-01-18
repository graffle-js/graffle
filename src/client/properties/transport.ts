import type { PartialOrUndefined } from '../../lib/prelude.js'
import type { ConfigurationResolverTF } from '../../types/ConfigurationResolver.js'
import type { ClientTransports, ClientTransportsConfiguration } from '../../types/context.js'
import { type Context } from '../../types/context.js'
import type { Client } from '../client.js'
import { createProperties } from '../helpers.js'

// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

// dprint-ignore
export type TransportMethod<
  $Context extends Context,
  $Extension extends object
> =
  $Context['transports'] extends ClientTransports.States.NonEmpty
    ? {
        /**
         * Configure the current transport.
         * TODO
         */
        // todo just Partial ?
        <configInit extends PartialOrUndefined<$Context['transports']['registry'][$Context['transports']['current']]['configurationInit']>>
          (configurationInit: configInit):
            Client<
            // @ts-expect-error
              {
                [_ in keyof $Context]:
                  _ extends 'transports'
                    ? {
                        registry: $Context['transports']['registry']
                        current: $Context['transports']['current']
                        configurations:
                          keyof configInit extends never
                            ? $Context['transports']['configurations']
                            : {
                                [transportName in keyof $Context['transports']['configurations']]:
                                  transportName extends $Context['transports']['current']
                                    ? $Context['transports']['registry'][transportName]['configurationResolverTF'] extends ConfigurationResolverTF
                                      // Custom Configuration Init Resolver
                                      ? ($Context['transports']['registry'][transportName]['configurationResolverTF'] & { init: configInit; partial: $Context['transports']['configurations'][transportName] })['return']
                                      // Default Configuration Init Resolver
                                      : {
                                          [configValueKey in keyof $Context['transports']['configurations'][transportName]]:
                                            configValueKey extends keyof configInit
                                              ? unknown
                                              : $Context['transports']['configurations'][transportName][configValueKey]
                                        } & configInit
                                    : $Context['transports']['configurations'][transportName]
                              }
                      }
                    : $Context[_]
              },
              $Extension
            >
        /**
         * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
         * TODO
         */
        <
          name extends ClientTransports.GetNames<$Context['transports']>,
          configInit extends undefined | $Context['transports']['registry'][name]['configurationInit'] = undefined
        >
          (name: name, configurationInit?: configInit):
            Client<
              // @ts-expect-error
              {
                [_ in keyof $Context]:
                  _ extends 'transports'
                    ? {
                        registry: $Context['transports']['registry']
                        current: name
                        configurations: keyof configInit extends never
                          ? $Context['transports']['configurations']
                          : {
                            [configKeyTransportName in keyof $Context['transports']['configurations']]:
                              configKeyTransportName extends name
                               ? $Context['transports']['registry'][configKeyTransportName]['configurationResolverTF'] extends ConfigurationResolverTF
                                  // Custom Configuration Init Resolver
                                  ? (& $Context['transports']['registry'][configKeyTransportName]['configurationResolverTF']
                                     & { init: configInit; partial: $Context['transports']['configurations'][configKeyTransportName] })['return']
                                  // Default Configuration Init Resolver
                                  : {
                                      [configValueKey in keyof $Context['transports']['configurations'][configKeyTransportName]]:
                                        configValueKey extends keyof configInit
                                          ? unknown
                                          : $Context['transports']['configurations'][configKeyTransportName][configValueKey]
                                    } & configInit
                                  & {debug:configInit}
                                : $Context['transports']['configurations'][configKeyTransportName]
                          }
                      }
                    : $Context[_]
              },
              $Extension
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
  newConfigurationInit: ClientTransportsConfiguration,
): Context => {
  const transport = state.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const currentConfigurationPartial = state.transports.configurations[transport.name] ?? {}

  // todo: Graceful error handling. Clearly track error being from which extension.
  const newConfigurationPartial = transport.configurationResolver(
    currentConfigurationPartial,
    newConfigurationInit,
  )

  return {
    ...state,
    transports: {
      ...state.transports,
      current: transport.name,
      configurations: {
        ...state.transports.configurations,
        [transport.name]: newConfigurationPartial,
      },
    },
  }
}
