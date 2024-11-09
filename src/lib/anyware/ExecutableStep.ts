import type { Step } from './Step.js'

export interface ExecutableStep extends Step {
  run: (params: any) => any
}
