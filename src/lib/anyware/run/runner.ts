import { partitionAndAggregateErrors } from '../../errors/_.js'
import { Errors } from '../../errors/__.js'
import { createDeferred } from '../../prelude.js'
import { casesExhausted } from '../../prelude.js'
import type { HookResultErrorExtension } from '../hook/private.js'
import type { SomeStepTriggerEnvelope } from '../hook/public.js'
import { createRetryingInterceptor, type Interceptor, type InterceptorInput } from '../Interceptor/Interceptor.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Step/__.js'
import { getEntryStep } from './getEntrypoint.js'
import type { OptimizedPipeline } from './OptimizedPipeline.js'
import { optimizePipeline } from './OptimizedPipeline.js'
import { runPipeline } from './runPipeline.js'

export const createRunner =
  <$Pipeline extends Pipeline>(pipeline: $Pipeline) =>
  async ({ initialInput, interceptors, retryingInterceptor }: {
    initialInput: $Pipeline['input']
    interceptors: Interceptor.InferConstructor<$Pipeline>[]
    retryingInterceptor?: Interceptor.InferConstructor<$Pipeline>
  }): Promise<Pipeline.GetAwaitedResult<$Pipeline> | Errors.ContextualError> => {
    const optimizedPipeline = optimizePipeline(pipeline)
    const interceptors_ = retryingInterceptor
      ? [...interceptors, createRetryingInterceptor(retryingInterceptor)]
      : interceptors
    const initialHookStackAndErrors = interceptors_.map(extension =>
      toInternalInterceptor(optimizedPipeline, extension)
    )
    const [initialHookStack, error] = partitionAndAggregateErrors(initialHookStackAndErrors)
    if (error) return error

    const asyncErrorDeferred = createDeferred<HookResultErrorExtension>({ strict: false })
    const result = await runPipeline({
      pipeline: optimizedPipeline,
      stepsToProcess: pipeline.steps,
      originalInputOrResult: initialInput,
      // todo fix any
      interceptorsStack: initialHookStack as any,
      asyncErrorDeferred,
      previousStepsCompleted: {},
    })
    if (result instanceof Error) return result

    return result.result as any
  }

const toInternalInterceptor = (pipeline: OptimizedPipeline, interceptor: InterceptorInput) => {
  const currentChunk = createDeferred<SomeStepTriggerEnvelope>()
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

  const interceptorName = extensionRun.name || `anonymous`

  switch (pipeline.config.entrypointSelectionMode) {
    case `off`: {
      void currentChunk.promise.then(applyBody)
      return {
        name: interceptorName,
        entrypoint: pipeline.steps[0]?.name,
        body,
        currentChunk,
      }
    }
    case `optional`:
    case `required`: {
      const entryStep = getEntryStep(pipeline.stepsIndex, extensionRun)
      if (entryStep instanceof Error) {
        if (pipeline.config.entrypointSelectionMode === `required`) {
          return entryStep
        } else {
          void currentChunk.promise.then(applyBody)
          return {
            name: interceptorName,
            entrypoint: pipeline.steps[0]?.name,
            body,
            currentChunk,
          }
        }
      }

      const hooksBeforeEntrypoint: Step.Name[] = []
      for (const step of pipeline.steps) {
        if (step === entryStep) break
        hooksBeforeEntrypoint.push(step.name)
      }

      const passthroughs = hooksBeforeEntrypoint.map((hookName) => createPassthrough(hookName))
      let currentChunkPromiseChain = currentChunk.promise
      for (const passthrough of passthroughs) {
        currentChunkPromiseChain = currentChunkPromiseChain.then(passthrough)
      }
      void currentChunkPromiseChain.then(applyBody)

      return {
        retrying,
        name: interceptorName,
        entryStep,
        body,
        currentChunk,
      }
    }
    default:
      throw casesExhausted(pipeline.config.entrypointSelectionMode)
  }
}

const createPassthrough = (hookName: string) => async (hookEnvelope: SomeStepTriggerEnvelope) => {
  const hook = hookEnvelope[hookName]
  if (!hook) {
    throw new Errors.ContextualError(`Hook not found in hook envelope`, { hookName })
  }
  return await hook({ input: hook.input })
}
