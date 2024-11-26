import type { Overload } from '../Overload/__.js'
import type { StepDef } from '../StepDef.js'
import type { Config } from './Config.js'

export * as PipelineDefinition from './_.js'

export interface PipelineDefinition {
  config: Config
  input: object
  steps: StepDef[]
  overloads: Overload[]
}
