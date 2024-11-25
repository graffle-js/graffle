import type { Simplify } from 'type-fest'
import type { Deferred, MaybePromise } from '../../prelude.js'
import type { Pipeline } from '../_.js'
import type { ResultSuccess } from '../Result.js'
import type { Step } from '../Step.js'
import type { StepTrigger } from '../StepTrigger.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'

export type InterceptorOptions = {
  retrying: boolean
}

export namespace Interceptor {
  export interface InferFromPipeline<
    $Pipeline extends Pipeline = Pipeline,
  > // $Options extends InterceptorOptions = InterceptorOptions,
  {
    (steps: Simplify<InferKeywordArguments<$Pipeline>>): Promise<
      | $Pipeline['output']
      | StepTriggerEnvelope
    >
  }

  type InferKeywordArguments<
    $Pipeline extends Pipeline,
  > = InferKeywordArguments_<
    $Pipeline['steps'],
    $Pipeline['output']
  >

  // dprint-ignore
  type InferKeywordArguments_<
    $Steps extends Step[],
    $PipelineOutput,
  > =
    $Steps extends [infer $NextStep extends Step, ...infer $NextNextSteps extends Step[]]
      ? & {
            [_ in $NextStep['name']]:
              StepTrigger.Infer<
                $NextStep,
                $NextNextSteps,
                $PipelineOutput
              >
          }
        & InferKeywordArguments_<$NextNextSteps, $PipelineOutput>
      : {}
}

export type InterceptorGeneric = NonRetryingInterceptor | RetryingInterceptor

export interface NonRetryingInterceptor {
  retrying: false
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<StepTriggerEnvelope | ResultSuccess>
}

export interface RetryingInterceptor {
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
