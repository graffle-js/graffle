import { Errors } from '../../errors/__.js'
import { casesExhausted, createDeferred, debugSub, errorFromMaybeError } from '../../prelude.js'
import type { InterceptorGeneric } from '../Interceptor/Interceptor.js'
import type { Pipeline } from '../Pipeline/Pipeline.js'
import type { StepDef } from '../StepDef.js'
import type { StepResult, StepResultErrorAsync } from '../StepResult.js'
import { StepTrigger } from '../StepTrigger.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'
import type { ResultEnvelop } from './resultEnvelope.js'

type HookDoneResolver = (input: StepResult) => void

const createExecutableChunk = <$Extension extends InterceptorGeneric>(extension: $Extension) => ({
  ...extension,
  currentChunk: createDeferred<StepTriggerEnvelope | ($Extension['retrying'] extends true ? Error : never)>(),
})

export const runStep = async (
  {
    pipeline,
    name,
    done,
    inputOriginalOrFromExtension,
    previousStepsCompleted,
    interceptorsStack,
    nextInterceptorsStack,
    asyncErrorDeferred,
    customSlots,
  }: {
    pipeline: Pipeline
    name: string
    done: HookDoneResolver
    inputOriginalOrFromExtension: object
    /**
     * Information about previous hook executions, like what their input was.
     */
    previousStepsCompleted: object
    customSlots: StepDef.Slots
    /**
     * The extensions that are at this hook awaiting.
     */
    interceptorsStack: readonly InterceptorGeneric[]
    /**
     * The extensions that have advanced past this hook, to their next hook,
     * and are now awaiting.
     *
     * @remarks every extension popped off the stack is added here (except those
     * that short-circuit the pipeline or enter passthrough mode).
     */
    nextInterceptorsStack: readonly InterceptorGeneric[]
    asyncErrorDeferred: StepResultErrorAsync
  },
) => {
  const debugHook = debugSub(`step ${name}:`)

  debugHook(`advance to next interceptor`)

  const [extension, ...extensionsStackRest] = interceptorsStack
  const isLastExtension = extensionsStackRest.length === 0
  if (!isLastExtension && extension?.retrying) {
    done({
      type: `error`,
      source: `user`,
      extensionName: extension.name, // must be defined because is NOT last extension
      hookName: name,
      // dprint-ignore
      error: new Errors.ContextualError(`Only the last extension can retry hooks.`, { extensionsAfter: extensionsStackRest.map(_=>({ name: _.name })) }),
    })
  }

  /**
   * If extension is defined then that means there
   * are still extensions to run for this hook.
   *
   * Otherwise we can run the core implementation.
   */

  if (extension) {
    const debugExtension = debugSub(`hook ${name}: extension ${extension.name}:`)
    const hookInvokedDeferred = createDeferred()

    debugExtension(`start`)
    let hookFailed = false
    const trigger = StepTrigger.create(inputOriginalOrFromExtension, (extensionInput) => {
      debugExtension(`extension calls this hook`, extensionInput)

      const inputResolved = extensionInput?.input ?? inputOriginalOrFromExtension
      const customSlotsResolved = {
        ...customSlots,
        ...extensionInput?.using,
      }

      // [1]
      // Never resolve this hook call, the extension is in an invalid state and should not continue executing.
      // While it is possible the extension could continue by not await this hook at least if they are awaiting
      // it and so have code depending on its result it will never run.
      if (hookInvokedDeferred.isResolved()) {
        if (!extension.retrying) {
          asyncErrorDeferred.resolve({
            type: `error`,
            source: `extension`,
            interceptorName: extension.name,
            hookName: name,
            error: new Errors.ContextualError(`Only a retrying extension can retry hooks.`, {
              hookName: name,
              extensionsAfter: extensionsStackRest.map(_ => ({ name: _.name })),
            }),
          })
          return createDeferred().promise // [1]
        } else if (!hookFailed) {
          asyncErrorDeferred.resolve({
            type: `error`,
            source: `extension`,
            interceptorName: extension.name,
            hookName: name,
            error: new Errors.ContextualError(
              `Only after failure can a hook be called again by a retrying extension.`,
              {
                hookName: name,
                extensionName: extension.name,
              },
            ),
          })
          return createDeferred().promise // [1]
        } else {
          debugExtension(`execute branch: retry`)
          const extensionRetry = createExecutableChunk(extension)
          void runStep({
            pipeline,
            name,
            done,
            previousStepsCompleted,
            inputOriginalOrFromExtension,
            asyncErrorDeferred,
            interceptorsStack: [extensionRetry],
            nextInterceptorsStack,
            customSlots: customSlotsResolved,
          })
          return extensionRetry.currentChunk.promise.then(async (envelope) => {
            const envelop_ = envelope as StepTriggerEnvelope // todo ... better way?
            const hook = envelop_[name] // as (params:{input:object;previous:object;using:Slots}) =>
            if (!hook) throw new Error(`Hook not found in envelope: ${name}`)
            // todo use inputResolved ?
            const result = await hook({
              ...extensionInput,
              input: extensionInput?.input ?? inputOriginalOrFromExtension,
            }) as Promise<StepTriggerEnvelope | Error | ResultEnvelop>
            return result
          })
        }
      } else {
        const extensionWithNextChunk = createExecutableChunk(extension)
        const nextNextHookStack = [...nextInterceptorsStack, extensionWithNextChunk] // tempting to mutate here but simpler to think about as copy.
        hookInvokedDeferred.resolve(true)
        void runStep({
          pipeline,
          name,
          done,
          previousStepsCompleted,
          asyncErrorDeferred,
          inputOriginalOrFromExtension: inputResolved,
          interceptorsStack: extensionsStackRest,
          nextInterceptorsStack: nextNextHookStack,
          customSlots: customSlotsResolved,
        })

        return extensionWithNextChunk.currentChunk.promise.then(_ => {
          if (_ instanceof Error) {
            debugExtension(`received hook error`)
            hookFailed = true
          }
          return _
        })
      }
    })

    // The extension is resumed. It is responsible for calling the next hook.

    debugExtension(`advance with envelope`)
    const envelope: StepTriggerEnvelope = {
      [name]: trigger,
    }
    extension.currentChunk.resolve(envelope)

    // If the extension does not return, it wants to tap into more hooks.
    // If the extension returns the hook envelope, it wants the rest of the pipeline
    // to pass through it.
    // If the extension returns a non-hook-envelope value, it wants to short-circuit the pipeline.
    debugHook(`start race between extension returning or invoking next hook`)
    const { branch, result } = await Promise.race([
      hookInvokedDeferred.promise.then(result => {
        return { branch: `hookInvoked`, result } as const
      }).catch((e: unknown) => ({ branch: `hookInvokedButThrew`, result: e } as const)),
      // rename branch to "extension"
      extension.body.promise.then(result => {
        return { branch: `extensionReturned`, result } as const
      }).catch((e: unknown) => ({ branch: `extensionThrew`, result: e } as const)),
    ])

    switch (branch) {
      case `hookInvoked`: {
        debugExtension(`invoked next hook (or retrying extension got error pushed through)`)
        // do nothing, hook is making the processing continue.
        return
      }
      case `extensionReturned`: {
        debugExtension(`extension returned`)
        if (result === envelope) {
          void runStep({
            pipeline,
            name,
            done,
            previousStepsCompleted,
            inputOriginalOrFromExtension,
            asyncErrorDeferred,
            interceptorsStack: extensionsStackRest,
            nextInterceptorsStack,
            customSlots,
          })
        } else {
          done({ type: `shortCircuited`, result })
        }
        return
      }
      case `extensionThrew`: {
        debugExtension(`extension threw`)
        done({
          type: `error`,
          hookName: name,
          source: `extension`,
          error: errorFromMaybeError(result),
          interceptorName: extension.name,
        })
        return
      }
      case `hookInvokedButThrew`:
        debugExtension(`hook error`)
        // todo rename source to "hook"
        done({
          type: `error`,
          hookName: name,
          source: `implementation`,
          error: errorFromMaybeError(result),
        })
        return
      default:
        throw casesExhausted(branch)
    }
  } /* reached core for this hook */ else {
    debugHook(`no more interceptors to advance, run implementation`)

    const implementation = pipeline.stepsIndex.get(name)
    if (!implementation) {
      throw new Errors.ContextualError(`Implementation not found for step name ${name}`, { hookName: name })
    }

    let result
    try {
      const slotsResolved = {
        ...implementation.slots,
        ...customSlots,
      }
      result = await implementation.run(
        inputOriginalOrFromExtension,
        slotsResolved,
        previousStepsCompleted,
      )
    } catch (error) {
      debugHook(`implementation error`)
      const lastExtension = nextInterceptorsStack[nextInterceptorsStack.length - 1]
      if (lastExtension && lastExtension.retrying) {
        lastExtension.currentChunk.resolve(errorFromMaybeError(error))
      } else {
        done({ type: `error`, hookName: name, source: `implementation`, error: errorFromMaybeError(error) })
      }
      return
    }

    // Return to root with the next result and hook stack

    debugHook(`completed`)

    done({
      type: `completed`,
      result,
      effectiveInput: inputOriginalOrFromExtension,
      nextExtensionsStack: nextInterceptorsStack,
    })
  }
}
