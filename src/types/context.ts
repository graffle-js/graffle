import { ContextTransports } from '../client/properties/transport.js'
import type { Extension } from '../extension/$.js'
import type { Anyware } from '../lib/anyware/_namespace.js'
import {
  type RequestPipelineBaseDefinition,
  requestPipelineBaseDefinition,
  type RequestPipelineBaseInterceptor,
} from '../requestPipeline/RequestPipeline.js'
import { Configurators } from './configurators/_namespace.js'
import { Schema } from './Schema/__.js'

export interface Context {
  readonly configuration: {
    readonly output: {
      readonly configurator: Configurators.Output.OutputConfigurator
      readonly current: Configurators.Output.OutputConfigurator['default']
    }
    readonly check: {
      readonly configurator: Configurators.Check.CheckConfigurator
      readonly current: Configurators.Check.CheckConfigurator['default']
    }
    readonly schema: {
      readonly configurator: Configurators.Schema.SchemaConfigurator
      readonly current: Configurators.Schema.SchemaConfigurator['default']
    }
  }
  readonly requestPipelineDefinition: Anyware.PipelineDefinition
  readonly requestPipelineInterceptors: readonly RequestPipelineBaseInterceptor[]
  readonly transports: ContextTransports
  readonly scalars: Schema.Scalar.Registry
  readonly extensions: readonly Extension[]
  readonly extensionsIndex: {
    [extensionName: string]: Extension
  }
  // Type Level Properties
  /**
   * Type level augmentations.
   *
   * @remarks Typically added by extensions. Added here upon use for optimized type-level reads later on.
   */
  // typeHookOnRequestResult: Extension.TypeHooks.OnRequestResult[]
  // typeHookOnRequestDocumentRootType: Extension.TypeHooks.OnRequestDocumentRootType[]
  typeHookRequestResultDataTypes: unknown
}

export namespace Context {
  export namespace States {
    export interface Empty extends Context {
      readonly scalars: Schema.Scalar.Registry.Empty
      readonly extensions: readonly []
      readonly extensionsIndex: {}
      readonly transports: ContextTransports.States.Empty
      readonly requestPipelineDefinition: RequestPipelineBaseDefinition
      // type-level properties
      // todo merge typehooks empty from extension type here to DRY
      readonly typeHookOnRequestDocumentRootType: readonly []
      readonly typeHookOnRequestResult: readonly []
      readonly typeHookRequestResultDataTypes: never
    }

    export const empty: Empty = Object.freeze({
      configuration: Object.freeze({
        output: Object.freeze({
          configurator: Configurators.Output.configurator,
          current: Configurators.Output.configurator.default,
        }),
        check: Object.freeze({
          configurator: Configurators.Check.configurator,
          current: Configurators.Check.configurator.default,
        }),
        schema: Object.freeze({
          configurator: Configurators.Schema.configurator,
          current: Configurators.Schema.configurator.default,
        }),
      }),
      requestPipelineDefinition: requestPipelineBaseDefinition,
      requestPipelineInterceptors: Object.freeze([]),
      transports: ContextTransports.States.empty,
      extensions: Object.freeze([] as const),
      extensionsIndex: Object.freeze({}),
      scalars: Schema.Scalar.Registry.empty,
      typeHookOnRequestDocumentRootType: null as any,
      typeHookOnRequestResult: null as any,
      typeHookRequestResultDataTypes: null as never,
    })
  }
}
