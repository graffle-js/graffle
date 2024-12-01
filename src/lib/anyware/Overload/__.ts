import type { DiscriminantPropertyValue } from '../../prelude.js'
import type { StepDefinition } from '../StepDefinition.js'

export * as Overload from './_.js'

export interface Overload {
  discriminant: DiscriminantSpec
  input: object
  inputInit?: object | undefined
  inputDefaults?: object | undefined
  steps: Record<string, StepDefinition>
}

type DiscriminantSpec = readonly [string, DiscriminantPropertyValue]
