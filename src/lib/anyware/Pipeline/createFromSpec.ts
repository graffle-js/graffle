import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { Step } from '../Step.js'
import { type Config, type Options, resolveOptions } from './Config.js'
import type { PipelineSpec } from './Spec.js'

export const createWithSpec = <$PipelineSpec extends PipelineSpec>(
  input: {
    options?: Options
    steps: InferStepsInput<$PipelineSpec['steps']>
  },
): InferPipeline<$PipelineSpec> => {
  const _config = resolveOptions(input.options)
  input
  return undefined as any
}

type InferPipeline<$PipelineSpec extends PipelineSpec> = {
  input: $PipelineSpec['input']
  output: $PipelineSpec['output']
  steps: InferExecutableSteps<$PipelineSpec['steps']>
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
          $StepSpec['slots'] extends Step.Slots
            ? {
                slots: $StepSpec['slots']
              }
            : {}
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
