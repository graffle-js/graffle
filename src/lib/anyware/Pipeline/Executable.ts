import type { ExecutableStep, ExecutableStepRuntime } from '../ExecutableStep.js'
import type { Step } from '../Step.js'
import type { Config } from './Config.js'
import type { PipelineSpec } from './Spec.js'

// todo - spec as a property, not extended
// todo - output type NOT spec but final type
export interface PipelineExecutable extends PipelineSpec {
  config: Config
  steps: ExecutableStep[]
  stepsIndex: StepsIndex
}

export type StepsIndex = Map<Step.Name, ExecutableStepRuntime>
