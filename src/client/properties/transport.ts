import type { Configurator } from '../../types/configurator.js'
import type { ClientTransports } from '../../types/context.js'
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
        <configurationInput extends $Context['transports']['registry'][$Context['transports']['current']]['configurator']['input']>
          (configurationInput: configurationInput):
            Client<
              {
                [_ in keyof $Context]:
                  _ extends 'transports'
                    ? {
                        registry: $Context['transports']['registry']
                        current: $Context['transports']['current']
                        configurations:
                         {
                            [transportName in keyof $Context['transports']['configurations']]:
                              transportName extends $Context['transports']['current']
                                ? Configurator.ApplyInputResolver$Func<
                                    $Context['transports']['registry'][transportName]['configurator'],
                                    $Context['transports']['configurations'][transportName],
                                    configurationInput
                                  >
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
          configurationInput extends undefined | $Context['transports']['registry'][name]['configurator']['input'] = undefined
        >
          (name: name, configurationInput?: configurationInput):
            Client<
              {
                [_ in keyof $Context]:
                  _ extends 'transports'
                    ? {
                        registry: $Context['transports']['registry']
                        current: name
                        configurations:
                          configurationInput extends Configurator.Configuration
                          ? {
                              [configKeyTransportName in keyof $Context['transports']['configurations']]:
                                configKeyTransportName extends name
                                  ? Configurator.ApplyInputResolver$Func<
                                      $Context['transports']['registry'][configKeyTransportName]['configurator'],
                                      $Context['transports']['configurations'][configKeyTransportName],
                                      configurationInput
                                    >
                                  : $Context['transports']['configurations'][configKeyTransportName]
                            }
                          : $Context['transports']['configurations']
                      }
                    : $Context[_]
              },
              $Extension
            >
      }
    : never

export const transportProperties = createProperties(({ createClient, context }) => {
  return {
    transport: (...args: [config: object] | [transportName: string, config?: object]) => {
      const transportName = typeof args[0] === `string` ? args[0] : context.transports.current
      const transportConfig = (typeof args[0] === `string` ? args[1] : args[0]) ?? {}
      if (!transportName) {
        throw new Error(`No transport is currently set.`)
      }
      const newContext = reducerTransportConfig(context, transportName, transportConfig)
      return createClient(newContext)
    },
  } as any
})

const reducerTransportConfig = (
  state: Context,
  transportName: string,
  newConfigurationInput: Configurator.Configuration,
): Context => {
  const transport = state.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const currentConfigurationPartial = state.transports.configurations[transport.name] ?? {}

  // todo: Graceful error handling. Clearly track error being from which extension.
  const newConfigurationPartial = transport.configurator.inputResolver(
    currentConfigurationPartial,
    newConfigurationInput,
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
