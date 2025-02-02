import type { Extension } from '../extension/$.js'
import { Anyware } from '../lib/anyware/_namespace.js'
import { getOperationType } from '../lib/grafaid/document.js'
import type { ObjectMergeShallow } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { RequestPipeline } from '../requestPipeline/RequestPipeline.js'
import type { ConfigurationIndex } from '../types/ConfigurationIndex.js'
import { Context, contextMergeFragment } from '../types/context.js'
import { handleOutput } from './handleOutput.js'
import { type ContextAddConfiguration, contextAddConfigurationInput } from './properties/addConfiguration.js'
import { type ContextAddOneExtension, contextFragmentExtensionsAddOne } from './properties/addExtension.js'
import { type AddPropertiesMethod, contextFragmentAddProperties } from './properties/addProperties.js'
import { contextFragmentAddRequestInterceptor } from './properties/addRequestInterceptor.js'
import { contextAddScalar, ScalarMethod } from './properties/addScalar.js'
import { GqlMethod } from './properties/request/request.js'
import { SendMethod } from './properties/request/send.js'
import type { ContextFragmentTransports, ContextTransports } from './properties/transport.js'
import {
  contextFragmentTransportsAddType,
  contextFragmentTransportsConfigureCurrent,
  contextFragmentTransportsSetCurrent,
  TransportMethod,
} from './properties/transport.js'

export type ClientEmpty = Client<Context.States.Empty, {}>

export type ClientGeneric = Client<Context, {}>

export interface Client_justContext {
  _: Context
}

export type Client<
  $Context extends Context = Context,
  $Extension extends object = object,
> =
  & ClientBase<$Context, $Extension>
  & $Context['properties']['static']
  & $Extension
// & Extension.ApplyAndMergeBuilderExtensions<$Context['extensions'], $Context>

export interface ClientBase<
  $Context extends Context,
  $Extension extends object,
> // out $ExtensionChainable extends ExtensionChainableRegistry,
{
  _: $Context
  // _extension: $Extension
  // _extensionChainable: $ExtensionChainable
  // extendWithPropertiesChainable: <
  //   extensionChainable extends ExtensionChainable,
  // >() => Client<$Context, $Extension, $ExtensionChainable & { [_ in extensionChainable['name']]: extensionChainable }>
  // extendWithProperties: <
  //   extension extends {},
  // >(extension: extension) => Client<$Context, $Extension & extension, $ExtensionChainable>
  gql: ContextTransports.PreflightCheck<
    $Context,
    GqlMethod<$Context>
  >
  /**
   * TODO
   */
  scalar: undefined extends $Context['configuration']['schema']['current']['map']
    ? ScalarMethod.TypeErrorMissingSchemaMap
    : ScalarMethod<$Context, $Extension>
  /**
   * TODO
   */
  transport: TransportMethod<$Context>
  /**
   * TODO
   */
  properties: AddPropertiesMethod<$Context>
  /**
   * TODO
   */
  use: <extension extends Extension>(extension: extension) => Client<
    ContextAddOneExtension<$Context, extension>,
    $Extension
  >
  anyware: (
    interceptor: Anyware.Interceptor.InferFromPipeline<
      Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
    >,
  ) => Client<$Context, $Extension>
  with: <
    const configurationInput extends CalcConfigurationInputForContext<$Context>,
  >(configurationInput: configurationInput) => Client<
    // @ts-expect-error Non-index type being used
    ContextAddConfiguration<$Context, configurationInput>,
    $Extension
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
  ContextAddConfiguration<$Context, configurationInput>,
  {}
>

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): Create<$Context> =>
(configurationInput) => {
  const newContext = configurationInput
    ? contextAddConfigurationInput(context, configurationInput as ConfigurationIndex.Input)
    : context
  return createWithContext(newContext) as any
}

export const create: Create = createConstructorWithContext(Context.States.empty)

export const createWithContext = <$Context extends Context>(
  context: $Context,
): Client<$Context, {}> => {
  const client: Client<$Context, {}> = {
    ...({} as Client<$Context, {}>),
    _: context,
    anyware(interceptor) {
      const interceptor_ = interceptor as any as RequestPipeline.BaseInterceptor
      const newContext = contextMergeFragment(context, contextFragmentAddRequestInterceptor(context, interceptor_))
      return createWithContext(newContext) as any
    },
    properties(properties) {
      const newContext = contextMergeFragment(context, contextFragmentAddProperties(context, properties))
      return createWithContext(newContext) as any
    },
    use(extension) {
      const newContext = contextMergeFragment(context, contextFragmentExtensionsAddOne(context, extension))
      return createWithContext(newContext) as any
    },
    scalar: ((...args: ScalarMethod.Arguments) => {
      const scalar = ScalarMethod.normalizeArguments(args)
      const newContext = contextAddScalar(context, scalar)
      return createWithContext(newContext) as any
    }) as any,
    with(configurationInput) {
      const newContext = contextAddConfigurationInput(context, configurationInput as ConfigurationIndex.Input)
      if (newContext === context) return client
      return createWithContext(newContext) as any
    },
    transport: ((...args: TransportMethod.Arguments) => {
      const input = TransportMethod.normalizeArguments(args)
      let fragment2: ContextFragmentTransports
      switch (input[0]) {
        case TransportMethod.overloadCase.configureCurrent: {
          const fragmentMaybe = contextFragmentTransportsConfigureCurrent(context, input[1])
          if (!fragmentMaybe) return client
          fragment2 = fragmentMaybe
          break
        }
        case TransportMethod.overloadCase.setCurrent: {
          const fragmentMaybe = contextFragmentTransportsSetCurrent(context, input[1], input[2])
          if (!fragmentMaybe) return client
          fragment2 = fragmentMaybe
          break
        }
        case TransportMethod.overloadCase.addType: {
          fragment2 = contextFragmentTransportsAddType(context, input[1])
          break
        }
      }

      return createWithContext(Object.freeze({
        ...context,
        ...fragment2,
      })) as any
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

  // todo: access computed properties from context
  context.extensions.forEach(_ => {
    const configurationIndex = context.configuration as ConfigurationIndex
    const configurationIndexEntry = configurationIndex[_.name]
    if (!configurationIndexEntry && _.configurator) throw new Error(`Configuration entry for ${_.name} not found`)

    const propertiesComputed = _.propertiesComputed.reduce((acc, propertiesComputer) => {
      return {
        ...acc,
        ...propertiesComputer({
          configuration: configurationIndexEntry?.current,
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
