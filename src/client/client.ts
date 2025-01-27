import type { Anyware } from '../lib/anyware/_namespace.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { ConfigurationIndex } from '../types/ConfigurationIndex.js'
import type { Configurator } from '../types/configurator.js'
import { type ClientTransports, Context } from '../types/context.js'
import { Schema } from '../types/Schema/__.js'
import { type gqlOverload, gqlProperties } from './properties/gql/gql.js'
import { contextAddScalar, ScalarMethod } from './properties/scalar.js'
import { type TransportMethod, transportProperties } from './properties/transport.js'
import { type UseMethod, useProperties } from './properties/use.js'
import { type ContextAddConfiguration, contextAddConfigurationInput } from './properties/with.js'

export type ClientEmpty = Client<Context.States.Empty, {}>

export type ClientGeneric = Client<Context, {}>

export type Client<
  $Context extends Context, // = Context,
  $Extension extends object, // = object,
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
  // gql: ClientTransports.PreflightCheck<
  //   $Context,
  //   gqlOverload<$Context>
  // >
  /**
   * TODO
   */
  scalar: undefined extends $Context['configuration']['schema']['current']['map']
    ? ScalarMethod.TypeErrorMissingSchemaMap
    : ScalarMethod<$Context, $Extension>
  // /**
  //  * TODO
  //  */
  // transport: TransportMethod<
  //   $Context,
  //   $Extension
  // >
  // /**
  //  * TODO
  //  */
  // use: UseMethod<
  //   $Context,
  //   $Extension
  // > // $ExtensionChainable
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
      const newContext = {
        ...context,
        requestPipelineInterceptors: [
          ...context.requestPipelineInterceptors,
          interceptor,
        ],
      }
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
    // todo: move other properties into static definitions here.
  }

  // const properties = {
  // ...transportProperties({ client, context, createClient: createWithContext }),
  // ...gqlProperties({ client, context, createClient: createWithContext }),
  // ...useProperties({ client, context, createClient: createWithContext }),
  // ...anywareProperties({ client, context, createClient: createWithContext }),
  // ...scalarProperties({ client, context, createClient: createWithContext }),
  // }

  // Object.assign(client, properties)

  context.extensions.forEach(_ => {
    const configurationIndex = context.configuration as ConfigurationIndex
    const configurationIndexEntry = configurationIndex[_.name]
    if (!configurationIndexEntry) throw new Error(`Configuration entry for ${_.name} not found`)

    const propertiesDynamic = _.propertiesDynamic?.({
      configuration: configurationIndexEntry.current,
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
