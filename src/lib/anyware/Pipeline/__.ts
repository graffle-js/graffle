import type { Step } from '../Step.js'
import type { Config } from './Config.js'

export * as Pipeline from './_.js'

export interface Pipeline {
  input: object
  // todo
  // output: object
  steps: Step[]
  config: Config
}
