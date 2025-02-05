import type { Extension } from '../extension/$.js'
import { Anyware } from '../lib/anyware/_namespace.js'
import { getOperationType } from '../lib/grafaid/document.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { RequestPipeline } from '../requestPipeline/RequestPipeline.js'
import type { ConfigurationIndex } from '../types/ConfigurationIndex.js'
import { Context, type ContextFragment, contextMergeFragment } from '../types/context.js'
import { handleOutput } from './handleOutput.js'
import { Configuration } from './properties/configuration/__.js'
import { type ContextAddOneExtension, contextFragmentExtensionsAdd } from './properties/extensions/extensions.js'
import { Properties } from './properties/properties/__.js'
import { GqlMethod } from './properties/request/request.js'
import { SendMethod } from './properties/request/send.js'
import { RequestInterceptors } from './properties/requestInterceptors/__.js'
import { Scalars } from './properties/scalars/__.js'
import { Transports } from './properties/transports/__.js'

export type ClientEmpty = Client<Context.States.Empty>

export interface Client_justContext {
  _: Context
}

export type Client<
  $Context extends Context = Context,
  __ =
    & ClientBase<$Context>
    & $Context['properties']['static']
    & Properties.RunPropertiesComputers<$Context>,
> = __

export interface ClientBase<$Context extends Context> {
  _: $Context
  /**
   * TODO
   */
  gql: Transports.ContextTransports.PreflightCheck<
    $Context,
    GqlMethod<$Context>
  >
  /**
   * TODO
   */
  scalar: undefined extends $Context['configuration']['schema']['current']['map']
    ? Scalars.ScalarMethod.TypeErrorMissingSchemaMap
    : Scalars.ScalarMethod<$Context>
  /**
   * TODO
   */
  transport: Transports.TransportMethod<$Context>
  /**
   * TODO
   */
  properties: Properties.AddPropertiesMethod<$Context>
  /**
   * TODO
   */
  use: <extension extends Extension>(extension: extension) => Client<
    ContextAddOneExtension<$Context, extension>
  >
  anyware: (
    interceptor: Anyware.Interceptor.InferFromPipeline<
      Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
    >,
  ) => Client<$Context>
  with: <
    const configurationInput extends CalcConfigurationInputForContext<$Context>,
  >(configurationInput: configurationInput) => Client<
    // @ts-expect-error Non-index type being used
    ContextFragmentConfigurationConfigure<$Context, configurationInput>
  >
}

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

// Almost identical to `with` except that input is optional.
export type Create<$Context extends Context = Context.States.Empty> = <
  const configurationInput extends CalcConfigurationInputForContext<$Context>,
>(configurationInput?: configurationInput) => Client<
  // @ts-expect-error: Is missing standard configurators
  ContextFragmentConfigurationConfigure<$Context, configurationInput>
>

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): Create<$Context> =>
(configurationInput) => {
  const configurationInput_ = configurationInput as undefined | ConfigurationIndex.Input
  const newContext = configurationInput_
    ? contextMergeFragment(
      context,
      Configuration.contextFragmentConfigurationConfigure(context, configurationInput_),
    )
    : context
  return createWithContext(newContext) as any
}

export const create: Create = createConstructorWithContext(Context.States.empty)

export const createWithContext = <$Context extends Context>(
  context: $Context,
): Client<$Context> => {
  const copy = (fragment: null | ContextFragment) => {
    if (!fragment) return client
    const newContext = contextMergeFragment(context, fragment)
    // if (newContext === context) return client // todo is needed?
    return createWithContext(newContext) as any
  }

  const client: Client<$Context> = {
    ...({} as Client<$Context>),
    _: context,
    anyware(interceptor) {
      const interceptor_ = interceptor as any as RequestPipeline.BaseInterceptor
      return copy(RequestInterceptors.contextFragmentRequestInterceptorsAdd(context, interceptor_))
    },
    properties(properties) {
      const isComputed = typeof properties === `function`
      const static_ = !isComputed
        ? properties
        : undefined
      const computed = isComputed
        ? [properties]
        : undefined
      return copy(Properties.contextFragmentPropertiesAdd(context, { static: static_, computed }))
    },
    use(extension) {
      return copy(contextFragmentExtensionsAdd(context, extension))
    },
    scalar: ((...args: Scalars.ScalarMethod.Arguments) => {
      const scalar = Scalars.ScalarMethod.normalizeArguments(args)
      return copy(Scalars.contextScalarsAdd(context, scalar))
    }) as any,
    with(configurationInput) {
      const configurationInput_ = configurationInput as ConfigurationIndex.Input
      return copy(Configuration.contextFragmentConfigurationConfigure(context, configurationInput_))
    },
    transport: ((...args: Transports.TransportMethod.Arguments) => {
      const input = Transports.TransportMethod.normalizeArguments(args)
      // let fragment2: ContextFragmentTransports
      switch (input[0]) {
        case Transports.TransportMethod.overloadCase.configureCurrent: {
          return copy(Transports.contextFragmentTransportsConfigureCurrent(context, input[1]))
        }
        case Transports.TransportMethod.overloadCase.setCurrent: {
          return copy(Transports.contextFragmentTransportsSetCurrent(context, input[1], input[2]))
        }
        case Transports.TransportMethod.overloadCase.addType: {
          return copy(Transports.contextFragmentTransportsAdd(context, input[1]))
        }
      }
    }) as any,
    gql: ((...args: GqlMethod.Arguments) => {
      const { document: query } = GqlMethod.normalizeArguments(args)

      return {
        send: async (...args: SendMethod.Arguments) => {
          if (!context.transports.current) throw new Error(`No transport selected`)

          const { operationName, variables } = SendMethod.normalizeArguments(args)
          const request = {
            query,
            variables,
            operationName,
          }
          const operationType = getOperationType(request)
          if (!operationType) throw new Error(`Could not get operation type`)

          const analyzedRequest = {
            operation: operationType,
            query,
            variables,
            operationName,
          }

          const initialInput = {
            transportType: context.transports.current,
            ...context.transports.configurations[context.transports.current],
            state: context,
            request: analyzedRequest,
          } as RequestPipeline.Base['input']

          const requestPipeline = Anyware.Pipeline.create(context.requestPipelineDefinition)
          const result = await Anyware.PipelineDefinition.run(requestPipeline, {
            initialInput,
            interceptors: context.requestPipelineInterceptors,
          })

          return handleOutput(context, result)
        },
      }
    }) as any,
  }

  Object.assign(client, context.properties.static)

  context.properties.computed.forEach(propertiesComputer => {
    Object.assign(
      client,
      propertiesComputer({
        configuration: context.configuration,
        context,
        client,
      }),
    )
  })

  // todo: access computed properties from context
  context.extensions.forEach(_ => {
    // const configurationIndex = context.configuration as ConfigurationIndex
    // const configurationIndexEntry = configurationIndex[_.name]
    // if (!configurationIndexEntry && _.configurator) throw new Error(`Configuration entry for ${_.name} not found`)

    const propertiesComputed = _.propertiesComputed.reduce((acc, propertiesComputer) => {
      return {
        ...acc,
        ...propertiesComputer({
          // configuration: configurationIndexEntry?.current,
          configuration: context.configuration,
          client,
          context,
        }),
      }
    }, {})

    Object.assign(client, propertiesComputed)
  })

  return client
}

export type CalcConfigurationInputForContext<$Context extends Context> = {
  readonly [_ in keyof $Context['configuration']]?:
    // @ts-expect-error Non-index type being used
    $Context['configuration'][_]['configurator']['input']
}
