import type { Grafaid } from '#lib/grafaid'
import type { Context } from '#src/context/context.js'
import type { RequestPipeline } from '#src/requestPipeline/RequestPipeline.js'
import { Ware as Anyware } from '@wollybeard/kit'
import { handleOutput } from './handle.js'

export const sendRequest = async (context: Context, analyzedRequest: Grafaid.RequestAnalyzedInput) => {
  if (!context.transports.current) throw new Error(`No transport selected`)

  const initialInput = {
    [context.transports.registry[context.transports.current]!.discriminant[`name`]]:
      context.transports.registry[context.transports.current]!.discriminant[`value`],
    [context.transports.registry[context.transports.current]!.configurationMount]:
      context.transports.configurations[context.transports.current],
    state: context,
    request: analyzedRequest,
  } as RequestPipeline.Base['input']

  const requestPipeline = Anyware.Pipeline.create(context.requestPipelineDefinition)
  // todo [1] calculate interceptors when context changes, not on each request.
  const computedInterceptors = context.requestPipelineInterceptorsComputed.map(computer =>
    computer({
      // todo: test that configuration is passed correctly
      configuration: context.configuration,
      context,
      // @ts-expect-error 1
      client: null, // annoying to get client reference here, instead, do above todo where then this doesn't even have to be here anymore.
    })
  )
  const result = await Anyware.PipelineDefinition.run(requestPipeline, {
    initialInput,
    interceptors: [...context.requestPipelineInterceptors, ...computedInterceptors],
  })

  // todo: inline handle output here?
  return handleOutput(context, result)
}
