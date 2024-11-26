import type { StepDefinition } from './StepDefinition.js'
import type { StepRunner } from './StepRunner.js'

export interface Step {
  name: string
  slots?: StepDefinition.Slots
  input: Step.Input
  output: any
  run: StepRunner<any, any, any>
}

export namespace Step {
  export type Input = StepDefinition.Input
}
