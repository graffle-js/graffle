// import type { Anyware } from '../../lib/anyware/__.js'
// import type { RequestPipeline } from '../../requestPipeline/__.js'
import type { Extension } from '../extension/extension.js'
import type { Schema } from '../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../types/SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import type { Config } from './Settings/Config.js'
import type { InputStatic } from './Settings/Input.js'
import { inputToConfig } from './Settings/InputToConfig.js'

export interface Context {
  name: string
  /**
   * The initial input that was given to derive the config.
   */
  input: InputStatic
  config: Config
  schemaMap: SchemaDrivenDataMap | null

  // retry: Anyware.Extension2<RequestPipeline.Core, { retrying: true }> | null
  extensions: Extension[]
  scalars: Schema.Scalar.Registry
  /**
   * Type level augmentations.
   *
   * @remarks Typically added by extensions. Added here upon use for optimized type-level reads later on.
   */
  typeHooks: {
    onRequestResult: Extension.Hooks.OnRequestResult[]
    onRequestDocumentRootType: Extension.Hooks.OnRequestDocumentRootType[]
  }
}

export type TypeHooksEmpty = {
  onRequestDocumentRootType: []
  onRequestResult: []
}

export const createContext = (contextWithoutConfig: ContextWithoutConfig): Context => {
  let config: Config | null

  return {
    ...contextWithoutConfig,
    get config(): Config {
      const configFound = config ?? inputToConfig(contextWithoutConfig.input)
      return configFound as any
    },
  } as Context
}

export type ContextWithoutConfig = Omit<Context, 'config' | 'typeHooks'>
