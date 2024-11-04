import { type FindValueAfter, type IsLastValue, type MaybePromise } from '../prelude.js'
import type { HookDefinitionMap, HookSequence } from './hook/definition.js'
import type { HookResultError, InferPrivateHookInput } from './hook/private.js'
import type { Pipeline } from './Pipeline.js'
import { createRunner, type Runner } from './run/runner.js'

export { type HookDefinitionMap } from './hook/definition.js'

export type PipelineInput<
  $HookSequence extends HookSequence = HookSequence,
  $HookMap extends HookDefinitionMap<$HookSequence> = HookDefinitionMap<$HookSequence>,
  $Result = unknown,
> = {
  hookNamesOrderedBySequence: $HookSequence
  // dprint-ignore
  hooks: {
    [$HookName in $HookSequence[number]]:
      keyof $HookMap[$HookName]['slots'] extends never
      ? (input: InferPrivateHookInput<$HookSequence, $HookMap, $HookName>) =>
          MaybePromise<
            IsLastValue<$HookName, $HookSequence> extends true
              ? $Result
              : $HookMap[FindValueAfter<$HookName, $HookSequence>]['input']
          >
      : {
          slots: $HookMap[$HookName]['slots']
          run: (input: InferPrivateHookInput<$HookSequence, $HookMap, $HookName>) =>
            MaybePromise<
              IsLastValue<$HookName, $HookSequence> extends true ? $Result
                : $HookMap[FindValueAfter<$HookName, $HookSequence>]['input']
            >
        }
  }
  /**
   * If a hook results in a thrown error but is an instance of one of these classes then return it as-is
   * rather than wrapping it in a ContextualError.
   *
   * This can be useful when there are known kinds of errors such as Abort Errors from AbortController
   * which are actually a signaling mechanism.
   */
  passthroughErrorInstanceOf?: Function[]
  /**
   * If a hook results in a thrown error but returns true from this function then return the error as-is
   * rather than wrapping it in a ContextualError.
   *
   * This can be useful when there are known kinds of errors such as Abort Errors from AbortController
   * which are actually a signaling mechanism.
   */
  passthroughErrorWith?: (signal: HookResultError) => boolean
}

export const create = <
  $HookSequence extends HookSequence = HookSequence,
  $HookMap extends HookDefinitionMap<$HookSequence> = HookDefinitionMap<$HookSequence>,
  $Result = unknown,
>(
  input: PipelineInput<$HookSequence, $HookMap, $Result>,
): Builder<Pipeline<$HookSequence, $HookMap, $Result>> => {
  type $Pipeline = Pipeline<$HookSequence, $HookMap, $Result>

  const pipeline = {
    ...input,
    hooks: Object.fromEntries(
      Object.entries(input.hooks).map(([k, v]) => {
        return [k, typeof v === `function` ? { slots: {}, run: v } : v]
      }),
    ),
  } as any as $Pipeline

  const run = createRunner(pipeline)

  const builder: Builder<$Pipeline> = {
    pipeline,
    run,
  }

  return builder
}

export type Builder<$Pipeline extends Pipeline> = {
  pipeline: $Pipeline
  // todo
  // use:
  run: Runner<$Pipeline>
}
