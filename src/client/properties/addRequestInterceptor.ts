import type { Anyware } from '../../lib/anyware/_namespace.js'
import { emptyArray } from '../../lib/prelude.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'
import type { Context } from '../../types/context.js'
import type { Client_justContext } from '../client.js'

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ContextFragmentRequestInterceptors {
  readonly requestPipelineInterceptors: readonly RequestPipeline.BaseInterceptor[]
}

export interface ContextFragmentRequestInterceptorsEmpty extends ContextFragmentRequestInterceptors {
  readonly requestPipelineInterceptors: readonly RequestPipeline.BaseInterceptor[]
}

export const contextFragmentRequestInterceptorsEmpty: ContextFragmentRequestInterceptorsEmpty = {
  requestPipelineInterceptors: emptyArray,
}

export const contextFragmentAddRequestInterceptor = (
  context: Context,
  interceptor: RequestPipeline.BaseInterceptor,
): ContextFragmentRequestInterceptors => {
  const newContextFragment = {
    requestPipelineInterceptors: Object.freeze([
      ...context.requestPipelineInterceptors,
      interceptor,
    ]),
  }
  return newContextFragment
}

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

export const createInterceptor = <$Client extends Client_justContext = Client_justContext>(
  interceptor: Anyware.Interceptor.InferFromPipeline<
    Anyware.Pipeline.InferFromDefinition<$Client['_']['requestPipelineDefinition']>
  >,
) => interceptor
