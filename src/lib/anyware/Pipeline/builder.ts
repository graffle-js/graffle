import type { ConfigManager } from '../../config-manager/__.js'
import { type GetLastValue, type intersectArrayOfObjects } from '../../prelude.js'
import type { Pipeline } from './__.js'

export { type HookDefinitionMap } from '../hook/definition.js'
export interface Step<
  $Name extends string = string,
> {
  name: $Name
  slots: object | undefined
  input: any
  output: any
  run: (params: any) => any
}

export interface Context {
  input: object
  steps: Step[]
}

export interface ContextEmpty extends Context {
  input: object
  output: object
  steps: []
}

export namespace Step {
  export type GetAwaitedResult<$Step extends Step> = Awaited<GetResult<$Step>>
  export type GetResult<$Step extends Step> = ReturnType<$Step['run']>
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
    ? Step.GetResult<GetLastValue<$Pipeline['steps']>>
    : $Pipeline['input']

// dprint-ignore
export type GetNextStepParameterPrevious<$Pipeline extends Pipeline> =
  $Pipeline['steps'] extends [any, ...any[]]
    ? GetNextStepPrevious_<$Pipeline['steps']>
    : undefined

type GetNextStepPrevious_<$Steps extends Step[]> = intersectArrayOfObjects<
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
    ? Step.GetResult<GetLastValue<$Pipeline['steps']>>
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
    $Slots extends undefined | Record<string, any> = undefined,
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
    stepInput: {
      name: $Name
      slots?: $Slots
      run: $Run
    },
  ) => Builder<
    ConfigManager.SetOneKey<
      $Context,
      'steps',
      [...$Context['steps'], {
        name: $Name
        run: $Run
        input: $Params['input']
        output: ReturnType<$Run>
        slots: $Slots
      }]
    >
  >
}

// export type Pipeline = Context

export type Infer<$Builder extends Builder> = $Builder['context']

/**
 * TODO
 */
export const create = <$Input extends object>(): Builder<{ input: $Input; steps: []; output: object }> => {
  return undefined as any
}
