import type { FormattedExecutionResult } from 'graphql'
import type { Context } from '../context/context.js'
import type { GraffleExecutionResultEnvelope } from '../context/fragments/output/handle.js'
import { Anyware } from '../lib/anyware/_namespace.js'
import type { Config } from '../lib/anyware/PipelineDefinition/Config.js'
import type { Grafaid } from '../lib/grafaid/__.js'
import { normalizeRequestToNode } from '../lib/grafaid/request.js'
import { isAbortError } from '../lib/prelude.js'
import { decodeResultData } from './CustomScalars/decode.js'
import { encodeRequestVariables } from './CustomScalars/encode.js'

export namespace RequestPipeline {
  export const stepName = {
    encode: `encode`,
    pack: `pack`,
    exchange: `exchange`,
    unpack: `unpack`,
    decode: `decode`,
  } as const
  export type StepName = keyof typeof stepName

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

  export interface BaseDefinition extends Anyware.PipelineDefinition {
    readonly config: Config
    readonly input: {
      request: Grafaid.RequestAnalyzedInput
      state: Context
      transportType: 'none'
      transport: {}
    }
    readonly steps: [
      Anyware.StepDefinition<'encode', {}, RequestPipeline.Input, RequestPipeline.EncodeOutput>,
      Anyware.StepDefinition<'pack', {}, RequestPipeline.PackInput, {}>,
      Anyware.StepDefinition<'exchange', {}, {}, {}>,
      Anyware.StepDefinition<'unpack', {}, {}, {}>,
      Anyware.StepDefinition<'decode', {}, RequestPipeline.DecodeInput, RequestPipeline.Output>,
    ]
  }
  export interface BaseDefinitionEmpty extends BaseDefinition {
    readonly overloads: readonly []
  }

  export type Base = Anyware.Pipeline.InferFromDefinition<RequestPipeline.BaseDefinition>

  export type BaseInterceptor = Anyware.Interceptor.InferFromPipeline<Base>
}

const { stepName } = RequestPipeline
export const requestPipelineBaseDefinition: RequestPipeline.BaseDefinitionEmpty = Anyware.PipelineDefinition
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
  .input<RequestPipeline.BaseDefinition['input']>()
  .step(stepName.encode, {
    run: (input) => {
      const sddm = input.state.configuration.schema.current.map
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
  .step(stepName.pack)
  .step(stepName.exchange)
  .step(stepName.unpack)
  .step(stepName.decode, {
    run: (
      input: {
        state: Context
        result: FormattedExecutionResult
      },
      _,
      previous,
    ) => {
      const sddm = input.state.configuration.schema.current.map
      // If there has been an error and we definitely don't have any data, such as when
      // giving an operation name that doesn't match any in the document,
      // then don't attempt to decode.
      const isError = !input.result.data && (input.result.errors?.length ?? 0) > 0
      if (sddm && !isError) {
        decodeResultData({
          sddm,
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
