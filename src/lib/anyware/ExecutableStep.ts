import type { Step } from './Step.js'

export interface ExecutableStep extends Omit<Step, 'input' | 'output'> {
  run: (params: any) => any
}
