import type { ConfigInit } from '../entrypoints/client.js'
import type { Anyware } from '../lib/anyware/_namespace.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { Configurator } from '../types/configurator.js'
import { type ClientTransports, Context } from '../types/context.js'
import { anywareProperties } from './properties/anyware.js'
import { type gqlOverload, gqlProperties } from './properties/gql/gql.js'
import { type ScalarMethod, scalarProperties, type TypeErrorMissingSchemaMap } from './properties/scalar.js'
import { type TransportMethod, transportProperties } from './properties/transport.js'
import { type UseMethod, useProperties } from './properties/use.js'
import { withProperties } from './properties/with.js'

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
    configurationInput extends {
      [_ in keyof $Context['configurators']]?: $Context['configurators'][_]['input']
    },
  >(configurationInput: configurationInput) => Client<
    & Omit<$Context, 'configuration'>
    & {
      configuration: {
        [_ in keyof $Context['configuration']]: _ extends keyof configurationInput
          ? configurationInput[_] extends object ? Configurator.ApplyInputResolver$Func<
              $Context['configurators'][_],
              $Context['configuration'][_],
              configurationInput[_]
            >
          : $Context['configuration'][_]
          : $Context['configuration'][_]
      }
    },
    $Extension
  >
  // // @ts-expect-error
  // {
  //   [_ in keyof $Context]: _ extends keyof NormalizeConfigInit<$Context['input'] & $ConfigurationInput>
  //     ? NormalizeConfigInit<$Context['input'] & $ConfigurationInput>[_]
  //     : $Context[_]
  // },
  // $Extension
  // > // $ExtensionChainable
}

// -------------
// declare const c1: ClientEmpty
// c1._.configurators
// c1._.configuration.check.preflight
// const c2 = c1.with({ check: { preflight: false } })
// c2._.configuration.check.preflight
// -------------

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): ClientConstructor<$Context> => {
  return (configInit) => {
    const newContext = Context.updateContextConfigInit(context, configInit ?? {})
    const client = createWithContext(newContext)
    return client
  }
}

export type ClientConstructor<$Context extends Context = Context.States.Empty> = <
  const $ConfigInit extends ConfigInit,
>(
  configInit?: $ConfigInit,
) => Client<
  // @ts-expect-error
  {
    [k in keyof $Context]: k extends keyof NormalizeConfigInit<$ConfigInit> ? NormalizeConfigInit<$ConfigInit>[k]
      : $Context[k]
  },
  {}
> // {}

export const create: ClientConstructor = (configurationInput) => {
  const initialContext = {
    ...Context.States.empty,
    configuration: coreConfigurator.inputResolver({}, configurationInput ?? {}),
  }

  return createWithContext(initialContext)
}

export const createWithContext = (
  context: Context,
) => {
  // @ts-expect-error ignoreme
  const client: Client = {
    _: context,
    ...withProperties(createWithContext, context),
    ...transportProperties(createWithContext, context),
    ...gqlProperties(createWithContext, context),
    ...useProperties(createWithContext, context),
    ...anywareProperties(createWithContext, context),
    ...scalarProperties(createWithContext, context),
  }

  context.extensions.forEach(_ => {
    const propertiesDynamic = _.propertiesDynamic?.({
      configuration: context.configuration[_.name],
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
