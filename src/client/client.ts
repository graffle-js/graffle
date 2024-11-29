import { requestMethodsProperties } from '../documentBuilder/requestMethods/requestMethods.js' // todo
import type { Anyware } from '../lib/anyware/__.js'
import { __, proxyGet } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
import type { ScalarMethod, TypeErrorMissingSchemaMap } from './builderExtensions/scalar.js'
import type { TransportMethod } from './builderExtensions/transport.js'
import type { UseMethod } from './builderExtensions/use.js'
import { type ConfigInit, type NormalizeConfigInit } from './Configuration/ConfigInit.js'
import { type ClientTransports, Context } from './context.js'
import type { gqlOverload } from './gql/gql.js'

export type ClientEmpty = Client<Context.States.Empty, {}, {}>
export type ClientGeneric = Client<Context, object, ExtensionChainableRegistry>

export type Client<
  $Context extends Context, // = Context,
  $Extension extends object, // = object,
  $ExtensionChainable extends ExtensionChainableRegistry, // = ExtensionChainableRegistry,
> =
  & ClientBase<$Context, $Extension, $ExtensionChainable>
  & $Extension
  & {
    [k in keyof $ExtensionChainable]: TypeFunction.Call<
      $ExtensionChainable[k],
      [$Context, $Extension, $ExtensionChainable]
    >
  }
  & (
    // todo
    // GlobalRegistry.Has<$Context['name']> extends false
    // eslint-disable-next-line
    // @ts-ignore passes after generation
    GlobalRegistry.Has<$Context['name']> extends false ? {}
      : (
        // eslint-disable-next-line
        // @ts-ignore Passes after generation
        & TypeFunction.Call<GlobalRegistry.GetOrDefault<$Context['name']>['interfaces']['Root'], $Context>
        & {
          // eslint-disable-next-line
          // @ts-ignore Passes after generation
          document: TypeFunction.Call<GlobalRegistry.GetOrDefault<$Context['name']>['interfaces']['Document'], $Context>
        }
      )
  )

export interface ClientBase<
  $Context extends Context,
  out $Extension extends object,
  out $ExtensionChainable extends ExtensionChainableRegistry,
> {
  _: $Context
  // _extension: $Extension
  // _extensionChainable: $ExtensionChainable
  extendWithPropertiesChainable: <
    extensionChainable extends ExtensionChainable,
  >() => Client<$Context, $Extension, $ExtensionChainable & { [_ in extensionChainable['name']]: extensionChainable }>
  extendWithProperties: <
    extension extends {},
  >(extension: extension) => Client<$Context, $Extension & extension, $ExtensionChainable>
  gql: ClientTransports.PreflightCheck<
    $Context,
    gqlOverload<$Context>
  >
  scalar: null extends $Context['schemaMap'] ? TypeErrorMissingSchemaMap
    : ScalarMethod<
      $Context,
      $Extension,
      $ExtensionChainable
    >
  transport: TransportMethod<
    $Context,
    $Extension,
    $ExtensionChainable
  >
  use: UseMethod<
    $Context,
    $Extension,
    $ExtensionChainable
  >
  anyware: (
    interceptor: Anyware.Interceptor.InferFromPipeline<
      Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
    >,
  ) => Client<$Context, $Extension, $ExtensionChainable>
  with: <$ConfigInit extends ConfigInit>(
    configInit: $ConfigInit,
  ) => Client<
    // @ts-expect-error
    {
      [_ in keyof $Context]: _ extends keyof NormalizeConfigInit<$Context['input'] & $ConfigInit>
        ? NormalizeConfigInit<$Context['input'] & $ConfigInit>[_]
        : $Context[_]
    },
    $Extension,
    $ExtensionChainable
  >
}

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {
  name: string
}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

export const createProperties = (
  callback: (
    clientConstructor: (context: Context) => ClientGeneric,
    context: Context,
  ) => Partial<ClientGeneric>,
) => {
  return callback
}

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): ClientConstructor<$Context> => {
  return (configInit) => __(context, configInit)
}

export type ClientConstructor<$Context extends Context = Context.States.Empty> = <
  const $ConfigInit extends ConfigInit = {},
>(
  configInit?: $ConfigInit,
) => Client<
  // @ts-expect-error
  {
    [k in keyof $Context]: k extends keyof NormalizeConfigInit<$ConfigInit> ? NormalizeConfigInit<$ConfigInit>[k]
      : $Context[k]
  },
  {},
  {}
>

export const create: ClientConstructor = (configInit) => {
  const initialContext = Context.Updaters.addConfigInit(
    // todo remove this, client builder should never mutate context, just putting this here for now while working on other stuff.
    structuredClone(Context.States.contextEmpty),
    configInit ?? {},
  )
  return createWithContext(initialContext)
}

export const createWithContext = (
  context: Context,
) => {
  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    // ...builderExtensionInternal(createWithContext, context),
    // ...builderExtensionGql(createWithContext, context),
    // ...builderExtensionWith(createWithContext, context),
    // ...builderExtensionUse(createWithContext, context),
    // ...builderExtensionAnyware(createWithContext, context),
    // ...builderExtensionScalar(createWithContext, context),
  }

  // todo test that access to this works without generation in a unit like test. We discovered bug and covered this in an e2e test.
  Object.assign(clientDirect, {
    ...requestMethodsProperties(createWithContext, context),
  })

  const clientProxy = proxyGet(clientDirect, ({ path, property }) => {
    // eslint-disable-next-line
    // @ts-ignore fixme "Type instantiation is excessively deep and possibly infinite"
    const onGetHandlers = context.extensions.map(_ => _.builder).filter(_ => _ !== undefined)

    for (const onGetHandler of onGetHandlers) {
      const result = onGetHandler.implementation({
        client: clientDirect,
        path,
        property,
      })
      if (result !== undefined) return result
    }

    return undefined
  }) as any

  return clientProxy
}
