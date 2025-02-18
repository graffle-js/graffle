import type { Overload } from '../Overload/_namespace.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Config } from './Config.js'

export * as PipelineDefinition from './_.js'

export interface PipelineDefinition {
  readonly config: Config
  readonly input: object
  readonly steps: readonly StepDefinition[]
  readonly overloads: readonly Overload[]
}
