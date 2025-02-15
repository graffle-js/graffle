import { Configuration } from '../client/properties/configuration/__.js'
import { Extensions } from '../client/properties/extensions/__.js'
import { Properties } from '../client/properties/properties/__.js'
import { RequestInterceptors } from '../client/properties/requestInterceptors/__.js'
import { Scalars } from '../client/properties/scalars/__.js'
import { Transports } from '../client/properties/transports/__.js'
import { type EmptyArray, type ObjectMergeShallow } from '../lib/prelude.js'

export interface Context
  extends
    Configuration.ContextFragmentConfiguration,
    Transports.ContextFragment,
    Properties.ContextFragmentProperties,
    RequestInterceptors.ContextFragmentRequestInterceptors,
    Extensions.ContextFragment,
    Scalars.ContextFragment
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
  export const createReducer = <$Input>(
    fragmentReducer: ContextFragments.Reducer<ContextFragment, $Input>,
  ): (context: Context, input: $Input) => Context => {
    return (context, input) => ContextFragments.merge(context, fragmentReducer(context, input))
  }

  export namespace States {
    export interface Empty extends Context {
      readonly properties: Properties.ContextFragmentPropertiesEmpty['properties']
      readonly transports: Transports.ContextFragmentTransportsEmpty['transports']
      readonly requestPipelineDefinition: Transports.ContextFragmentTransportsEmpty['requestPipelineDefinition']
      readonly extensions: Extensions.ContextFragmentEmpty['extensions']
      readonly extensionsIndex: Extensions.ContextFragmentEmpty['extensionsIndex']
      readonly scalars: Scalars.ContextFragmentEmpty['scalars']
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
      ...Extensions.contextFragmentEmpty,
      ...Scalars.contextFragmentScalarsEmpty,
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

export namespace ContextFragments {
  export type Reducer<$ContextFragment extends ContextFragment = ContextFragment, $Input = any> = (
    context: Context,
    input: $Input,
  ) => null | $ContextFragment
  export const defineReducer = <$ContextFragment extends ContextFragment, $Input>(
    reducer: Reducer<$ContextFragment, $Input>,
  ): Reducer<$ContextFragment, $Input> => {
    return reducer
  }

  export const merge = <$Context extends Context, $Fragment extends null | ContextFragment>(
    context: $Context,
    fragment: $Fragment,
  ): $Fragment extends null ? $Context
    : $Fragment extends Context ? ObjectMergeShallow<$Context, $Fragment>
    : never =>
  {
    if (!fragment) return context as any
    const newContext = Object.freeze({
      ...context,
      ...fragment,
    }) as any
    return newContext
  }
}
