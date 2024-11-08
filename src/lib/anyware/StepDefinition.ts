import type { Step } from './Step.js'

export type StepDefinition = {
  name: string
  slots?: Step.Slots
  input?: Step.Input
  output?: any
}
