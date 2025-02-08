import type { Configurator } from '../../configurator/configurator.js'
import type { DiscriminantPropertyValue } from '../../prelude.js'
import type { StepDefinition } from '../StepDefinition.js'

export interface Data {
  readonly discriminant: Discriminant
  readonly configurator: Configurator
  readonly steps: Record<string, StepDefinition>
}

export interface Discriminant {
  readonly name: string
  readonly value: DiscriminantPropertyValue
}

export interface DataEmpty extends Data {
  readonly configurator: Configurator.States.Empty
  readonly steps: {}
}
