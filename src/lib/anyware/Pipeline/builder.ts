import type { ConfigManager } from '../../config-manager/__.js'
import { type Tuple } from '../../prelude.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import type { Step } from '../Step.js'
import { type Config, type Options, resolveOptions } from './Config.js'
import { createExecutableStepsIndex } from './createWithSpec.js'
import type { StepsIndex } from './Executable.js'

export interface Context {
  config: Config
  input: object
  steps: ExecutableStep[]
}

export interface ContextEmpty extends Context {
  input: object
  steps: []
  config: Config
}

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
type GetNextStepParameterInput<$Context extends Context> =
  $Context['steps'] extends Tuple.NonEmpty
    ? Awaited<Tuple.GetLastValue<$Context['steps']>['output']>
    : $Context['input']

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
          input: $Params['input']
          output: ReturnType<$Run>
          slots: $Slots
          run: $Run
        },
      ]
    >
  >
  done: () => InferPipelineFromContext<$Context>
}

// dprint-ignore
export type GetNextStepParameterPrevious<$Context extends Context> =
  $Context['steps'] extends Tuple.NonEmpty
    ? GetNextStepPrevious_<$Context['steps']>
    : undefined

type GetNextStepPrevious_<$Steps extends Step[]> = Tuple.IntersectItems<
  {
    [$Index in keyof $Steps]: {
      [$StepName in $Steps[$Index]['name']]: {
        input: Awaited<$Steps[$Index]['input']>
        output: Awaited<$Steps[$Index]['output']>
      }
    }
  }
>

export type InferPipeline<$Builder extends Builder> = InferPipelineFromContext<$Builder['context']>

// dprint-ignore
type InferPipelineFromContext<$Context extends Context> =
  & $Context
  & {
    stepsIndex: StepsIndex
    /**
     * The overall result of the pipeline.
     *
     * If the pipeline has no steps then is the pipeline input itself.
     * Otherwise is the last step's output.
     */
    output:
    // Promise<
    //   Result<
        Awaited<
          $Context['steps'] extends Tuple.NonEmpty
            ? Tuple.GetLastValue<$Context['steps']>['output']
            : $Context['input']
        >
    //   >
    // >
  }

/**
 * TODO
 */
export const create = <$Input extends object>(options?: Options): Builder<{
  input: $Input
  steps: []
  config: Config
}> => {
  const config = resolveOptions(options)
  return recreate({
    steps: [],
    config,
  } as any)
}

const recreate = <$Context extends Context>(context: $Context): Builder<$Context> => {
  return {
    context,
    step: (parameters) => {
      return recreate({
        ...context,
        steps: [
          ...context.steps,
          parameters,
        ],
      } as any)
    },
    done: () => {
      const pipeline = context
      const stepsIndex = createExecutableStepsIndex(pipeline.steps)
      return {
        ...pipeline,
        stepsIndex,
      } as any
    },
  }
}
