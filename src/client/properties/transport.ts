import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { Configurator } from '../../types/configurator.js'
import type { ClientTransports } from '../../types/context.js'
import { type Context } from '../../types/context.js'
import { Transport } from '../../types/Transport.js'
import type { Client } from '../client.js'

// dprint-ignore
// type x =

// {():1}
// &
// {(x:2):2}

// declare const x: x
// x()

// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

// dprint-ignore
export type TransportMethod<
  $Context extends Context,
  $Extension extends object
> =
  & (
      <transport extends Transport>(transport: transport | Transport.Builder<transport>)
        => Client<
          ContextAddTransport<$Context, transport>,
          $Extension
        >
    )
// & $Context['transports'] extends ClientTransports.States.NonEmpty
//   ? {
//       /**
//        * Configure the current transport.
//        * TODO
//        */
//       <configurationInput extends $Context['transports']['registry'][$Context['transports']['current']]['configurator']['input']>
//         (configurationInput: configurationInput):
//           Client<
//             {
//               [_ in keyof $Context]:
//                 _ extends 'transports'
//                   ? {
//                       registry: $Context['transports']['registry']
//                       current: $Context['transports']['current']
//                       configurations:
//                        {
//                           [transportName in keyof $Context['transports']['configurations']]:
//                             transportName extends $Context['transports']['current']
//                               ? Configurator.ApplyInputResolver$Func<
//                                   $Context['transports']['registry'][transportName]['configurator'],
//                                   $Context['transports']['configurations'][transportName],
//                                   configurationInput
//                                 >
//                               : $Context['transports']['configurations'][transportName]
//                         }
//                     }
//                   : $Context[_]
//             },
//             $Extension
//           >
//       /**
//        * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
//        * TODO
//        */
//       <
//         name extends ClientTransports.GetNames<$Context['transports']>,
//         configurationInput extends undefined | $Context['transports']['registry'][name]['configurator']['input'] = undefined
//       >
//         (name: name, configurationInput?: configurationInput):
//           Client<
//             {
//               [_ in keyof $Context]:
//                 _ extends 'transports'
//                   ? {
//                       registry: $Context['transports']['registry']
//                       current: name
//                       configurations:
//                         configurationInput extends Configurator.Configuration
//                         ? {
//                             [configKeyTransportName in keyof $Context['transports']['configurations']]:
//                               configKeyTransportName extends name
//                                 ? Configurator.ApplyInputResolver$Func<
//                                     $Context['transports']['registry'][configKeyTransportName]['configurator'],
//                                     $Context['transports']['configurations'][configKeyTransportName],
//                                     configurationInput
//                                   >
//                                 : $Context['transports']['configurations'][configKeyTransportName]
//                           }
//                         : $Context['transports']['configurations']
//                     }
//                   : $Context[_]
//             },
//             $Extension
//           >
//     }
//   : {}

export namespace TransportMethod {
  export type Arguments =
    | [config: object]
    | [name: string, config?: object]
    | [Transport]
    | [Transport.Builder<Transport>]

  export type ArgumentsNormalized =
    | [typeof overloadCase.configureCurrent, config: object]
    | [typeof overloadCase.setType, name: string, config?: object]
    | [typeof overloadCase.addType, Transport]

  export const overloadCase = {
    setType: 0,
    configureCurrent: 1,
    addType: 2,
  } as const

  export const normalizeArguments = (args: Arguments): ArgumentsNormalized => {
    if (typeof args[0] === `string`) {
      return [overloadCase.setType, args[0], args[1] ?? {}]
    }
    if (Transport.$.isBuilder(args[0])) {
      return [overloadCase.addType, args[0].return()]
    }
    if (Transport.$.is(args[0])) {
      return [overloadCase.addType, args[0]]
    }
    return [overloadCase.configureCurrent, args[0]]
  }
}

export const contextUpdateTransport = (
  state: Context,
  transportName: string,
  configurationInput: Configurator.Configuration,
): Context => {
  const transport = state.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const currentConfiguration = state.transports.configurations[transport.name] ?? {}

  // todo: Graceful error handling. Clearly track error being from which extension.
  const newConfigurationPartial = transport.configurator.inputResolver({
    current: currentConfiguration,
    input: configurationInput,
  })

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

export type ContextAddTransport<
  $Context extends Context,
  $Transport extends Transport,
  // dprint-ignore
  _NewContext = {
    [_ in keyof $Context]:
      _ extends 'requestPipelineDefinition' ?
         Anyware.PipelineDefinition.Updaters.AddOverload<$Context['requestPipelineDefinition'], $Transport> :
      _ extends 'transports' ?
        ContextAddTransportOptional<$Context['transports'], $Transport> :
      // default
        $Context[_]
  },
> = _NewContext

// dprint-ignore
export type ContextAddTransportOptional<
  $ClientTransports extends ClientTransports,
  $Transport extends Transport | undefined,
> =
  $Transport extends Transport
    ? {
        configurations:
          & Omit<$ClientTransports['configurations'], $Transport['name']>
          & {
              [_ in $Transport['name']]: $Transport['configurator']['default']
            }
        current: $ClientTransports extends ClientTransports.States.Empty
          ? $Transport['name']
          : $ClientTransports['current']
        registry: $ClientTransports['registry'] & {
          [_ in $Transport['name']]: $Transport
        }
      }
    : $ClientTransports

export const contextAddTransport = (context: Context, transport: Transport) => {
  const newContext = {
    ...context,
  }
  newContext.requestPipelineDefinition = {
    ...context.requestPipelineDefinition,
    overloads: [
      ...context.requestPipelineDefinition.overloads,
      transport,
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

  const transportName = transport.discriminant[`1`] as string
  const isTransportAlreadyRegistered = newContext.transports.registry[transportName] !== undefined
  if (isTransportAlreadyRegistered) {
    throw new Error(`Transport "${transportName}" is already registered.`)
  }
  const isFirstTransport = newContext.transports.current === null
  if (isFirstTransport) {
    newContext.transports.current = transportName
  }
  newContext.transports.registry[transportName] = transport
  newContext.transports.configurations[transportName] = {
    ...transport.configurator.default,
    // todo:
    // ...extension.transport.configuration,
  }
  return newContext
}
