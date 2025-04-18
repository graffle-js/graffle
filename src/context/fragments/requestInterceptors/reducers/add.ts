import type { RequestPipeline } from '../../../../requestPipeline/RequestPipeline.js'
import type { ContextFragment } from '../fragment.js'
import type { RequestInterceptorComputer } from '../helpers.js'

export const add = (
  context: ContextFragment,
  interceptorsInput: {
    static: readonly RequestPipeline.BaseInterceptor[]
    computed: readonly RequestInterceptorComputer[]
  },
): ContextFragment => {
  const newContextFragment: ContextFragment = {
    requestPipelineInterceptors: Object.freeze([
      ...context.requestPipelineInterceptors,
      ...interceptorsInput.static,
    ]),
    requestPipelineInterceptorsComputed: Object.freeze([
      ...context.requestPipelineInterceptorsComputed,
      ...interceptorsInput.computed,
    ]),
  }
  return newContextFragment
}
