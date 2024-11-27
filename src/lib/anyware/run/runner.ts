import { partitionAndAggregateErrors } from '../../errors/_.js'
import { Errors } from '../../errors/__.js'
import { createDeferred } from '../../prelude.js'
import { casesExhausted } from '../../prelude.js'
import {
  createRetryingInterceptor,
  type InterceptorInput,
  type NonRetryingInterceptorInput,
} from '../Interceptor/Interceptor.js'
import type { Pipeline } from '../Pipeline/Pipeline.js'
import type { PipelineDefinition } from '../PipelineDef/__.js'
import { successfulResult } from '../Result.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { StepResultErrorExtension } from '../StepResult.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'
import { getEntryStep } from './getEntrypoint.js'
import { runPipeline } from './runPipeline.js'

export interface Params<$Pipeline extends Pipeline = Pipeline> {
  initialInput: $Pipeline['input']
  interceptors?: NonRetryingInterceptorInput[]
  retryingInterceptor?: NonRetryingInterceptorInput
}

export const createRunner =
  <$Pipeline extends Pipeline>(pipeline: $Pipeline) =>
  async (params?: Params<$Pipeline>): Promise<$Pipeline['output']> => {
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

    return successfulResult(result.result) as any
  }

const toInternalInterceptor = (pipeline: PipelineDefinition.Pipeline, interceptor: InterceptorInput) => {
  const currentChunk = createDeferred<StepTriggerEnvelope>()
  const body = createDeferred()
  const interceptorTrigger = typeof interceptor === `function` ? interceptor : interceptor.run
  const retrying = typeof interceptor === `function` ? false : interceptor.retrying
  const applyBody = async (input: object) => {
    try {
      const result = await interceptorTrigger(input)
      body.resolve(result)
    } catch (error) {
      body.reject(error)
    }
  }

  const interceptorName = interceptorTrigger.name || `anonymous`

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
      const entryStep = getEntryStep(pipeline, interceptorTrigger)
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

      const stepsBeforeEntrypoint: StepDefinition.Name[] = []
      for (const step of pipeline.steps) {
        if (step === entryStep) break
        stepsBeforeEntrypoint.push(step.name)
      }

      const passthroughs = stepsBeforeEntrypoint.map((hookName) => createPassthrough(hookName))
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
