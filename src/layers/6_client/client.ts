import { defaultName } from '../../generator/config/defaults.js'
import type { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { type Exact, proxyGet } from '../../lib/prelude.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../types/Schema/__.js'
import { type BuilderExtensionAnyware, builderExtensionAnyware } from './builderExtensions/anyware.js'
import { type BuilderExtensionInternal, builderExtensionInternal } from './builderExtensions/internal.js'
import { type BuilderExtensionScalar, builderExtensionScalar } from './builderExtensions/scalar.js'
import { type BuilderExtensionUse, builderExtensionUse } from './builderExtensions/use.js'
import { type BuilderExtensionWith, builderExtensionWith } from './builderExtensions/with.js'
import { type Context, type ContextWithoutConfig, createContext, type TypeHooksEmpty } from './context.js'
import { type BuilderExtensionGql, builderExtensionGql } from './gql/gql.js'
import { type BuilderExtensionRequestMethods, requestMethodsProperties } from './requestMethods/requestMethods.js' // todo
import { type InputStatic } from './Settings/Input.js'
import { type NormalizeInput } from './Settings/InputToConfig.js'

// export type ClientGeneric = Builder.Definition.MaterializeGeneric<
//   Builder.Definition.ExtendMany<
//     Builder.Definition.Empty,
//     [
//       Internal_,
//       RequestMethods_,
//       With_,
//       Use_,
//       Anyware_,
//       Gql_,
//       Scalar_,
//     ]
//   >
// >

export type Client<$Context extends Context> = Builder.Definition.MaterializeWithNewContext<
  Builder.Definition.Create<[
    BuilderExtensionInternal,
    BuilderExtensionRequestMethods,
    BuilderExtensionWith,
    BuilderExtensionUse,
    BuilderExtensionAnyware,
    BuilderExtensionGql,
    BuilderExtensionScalar,
  ]>,
  $Context
>

// dprint-ignore
type Create = <$Input extends InputStatic>(input: Exact<$Input, InputStatic>) =>
  // todo fixme
  // eslint-disable-next-line
  // @ts-ignore
  Client<{
    name: HandleName<$Input>
    input: $Input
    config: NormalizeInput<$Input>
    schemaMap: ConfigManager.OrDefault<$Input['schemaMap'], null>
    retry: null
    extensions: []
    scalars: {}
    typeHooks: TypeHooksEmpty,
  }>

export const create: Create = (input) => {
  const initialContext = createContext({
    name: input.name ?? defaultName,
    schemaMap: input.schemaMap ?? null,
    extensions: [],
    scalars: Schema.Scalar.Registry.empty,
    // retry: null,
    input,
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
