import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'
import type { Context } from '../../types/context.js'
import type { Client_justContext } from '../client.js'

export const createInterceptor = <$Client extends Client_justContext = Client_justContext>(
  interceptor: Anyware.Interceptor.InferFromPipeline<
    Anyware.Pipeline.InferFromDefinition<$Client['_']['requestPipelineDefinition']>
  >,
) => interceptor

export const contextAddRequestInterceptor = (
  context: Context,
  interceptor: RequestPipeline.BaseInterceptor,
) =>
  Object.freeze({
    ...context,
    requestPipelineInterceptors: Object.freeze([
      ...context.requestPipelineInterceptors,
      interceptor,
    ]),
  })
