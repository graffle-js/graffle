import type { Step } from './Step.js'

export interface ExecutableStep extends Step {
  run: (params: any) => any
}

export interface ExecutableStepRuntime extends Omit<ExecutableStep, 'input' | 'output'> {}
