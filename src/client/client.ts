import {
  type BuilderExtensionRequestMethods,
  requestMethodsProperties,
} from '../documentBuilder/requestMethods/requestMethods.js' // todo
import type { Builder } from '../lib/builder/__.js'
import { __, proxyGet } from '../lib/prelude.js'
import { type BuilderExtensionAnyware, builderExtensionAnyware } from './builderExtensions/anyware.js'
import { type BuilderExtensionInternal, builderExtensionInternal } from './builderExtensions/internal.js'
import { type BuilderExtensionScalar, builderExtensionScalar } from './builderExtensions/scalar.js'
import { type BuilderExtensionTransport } from './builderExtensions/transport.js'
import { type BuilderExtensionUse, builderExtensionUse } from './builderExtensions/use.js'
import { type BuilderExtensionWith, builderExtensionWith } from './builderExtensions/with.js'
import { type ConfigInit } from './Configuration/ConfigInit.js'
import { Context } from './context.js'
import { type BuilderExtensionGql, builderExtensionGql } from './gql/gql.js'

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
  // @ts-expect-error fixme
  Context.Updaters.AddConfigInit<
    $Context,
    $ConfigInit
  >
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

// export type ClientWith<$ContextNewPartial extends Partial<Context>> = Client<
//   ConfigManager.SetKeysOptional<
//     ContextEmpty,
//     $ContextNewPartial
//   >
// >

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
