import { Errors } from '../errors/__.js'
import { partitionAndAggregateErrors } from '../errors/ContextualAggregateError.js'
import { ContextualError } from '../errors/ContextualError.js'
import type { Deferred, FindValueAfter, IsLastValue, MaybePromise } from '../prelude.js'
import { casesExhausted, createDeferred, debug, errorFromMaybeError } from '../prelude.js'
import { getEntrypoint } from './getEntrypoint.js'

type HookSequence = readonly [string, ...string[]]

export type Extension2<
  $Core extends Core = Core,
> = (
  hooks: ExtensionHooks<
    $Core[PrivateTypesSymbol]['hookSequence'],
    $Core[PrivateTypesSymbol]['hookMap'],
    $Core[PrivateTypesSymbol]['result']
  >,
) => Promise<
  | $Core[PrivateTypesSymbol]['result']
  | SomeHookEnvelope
>

type ExtensionHooks<
  $HookSequence extends HookSequence,
  $HookMap extends Record<$HookSequence[number], object> = Record<$HookSequence[number], object>,
  $Result = unknown,
> = {
  [$HookName in $HookSequence[number]]: Hook<$HookSequence, $HookMap, $Result, $HookName>
}

type CoreInitialInput<$Core extends Core> =
  $Core[PrivateTypesSymbol]['hookMap'][$Core[PrivateTypesSymbol]['hookSequence'][0]]

const PrivateTypesSymbol = Symbol(`private`)

type PrivateTypesSymbol = typeof PrivateTypesSymbol

const hookSymbol = Symbol(`hook`)

type HookSymbol = typeof hookSymbol

type SomeHookEnvelope = {
  [name: string]: SomeHook
}
export type SomeHook<fn extends (input: any) => any = (input: any) => any> = fn & {
  [hookSymbol]: HookSymbol
  // todo the result is unknown, but if we build a EndEnvelope, then we can work with this type more logically and put it here.
  // E.g. adding `| unknown` would destroy the knowledge of hook envelope case
  // todo this is not strictly true, it could also be the final result
  // TODO how do I make this input type object without breaking the final types in e.g. client.extend.test
  // Ask Pierre
  // (input: object): SomeHookEnvelope
  input: Parameters<fn>[0]
}

export type HookMap<$HookSequence extends HookSequence> = Record<
  $HookSequence[number],
  any /* object <- type error but more accurate */
>

type Hook<
  $HookSequence extends HookSequence,
  $HookMap extends HookMap<$HookSequence> = HookMap<$HookSequence>,
  $Result = unknown,
  $Name extends $HookSequence[number] = $HookSequence[number],
> = (<$$Input extends $HookMap[$Name]>(input?: $$Input) => HookReturn<$HookSequence, $HookMap, $Result, $Name>) & {
  [hookSymbol]: HookSymbol
  input: $HookMap[$Name]
}

type HookReturn<
  $HookSequence extends HookSequence,
  $HookMap extends HookMap<$HookSequence> = HookMap<$HookSequence>,
  $Result = unknown,
  $Name extends $HookSequence[number] = $HookSequence[number],
> = IsLastValue<$Name, $HookSequence> extends true ? $Result : {
  [$NameNext in FindValueAfter<$Name, $HookSequence>]: Hook<
    $HookSequence,
    $HookMap,
    $Result,
    $NameNext
  >
}

export type Core<
  $HookSequence extends HookSequence = HookSequence,
  $HookMap extends HookMap<$HookSequence> = HookMap<$HookSequence>,
  $Result = unknown,
> = {
  [PrivateTypesSymbol]: {
    hookSequence: $HookSequence
    hookMap: $HookMap
    result: $Result
  }
  hookNamesOrderedBySequence: $HookSequence
  hooks: {
    [$HookName in $HookSequence[number]]: (
      input: $HookMap[$HookName],
    ) => MaybePromise<
      IsLastValue<$HookName, $HookSequence> extends true ? $Result : $HookMap[FindValueAfter<$HookName, $HookSequence>]
    >
  }
}

export type HookName = string

const createHook = <$X, $F extends (...args: any[]) => any>(
  originalInput: $X,
  fn: $F,
): $F & { input: $X } => {
  // @ts-expect-error
  fn.input = originalInput
  // @ts-expect-error
  return fn
}

type Extension = {
  name: string
  entrypoint: string
  body: Deferred<unknown>
  currentChunk: Deferred<unknown>
}

// export type ExtensionInput<$Input extends object = object> = (input: $Input) => MaybePromise<unknown>
export type ExtensionInput<$Input extends object = any> = (input: $Input) => MaybePromise<unknown>

type HookDoneData =
  | { type: 'completed'; result: unknown; nextHookStack: Extension[] }
  | { type: 'shortCircuited'; result: unknown }
  | { type: 'error'; hookName: string; source: 'implementation'; error: Error }
  | { type: 'error'; hookName: string; source: 'extension'; error: Error; extensionName: string }

