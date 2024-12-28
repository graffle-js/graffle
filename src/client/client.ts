import { requestMethodsProperties } from '../documentBuilder/requestMethods/requestMethods.js'
import type { Extension } from '../extension/__.js'
import type { BuilderExtension } from '../extension/builder.js'
import type { Anyware } from '../lib/anyware/__.js'
import { proxyGet } from '../lib/prelude.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import { type ClientTransports, Context } from '../types/context.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
import { type ConfigInit, type NormalizeConfigInit, updateContext } from './Configuration/ConfigInit.js'
import { anywareProperties } from './properties/anyware.js'
import { type gqlOverload, gqlProperties } from './properties/gql/gql.js'
import { type ScalarMethod, scalarProperties, type TypeErrorMissingSchemaMap } from './properties/scalar.js'
import { type TransportMethod, transportProperties } from './properties/transport.js'
import { type UseMethod, useProperties } from './properties/use.js'
import { withProperties } from './properties/with.js'

export type ClientEmpty = Client<Context.States.Empty, {}>

export type ClientGeneric = Client<Context, {}>

// dprint-ignore
type ApplyBuilderExtensions<$Extension extends Extension[], $Context extends Context> =
  $Extension extends [infer $ExtensionFirst extends Extension, ...infer $ExtensionRest extends Extension[]]
    ? $ExtensionFirst['builder'] extends BuilderExtension<ExtensionChainable>
      ?
        & TypeFunction.Call<
            $ExtensionFirst['builder']['type'],
            [$Context]
          >
        & ApplyBuilderExtensions<$ExtensionRest, $Context>
      : {}
    : {}

export type Client<
  $Context extends Context, // = Context,
  $Extension extends object, // = object,
> =
  & ClientBase<$Context, $Extension>
  & $Extension
  & (
    ApplyBuilderExtensions<$Context['extensions'], $Context>
  )
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
          document: ClientTransports.PreflightCheck<
            $Context,
            TypeFunction.Call<
              GlobalRegistry.GetOrDefault<
                // @ts-expect-error
                $Context['name']
              >['interfaces']['Document'],
              $Context
            >
          >
        }
      )
  )

export interface ClientBase<
  $Context extends Context,
  out $Extension extends object,
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
  gql: ClientTransports.PreflightCheck<
    $Context,
    gqlOverload<$Context>
  >
  scalar: null extends $Context['schemaMap'] ? TypeErrorMissingSchemaMap
    : ScalarMethod<
      $Context,
      $Extension
    >
  transport: TransportMethod<
    $Context,
    $Extension
  >
  use: UseMethod<
    $Context,
    $Extension
  > // $ExtensionChainable
  anyware: (
    interceptor: Anyware.Interceptor.InferFromPipeline<
      Anyware.Pipeline.InferFromDefinition<$Context['requestPipelineDefinition']>
    >,
  ) => Client<$Context, $Extension>
  with: <$ConfigInit extends ConfigInit>(
    configInit: $ConfigInit,
  ) => Client<
    // @ts-expect-error
    {
      [_ in keyof $Context]: _ extends keyof NormalizeConfigInit<$Context['input'] & $ConfigInit>
        ? NormalizeConfigInit<$Context['input'] & $ConfigInit>[_]
        : $Context[_]
    },
    $Extension
  > // $ExtensionChainable
}

export type ExtensionChainableRegistry = {
  [name: string]: ExtensionChainable
}

export interface ExtensionChainable extends TypeFunction {}

export type ExtensionChainableArguments = [Context, object, ExtensionChainableRegistry]

export const createConstructorWithContext = <$Context extends Context>(
  context: $Context,
): ClientConstructor<$Context> => {
  return (configInit) => {
    const newContext = updateContext(context, configInit ?? {})
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

export const create: ClientConstructor = (configInit) => {
  const initialContext = updateContext(
    Context.States.empty,
    configInit ?? {},
  )
  return createWithContext(initialContext)
}

export const createWithContext = (
  context: Context,
) => {
  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    _: context,
    ...withProperties(createWithContext, context),
    ...transportProperties(createWithContext, context),
    ...gqlProperties(createWithContext, context),
    ...useProperties(createWithContext, context),
    ...anywareProperties(createWithContext, context),
    ...scalarProperties(createWithContext, context),
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
      const result = onGetHandler({
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
