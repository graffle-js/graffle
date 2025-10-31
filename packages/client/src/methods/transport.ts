import { Core } from '@graffle/core'
import type { Obj } from '@wollybeard/kit'
import type { Client } from '../client.js'

// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

// dprint-ignore
export type TransportMethod<
  $Context extends Core.Context,
> =
  & (
      <transport extends Transports.Transport.Data>(
        transport: Transports.Transport.Provider.Input<transport>,
        ...errors: ParameterGuardTransportAlreadyRegistered<$Context, transport>
      ) => Client<
          AddMany<$Context, [transport]>
        >
    )
& ($Context['transports'] extends ContextTransportsNonEmpty
  ? {
      /**
       * Configure the current transport.
       *
       * Pass a configuration object to update settings of the currently selected transport,
       * such as URL, headers, or other transport-specific options.
       *
       * **Immutability**: Returns a new client instance. The original client is not modified.
       * If the operation results in no effective change, the same instance is returned for performance.
       */
      <
        const configurationInput extends $Context['transports']['registry'][$Context['transports']['current']]['configurator']['input'],
        _IsChanged extends boolean =
          {} extends configurationInput ? false : true
      >
        (configurationInput: NoExcess<configurationInput, $Context['transports']['registry'][$Context['transports']['current']]['configurator']['input']>):
          _IsChanged extends false
            ? Client<$Context> // todo: access to current client type?
            : Client<Transports.ConfigureCurrent<$Context, configurationInput>>
      /**
       * Set the current transport, selected from registered transports, and optionally configure it.
       *
       * Pass a transport name to switch to a different registered transport. Optionally provide
       * a second argument to configure the selected transport at the same time.
       *
       * **Immutability**: Returns a new client instance. The original client is not modified.
       * If the operation results in no effective change, the same instance is returned for performance.
       */
      <
        const name extends GetNames<$Context['transports']>,
        const configurationInput extends $Context['transports']['registry'][name]['configurator']['input'],
        _IsNameChanged extends boolean = name extends $Context['transports']['current'] ? false : true,
        _IsConfigured extends boolean = $Context['transports']['registry'][name]['configurator']['input'] extends configurationInput ? false : true,
        _IsChanged extends boolean =
          _IsNameChanged extends false
            ? _IsConfigured extends false
              ? false
              : true
            : true
      >
        (name: name, configurationInput?: configurationInput):
          _IsChanged extends false
            ? Client<$Context> // todo optimize: access to current client type?
            // todo: test passing no configuration input and it not messing up the types.
            : Client<Transports.Configure<$Context, name, _IsConfigured extends true ? configurationInput : {}, true>>
    }
  : unknown)

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

export namespace TransportMethod {
  export type Arguments =
    | [config: object]
    | [name: string, config?: object]
    | [Transports.Transport.Data]
    | [Transports.Transport.Builder<Transports.Transport.Data>]

  export type ArgumentsNormalized =
    | [typeof overloadCase.configureCurrent, config: object]
    | [typeof overloadCase.setCurrent, name: string, config?: object | undefined]
    | [typeof overloadCase.addType, Transports.Transport.Data]

  export const overloadCase = {
    setCurrent: 0,
    configureCurrent: 1,
    addType: 2,
  } as const

  export const normalizeArguments = (args: Arguments): ArgumentsNormalized => {
    if (typeof args[0] === `string`) {
      return [overloadCase.setCurrent, args[0], args[1]]
    }
    if (Transports.Transport.Builder.is(args[0])) {
      return [overloadCase.addType, args[0].return()]
    }
    if (Transports.Transport.is(args[0])) {
      return [overloadCase.addType, args[0]]
    }
    return [overloadCase.configureCurrent, args[0]]
  }
}

// dprint-ignore
export type GetNames<$ClientTransports extends ContextTransports> =
      Obj.IsEmpty<$ClientTransports['registry']> extends true
        ? 'Error: Transport registry is empty. Please add a transport.'
        : Obj.StringKeyof<$ClientTransports['registry']>

// dprint-ignore
export type ParameterGuardTransportAlreadyRegistered<$Context extends Core.Context, $Transport extends Transports.Transport.Data> =
  $Transport['name'] extends keyof $Context['transports']['registry'] ?
    [`Error: ${Transports.AlreadyRegisteredError<$Transport['name']>}`] :
    []
