import type { Simplify } from 'type-fest'
import type { Deferred, intersectArrayOfObjects, MaybePromise, Tuple } from '../../prelude.js'
import type { Private } from '../../private.js'
import type { InferPublicHooks, SomePublicStepEnvelope } from '../hook/public.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Pipeline/builder.js'

export type InterceptorOptions = {
  retrying: boolean
}

// todo
export interface Interceptor {
  name: string
  // entrypoint: string
  // body: Deferred<unknown>
  // currentChunk: Deferred<SomePublicHookEnvelope | Error /* | unknown (result) */>
}

export namespace Interceptor {
  export type InferConstructor<
    $Pipeline extends Pipeline = Pipeline,
  > // $Options extends InterceptorOptions = InterceptorOptions,
   = (
    steps: Simplify<InferConstructorKeywordArguments<$Pipeline>>,
  ) => Promise<
    | Pipeline.GetAwaitedResult<$Pipeline>
    | SomePublicStepEnvelope
  >

  type InferConstructorKeywordArguments<
    $Pipeline extends Pipeline,
  > = InferConstructorKeywordArguments_<$Pipeline['steps'], Pipeline.GetAwaitedResult<$Pipeline>>

  // dprint-ignore
  type InferConstructorKeywordArguments_<
    $Steps extends Step[],
    $PipelineOutput,
  > =
    $Steps extends [infer $NextStep extends Step, ...infer $NextNextSteps extends Step[]]
      ? & {
            [_ in $NextStep['name']]: InferStepTrigger<$NextStep, $NextNextSteps, $PipelineOutput>
          }
        & InferConstructorKeywordArguments_<$NextNextSteps, $PipelineOutput>
      : {}

  // dprint-ignore
  type InferStepTrigger<$Step extends Step, $NextSteps extends Step[], $PipelineOutput> =
    (
      params: Simplify<
        & {
            input?: $Step['input']
          }
        & (
          $Step['slots'] extends undefined
            ? {}
            : { slots?: Partial<$Step['slots']> }
        )
      >
    ) => Promise<
      $NextSteps extends [infer $NextStep extends Step, ...infer $NextNextSteps extends Step[]]
        ? {
            [_ in $NextStep['name']]: InferStepTrigger<$NextStep, $NextNextSteps, $PipelineOutput>
          }
        : $PipelineOutput
    >
}

export type InterceptorGeneric = NonRetryingInterceptor | RetryingInterceptor

export type NonRetryingInterceptor = {
  retrying: false
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<SomePublicStepEnvelope /* | unknown (result) */>
}

export type RetryingInterceptor = {
  retrying: true
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<SomePublicStepEnvelope | Error /* | unknown (result) */>
}

export const createRetryingInterceptor = (extension: NonRetryingInterceptorInput): RetryingInterceptorInput => {
  return {
    retrying: true,
    run: extension,
  }
}

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
