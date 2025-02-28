import type { Context } from '../context/context.js'
import { Configuration } from '../context/fragments/configuration/_namespace.js'
import { Extensions } from '../context/fragments/extensions/__.js'
import type { Extension } from '../context/fragments/extensions/dataType/_namespace.js'
import type { ContextAddAndApplyOne } from '../context/fragments/extensions/reducers/addAndApplyOne.js'
import { Output } from '../context/fragments/output/_namespace.js'
import { Properties } from '../context/fragments/properties/__.js'
import { GqlMethod } from '../context/fragments/request/request.js'
import { SendMethod } from '../context/fragments/request/send.js'
import { RequestInterceptors } from '../context/fragments/requestInterceptors/__.js'
import { Scalars } from '../context/fragments/scalars/_namespace.js'
import { Transports } from '../context/fragments/transports/_namespace.js'
import { Anyware } from '../lib/anyware/_namespace.js'
import { getOperationType } from '../lib/grafaid/document.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { RequestPipeline } from '../requestPipeline/RequestPipeline.js'
import { type ContextEmpty, contextEmpty } from '../types/ContextEmpty.js'
import { type ContextFragment, ContextFragments } from '../types/ContextFragment.js'
import { TransportMethod } from './methods/transport.js'

export type ClientEmpty = Client<ContextEmpty>

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
  gql: Configuration.Check.Preflight<
    $Context,
    GqlMethod<$Context>
  >
  /**
   * TODO
   */
  scalar: undefined extends $Context['configuration']['schema']['current']['map']
    ? Scalars.Method.TypeErrorMissingSchemaMap
    : Scalars.Method<$Context>
  /**
   * TODO
   */
  transport: TransportMethod<$Context>
  /**
   * TODO
   */
  properties: Properties.AddPropertiesMethod<$Context>
  /**
   * TODO
   */
  use: <extension extends Extension.Data>(extension: extension) => Client<ContextAddAndApplyOne<$Context, extension>>
  /**
   * TODO
   */
  anyware: (
    interceptor: Anyware.Interceptor.InferFromPipeline<
      Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
    >,
  ) => Client<$Context>
  /**
   * TODO
   */
  with: <
    const configurationInput extends CalcConfigurationInputForContext<$Context>,
  >(configurationInput: configurationInput) => Client<
    // @ts-expect-error Non-index type being used
    Configuration.Add<$Context, configurationInput>
  >
}

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

// Almost identical to `with` except that input is optional.
export type Create<$Context extends Context = ContextEmpty> = <
  const configurationInput extends CalcConfigurationInputForContext<$Context>,
>(configurationInput?: configurationInput) => Client<
  // @ts-expect-error: Is missing standard configurators
  Configuration.Add<$Context, configurationInput>
>

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): Create<$Context> =>
(configurationInput) => {
  const configurationInput_ = configurationInput as undefined | Configuration.ConfigurationIndex.Input
  const newContext = configurationInput_
    ? ContextFragments.merge(
      context,
      Configuration.add(context, configurationInput_),
    )
    : context
  return createWithContext(newContext) as any
}

export const create: Create = createConstructorWithContext(contextEmpty)

export const createWithContext = <$Context extends Context>(
  context: $Context,
): Client<$Context> => {
  const copy = (fragment: null | ContextFragment) => {
    const newContext = ContextFragments.merge(context, fragment)
    if (newContext === context) return client
    return createWithContext(newContext) as any
  }

  const client: Client<$Context> = {
    ...({} as Client<$Context>),
    _: context,
    anyware(interceptor) {
      const interceptor_ = interceptor as any as RequestPipeline.BaseInterceptor
      return copy(RequestInterceptors.add(context, interceptor_))
    },
    properties(properties) {
      const isComputed = typeof properties === `function`
      const static_ = !isComputed
        ? properties
        : undefined
      const computed = isComputed
        ? [properties]
        : undefined
      return copy(Properties.contextFragmentPropertiesAdd(context, { static: static_, computed: computed as any }))
    },
    use(extension) {
      return copy(Extensions.addAndApplyMany(context, [extension]))
    },
    scalar: ((...args: Scalars.Method.Arguments) => {
      const scalar = Scalars.Method.normalizeArguments(args)
      return copy(Scalars.contextAdd(context, scalar))
    }) as any,
    with(configurationInput) {
      const configurationInput_ = configurationInput as Configuration.ConfigurationIndex.Input
      return copy(Configuration.add(context, configurationInput_))
    },
    transport: ((...args: TransportMethod.Arguments) => {
      const input = TransportMethod.normalizeArguments(args)
      // let fragment2: ContextFragmentTransports
      switch (input[0]) {
        case TransportMethod.overloadCase.configureCurrent: {
          return copy(Transports.configureCurrentOrThrow(context, input[1]))
        }
        case TransportMethod.overloadCase.setCurrent: {
          return copy(Transports.setCurrent(context, input[1], input[2]))
        }
        case TransportMethod.overloadCase.addType: {
          return copy(Transports.addMany(context, [input[1]]))
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
            [context.transports.registry[context.transports.current]!.discriminant[`name`]]:
              context.transports.registry[context.transports.current]!.discriminant[`value`],
            [context.transports.registry[context.transports.current]!.configurationMount]:
              context.transports.configurations[context.transports.current],
            state: context,
            request: analyzedRequest,
          } as RequestPipeline.Base['input']

          const requestPipeline = Anyware.Pipeline.create(context.requestPipelineDefinition)
          const result = await Anyware.PipelineDefinition.run(requestPipeline, {
            initialInput,
            interceptors: context.requestPipelineInterceptors,
          })

          return Output.handle(context, result)
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
        client: client as any,
      }),
    )
  })

  // todo: access computed properties from context
  context.extensions.forEach(_ => {
    // const configurationIndex = context.configuration as ConfigurationIndex
    // const configurationIndexEntry = configurationIndex[_.name]
    // if (!configurationIndexEntry && _.configurator) throw new Error(`Configuration entry for ${_.name} not found`)

    _
    const propertiesComputed = _.propertiesComputed.reduce((acc, propertiesComputer) => {
      return {
        ...acc,
        ...propertiesComputer({
          // configuration: configurationIndexEntry?.current,
          configuration: context.configuration,
          client: client as any,
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
