// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

import type { Configurator } from '../../../lib/configurator/configurator.js'
import type { Objekt, StringKeyof } from '../../../lib/prelude.js'
import type { Context } from '../../../types/context.js'
import type { Client } from '../../client.js'
import { Transport } from './dataType/_namespace.js'
import type { ContextTransports, ContextTransportsNonEmpty } from './fragment.js'
import type { AddMany } from './reducers/addMany.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

export type AlreadyRegisteredError<
  $TransportName extends string,
> = `There is already a transport registered with the name "${$TransportName}".`

// dprint-ignore
export type ParameterGuardTransportAlreadyRegistered<$Context extends Context, $Transport extends Transport.Data> =
  $Transport['name'] extends keyof $Context['transports']['registry'] ?
    [`Error: ${AlreadyRegisteredError<$Transport['name']>}`] :
    []

// dprint-ignore
export type TransportMethod<
  $Context extends Context,
> =
  & (
      <transport extends Transport.Data>(
        transport: Transport.Provider.Input<transport>,
        ...errors: ParameterGuardTransportAlreadyRegistered<$Context, transport>
      ) => Client<
          AddMany<$Context, [transport]>
        >
    )
& ($Context['transports'] extends ContextTransportsNonEmpty
  ? {
      /**
       * Configure the current transport.
       * TODO
       */
      <
        const configurationInput extends $Context['transports']['registry'][$Context['transports']['current']]['configurator']['input'],
        _IsChanged extends boolean =
          {} extends configurationInput ? false : true
      >
        (configurationInput: configurationInput):
          _IsChanged extends false
            ? Client<$Context> // todo: access to current client type?
            : Client<
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
                }
              >
      /**
       * Set the current Transport, selected from amongst the registered ones, and optionally change its configuration.
       * TODO
       */
      <
        const name extends ContextTransports.GetNames<$Context['transports']>,
        const configurationInput extends undefined | $Context['transports']['registry'][name]['configurator']['input'] = undefined,
        _IsChanged extends boolean =
          name extends $Context['transports']['current'] ?
            undefined extends configurationInput ? false :
            {} extends configurationInput        ? false :
                                                   true :
            true
      >
        (name: name, configurationInput?: configurationInput):
          _IsChanged extends false
            ? Client<$Context> // todo: access to current client type?
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
                }
              >
    }
  : unknown)

export namespace TransportMethod {
  export type Arguments =
    | [config: object]
    | [name: string, config?: object]
    | [Transport.Data]
    | [Transport.Builder<Transport.Data>]

  export type ArgumentsNormalized =
    | [typeof overloadCase.configureCurrent, config: object]
    | [typeof overloadCase.setCurrent, name: string, config?: object]
    | [typeof overloadCase.addType, Transport.Data]

  export const overloadCase = {
    setCurrent: 0,
    configureCurrent: 1,
    addType: 2,
  } as const

  export const normalizeArguments = (args: Arguments): ArgumentsNormalized => {
    if (typeof args[0] === `string`) {
      return [overloadCase.setCurrent, args[0], args[1]]
    }
    if (Transport.Builder.is(args[0])) {
      return [overloadCase.addType, args[0].return()]
    }
    if (Transport.is(args[0])) {
      return [overloadCase.addType, args[0]]
    }
    return [overloadCase.configureCurrent, args[0]]
  }
}

// ------------------------------------------------------------
// Method Helpers
// ------------------------------------------------------------

export namespace ContextTransports {
  // dprint-ignore
  export type GetNames<$ClientTransports extends ContextTransports> =
      Objekt.IsEmpty<$ClientTransports['registry']> extends true
        ? 'Error: Transport registry is empty. Please add a transport.'
        : StringKeyof<$ClientTransports['registry']>
}
