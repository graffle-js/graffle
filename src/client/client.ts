import {
  type BuilderExtensionRequestMethods,
  requestMethodsProperties,
} from '../documentBuilder/requestMethods/requestMethods.js' // todo
import { defaultName } from '../generator/config/defaults.js'
import type { Builder } from '../lib/builder/__.js'
import { proxyGet } from '../lib/prelude.js'
import { requestPipelineBaseDefinition } from '../requestPipeline/RequestPipeline.js'
import { Schema } from '../types/Schema/__.js'
import { type BuilderExtensionAnyware, builderExtensionAnyware } from './builderExtensions/anyware.js'
import { type BuilderExtensionInternal, builderExtensionInternal } from './builderExtensions/internal.js'
import { type BuilderExtensionScalar, builderExtensionScalar } from './builderExtensions/scalar.js'
import { type BuilderExtensionTransport } from './builderExtensions/transport.js'
import { type BuilderExtensionUse, builderExtensionUse } from './builderExtensions/use.js'
import { type BuilderExtensionWith, builderExtensionWith } from './builderExtensions/with.js'
import { type ConfigInit } from './Configuration/ConfigInit.js'
import { outputConfigDefault } from './Configuration/Output.js'
import {
  ClientTransports,
  type Context,
  type ContextEmpty,
  type ContextWithoutConfig,
  createContext,
} from './context.js'
import { type BuilderExtensionGql, builderExtensionGql } from './gql/gql.js'

export type ClientConstructor<$Context extends Context = ContextEmpty> = <const $ConfigInit extends ConfigInit = {}>(
  configInit?: $ConfigInit,
) => Client<
  Context.Updaters.AddConfigInit<
    $Context,
    $ConfigInit
  >
>

declare const x: ClientConstructor
x()._.checkPreflight

export type ClientEmpty = Client<ContextEmpty>

export type Client<$Context extends Context = Context> = Builder.Definition.MaterializeWith<
  ClientDefinition,
  $Context
>

type ClientDefinition = Builder.Definition.Create<[
  BuilderExtensionInternal,
  BuilderExtensionTransport,
  BuilderExtensionRequestMethods,
  BuilderExtensionWith,
  BuilderExtensionUse,
  BuilderExtensionAnyware,
  BuilderExtensionGql,
  BuilderExtensionScalar,
]>

export const create: ClientConstructor = (configInit) => {
  const initialContext = createContext({
    name: configInit?.name ?? defaultName,
    schemaMap: configInit?.schemaMap ?? null,
    transports: ClientTransports.States.empty,
    output: outputConfigDefault,
    requestPipelineDefinition: requestPipelineBaseDefinition,
    extensions: [],
    scalars: Schema.Scalar.Registry.empty,
    input: configInit ?? {},
  })
  return createWithContext(initialContext)
}

export const createWithContext = (
  initialContext: ContextWithoutConfig,
) => {
  const context = createContext(initialContext)

  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    ...builderExtensionInternal(createWithContext, context),
    ...builderExtensionGql(createWithContext, context),
    ...builderExtensionWith(createWithContext, context),
    ...builderExtensionUse(createWithContext, context),
    ...builderExtensionAnyware(createWithContext, context),
    ...builderExtensionScalar(createWithContext, context),
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
