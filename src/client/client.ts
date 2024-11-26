import {
  type BuilderExtensionRequestMethods,
  requestMethodsProperties,
} from '../documentBuilder/requestMethods/requestMethods.js' // todo
import { defaultName } from '../generator/config/defaults.js'
import type { Builder } from '../lib/builder/__.js'
import type { ConfigManager } from '../lib/config-manager/__.js'
import { proxyGet } from '../lib/prelude.js'
import { requestPipelineBaseDefinition } from '../requestPipeline/RequestPipeline.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../types/Schema/__.js'
import { type BuilderExtensionAnyware, builderExtensionAnyware } from './builderExtensions/anyware.js'
import { type BuilderExtensionInternal, builderExtensionInternal } from './builderExtensions/internal.js'
import { type BuilderExtensionScalar, builderExtensionScalar } from './builderExtensions/scalar.js'
import { type BuilderExtensionTransport } from './builderExtensions/transport.js'
import { type BuilderExtensionUse, builderExtensionUse } from './builderExtensions/use.js'
import { type BuilderExtensionWith, builderExtensionWith } from './builderExtensions/with.js'
import {
  ClientTransports,
  type Context,
  type ContextEmpty,
  type ContextWithoutConfig,
  createContext,
} from './context.js'
import { type BuilderExtensionGql, builderExtensionGql } from './gql/gql.js'
import { type InputStatic } from './Settings/Input.js'
import { type NormalizeInput } from './Settings/InputToConfig.js'

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

// dprint-ignore
type Create = <$Input extends InputStatic | undefined = undefined>(input?: $Input) =>
  // todo fixme
  // eslint-disable-next-line
  // @ts-ignore
  Client<
    ConfigManager.SetKeysOptional<
      ContextEmpty,
      {
        name: HandleName<ConfigManager.OrDefault<$Input, {}>>
        input: ConfigManager.OrDefault<$Input, {}>
        config: NormalizeInput<ConfigManager.OrDefault<$Input, {}>>
        checkPreflight: $Input extends InputStatic ? ConfigManager.OrDefault<$Input['checkPreflight'], undefined> : undefined
        schemaMap: $Input extends InputStatic ? ConfigManager.OrDefault<$Input['schemaMap'], null> : null
      }
    >
  >

export const create: Create = (input) => {
  const initialContext = createContext({
    name: input?.name ?? defaultName,
    schemaMap: input?.schemaMap ?? null,
    transports: ClientTransports.States.empty,
    requestPipelineDefinition: requestPipelineBaseDefinition,
    extensions: [],
    scalars: Schema.Scalar.Registry.empty,
    input: input ?? {},
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

type HandleName<$Input extends InputStatic> = $Input['name'] extends string ? $Input['name']
  : GlobalRegistry.DefaultClientName
