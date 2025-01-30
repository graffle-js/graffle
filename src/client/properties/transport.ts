import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { Objekt, StringKeyof } from '../../lib/prelude.js'
import type { Configurator } from '../../types/configurator.js'
import { type Context } from '../../types/context.js'
import { Transport } from '../../types/Transport.js'
import type { Client } from '../client.js'

// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

type AlreadyRegisteredError<
  $TransportName extends string,
> = `There is already a transport registered with the name "${$TransportName}".`

// dprint-ignore
export type ParameterGuardTransportAlreadyRegistered<$Context extends Context, $Transport extends Transport> =
  $Transport['name'] extends keyof $Context['transports']['registry'] ?
    [`Error: ${AlreadyRegisteredError<$Transport['name']>}`] :
    []

// dprint-ignore
export type TransportMethod<
  $Context extends Context,
  $Extension extends object
> =
  & (
      <transport extends Transport>(
        transport: transport | Transport.Builder<transport>,
        ...errors: ParameterGuardTransportAlreadyRegistered<$Context, transport>
      ) => Client<
          ContextAddTransport<$Context, transport>,
          $Extension
        >
    )
& ($Context['transports'] extends ContextTransports.States.NonEmpty
  ? {
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
      /**
       * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
       * TODO
       */
      <
        name extends ContextTransports.GetNames<$Context['transports']>,
        configurationInput extends undefined | $Context['transports']['registry'][name]['configurator']['input'] = undefined
      >
        (name: name, configurationInput?: configurationInput):
          name extends $Context['transports']['current']
            ? Client<$Context, $Extension> // todo: access to current client type?
            : Client<
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
  : unknown)

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
      return [overloadCase.setType, args[0], args[1]]
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
  $ClientTransports extends ContextTransports,
  $Transport extends Transport | undefined,
> =
  $Transport extends Transport
    ? {
        configurations:
          & Omit<$ClientTransports['configurations'], $Transport['name']>
          & {
              [_ in $Transport['name']]: $Transport['configurator']['default']
            }
        current: $ClientTransports extends ContextTransports.States.Empty
          ? $Transport['name']
          : $ClientTransports['current']
        registry: $ClientTransports['registry'] & {
          [_ in $Transport['name']]: $Transport
        }
      }
    : $ClientTransports

export const contextAddTransport = (context: Context, transport: Transport) => {
  const isFirstTransport = context.transports.current === undefined
  const transportName = transport.discriminant[`1`] as string

  const isTransportAlreadyRegistered = context.transports.registry[transportName] !== undefined
  if (isTransportAlreadyRegistered) {
    const errorMessage: AlreadyRegisteredError<string> =
      `There is already a transport registered with the name "${transportName}".`
    throw new Error(errorMessage)
  }

  const newContextTransports = Object.freeze({
    current: isFirstTransport ? transportName : context.transports.current,
    registry: Object.freeze({
      ...context.transports.registry,
      [transportName]: transport,
    }),
    configurations: Object.freeze({
      ...context.transports.configurations,
      [transportName]: transport.configurator.default,
    }),
  })

  const newContextRequestPipelineDefinition = Object.freeze({
    ...context.requestPipelineDefinition,
    overloads: Object.freeze([
      ...context.requestPipelineDefinition.overloads,
      transport,
    ]),
  })

  const newContext = Object.freeze({
    ...context,
    requestPipelineDefinition: newContextRequestPipelineDefinition,
    transports: newContextTransports,
  })

  return newContext
}

export interface ContextTransports {
  registry: ContextTransportsRegistry
  /**
   * `undefined` if registry is empty.
   */
  current: undefined | string
  configurations: ContextTransportsConfigurations
}

export interface ContextTransportsRegistry {
  [name: string]: Transport
}

export interface ContextTransportsConfigurations {
  [name: string]: Configurator.Configuration
}

export namespace ContextTransports {
  export namespace Errors {
    export type PreflightCheckNoTransportsRegistered =
      'Error: You cannot send requests yet. You must setup a transport.'

    export type PreflightCheckNoTransportSelected =
      'Error: You cannot send requests yet. You must select a transport to use.'

    export type PreflightCheckTransportNotReady<$TransportName extends string> =
      `Error: You cannot send requests yet. The selected transport "${$TransportName}" is not sufficiently configured.`
  }

  // dprint-ignore
  export type PreflightCheck<
    $Context,
    $SuccessValue = true,
  > =
    // @ts-expect-error context constraint missing to avoid TS compare depth limit
    $Context['checkPreflight'] extends false
      ? $SuccessValue
      // @ts-expect-error context constraint missing to avoid TS compare depth limit
      : PreflightCheck_<$Context['transports'], $SuccessValue>
  // dprint-ignore
  export type PreflightCheck_<
    $ClientTransports extends ContextTransports,
    $SuccessValue = true,
  > =
    $ClientTransports extends ContextTransports.States.Empty
      ? ContextTransports.Errors.PreflightCheckNoTransportsRegistered
      : $ClientTransports['current'] extends string
        ? $ClientTransports['current'] extends keyof $ClientTransports['configurations']
          ? $ClientTransports['current'] extends keyof $ClientTransports['registry']
            ? $ClientTransports['configurations'][$ClientTransports['current']] extends $ClientTransports['registry'][$ClientTransports['current']]['configurator']['normalized']
              ? $SuccessValue
              : ContextTransports.Errors.PreflightCheckTransportNotReady<$ClientTransports['current']>
            : never // Should never happen
          : never // Should never happen
        : ContextTransports.Errors.PreflightCheckNoTransportSelected

  // dprint-ignore
  export type GetNames<$ClientTransports extends ContextTransports> =
      Objekt.IsEmpty<$ClientTransports['registry']> extends true
        ? 'Error: Transport registry is empty. Please add a transport.'
        : StringKeyof<$ClientTransports['registry']>

  export namespace States {
    export interface Empty {
      readonly registry: {}
      readonly configurations: {}
      readonly current: undefined
    }
    export const empty: Empty = Object.freeze({
      registry: Object.freeze({}),
      configurations: Object.freeze({}),
      current: undefined,
    })

    export interface NonEmpty {
      readonly registry: ContextTransportsRegistry
      readonly configurations: ContextTransportsConfigurations
      readonly current: string
    }
  }
}
