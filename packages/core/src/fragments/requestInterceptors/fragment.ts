import type { RequestPipeline } from '#~/requestPipeline/RequestPipeline.js'
import { Arr } from '@wollybeard/kit'
import type { RequestInterceptorComputer } from './helpers.js'

export interface ContextFragment {
  readonly requestPipelineInterceptors: readonly RequestPipeline.BaseInterceptor[]
  readonly requestPipelineInterceptorsComputed: readonly RequestInterceptorComputer[]
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly requestPipelineInterceptors: readonly RequestPipeline.BaseInterceptor[]
  readonly requestPipelineInterceptorsComputed: readonly RequestInterceptorComputer[]
}

export const contextFragmentEmpty: ContextFragmentEmpty = {
  requestPipelineInterceptors: Arr.emptyArray,
  requestPipelineInterceptorsComputed: Arr.emptyArray,
}
