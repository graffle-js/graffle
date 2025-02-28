import type { Configuration } from './fragments/configuration/_namespace.js'
import type { Extensions } from './fragments/extensions/__.js'
import type { Properties } from './fragments/properties/__.js'
import type { RequestInterceptors } from './fragments/requestInterceptors/__.js'
import type { Scalars } from './fragments/scalars/_namespace.js'
import type { Transports } from './fragments/transports/_namespace.js'
// import type { ContextFragment } from './ContextFragment.js'
// import { ContextFragments } from './ContextFragment.js'

export interface Context
  extends
    Configuration.ContextFragment,
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
  // export const createReducer = <$Input>(
  //   fragmentReducer: ContextFragments.Reducer<ContextFragment, $Input>,
  // ): (context: Context, input: $Input) => Context => {
  //   return (context, input) => ContextFragments.merge(context, fragmentReducer(context, input))
  // }
}
