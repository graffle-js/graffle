import type { RequestPipeline } from '../../../../requestPipeline/RequestPipeline.js'
import type { ContextFragment } from '../fragment.js'

export const add = (
  context: ContextFragment,
  interceptor: RequestPipeline.BaseInterceptor,
): ContextFragment => {
  const newContextFragment = {
    requestPipelineInterceptors: Object.freeze([
      ...context.requestPipelineInterceptors,
      interceptor,
    ]),
  }
  return newContextFragment
}
