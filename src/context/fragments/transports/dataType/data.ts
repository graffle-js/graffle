import type { Anyware } from '../../../../lib/anyware/$.js'
import type { Configurator } from '../../../../lib/configurator/configurator.js'

export interface Data<
  $Name extends string = string,
  $Configurator extends Configurator = Configurator,
  $Pack extends Anyware.StepDefinition<'pack'> = Anyware.StepDefinition<'pack'>,
  $Exchange extends Anyware.StepDefinition<'exchange'> = Anyware.StepDefinition<'exchange'>,
  $Unpack extends Anyware.StepDefinition<'unpack'> = Anyware.StepDefinition<'unpack'>,
> extends Anyware.Overload.Data {
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
