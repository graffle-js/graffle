import { Configuration } from '../client/properties/configuration/__.js'
import {
  type ContextFragmentExtensions,
  type ContextFragmentExtensionsEmpty,
  contextFragmentExtensionsEmpty,
} from '../client/properties/extensions/extensions.js'
import { Properties } from '../client/properties/properties/__.js'
import { RequestInterceptors } from '../client/properties/requestInterceptors/__.js'
import {
  type ContextFragmentScalars,
  type ContextFragmentScalarsEmpty,
  contextFragmentScalarsEmpty,
} from '../client/properties/scalars/scalars.js'
import { Transports } from '../client/properties/transports/__.js'
import { type EmptyArray, type ObjectMergeShallow } from '../lib/prelude.js'
export interface Context
  extends
    Configuration.ContextFragmentConfiguration,
    Transports.ContextFragmentTransports,
    Properties.ContextFragmentProperties,
    RequestInterceptors.ContextFragmentRequestInterceptors,
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
      readonly properties: Properties.ContextFragmentPropertiesEmpty['properties']
      readonly transports: Transports.ContextFragmentTransportsEmpty['transports']
      readonly requestPipelineDefinition: Transports.ContextFragmentTransportsEmpty['requestPipelineDefinition']
      readonly extensions: ContextFragmentExtensionsEmpty['extensions']
      readonly extensionsIndex: ContextFragmentExtensionsEmpty['extensionsIndex']
      readonly scalars: ContextFragmentScalarsEmpty['scalars']
      readonly configuration: Configuration.ContextFragmentConfigurationEmpty['configuration']
      // type-level properties
      // todo merge typehooks empty from extension type here to DRY
      readonly typeHookOnRequestDocumentRootType: EmptyArray
      readonly typeHookOnRequestResult: EmptyArray
      readonly typeHookRequestResultDataTypes: never
    }

    export const empty: Empty = Object.freeze({
      ...Properties.contextFragmentPropertiesEmpty,
      ...Transports.contextFragmentTransportsEmpty,
      ...RequestInterceptors.contextFragmentRequestInterceptorsEmpty,
      ...contextFragmentExtensionsEmpty,
      ...contextFragmentScalarsEmpty,
      ...Configuration.contextFragmentConfigurationEmpty,
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
