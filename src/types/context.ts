import {
  type ContextFragmentConfiguration,
  contextFragmentConfigurationEmpty,
} from '../client/properties/configuration.js'
import {
  type ContextFragmentExtensions,
  type ContextFragmentExtensionsEmpty,
  contextFragmentExtensionsEmpty,
} from '../client/properties/extensions.js'
import {
  type ContextFragmentProperties,
  type ContextFragmentPropertiesEmpty,
  contextFragmentPropertiesEmpty,
} from '../client/properties/properties.js'
import {
  type ContextFragmentRequestInterceptors,
  contextFragmentRequestInterceptorsEmpty,
} from '../client/properties/requestInterceptors.js'
import {
  type ContextFragmentScalars,
  type ContextFragmentScalarsEmpty,
  contextFragmentScalarsEmpty,
} from '../client/properties/scalars.js'
import {
  type ContextFragmentTransports,
  type ContextFragmentTransportsEmpty,
  contextFragmentTransportsEmpty,
} from '../client/properties/transport.js'
import { type EmptyArray, type ObjectMergeShallow } from '../lib/prelude.js'

export interface Context
  extends
    ContextFragmentConfiguration,
    ContextFragmentTransports,
    ContextFragmentProperties,
    ContextFragmentRequestInterceptors,
    ContextFragmentExtensions,
    ContextFragmentScalars
{
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
      readonly extensions: ContextFragmentExtensionsEmpty['extensions']
      readonly extensionsIndex: ContextFragmentExtensionsEmpty['extensionsIndex']
      readonly scalars: ContextFragmentScalarsEmpty['scalars']
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
      ...contextFragmentExtensionsEmpty,
      ...contextFragmentScalarsEmpty,
      ...contextFragmentConfigurationEmpty,
      typeHookOnRequestDocumentRootType: null as any,
      typeHookOnRequestResult: null as any,
      typeHookRequestResultDataTypes: null as never,
    })
  }
}

// ------------------------------------------------------------
// Fragment
// ------------------------------------------------------------

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
