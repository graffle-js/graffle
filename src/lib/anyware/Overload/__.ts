import type { DiscriminantPropertyValue } from '../../prelude.js'
import type { StepDefinition } from '../StepDef.js'

export * as Overload from './_.js'

export interface Overload {
  discriminant: DiscriminantSpec
  input: object
  inputInit?: object | undefined
  steps: Record<string, StepDefinition>
}

type DiscriminantSpec = readonly [string, DiscriminantPropertyValue]
