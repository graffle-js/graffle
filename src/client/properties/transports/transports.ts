import type { Anyware } from '../../../lib/anyware/_namespace.js'
import { type EmptyObject, emptyObject, isObjectEmpty, type Objekt, type StringKeyof } from '../../../lib/prelude.js'
import type { RequestPipeline } from '../../../requestPipeline/RequestPipeline.js'
import { requestPipelineBaseDefinition } from '../../../requestPipeline/RequestPipeline.js'
import type { Configurator } from '../../../types/configurator/configurator.js'
import { type Context } from '../../../types/context.js'
import { Transport } from '../../../types/Transport.js'
import type { Client } from '../../client.js'

// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

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
> =
  & (
      <transport extends Transport>(
        transport: transport | Transport.Builder<transport>,
        ...errors: ParameterGuardTransportAlreadyRegistered<$Context, transport>
      ) => Client<
          ContextFragmentTransportsAddType<$Context, transport>
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
    | [Transport]
    | [Transport.Builder<Transport>]

  export type ArgumentsNormalized =
    | [typeof overloadCase.configureCurrent, config: object]
    | [typeof overloadCase.setCurrent, name: string, config?: object]
    | [typeof overloadCase.addType, Transport]

  export const overloadCase = {
    setCurrent: 0,
    configureCurrent: 1,
    addType: 2,
  } as const

  export const normalizeArguments = (args: Arguments): ArgumentsNormalized => {
    if (typeof args[0] === `string`) {
      return [overloadCase.setCurrent, args[0], args[1]]
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

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ContextTransportsEmpty extends ContextTransports {
  readonly registry: EmptyObject
  readonly configurations: EmptyObject
  readonly current: undefined
}

export const contextTransportsEmpty: ContextTransportsEmpty = Object.freeze({
  registry: emptyObject,
  configurations: emptyObject,
  current: undefined,
})

export interface ContextTransportsNonEmpty {
  readonly registry: ContextTransports_Registry
  readonly configurations: ContextTransports_Configurations
  readonly current: string
}

export interface ContextTransports {
  registry: ContextTransports_Registry
  /**
   * `undefined` if registry is empty.
   */
  current: undefined | string
  configurations: ContextTransports_Configurations
}

export interface ContextTransports_Registry {
  [name: string]: Transport
}

export interface ContextTransports_Configurations {
  [name: string]: Configurator.Configuration
}

export interface ContextFragmentTransports {
  readonly requestPipelineDefinition: RequestPipeline.BaseDefinition
  readonly transports: ContextTransports
}

export interface ContextFragmentTransportsEmpty extends ContextFragmentTransports {
  readonly requestPipelineDefinition: RequestPipeline.BaseDefinitionEmpty
  readonly transports: ContextTransportsEmpty
}

export const contextFragmentTransportsEmpty: ContextFragmentTransportsEmpty = Object.freeze({
  requestPipelineDefinition: requestPipelineBaseDefinition,
  transports: contextTransportsEmpty,
})

export const contextFragmentTransportsAdd = (context: Context, transport: Transport): ContextFragmentTransports => {
  const isFirstTransport = context.transports.current === undefined
  const transportName = transport.discriminant[`1`]

  const isTransportAlreadyRegistered = context.transports.registry[transportName] !== undefined
  if (isTransportAlreadyRegistered) {
    const errorMessage: AlreadyRegisteredError<string> =
      `There is already a transport registered with the name "${transportName}".`
    throw new Error(errorMessage)
  }

  const transports = Object.freeze({
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

  const requestPipelineDefinition = Object.freeze({
    ...context.requestPipelineDefinition,
    overloads: Object.freeze([
      ...context.requestPipelineDefinition.overloads,
      transport,
    ]),
  })

  const fragment = {
    requestPipelineDefinition,
    transports,
  }

  return fragment
}

export const contextFragmentTransportsSetCurrent = (
  context: Context,
  transportName: string,
  configurationInput?: Configurator.Configuration,
): null | ContextFragmentTransports => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = (!configurationInput || isObjectEmpty(configurationInput))
    && transportName === context.transports.current
  if (noChange) return null

  const transports: ContextFragmentTransports['transports'] = {
    ...context.transports,
    current: transportName,
  }
  const fragment = {
    transports,
    // todo: not needed, only changed when adding a transport type.
    // the thing is, we don't have concept of partial context fragment.
    // one solution is to merge request pipeline definition and transports keys under one new top level key.
    requestPipelineDefinition: context.requestPipelineDefinition,
  }

  if (configurationInput) {
    return contextFragmentTransportsConfigure({ ...context, ...fragment }, transportName, configurationInput)
  }

  return fragment
}

export const contextFragmentTransportsConfigureCurrent = (
  context: Context,
  configurationInput: Configurator.Configuration,
): null | ContextFragmentTransports => {
  if (!context.transports.current) {
    throw new Error(`No transport is currently set.`)
  }
  return contextFragmentTransportsConfigure(context, context.transports.current, configurationInput)
}

export const contextFragmentTransportsConfigure = (
  context: Context,
  transportName: string,
  configurationInput: Configurator.Configuration,
): null | ContextFragmentTransports => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = isObjectEmpty(configurationInput)
  if (noChange) return null

  // todo: Graceful error handling. Clearly track error being from which extension.
  const transportConfiguration = transport.configurator.inputResolver({
    current: context.transports.configurations[transport.name]!,
    input: configurationInput,
  })

  const transports = {
    ...context.transports,
    current: transport.name,
    configurations: Object.freeze({
      ...context.transports.configurations,
      [transport.name]: transportConfiguration,
    }),
  }

  return {
    transports,
    requestPipelineDefinition: context.requestPipelineDefinition,
  }
}

export type ContextFragmentTransportsAddType<
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
        current: $ClientTransports extends ContextTransportsEmpty
          ? $Transport['name']
          : $ClientTransports['current']
        registry: $ClientTransports['registry'] & {
          [_ in $Transport['name']]: $Transport
        }
      }
    : $ClientTransports
