import type { DiscriminantPropertyValue } from '../../prelude.js'
import type { StepDef } from '../StepDef.js'

export * as Overload from './_.js'

export interface Overload {
  discriminant: DiscriminantSpec
  input: object
  steps: Record<string, StepDef>
}

type DiscriminantSpec = readonly [string, DiscriminantPropertyValue]
