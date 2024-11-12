import type { Errors } from '../../errors/__.js'
import { ContextualError } from '../../errors/ContextualError.js'
import { casesExhausted, createDeferred, debug } from '../../prelude.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import type { InterceptorGeneric } from '../Interceptor/Interceptor.js'
import type { ExecutablePipeline } from '../Pipeline/ExecutablePipeline.js'
import type { StepResult, StepResultErrorAsync } from '../StepResult.js'
import { createResultEnvelope } from './resultEnvelope.js'
import type { ResultEnvelop } from './resultEnvelope.js'
import { runStep } from './runStep.js'

export const defaultFunctionName = `anonymous`

export const runPipeline = async (
  {
    pipeline,
    stepsToProcess,
    originalInputOrResult,
    interceptorsStack,
    asyncErrorDeferred,
    previousStepsCompleted,
  }: {
    pipeline: ExecutablePipeline
    stepsToProcess: readonly ExecutableStep[]
    originalInputOrResult: unknown
    interceptorsStack: readonly InterceptorGeneric[]
    asyncErrorDeferred: StepResultErrorAsync
    previousStepsCompleted: object
  },
): Promise<ResultEnvelop | Errors.ContextualError> => {
  const [stepToProcess, ...stepsRestToProcess] = stepsToProcess

  if (!stepToProcess) {
    debug(`pipeline: ending`)
    const result = await runPipelineEnd({ interceptorsStack, result: originalInputOrResult })
    debug(`pipeline: returning`)
    return createResultEnvelope(result)
  }

  debug(`hook ${stepToProcess.name}: start`)

  const done = createDeferred<StepResult>({ strict: false })

  // We do not await the step runner here.
  // Instead we work with a deferred passed to it.
  void runStep({
    pipeline,
    name: stepToProcess.name,
    done: done.resolve,
    inputOriginalOrFromExtension: originalInputOrResult as object,
    previousStepsCompleted,
    interceptorsStack,
    asyncErrorDeferred,
    customSlots: {},
    nextInterceptorsStack: [],
  })

  const signal = await Promise.race(
    [done.promise, asyncErrorDeferred.promise],
  )

  switch (signal.type) {
    case `completed`: {
      const { result, effectiveInput, nextExtensionsStack } = signal
      const nextPreviousStepsCompleted = {
        ...previousStepsCompleted,
        [stepToProcess.name]: {
          input: effectiveInput,
        },
      }
      return await runPipeline({
        pipeline,
        stepsToProcess: stepsRestToProcess,
        originalInputOrResult: result,
        interceptorsStack: nextExtensionsStack,
        previousStepsCompleted: nextPreviousStepsCompleted,
        asyncErrorDeferred,
      })
    }
    case `shortCircuited`: {
      debug(`signal: shortCircuited`)
      const { result } = signal
      return createResultEnvelope(result)
    }
    case `error`: {
      debug(`signal: error`)
      signal

      if (pipeline.config.passthroughErrorWith?.(signal)) {
        return signal.error as any // todo change return type to be unknown since this function could permit anything?
      }

      if (pipeline.config.passthroughErrorInstanceOf.some(_ => signal.error instanceof _)) {
        return signal.error as any // todo change return type to include object... given this instanceof permits that?
      }

      const wasAsync = asyncErrorDeferred.isResolved()
      // todo type test for this possible return value
      switch (signal.source) {
        case `extension`: {
          // todo test these 2 branches explicitly
          const nameTip = signal.interceptorName === defaultFunctionName
            ? ` (use named functions to improve this error message)`
            : ``
          const message = wasAsync
            ? `There was an error in the interceptor "${signal.interceptorName}"${nameTip}.`
            : `There was an error in the interceptor "${signal.interceptorName}"${nameTip} while running hook "${signal.hookName}".`

          return new ContextualError(message, {
            hookName: signal.hookName,
            source: signal.source,
            interceptorName: signal.interceptorName,
          }, signal.error)
        }
        case `implementation`: {
          const message = `There was an error in the core implementation of hook "${signal.hookName}".`
          return new ContextualError(message, { hookName: signal.hookName, source: signal.source }, signal.error)
        }
        case `user`: {
          return signal.error
        }
        default:
          throw casesExhausted(signal)
      }
    }
    default:
      throw casesExhausted(signal)
  }
}

const runPipelineEnd = async ({
  interceptorsStack,
  result,
}: { result: unknown; interceptorsStack: readonly InterceptorGeneric[] }): Promise<unknown> => {
  const [interceptor, ...interceptorsRest] = interceptorsStack
  if (!interceptor) return result

  debug(`interceptor ${interceptor.name}: end`)
  interceptor.currentChunk.resolve(result as any)
  const nextResult = await interceptor.body.promise
  return await runPipelineEnd({
    interceptorsStack: interceptorsRest,
    result: nextResult,
  })
}
