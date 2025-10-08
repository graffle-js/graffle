import type { Ts } from '@wollybeard/kit'
import type { Configurator } from '../../configurator/configurator.js'
import type { StepDefinition } from '../StepDefinition.js'

export interface Data<
  $Discriminant extends Discriminant = Discriminant,
  $Configurator extends Configurator = Configurator,
  $Steps extends Record<string, StepDefinition> = Record<string, StepDefinition>,
  $ConfigurationMount extends string | undefined = string | undefined,
> {
  readonly discriminant: $Discriminant
  readonly configurator: $Configurator
  readonly configurationMount: $ConfigurationMount
  readonly steps: $Steps
}

export interface Discriminant {
  readonly name: string
  readonly value: Ts.Union.DiscriminantPropertyValue
}

export interface DataEmpty extends Data {
  readonly configurator: Configurator.States.Empty
  readonly steps: {}
  readonly configurationMount: undefined
}
