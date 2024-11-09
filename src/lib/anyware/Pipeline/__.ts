import type { ExecutableStep } from '../ExecutableStep.js'
import type { Config } from './Config.js'

export * as Pipeline from './_.js'

export interface Pipeline {
  config: Config
  input: object
  output: unknown
  steps: ExecutableStep[]
}
