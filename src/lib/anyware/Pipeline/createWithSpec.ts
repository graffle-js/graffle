import type { ConfigManager } from '../../config-manager/__.js'
import type { Objekt, Tuple } from '../../prelude.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import type { Step } from '../Step.js'
import { type Config, type Options, resolveOptions } from './Config.js'
import type { StepsIndex } from './ExecutablePipeline.js'
import type { PipelineSpec } from './Spec.js'

export const createExecutableStepsIndex = <$Steps extends ExecutableStep[]>(steps: $Steps): StepsIndex => {
  return new Map(steps.map(step => [step.name, step]))
}

export const createWithSpec = <$PipelineSpec extends PipelineSpec>(
  input: {
    options?: Options
    steps: InferStepsInput<$PipelineSpec['steps']>
  },
): InferPipelineExecutable<$PipelineSpec> => {
  const config = resolveOptions(input.options)
  const stepsIndex = createExecutableStepsIndex(input.steps)
  return {
    config,
    stepsIndex,
    steps: input.steps,
  } as any
}

type InferPipelineExecutable<$PipelineSpec extends PipelineSpec> = {
  input: $PipelineSpec['input']
  output: $PipelineSpec['output']
  steps: InferExecutableSteps<$PipelineSpec['steps']>
  stepsIndex: StepsIndex
  config: Config
}

type InferStepsInput<$NextStepDefinitions extends Step[]> = InferExecutableSteps_<
  [],
  $NextStepDefinitions,
  { types: false }
>

type InferExecutableSteps<$NextStepDefinitions extends Step[]> = InferExecutableSteps_<
  [],
  $NextStepDefinitions,
  { types: true }
>

// dprint-ignore
type InferExecutableSteps_<
  $PreviousStepSpecs extends Step[],
  $NextStepSpecs extends Step[],
  $Options extends { types: boolean },
> =
  $NextStepSpecs extends [infer $StepSpec extends Step, ...infer $RestStepSpecs extends Step[]]
    ? [
        & (
            $Options['types'] extends true
              ? {
                  input: $StepSpec['input']
                  output: $StepSpec['output']
                }
              : {}
          )
        & {
            name: $StepSpec['name']
            run: (parameters:
              & {
                  input: $StepSpec['input']
                  previous: GetParameterPrevious<$PreviousStepSpecs>
                }
              & (
                  $StepSpec['slots'] extends Step.Slots
                    ? {
                        slots: $StepSpec['slots']
                      }
                    : {}
                )
            ) => $StepSpec['output']
          }
        & (
          Objekt.IsEmpty<$StepSpec['slots']> extends true
            ? {}
            : {
                slots: $StepSpec['slots']
              }
        )
      , ...InferExecutableSteps_<[...$PreviousStepSpecs, $StepSpec], $RestStepSpecs, $Options>]
    : []

export type GetParameterPrevious<$StepDefinitions extends Step[]> = Tuple.IntersectItems<
  {
    [$Index in keyof $StepDefinitions]: {
      [$StepName in $StepDefinitions[$Index]['name']]: {
        input: $StepDefinitions[$Index]['input']
        output: ConfigManager.OrDefault<
          $StepDefinitions[$Index]['output'],
          Tuple.GetAtNextIndex<$StepDefinitions, $Index>['input']
        >
      }
    }
  }
>
