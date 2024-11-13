import type { IsUnknown } from 'type-fest'
import type { ConfigManager } from '../../config-manager/__.js'
import type { MaybePromise, Tuple } from '../../prelude.js'
import type { Step } from '../Step.js'

// dprint-ignore
export type PipelineSpecFromSteps<$StepSpecInputs extends Step.SpecInput[] = Step.SpecInput[]> = PipelineSpec<InferStepSpecs<$StepSpecInputs>>

// dprint-ignore
export interface PipelineSpec<$StepSpecs extends Step[] = Step[]> {
  steps: $StepSpecs
  input: $StepSpecs extends Tuple.NonEmpty
    ? $StepSpecs[0]['input']
    : object
  output: Awaited<
    $StepSpecs extends Tuple.NonEmpty
      ? Tuple.GetLastValue<$StepSpecs>['output']
      : unknown
  >
}

type InferStepSpecs<$StepSpecInputs extends Step.SpecInput[]> = InferStepSpecs_<undefined, $StepSpecInputs>

// dprint-ignore
type InferStepSpecs_<$StepSpecPrevious extends Step| undefined, $StepSpecInputs extends Step.SpecInput[]> =
  $StepSpecInputs extends [infer $StepSpecInput extends Step.SpecInput, ...infer $StepSpecInputsRest extends Step.SpecInput[]]
    ? InferStepSpecs__<{
        name: $StepSpecInput['name']
        slots: ConfigManager.OrDefault2<$StepSpecInput['slots'],{}>
        input: IsUnknown<$StepSpecInput['input']> extends true
          ? $StepSpecPrevious extends Step
            ? $StepSpecPrevious['output']
            : object
          : $StepSpecInput['input']
        output: MaybePromise<
          Awaited<
            IsUnknown<$StepSpecInput['output']> extends true
              ? $StepSpecInputsRest extends Tuple.NonEmpty
                ? $StepSpecInputsRest[0]['input'] extends undefined
                ? unknown
                : $StepSpecInputsRest[0]['input']
              : unknown
            : $StepSpecInput['output']
          >
        >
      }, $StepSpecInputsRest>
      : []

type InferStepSpecs__<$StepSpec extends Step, $StepSpecInputsRest extends Step.SpecInput[]> = [
  $StepSpec,
  ...InferStepSpecs_<$StepSpec, $StepSpecInputsRest>,
]
