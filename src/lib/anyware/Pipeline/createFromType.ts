import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { PipelineDefinition } from '../PipelineDefinition.js'
import type { Step } from '../Step.js'
import type { StepDefinition } from '../StepDefinition.js'
import { type Config, type Options, resolveOptions } from './Config.js'

// dprint-ignore
type InferInputSteps<$PreviousStepDefinitions extends StepDefinition[], $NextStepDefinitions extends StepDefinition[]> =
  $NextStepDefinitions extends [infer $StepDefinition extends StepDefinition, ...infer $RestStepDefinitions extends StepDefinition[]]
    ? [
        & {
            name: $StepDefinition['name']
            run: (parameters:
              & {
                  input: $StepDefinition['input']
                  previous: GetParameterPrevious<$PreviousStepDefinitions>
                }
              & (
                  $StepDefinition['slots'] extends Step.Slots
                    ? {
                        slots: $StepDefinition['slots']
                      }
                    : {}
                )
            ) => $StepDefinition['output']
          }
        & (
          $StepDefinition['slots'] extends Step.Slots
            ? {
                slots: $StepDefinition['slots']
              }
            : {}
        )
      , ...InferInputSteps<[...$PreviousStepDefinitions, $StepDefinition], $RestStepDefinitions>]
    : []

export type GetParameterPrevious<$StepDefinitions extends StepDefinition[]> = Tuple.IntersectItems<
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

type InferPipeline<$PipelineDefinition extends PipelineDefinition> = {
  input: $PipelineDefinition['stepDefinitions'][0]['input']
  steps: InferInputSteps<[], $PipelineDefinition['stepDefinitions']>
  config: Config
}

export const createWithType = <$PipelineDefinition extends PipelineDefinition>(
  input: {
    options?: Options
    steps: InferInputSteps<[], $PipelineDefinition['stepDefinitions']>
  },
): InferPipeline<$PipelineDefinition> => {
  const _config = resolveOptions(input.options)
  input
  return undefined as any
}
