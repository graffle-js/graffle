import type { Deferred, MaybePromise } from '../prelude.js'
import type { Private } from '../private.js'
import type { InferPublicHooks, SomePublicHookEnvelope } from './hook/public.js'
import type { Pipeline } from './Pipeline.js'

export type InterceptorOptions = {
  retrying: boolean
}

export type Interceptor<
  $Core extends Pipeline = Pipeline,
  $Options extends InterceptorOptions = InterceptorOptions,
> = (
  hooks: InferPublicHooks<
    Private.Get<$Core>['hookSequence'],
    Private.Get<$Core>['hookMap'],
    Private.Get<$Core>['result'],
    $Options
  >,
) => Promise<
  | Private.Get<$Core>['result']
  | SomePublicHookEnvelope
>

export type InterceptorGeneric = NonRetryingInterceptor | RetryingInterceptor

export type NonRetryingInterceptor = {
  retrying: false
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<SomePublicHookEnvelope /* | unknown (result) */>
}

export type RetryingInterceptor = {
  retrying: true
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<SomePublicHookEnvelope | Error /* | unknown (result) */>
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
