import type { Overload } from '../Overload/__.js'
import type { StepDef } from '../StepDef.js'
import type { Config } from './Config.js'

export * as PipelineDef from './_.js'

export interface PipelineDef {
  config: Config
  input: object
  steps: StepDef[]
  overloads: Overload[]
}
