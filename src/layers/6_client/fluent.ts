import type { Anyware } from '../../lib/anyware/__.js'
import type { Fluent } from '../../lib/fluent/__.js'
import type { SchemaKit } from '../1_Schema/__.js'
import type { RequestCore } from '../5_request/__.js'
import type { Extension } from './extension/extension.js'
import type { Config } from './Settings/Config.js'
import type { InputStatic } from './Settings/Input.js'
import { inputToConfig } from './Settings/InputToConfig.js'

export type FnClient<$Context extends ClientContext = ClientContext> = Fluent.Create<$Context>

export type FnClientState = Fluent.State<ClientContext>

export type FnParametersProperty = Fluent.FnParametersProperty<FnClient, FnClientState>

export type FnParametersMerge = Fluent.ParametersFnMerge<FnClientState['context']>

export type Builder = (state: ClientContext) => Builder

type PropertyDefinitions = Record<string, ((...args: any[]) => Builder)>

export const defineProperties = (
  definition: (builder: Builder, state: ClientContext) => PropertyDefinitions,
): (builder: Builder, state: ClientContext) => PropertyDefinitions => {
  return (builder, state) => {
    return definition(builder, state) as any
  }
}

// export const defineProperty = <$Args extends [...any[]]>(
//   property: (state: CreateState, ...args: $Args) => CreateState,
// ) => {
//   return (builder: Builder, state: CreateState) => {
//     return (...args: $Args) => builder(property(state, ...args))
//   }
// }

type TerminusDefinitions = Record<string, unknown>

/**
 * Create a property or method that does NOT return the chain.
 */
export const defineTerminus = (property: (state: ClientContext) => TerminusDefinitions) => {
  return (state: ClientContext) => {
    return property(state)
  }
}

export interface ClientContext {
  name: string
  input: InputStatic
  config: Config
  retry: Anyware.Extension2<RequestCore.Core, { retrying: true }> | null
  extensions: Extension[]
  scalars: RegisteredScalars
}

export type RegisteredScalars = Record<string, SchemaKit.Scalar.Scalar>

export const createState = (stateWithoutConfig: StateWithoutConfig): ClientContext => {
  let config: Config | null

  return {
    ...stateWithoutConfig,
    get config(): Config {
      const configFound = config ?? inputToConfig(stateWithoutConfig.input)
      return configFound as any
    },
  }
}

export type StateWithoutConfig = Omit<ClientContext, 'config'>
