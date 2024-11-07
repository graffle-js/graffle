import type { ConfigManager } from '../../config-manager/__.js'
import { type Tuple } from '../../prelude.js'
import type { Step } from '../Step.js'
import type { StepResultError } from '../StepResult.js'
import type { Pipeline } from './__.js'

export interface Context {
  input: object
  steps: Step[]
  config: Config
}

export interface ContextEmpty extends Context {
  input: object
  steps: []
  config: Config
}

/**
 * See {@link GetResult}
 */
export type GetAwaitedResult<$Pipeline extends Pipeline> = Awaited<GetResult<$Pipeline>>

/**
 * Get the overall result of the pipeline.
 *
 * If the pipeline has no steps then the pipeline input itself.
 * Otherwise the last step's output.
 */
// dprint-ignore
export type GetResult<$Pipeline extends Pipeline> =
  $Pipeline['steps'] extends [any, ...any[]]
    ? Step.GetResult<Tuple.GetLastValue<$Pipeline['steps']>>
    : $Pipeline['input']

// dprint-ignore
export type GetNextStepParameterPrevious<$Pipeline extends Pipeline> =
  $Pipeline['steps'] extends [any, ...any[]]
    ? GetNextStepPrevious_<$Pipeline['steps']>
    : undefined

type GetNextStepPrevious_<$Steps extends Step[]> = Tuple.IntersectItems<
  {
    [$Index in keyof $Steps]: {
      [$StepName in $Steps[$Index]['name']]: {
        input: Parameters<$Steps[$Index]['run']>[0]['input']
        output: Awaited<ReturnType<$Steps[$Index]['run']>>
      }
    }
  }
>

/**
 * Get the `input` parameter for a step that would be appended to the given Pipeline.
 *
 * Recall that non-first steps have input corresponding to the output of the previous step.
 *
 * So this returns:
 * - If the pipeline has no steps then the pipeline input itself.
 * - Otherwise the last step's output.
 */
// dprint-ignore
type GetNextStepParameterInput<$Pipeline extends Pipeline> =
  $Pipeline['steps'] extends [any, ...any[]]
    ? Awaited<Step.GetResult<Tuple.GetLastValue<$Pipeline['steps']>>>
    : $Pipeline['input']

export interface Builder<$Context extends Context = Context> {
  context: $Context
  /**
   * todo
   */
  step: <
    const $Name extends string,
    $Run extends (params: {
      input: GetNextStepParameterInput<$Context>
      slots: $Slots
      previous: GetNextStepParameterPrevious<$Context>
    }) => any,
    $Slots extends undefined | Step.Slots = undefined,
    $Params extends {
      input: GetNextStepParameterInput<$Context>
      slots: $Slots
      previous: GetNextStepParameterPrevious<$Context>
    } = {
      input: GetNextStepParameterInput<$Context>
      slots: $Slots
      previous: GetNextStepParameterPrevious<$Context>
    },
  >(
    parameters: {
      name: $Name
      slots?: $Slots
      run: $Run
    },
  ) => Builder<
    ConfigManager.SetOneKey<
      $Context,
      'steps',
      [
        ...$Context['steps'],
        {
          name: $Name
          run: $Run
          input: $Params['input']
          output: ReturnType<$Run>
          slots: $Slots
        },
      ]
    >
  >
}

export type Infer<$Builder extends Builder> = $Builder['context']

export interface Options {
  /**
   * @defaultValue `required`
   */
  entrypointSelectionMode?: 'optional' | 'required' | 'off'
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
  passthroughErrorWith?: null | ((signal: StepResultError) => boolean)
}

export type Config = Required<Options>

/**
 * TODO
 */
export const create = <$Input extends object>(options?: Options): Builder<{
  input: $Input
  steps: []
  config: Config
}> => {
  const _config = resolveOptions(options)
  return undefined as any
}

const resolveOptions = (options?: Options): Config => {
  return {
    passthroughErrorInstanceOf: options?.passthroughErrorInstanceOf ?? [],
    passthroughErrorWith: options?.passthroughErrorWith ?? null,
    entrypointSelectionMode: options?.entrypointSelectionMode ?? `required`,
  }
}
