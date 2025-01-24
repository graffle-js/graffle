import type { Overload } from '../Overload/_namespace.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Config } from './Config.js'

export * as PipelineDefinition from './_.js'

export interface PipelineDefinition {
  config: Config
  input: object
  steps: StepDefinition[]
  overloads: Overload[]
}
