import type { Configurator } from '../../../types/configurator.js'
import type { DiscriminantPropertyValue } from '../../prelude.js'
import type { StepDefinition } from '../StepDefinition.js'

export * as Overload from './_exports.js'

export interface Overload {
  discriminant: DiscriminantSpec
  configurator: Configurator
  steps: Record<string, StepDefinition>
}

type DiscriminantSpec = readonly [propertyName: string, DiscriminantPropertyValue]
