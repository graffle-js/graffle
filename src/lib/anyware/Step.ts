import type { StepDefinition } from './StepDefinition.js'
import type { StepRunner } from './StepRunner.js'

export interface Step {
  readonly name: string
  readonly slots?: StepDefinition.Slots
  readonly input: Step.Input
  readonly output: any
  readonly run: StepRunner<any, any, any>
}

export namespace Step {
  export type Input = StepDefinition.Input
}