type HookDoneResolver = (input: HookDoneData) => void

const runHook = async <$HookName extends string>(
  { core, name, done, originalInput, currentHookStack, nextHookStack }: {
    core: Core
    name: $HookName
    done: HookDoneResolver
    originalInput: unknown
    currentHookStack: Extension[]
    nextHookStack: Extension[]
  },
) => {
  const [pausedExtension, ...nextCurrentHookStack] = currentHookStack

  // Going down the stack
  // --------------------

  if (pausedExtension) {
    const hookUsedDeferred = createDeferred()

    debug(`${name}: extension ${pausedExtension.name}`)
    // The extension is responsible for calling the next hook.
    // If no input is passed that means use the original input.
    const hook = createHook(originalInput, (maybeNextOriginalInput?: object) => {
      // Once called, the extension is paused again and we continue down the current hook stack.
      hookUsedDeferred.resolve(true)

      debug(`${name}: ${pausedExtension.name}: pause`)
      const nextPausedExtension: Extension = {
        ...pausedExtension,
        currentChunk: createDeferred(),
      }
      const nextNextHookStack = [...nextHookStack, nextPausedExtension] // tempting to mutate here but simpler to think about as copy.

      void runHook({
        core,
        name,
        done,
        originalInput: maybeNextOriginalInput ?? originalInput,
        currentHookStack: nextCurrentHookStack,
        nextHookStack: nextNextHookStack,
      })

      return nextPausedExtension.currentChunk.promise
    })

    // The extension is resumed. It is responsible for calling the next hook.

    debug(`${name}: ${pausedExtension.name}: resume`)
    const envelope = { [name]: hook }
    pausedExtension.currentChunk.resolve(envelope)

    // If the extension does not return, it wants to tap into more hooks.
    // If the extension returns the hook envelope, it wants the rest of the pipeline
    // to pass through it.
    // If the extension returns a non-hook-envelope value, it wants to short-circuit the pipeline.
    const { branch, result } = await Promise.race([
      hookUsedDeferred.promise.then(result => {
        return { branch: `hook`, result } as const
      }).catch((e: unknown) => ({ branch: `hookError`, result: e } as const)),
      pausedExtension.body.promise.then(result => {
        return { branch: `body`, result } as const
      }).catch((e: unknown) => ({ branch: `bodyError`, result: e } as const)),
    ])

    debug(`${name}: ${pausedExtension.name}: branch`, branch)
    switch (branch) {
      case `body`: {
        if (result === envelope) {
          void runHook({
            core,
            name,
            done,
            originalInput,
            currentHookStack: nextCurrentHookStack,
            nextHookStack,
          })
        } else {
          done({ type: `shortCircuited`, result })
        }
        return
      }
      case `bodyError`: {
        done({
          type: `error`,
          hookName: name,
          source: `extension`,
          error: errorFromMaybeError(result),
          extensionName: pausedExtension.name,
        })
        return
      }
      case `hookError`:
        done({ type: `error`, hookName: name, source: `implementation`, error: errorFromMaybeError(result) })
        return
      case `hook`: {
        // do nothing, hook is making the processing continue.
        return
      }
      default:
        throw casesExhausted(branch)
    }
  }

  // Reached bottom of the stack
  // ---------------------------

  // Run core to get result

  const implementation = core.hooks[name]
  if (!implementation) {
    throw new Errors.ContextualError(`Implementation not found for hook name ${name}`, { hookName: name })
  }
  let result
  try {
    result = await implementation(originalInput as any)
  } catch (error) {
    done({ type: `error`, hookName: name, source: `implementation`, error: errorFromMaybeError(error) })
    return
  }

  // Return to root with the next result and hook stack

  done({ type: `completed`, result, nextHookStack })
  return
}

const ResultEnvelopeSymbol = Symbol(`resultEnvelope`)

type ResultEnvelopeSymbol = typeof ResultEnvelopeSymbol

export type ResultEnvelop<T> = {
  [ResultEnvelopeSymbol]: ResultEnvelopeSymbol
  result: T
}

const createResultEnvelope = <T>(result: T): ResultEnvelop<T> => ({
  [ResultEnvelopeSymbol]: ResultEnvelopeSymbol,
  result,
})

