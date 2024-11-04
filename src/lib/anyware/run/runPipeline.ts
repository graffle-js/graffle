import type { Errors } from '../../errors/__.js'
import { ContextualError } from '../../errors/ContextualError.js'
import { casesExhausted, createDeferred, debug } from '../../prelude.js'
import type { HookResult, HookResultErrorAsync } from '../hook/private.js'
import type { InterceptorGeneric } from '../Interceptor.js'
import type { Pipeline } from '../Pipeline.js'
import { createResultEnvelope } from './resultEnvelope.js'
import type { ResultEnvelop } from './resultEnvelope.js'
import { runHook } from './runHook.js'

export const defaultFunctionName = `anonymous`

interface Input {
  pipeline: Pipeline
  hookNamesOrderedBySequence: readonly string[]
  originalInputOrResult: unknown
  interceptorsStack: readonly InterceptorGeneric[]
  asyncErrorDeferred: HookResultErrorAsync
  previous: object
}

export const runPipeline = async (
  { pipeline, hookNamesOrderedBySequence, originalInputOrResult, interceptorsStack, asyncErrorDeferred, previous }:
    Input,
): Promise<ResultEnvelop | Errors.ContextualError> => {
  const [hookName, ...hookNamesRest] = hookNamesOrderedBySequence

  if (!hookName) {
    debug(`pipeline: ending`)
    const result = await runPipelineEnd({ interceptorsStack, result: originalInputOrResult })
    debug(`pipeline: returning`)
    return createResultEnvelope(result)
  }

  debug(`hook ${hookName}: start`)

  const done = createDeferred<HookResult>({ strict: false })

  void runHook({
    pipeline,
    name: hookName,
    done: done.resolve,
    inputOriginalOrFromExtension: originalInputOrResult as object,
    previous,
    interceptorsStack,
    asyncErrorDeferred,
    customSlots: {},
    nextExtensionsStack: [],
  })

  const signal = await Promise.race(
    [done.promise, asyncErrorDeferred.promise],
  )

  switch (signal.type) {
    case `completed`: {
      const { result, effectiveInput, nextExtensionsStack } = signal
      const nextPrevious = {
        ...previous,
        [hookName]: {
          input: effectiveInput,
        },
      }
      return await runPipeline({
        pipeline,
        hookNamesOrderedBySequence: hookNamesRest,
        originalInputOrResult: result,
        interceptorsStack: nextExtensionsStack,
        previous: nextPrevious,
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

      if (pipeline.passthroughErrorWith) {
        if (pipeline.passthroughErrorWith(signal)) {
          return signal.error as any // todo change return type to be unknown since this function could permit anything?
        }
      }

      if (pipeline.passthroughErrorInstanceOf) {
        if (pipeline.passthroughErrorInstanceOf.some(_ => signal.error instanceof _)) {
          return signal.error as any // todo change return type to include object... given this instanceof permits that?
        }
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
