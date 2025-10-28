import { Ware } from '@wollybeard/kit'
import type { Configurator } from '@wollybeard/kit'

export interface Data<
  $Name extends string = string,
  $Configurator extends Configurator.Configurator = Configurator.Configurator,
  $Pack extends Ware.StepDefinition<'pack'> = Ware.StepDefinition<'pack'>,
  $Exchange extends Ware.StepDefinition<'exchange'> = Ware.StepDefinition<'exchange'>,
  $Unpack extends Ware.StepDefinition<'unpack'> = Ware.StepDefinition<'unpack'>,
> extends Ware.Overload.Data {
  discriminant: {
    name: 'transportType'
    value: $Name
  }
  [TypeSymbol]: true
  name: $Name
  configurator: $Configurator
  configurationMount: 'transport'
  steps: {
    pack: $Pack
    exchange: $Exchange
    unpack: $Unpack
  }
}

export const TypeSymbol = Symbol(`Transport`)
