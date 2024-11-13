import type { ExecutableStep } from '../ExecutableStep.js'
import type { Step } from '../Step.js'
import type { Config } from './Config.js'
import type { Result } from './Result.js'
import type { PipelineSpec } from './Spec.js'

export interface ExecutablePipeline {
  spec: PipelineSpec
  config: Config
  input: object
  output: Result
  steps: ExecutableStep[]
  stepsIndex: StepsIndex
}

export type StepsIndex<$Name extends Step.Name = Step.Name, $ExecutableStep extends ExecutableStep = ExecutableStep> =
  Map<$Name, $ExecutableStep>
