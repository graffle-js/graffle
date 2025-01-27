import type { Anyware } from '../lib/anyware/_namespace.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { Configurator } from '../types/configurator.js'
import type { ConfiguratorIndexInput } from '../types/ConfiguratorIndex.js'
import { type ClientTransports, Context } from '../types/context.js'
import {
  type CalcConfigurationIndexUpdateForContext,
  calcConfigurationIndexUpdateForContext,
} from './calcConfigurationIndexUpdateForContext.js'
import { anywareProperties } from './properties/anyware.js'
import { type gqlOverload, gqlProperties } from './properties/gql/gql.js'
import { type ScalarMethod, scalarProperties, type TypeErrorMissingSchemaMap } from './properties/scalar.js'
import { type TransportMethod, transportProperties } from './properties/transport.js'
import { type UseMethod, useProperties } from './properties/use.js'

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
  // /**
  //  * TODO
  //  */
  // scalar: null extends $Context['schema']['map'] ? TypeErrorMissingSchemaMap
  //   : ScalarMethod<
  //     $Context,
  //     $Extension
  //   >
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
  // anyware: (
  //   interceptor: Anyware.Interceptor.InferFromPipeline<
  //     Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
  //   >,
  // ) => Client<$Context, $Extension>
  with: <
    const configurationIndexInput extends CalcConfigurationIndexInputForContext<$Context>,
  >(configurationIndexInput: configurationIndexInput) => Client<
    CalcConfigurationIndexUpdateForContext<$Context, configurationIndexInput>,
    $Extension
  >
}

export type CalcConfigurationIndexInputForContext<$Context extends Context> = {
  readonly [_ in keyof $Context['configuratorIndex']]?: $Context['configuratorIndex'][_]['input']
}

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

// Almost identical to `with` except that input is optional.
export type Create<$Context extends Context = Context.States.Empty> = <
  const configurationIndexInput extends CalcConfigurationIndexInputForContext<$Context>,
>(configurationIndexInput?: configurationIndexInput) => Client<
  CalcConfigurationIndexUpdateForContext<$Context, configurationIndexInput>,
  {}
>

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): Create<$Context> =>
(configurationIndexInput?: ConfiguratorIndexInput) => {
  const newContext = configurationIndexInput
    ? calcConfigurationIndexUpdateForContext(context, configurationIndexInput)
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
    with(configurationIndexInput) {
      const newContext = calcConfigurationIndexUpdateForContext(context, configurationIndexInput)
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
    const propertiesDynamic = _.propertiesDynamic?.({
      configuration: context.configurationIndex[_.name],
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
