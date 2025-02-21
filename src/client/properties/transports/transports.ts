import type { Anyware } from '../../../lib/anyware/_namespace.js'
import type { Configurator } from '../../../lib/configurator/configurator.js'
import {
  type EmptyObject,
  emptyObject,
  isObjectEmpty,
  type Objekt,
  type StringKeyof,
  type Tuple,
  type Writeable,
} from '../../../lib/prelude.js'
import type { RequestPipeline } from '../../../requestPipeline/RequestPipeline.js'
import { requestPipelineBaseDefinition } from '../../../requestPipeline/RequestPipeline.js'
import type { Context } from '../../../types/context.js'
import { ContextFragments } from '../../../types/ContextFragment.js'
import type { Client } from '../../client.js'
import { Transport } from './dataType/_namespace.js'

// todo remove the JSDoc comments below. They will not be shown.
// Look for a TS issue about conditional types + JSDoc comments. If none, create one.

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

type AlreadyRegisteredError<
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
      <transportData extends Transport.Data>(
        transport: Transport.Provider.Input<transportData>,
        ...errors: ParameterGuardTransportAlreadyRegistered<$Context, transportData>
      ) => Client<
          ContextFragmentAddType<$Context, transportData>
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
  readonly registry: ContextTransports_Registry
  /**
   * `undefined` if registry is empty.
   */
  readonly current: undefined | string
  readonly configurations: ContextTransports_Configurations
}

// todo: should be readonly? otherwise comment about why.

export interface ContextTransports_Registry {
  [name: string]: Transport.Data
}

export interface ContextTransports_Configurations {
  [name: string]: Configurator.Configuration
}

export interface ContextFragment {
  readonly requestPipelineDefinition: RequestPipeline.BaseDefinition
  readonly transports: ContextTransports
}

export interface ContextFragmentTransportsEmpty extends ContextFragment {
  readonly requestPipelineDefinition: RequestPipeline.BaseDefinitionEmpty
  readonly transports: ContextTransportsEmpty
}

export const contextFragmentTransportsEmpty: ContextFragmentTransportsEmpty = Object.freeze({
  requestPipelineDefinition: requestPipelineBaseDefinition,
  transports: contextTransportsEmpty,
})

// todo: *AddMany
export const contextFragmentAddMany = (
  context: Context,
  transports: readonly Transport.Data[],
): null | ContextFragment => {
  const firstTransport = transports[0]
  if (!firstTransport) return null

  const isFirstTransportEverRegistered = context.transports.current === undefined
  const contextNewCurrent = isFirstTransportEverRegistered ? firstTransport.name : context.transports.current

  const contextNewRegistry: ContextTransports_Registry = { ...context.transports.registry }

  const contextNewConfigurations: ContextTransports_Configurations = { ...context.transports.configurations }

  const contextNewOverloads: Writeable<RequestPipeline.BaseDefinition['overloads']> = [
    ...context.requestPipelineDefinition.overloads,
  ]

  for (const transport of transports) {
    const { name } = transport

    const isTransportAlreadyRegistered = contextNewRegistry[name] !== undefined
    if (isTransportAlreadyRegistered) {
      // dprint-ignore
      const errorMessage: AlreadyRegisteredError<string> = `There is already a transport registered with the name "${name}".`
      throw new Error(errorMessage)
    }

    contextNewRegistry[name] = transport
    contextNewConfigurations[name] = transport.configurator.default
    contextNewOverloads.push(transport)
  }

  const fragment = {
    requestPipelineDefinition: Object.freeze({
      ...context.requestPipelineDefinition,
      overloads: Object.freeze(contextNewOverloads),
    }),
    transports: {
      current: contextNewCurrent,
      registry: Object.freeze(contextNewRegistry),
      configurations: Object.freeze(contextNewConfigurations),
    },
  }

  return fragment
}

export const contextFragmentSetCurrent = (
  context: Context,
  transportName: string,
  configurationInput?: Configurator.Configuration,
): null | ContextFragment => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = (!configurationInput || isObjectEmpty(configurationInput))
    && transportName === context.transports.current
  if (noChange) return null

  const transports: ContextFragment['transports'] = {
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
    return contextFragmentConfigure({ ...context, ...fragment }, transportName, configurationInput)
  }

  return fragment
}

export const contextFragmentConfigureCurrent = <context extends ContextFragment>(
  context: context,
  configurationInput: Configurator.Configuration,
): context => {
  if (!context.transports.current) {
    throw new Error(`No transport is currently set.`)
  }
  return contextFragmentConfigure(context, context.transports.current, configurationInput)
}

// export const contextConfigureCurrent = Context.createReducer(contextFragmentConfigureCurrent)

export const contextFragmentConfigure = <context extends ContextFragment>(
  context: context,
  transportName: string,
  configurationInput: Configurator.Configuration,
): context => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = isObjectEmpty(configurationInput)
  if (noChange) return context

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
    ...context,
    transports,
    requestPipelineDefinition: context.requestPipelineDefinition,
  }
}

export type ContextFragmentAddType<
  $Context extends Context,
  $Transport extends Transport.Data,
  // dprint-ignore
  _NewContext = {
    [_ in keyof $Context]:
      _ extends 'requestPipelineDefinition' ?
         Anyware.PipelineDefinition.Updaters.AddOverload<$Context['requestPipelineDefinition'], $Transport> :
      _ extends 'transports' ?
        ContextAdd<$Context['transports'], $Transport> :
      // default
        $Context[_]
  },
> = _NewContext

// dprint-ignore
export type ContextAdd<
  $ClientTransports extends ContextTransports,
  $Transport extends Transport.Data,
> =
    {
        readonly configurations:
          & Omit<$ClientTransports['configurations'], $Transport['name']>
          & {
              [_ in $Transport['name']]: $Transport['configurator']['default']
            }
        readonly current: $ClientTransports['current'] extends undefined
          ? $Transport['name']
          : $ClientTransports['current']
        readonly registry: $ClientTransports['registry'] & {
          [_ in $Transport['name']]: $Transport
        }
      }

// dprint-ignore
export type ContextAddMany<
  $ClientTransports extends ContextTransports,
  $Transports extends readonly Transport.Data[]
> =
  {
    readonly configurations:
      // & Omit<$ClientTransports['configurations'], $Transports['name']>
      & Tuple.IndexByToValue2<$Transports, 'name', 'configurator', 'default'>
      & {
          [
            _ in keyof $ClientTransports['configurations']
              as _ extends keyof Tuple.IndexByToValue2<$Transports, 'name', 'configurator', 'default'>
                ? never
                : _
          ]:
            $ClientTransports['configurations'][_]
        }
    readonly current: $ClientTransports['current'] extends undefined
      ? $Transports[0]['name']
      : $ClientTransports['current']
    readonly registry: 
      & $ClientTransports['registry']
      & Tuple.IndexBy<$Transports, 'name'>
  }
