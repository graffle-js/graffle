import type { FormattedExecutionResult } from 'graphql'
import type { GraffleExecutionResultEnvelope } from '../client/handleOutput.js'
import { Anyware } from '../lib/anyware/__.js'
import type { Config } from '../lib/anyware/PipelineDef/Config.js'
import type { Grafaid } from '../lib/grafaid/__.js'
import { normalizeRequestToNode } from '../lib/grafaid/request.js'
import { isAbortError } from '../lib/prelude.js'
import type { Context } from '../types/context.js'
import { decodeResultData } from './CustomScalars/decode.js'
import { encodeRequestVariables } from './CustomScalars/encode.js'

export namespace RequestPipeline {
  export interface Input {
    request: Grafaid.RequestAnalyzedInput
    state: Context
  }

  export interface DecodeInput {
    state: Context
    result: FormattedExecutionResult
  }

  export interface EncodeOutput {
    request: Grafaid.RequestAnalyzedInput
    state: Context
  }

  export type PackInput = EncodeOutput

  export type Output = GraffleExecutionResultEnvelope
}

export interface RequestPipelineBaseDefinition extends Anyware.PipelineDefinition {
  overloads: []
  config: Config
  input: {
    request: Grafaid.RequestAnalyzedInput
    state: Context
    transportType: 'none'
    transport: {}
  }
  steps: [{
    name: 'encode'
    input: RequestPipeline.Input
    output: RequestPipeline.EncodeOutput
    slots: {}
  }, {
    name: 'pack'
    input: RequestPipeline.PackInput
    output: {}
    slots: {}
  }, {
    name: 'exchange'
    input: {}
    output: {}
    slots: {}
  }, {
    name: 'unpack'
    input: {}
    output: {}
    slots: {}
  }, {
    name: 'decode'
    input: RequestPipeline.DecodeInput
    output: RequestPipeline.Output
    slots: {}
  }]
}

export const requestPipelineBaseDefinition: RequestPipelineBaseDefinition = Anyware.PipelineDefinition
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
  .input<RequestPipelineBaseDefinition['input']>()
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
  .type

export type RequestPipelineBase = Anyware.Pipeline.InferFromDefinition<RequestPipelineBaseDefinition>

export type RequestPipelineBaseInterceptor = Anyware.Interceptor.InferFromPipeline<RequestPipelineBase>
