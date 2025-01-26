import { Extension } from '../../extension/$.js'
import type { RequestPipelineBaseInterceptor } from '../../requestPipeline/RequestPipeline.js'
import { createProperties } from '../helpers.js'

export const anywareProperties = createProperties((builder, context) => {
  return {
    anyware: (interceptor: RequestPipelineBaseInterceptor) => {
      // todo: optimize by having context store interceptors extracted from extension.
      // Then we do not need to create an inline extension here.
      const InlineAnywareExtension = Extension(`InlineAnyware`)
        .constructor(() => {
          return {
            requestInterceptor: interceptor,
          }
        })
        .done()
      return builder({
        ...context,
        extensions: [
          ...context.extensions,
          InlineAnywareExtension(),
        ],
      })
    },
  }
})
