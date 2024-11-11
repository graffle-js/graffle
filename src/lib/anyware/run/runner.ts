import { partitionAndAggregateErrors } from '../../errors/_.js'
import { Errors } from '../../errors/__.js'
import { createDeferred } from '../../prelude.js'
import { casesExhausted } from '../../prelude.js'
import type { PipelineSpec } from '../_.js'
import {
  createRetryingInterceptor,
  type InterceptorInput,
  type NonRetryingInterceptorInput,
} from '../Interceptor/Interceptor.js'
import type { Pipeline } from '../Pipeline/__.js'
import { type InferResultFromSpec, successfulResult } from '../Pipeline/Result.js'
import type { Step } from '../Step.js'
import type { StepResultErrorExtension } from '../StepResult.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'
import { getEntryStep } from './getEntrypoint.js'
import { runPipeline } from './runPipeline.js'

export interface Params<$Pipeline extends PipelineSpec = PipelineSpec> {
  initialInput: $Pipeline['input']
  interceptors: NonRetryingInterceptorInput[]
  retryingInterceptor?: NonRetryingInterceptorInput
}

export const createRunner =
  <$Pipeline extends Pipeline.PipelineExecutable>(pipeline: $Pipeline) =>
  async (params?: Params<$Pipeline>): Promise<InferResultFromSpec<$Pipeline>> => {
    const { initialInput, interceptors = [], retryingInterceptor } = params ?? {}

    const interceptors_ = retryingInterceptor
      ? [...interceptors, createRetryingInterceptor(retryingInterceptor)]
      : interceptors
    const initialHookStackAndErrors = interceptors_.map(extension => toInternalInterceptor(pipeline, extension))
    const [initialHookStack, error] = partitionAndAggregateErrors(initialHookStackAndErrors)
    if (error) return error

    const asyncErrorDeferred = createDeferred<StepResultErrorExtension>({ strict: false })
    const result = await runPipeline({
      pipeline,
      stepsToProcess: pipeline.steps,
      originalInputOrResult: initialInput,
      // todo fix any
      interceptorsStack: initialHookStack as any,
      asyncErrorDeferred,
      previousStepsCompleted: {},
    })
    if (result instanceof Error) return result as any

    return successfulResult(result.result)
  }

const toInternalInterceptor = (pipeline: Pipeline.PipelineExecutable, interceptor: InterceptorInput) => {
  const currentChunk = createDeferred<StepTriggerEnvelope>()
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
      const entryStep = getEntryStep(pipeline, extensionRun)
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

const createPassthrough = (hookName: string) => async (hookEnvelope: StepTriggerEnvelope) => {
  const hook = hookEnvelope[hookName]
  if (!hook) {
    throw new Errors.ContextualError(`Hook not found in hook envelope`, { hookName })
  }
  return await hook({ input: hook.input })
}