const run = async (
  { core, initialInput, initialHookStack }: { core: Core; initialInput: unknown; initialHookStack: Extension[] },
): Promise<ResultEnvelop<Core[PrivateTypesSymbol]['result']> | ContextualError> => {
  let currentInput = initialInput
  let currentHookStack = initialHookStack

  for (const hookName of core.hookNamesOrderedBySequence) {
    debug(`running hook`, hookName)
    const doneDeferred = createDeferred<HookDoneData>()
    void runHook({
      core,
      name: hookName,
      done: doneDeferred.resolve,
      originalInput: currentInput,
      currentHookStack,
      nextHookStack: [],
    })

    const signal = await doneDeferred.promise

    switch (signal.type) {
      case `completed`: {
        const { result, nextHookStack } = signal
        currentInput = result
        currentHookStack = nextHookStack
        break
      }
      case `shortCircuited`: {
        debug(`signal: shortCircuited`)
        const { result } = signal
        return createResultEnvelope(result)
      }
      case `error`: {
        debug(`signal: error`)
        // todo type test for this possible return value
        switch (signal.source) {
          case `extension`: {
            const nameTip = signal.extensionName ? ` (use named functions to improve this error message)` : ``
            const message =
              `There was an error in the extension "${signal.extensionName}"${nameTip} while running hook "${signal.hookName}".`
            return new ContextualError(message, {
              hookName: signal.hookName,
              source: signal.source,
              extensionName: signal.extensionName,
            }, signal.error)
          }
          case `implementation`: {
            const message = `There was an error in the core implementation of hook "${signal.hookName}".`
            return new ContextualError(message, { hookName: signal.hookName, source: signal.source }, signal.error)
          }
          default:
            throw casesExhausted(signal)
        }
      }
      default:
        throw casesExhausted(signal)
    }
  }

  debug(`ending`)

  let currentResult = currentInput
  for (const hook of currentHookStack) {
    debug(`end: ${hook.name}`)
    hook.currentChunk.resolve(currentResult)
    currentResult = await hook.body.promise
  }

  debug(`returning`)

  return createResultEnvelope(currentResult) // last loop result
}

const createPassthrough = (hookName: string) => async (hookEnvelope: SomeHookEnvelope) => {
  const hook = hookEnvelope[hookName]
  if (!hook) {
    throw new Errors.ContextualError(`Hook not found in hook envelope`, { hookName })
  }
  return await hook(hook.input)
}

type Config = Required<Options>

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

export type Builder<$Core extends Core = Core> = {
  core: $Core
  run: (
    { initialInput, extensions, options }: {
      initialInput: CoreInitialInput<$Core>
      extensions: Extension2<$Core>[]
      options?: Options
    },
  ) => Promise<$Core[PrivateTypesSymbol]['result'] | Errors.ContextualError>
}

export const create = <
  $HookSequence extends HookSequence = HookSequence,
  $HookMap extends HookMap<$HookSequence> = HookMap<$HookSequence>,
  $Result = unknown,
>(
  coreInput: Omit<Core<$HookSequence, $HookMap, $Result>, PrivateTypesSymbol>,
): Builder<Core<$HookSequence, $HookMap, $Result>> => {
  type $Core = Core<$HookSequence, $HookMap, $Result>

  const core = coreInput as any as $Core

  const builder: Builder<$Core> = {
    core,
    run: async (input) => {
      const { initialInput, extensions, options } = input
      const initialHookStackAndErrors = extensions.map(extension =>
        toInternalExtension(core, resolveOptions(options), extension)
      )
      const [initialHookStack, error] = partitionAndAggregateErrors(initialHookStackAndErrors)

      if (error) {
        return error
      }

      const result = await run({
        core,
        initialInput,
        // @ts-expect-error fixme
        initialHookStack,
      })
      if (result instanceof Error) return result

      return result.result as any
    },
  }

  return builder
}

const toInternalExtension = (core: Core, config: Config, extension: ExtensionInput) => {
  const currentChunk = createDeferred<SomeHookEnvelope>()
  const body = createDeferred()
  const applyBody = async (input: object) => {
    try {
      const result = await extension(input)
      body.resolve(result)
    } catch (error) {
      body.reject(error)
    }
  }

  const extensionName = extension.name || `anonymous`

  switch (config.entrypointSelectionMode) {
    case `off`: {
      void currentChunk.promise.then(applyBody)
      return {
        name: extensionName,
        entrypoint: core.hookNamesOrderedBySequence[0], // todo non-empty-array data structure
        body,
        currentChunk,
      }
    }
    case `optional`:
    case `required`: {
      const entrypoint = getEntrypoint(core.hookNamesOrderedBySequence, extension)
      if (entrypoint instanceof Error) {
        if (config.entrypointSelectionMode === `required`) {
          return entrypoint
        } else {
          void currentChunk.promise.then(applyBody)
          return {
            name: extensionName,
            entrypoint: core.hookNamesOrderedBySequence[0], // todo non-empty-array data structure
            body,
            currentChunk,
          }
        }
      }

      const hooksBeforeEntrypoint: HookName[] = []
      for (const hookName of core.hookNamesOrderedBySequence) {
        if (hookName === entrypoint) break
        hooksBeforeEntrypoint.push(hookName)
      }

      const passthroughs = hooksBeforeEntrypoint.map((hookName) => createPassthrough(hookName))
      let currentChunkPromiseChain = currentChunk.promise
      for (const passthrough of passthroughs) {
        currentChunkPromiseChain = currentChunkPromiseChain.then(passthrough) // eslint-disable-line
      }
      void currentChunkPromiseChain.then(applyBody)

      return {
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
