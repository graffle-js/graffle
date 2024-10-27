import { CustomScalars } from '../../extensions/CustomScalars/CustomScalars.js' // todo
import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { Fluent } from '../../lib/fluent/__.js'
import { proxyGet } from '../../lib/prelude.js'
import { Schema } from '../../types/Schema/__.js'
import { type UseFn, useProperties } from './extension/use.js'
import { type ClientContext, createState, type FnParametersProperty, type StateWithoutConfig } from './fluent.js'
import { type FnGql, gqlProperties } from './gql/gql.js'
import { anywareProperties, type FnAnyware } from './properties/anyware.js'
import type { FnInternal } from './properties/internal.js'
import { type FnRetry, retryProperties } from './properties/retry.js'
import { type ScalarFn, scalarProperties } from './properties/scalar.js'
import { type FnWith, withProperties } from './properties/with.js'
import { type FnRequestMethods, requestMethodsProperties } from './requestMethods/requestMethods.js' // todo
import { type InputStatic } from './Settings/Input.js'
import { type NormalizeInput } from './Settings/InputToConfig.js'

export type Client<$Context extends ClientContext> = Fluent.Materialize<
  Fluent.AddMany<
    Fluent.Create<$Context>,
    [
      FnInternal,
      FnRequestMethods,
      FnRetry,
      FnWith,
      UseFn,
      FnAnyware,
      FnGql,
      ScalarFn,
    ]
  >
>

export type IncrementWthNewConfig<
  $Parameters extends FnParametersProperty,
  $ConfigNew extends ClientContext['config'],
> = Fluent.IncrementWthNewContext<
  $Parameters,
  ConfigManager.SetProperty<$Parameters['state']['context'], 'config', $ConfigNew>
>

// dprint-ignore
type Create = <$Input extends InputStatic>(input: $Input) =>
  // todo fixme
  // eslint-disable-next-line
  // @ts-ignore
  Client<{
    name: $Input['name']
    input: $Input
    config: NormalizeInput<$Input>
    retry: null
    extensions: []
    scalars: {}
  }>

export const create: Create = (input) => {
  const initialState = createState({
    name: input.name ?? `default`, // todo import from shared constants
    extensions: [CustomScalars()],
    scalars: Schema.Scalar.Registry.empty,
    retry: null,
    input,
  })
  return createWithState(initialState)
}

export const createWithState = (
  initialState: StateWithoutConfig,
) => {
  const state = createState(initialState)

  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    _: state,
    ...gqlProperties(state),
    ...withProperties(createWithState, state),
    ...useProperties(createWithState, state),
    ...anywareProperties(createWithState, state),
    ...retryProperties(createWithState, state),
    ...scalarProperties(createWithState, state),
  }

  // todo test that access to this works without generation in a unit like test. We discovered bug and covered this in an e2e test.
  Object.assign(clientDirect, {
    ...requestMethodsProperties(state),
  })

  const clientProxy = proxyGet(clientDirect, ({ path, property }) => {
    // eslint-disable-next-line
    // @ts-ignore fixme "Type instantiation is excessively deep and possibly infinite"
    const onGetHandlers = state.extensions.map(_ => _.onBuilderGet).filter(_ => _ !== undefined)

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
