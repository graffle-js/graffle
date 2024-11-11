import type { Simplify } from 'type-fest'
import type { Deferred, MaybePromise } from '../../prelude.js'
import type { PipelineSpec } from '../_.js'
import type { ResultSuccess } from '../Pipeline/Result.js'
import type { Step } from '../Step.js'
import type { StepTrigger } from '../StepTrigger.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'

export type InterceptorOptions = {
  retrying: boolean
}

export namespace Interceptor {
  export interface InferConstructor<
    $PipelineSpec extends PipelineSpec = PipelineSpec,
  > // $Options extends InterceptorOptions = InterceptorOptions,
  {
    (
      steps: Simplify<InferConstructorKeywordArguments<$PipelineSpec>>,
    ): Promise<
      | $PipelineSpec['output']
      | StepTriggerEnvelope
    >
  }

  type InferConstructorKeywordArguments<
    $PipelineSpec extends PipelineSpec,
  > = InferConstructorKeywordArguments_<$PipelineSpec['steps'], Awaited<$PipelineSpec['output']>>

  // dprint-ignore
  type InferConstructorKeywordArguments_<
    $Steps extends Step[],
    $PipelineOutput,
  > =
    $Steps extends [infer $NextStep extends Step, ...infer $NextNextSteps extends Step[]]
      ? & {
            [_ in $NextStep['name']]: StepTrigger.Infer<$NextStep, $NextNextSteps, $PipelineOutput>
          }
        & InferConstructorKeywordArguments_<$NextNextSteps, $PipelineOutput>
      : {}
}

export type InterceptorGeneric = NonRetryingInterceptor | RetryingInterceptor

export type NonRetryingInterceptor = {
  retrying: false
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<StepTriggerEnvelope | ResultSuccess>
}

export type RetryingInterceptor = {
  retrying: true
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<StepTriggerEnvelope | Error | ResultSuccess>
}

export const createRetryingInterceptor = (interceptor: NonRetryingInterceptorInput): RetryingInterceptorInput => {
  return {
    retrying: true,
    run: interceptor,
  }
}

// export interface InterceptorInput {
//   name: string
//   // entrypoint: string
//   // body: Deferred<unknown>
//   // currentChunk: Deferred<SomePublicHookEnvelope | Error /* | unknown (result) */>
// }

// export type ExtensionInput<$Input extends object = object> = (input: $Input) => MaybePromise<unknown>
export type InterceptorInput<$Input extends object = any> =
  | NonRetryingInterceptorInput<$Input>
  | RetryingInterceptorInput<$Input>

export type NonRetryingInterceptorInput<$Input extends object = any> = (
  input: $Input,
) => MaybePromise<unknown>

export type RetryingInterceptorInput<$Input extends object = any> = {
  retrying: boolean
  run: (input: $Input) => MaybePromise<unknown>
}
