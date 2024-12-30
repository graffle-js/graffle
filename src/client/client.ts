import type { Extension } from '../extension/__.js'
import type { Anyware } from '../lib/anyware/__.js'
import type { TypeFunction } from '../lib/type-function/__.js'
import { type ClientTransports, Context } from '../types/context.js'
import { type ConfigInit, type NormalizeConfigInit } from './Configuration/ConfigInit.js'
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
  & Extension.ApplyAndMergeBuilderExtensions<$Context['extensions'], $Context>

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

export const create: ClientConstructor = (configInit) => {
  const initialContext = Context.updateContextConfigInit(
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

  context.extensions.forEach(_ => {
    Object.assign(
      clientDirect,
      _.builder?.({
        client: clientDirect,
        context,
      }) ?? {},
    )
  })

  return clientDirect
}
