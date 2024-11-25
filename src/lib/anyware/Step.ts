import type { StepDef } from './StepDef.js'
import type { StepRunner } from './StepRunner.js'

export interface Step {
  name: string
  slots?: StepDef.Slots
  input: Step.Input
  output: any
  run: StepRunner<any, any, any>
}

export namespace Step {
  export type Input = StepDef.Input
}
