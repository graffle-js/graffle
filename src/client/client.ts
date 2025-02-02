import type { Extension } from '../extension/$.js'
import { Anyware } from '../lib/anyware/_namespace.js'
import { getOperationType } from '../lib/grafaid/document.js'
import { isObjectEmpty } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { RequestPipeline } from '../requestPipeline/RequestPipeline.js'
import type { ConfigurationIndex } from '../types/ConfigurationIndex.js'
import { Context } from '../types/context.js'
import { handleOutput } from './handleOutput.js'
import { type ContextAddConfiguration, contextAddConfigurationInput } from './properties/addConfiguration.js'
import { type ContextAddOneExtension, contextAddOneExtension } from './properties/addExtension.js'
import { contextAddRequestInterceptor } from './properties/addRequestInterceptor.js'
import { contextAddScalar, ScalarMethod } from './properties/addScalar.js'
import { GqlMethod } from './properties/request/request.js'
import { SendMethod } from './properties/request/send.js'
import type { ContextTransports } from './properties/transport.js'
import { contextAddTransport, contextUpdateTransport, TransportMethod } from './properties/transport.js'

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
  transport: TransportMethod<$Context, $Extension>
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
      const newContext = contextAddRequestInterceptor(context, interceptor as any)
      return createWithContext(newContext) as any
    },
    use(extension) {
      const newContext = contextAddOneExtension(context, extension)
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
      let newContext: Context
      switch (input[0]) {
        case TransportMethod.overloadCase.setType: {
          const noChange = (!input[2] || isObjectEmpty(input[2])) && input[1] === context.transports.current
          if (noChange) return client
          newContext = contextUpdateTransport(context, input[1], input[2] ?? {})
          break
        }
        case TransportMethod.overloadCase.configureCurrent: {
          if (!context.transports.current) {
            throw new Error(`No transport is currently set.`)
          }
          const noChange = isObjectEmpty(input[1])
          if (noChange) return client
          newContext = contextUpdateTransport(context, context.transports.current, input[1])
          break
        }
        case TransportMethod.overloadCase.addType: {
          newContext = contextAddTransport(context, input[1])
          break
        }
      }

      return createWithContext(newContext) as any
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

  // const properties = {
  // ...transportProperties({ client, context, createClient: createWithContext }),
  // }

  // Object.assign(client, properties)

  context.extensions.forEach(_ => {
    const configurationIndex = context.configuration as ConfigurationIndex
    const configurationIndexEntry = configurationIndex[_.name]
    if (!configurationIndexEntry && _.configurator) throw new Error(`Configuration entry for ${_.name} not found`)

    const propertiesDynamic = _.propertiesDynamic?.({
      configuration: configurationIndexEntry?.current,
      client,
      context,
    })
    const properties = _.propertiesStatic && propertiesDynamic
      ? {
        ..._.propertiesStatic,
        ...propertiesDynamic,
      }
      : (_.propertiesStatic ?? propertiesDynamic ?? {})

    Object.assign(client, properties)
  })

  return client
}

export type CalcConfigurationInputForContext<$Context extends Context> = {
  readonly [_ in keyof $Context['configuration']]?:
    // @ts-expect-error Non-index type being used
    $Context['configuration'][_]['configurator']['input']
}
