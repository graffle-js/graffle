import { partitionAndAggregateErrors } from '../../errors/_.js'
import { Errors } from '../../errors/__.js'
import { createDeferred } from '../../prelude.js'
import { casesExhausted } from '../../prelude.js'
import type { Private } from '../../private.js'
import type { HookName } from '../hook/definition.js'
import type { HookResultErrorExtension } from '../hook/private.js'
import type { SomePublicHookEnvelope } from '../hook/public.js'
import { createRetryingInterceptor, type Interceptor, type InterceptorInput } from '../Interceptor.js'
import type { Pipeline } from '../Pipeline.js'
import { getEntrypoint } from './getEntrypoint.js'
import { runPipeline } from './runPipeline.js'

export type Runner<$Pipeline extends Pipeline = Pipeline> = (
  { initialInput, interceptors, options }: {
    initialInput: GetInitialPipelineInput<$Pipeline>
    interceptors: Interceptor<$Pipeline>[]
    retryingInterceptor?: Interceptor<$Pipeline, { retrying: true }>
    options?: Options
  },
) => Promise<Private.Get<$Pipeline>['result'] | Errors.ContextualError>

const resolveOptions = (options?: Options): Config => {
  return {
    entrypointSelectionMode: options?.entrypointSelectionMode ?? `required`,
  }
}

export type Options = {
  /**
   * @defaultValue `true`
   */
  entrypointSelectionMode?: 'optional' | 'required' | 'off'
}

type Config = Required<Options>

export const createRunner =
  <$Pipeline extends Pipeline>(pipeline: $Pipeline): Runner<$Pipeline> =>
  async ({ initialInput, interceptors, options, retryingInterceptor }) => {
    const interceptors_ = retryingInterceptor
      ? [...interceptors, createRetryingInterceptor(retryingInterceptor)]
      : interceptors
    const initialHookStackAndErrors = interceptors_.map(extension =>
      toInternalInterceptor(pipeline, resolveOptions(options), extension)
    )
    const [initialHookStack, error] = partitionAndAggregateErrors(initialHookStackAndErrors)
    if (error) return error

    const asyncErrorDeferred = createDeferred<HookResultErrorExtension>({ strict: false })
    const result = await runPipeline({
      pipeline,
      hookNamesOrderedBySequence: pipeline.hookNamesOrderedBySequence,
      originalInputOrResult: initialInput,
      // todo fix any
      interceptorsStack: initialHookStack as any,
      asyncErrorDeferred,
      previous: {},
    })
    if (result instanceof Error) return result

    return result.result as any
  }

type GetInitialPipelineInput<$Pipeline extends Pipeline> = Private.Get<
  $Pipeline
>['hookMap'][Private.Get<$Pipeline>['hookSequence'][0]]['input']

const toInternalInterceptor = (pipeline: Pipeline, config: Config, interceptor: InterceptorInput) => {
  const currentChunk = createDeferred<SomePublicHookEnvelope>()
  const body = createDeferred()
  const extensionRun = typeof interceptor === `function` ? interceptor : interceptor.run
  const retrying = typeof interceptor === `function` ? false : interceptor.retrying
  const applyBody = async (input: object) => {
    try {
      const result = await extensionRun(input)
      body.resolve(result)
    } catch (error) {
      body.reject(error)
    }
  }

  const extensionName = extensionRun.name || `anonymous`

  switch (config.entrypointSelectionMode) {
    case `off`: {
      void currentChunk.promise.then(applyBody)
      return {
        name: extensionName,
        entrypoint: pipeline.hookNamesOrderedBySequence[0], // todo non-empty-array data structure
        body,
        currentChunk,
      }
    }
    case `optional`:
    case `required`: {
      const entrypoint = getEntrypoint(pipeline.hookNamesOrderedBySequence, extensionRun)
      if (entrypoint instanceof Error) {
        if (config.entrypointSelectionMode === `required`) {
          return entrypoint
        } else {
          void currentChunk.promise.then(applyBody)
          return {
            name: extensionName,
            entrypoint: pipeline.hookNamesOrderedBySequence[0], // todo non-empty-array data structure
            body,
            currentChunk,
          }
        }
      }

      const hooksBeforeEntrypoint: HookName[] = []
      for (const hookName of pipeline.hookNamesOrderedBySequence) {
        if (hookName === entrypoint) break
        hooksBeforeEntrypoint.push(hookName)
      }

      const passthroughs = hooksBeforeEntrypoint.map((hookName) => createPassthrough(hookName))
      let currentChunkPromiseChain = currentChunk.promise
      for (const passthrough of passthroughs) {
        currentChunkPromiseChain = currentChunkPromiseChain.then(passthrough)
      }
      void currentChunkPromiseChain.then(applyBody)

      return {
        retrying,
        name: extensionName,
        entrypoint,
        body,
        currentChunk,
      }
    }
    default:
      throw casesExhausted(config.entrypointSelectionMode)
  }
}

const createPassthrough = (hookName: string) => async (hookEnvelope: SomePublicHookEnvelope) => {
  const hook = hookEnvelope[hookName]
  if (!hook) {
    throw new Errors.ContextualError(`Hook not found in hook envelope`, { hookName })
  }
  return await hook({ input: hook.input })
}
