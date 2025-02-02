import {
  type ContextFragmentProperties,
  type ContextFragmentPropertiesEmpty,
  contextFragmentPropertiesEmpty,
} from '../client/properties/addProperties.js'
import {
  type ContextFragmentRequestInterceptors,
  contextFragmentRequestInterceptorsEmpty,
} from '../client/properties/addRequestInterceptor.js'
import {
  type ContextFragmentTransports,
  type ContextFragmentTransportsEmpty,
  contextFragmentTransportsEmpty,
} from '../client/properties/transport.js'
import type { Extension } from '../extension/$.js'
import { type EmptyArray, type EmptyObject, emptyObject, type ObjectMergeShallow } from '../lib/prelude.js'
import { emptyArray } from '../lib/prelude.js'
import { Configurators } from './configurators/_namespace.js'
import { Schema } from './Schema/__.js'

export type ContextFragment = Partial<Context>

export const contextMergeFragment = <$Context extends Context, $Fragment extends null | ContextFragment>(
  context: $Context,
  fragment: $Fragment,
): $Fragment extends null ? $Context : $Fragment extends Context ? ObjectMergeShallow<$Context, $Fragment> : never => {
  if (!fragment) return context as any
  const newContext = Object.freeze({
    ...context,
    ...fragment,
  }) as any
  return newContext
}

export interface Context
  extends ContextFragmentTransports, ContextFragmentProperties, ContextFragmentRequestInterceptors
{
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
      readonly properties: ContextFragmentPropertiesEmpty['properties']
      readonly transports: ContextFragmentTransportsEmpty['transports']
      readonly requestPipelineDefinition: ContextFragmentTransportsEmpty['requestPipelineDefinition']
      readonly scalars: Schema.Scalar.Registry.Empty
      readonly extensions: EmptyArray
      readonly extensionsIndex: EmptyObject
      // type-level properties
      // todo merge typehooks empty from extension type here to DRY
      readonly typeHookOnRequestDocumentRootType: EmptyArray
      readonly typeHookOnRequestResult: EmptyArray
      readonly typeHookRequestResultDataTypes: never
    }

    export const empty: Empty = Object.freeze({
      ...contextFragmentPropertiesEmpty,
      ...contextFragmentTransportsEmpty,
      ...contextFragmentRequestInterceptorsEmpty,
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
      extensions: emptyArray,
      extensionsIndex: emptyObject,
      scalars: Schema.Scalar.Registry.empty,
      typeHookOnRequestDocumentRootType: null as any,
      typeHookOnRequestResult: null as any,
      typeHookRequestResultDataTypes: null as never,
    })
  }
}
