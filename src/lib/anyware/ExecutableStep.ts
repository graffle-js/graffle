import type { Step } from './Step.js'

export interface ExecutableStep extends Omit<Step, 'slots' | 'input' | 'output'> {
  slots?: Step.Slots
  run: (params: any) => any
}
