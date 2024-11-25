import type { FormattedExecutionResult } from 'graphql'
import type { Context } from '../client/context.js'
import { Anyware } from '../lib/anyware/__.js'
import type { Grafaid } from '../lib/grafaid/__.js'
import { normalizeRequestToNode } from '../lib/grafaid/request.js'
import { isAbortError } from '../lib/prelude.js'
import { decodeResultData } from './CustomScalars/decode.js'
import { encodeRequestVariables } from './CustomScalars/encode.js'
import { httpTransport } from './extensions/httpTransport.js'
import { memoryTransport } from './extensions/memoryTransport.js'

const requestPipelineDefBuilderBase = Anyware.PipelineDef
  .create({
    // If core errors caused by an abort error then raise it as a direct error.
    // This is an expected possible error. Possible when user cancels a request.
    passthroughErrorWith: (signal) => {
      // todo have anyware propagate the input that was passed to the hook that failed.
      // it will give us a bit more confidence that we're only allowing this abort error for fetch requests stuff
      // context.config.transport.type === Transport.http
      return signal.hookName === `exchange` && isAbortError(signal.error)
    },
  })
  .input<{
    request: Grafaid.RequestAnalyzedInput
    state: Context
  }>()
  .step(`encode`, {
    run: (input) => {
      const sddm = input.state.schemaMap
      const scalars = input.state.scalars.map
      if (sddm) {
        const request = normalizeRequestToNode(input.request)

        // We will mutate query. Assign it back to input for it to be carried forward.
        input.request.query = request.query

        encodeRequestVariables({ sddm, scalars, request })
      }

      return input
    },
  })
  .step(`pack`)
  .step(`exchange`)
  .step(`unpack`)
  .step(`decode`, {
    run: (
      input: {
        state: Context
        result: FormattedExecutionResult
      },
      _,
      previous,
    ) => {
      // If there has been an error and we definitely don't have any data, such as when
      // giving an operation name that doesn't match any in the document,
      // then don't attempt to decode.
      const isError = !input.result.data && (input.result.errors?.length ?? 0) > 0
      if (input.state.schemaMap && !isError) {
        decodeResultData({
          sddm: input.state.schemaMap,
          request: normalizeRequestToNode(previous.pack.input.request),
          data: input.result.data,
          scalars: input.state.scalars.map,
        })
      }

      // todo needs to be moved into the http overload
      // @ts-expect-error
      return input.transportType === `http`
        ? {
          ...input.result,
          // @ts-expect-error
          response: input.response,
        }
        : input.result
    },
  })

export type RequestPipelineSpecBase = typeof requestPipelineDefBuilderBase.type

const requestPipelineSpecBuilderFull = requestPipelineDefBuilderBase
  .use(httpTransport)
  .use(memoryTransport)

export type RequestPipelineSpec = typeof requestPipelineSpecBuilderFull.type

export const requestPipeline = Anyware.Pipeline.create(requestPipelineSpecBuilderFull.type)
export type RequestPipeline = typeof requestPipeline

export namespace requestPipeline {
  export type ResultFailure = Anyware.PipelineDef.ResultFailure
  // | Errors.ContextualError
  // Possible from http transport fetch with abort controller.
  // | DOMException
}
