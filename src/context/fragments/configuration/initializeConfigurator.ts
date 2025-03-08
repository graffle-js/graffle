import type { Configurator } from '../../../lib/configurator/configurator.js'

export const initializeConfigurator = <
  $Configurator extends Configurator,
  $InitialInput extends $Configurator['input'],
>(
  configurator: $Configurator,
  initialInput: $InitialInput,
): InitializeConfigurator<$Configurator, $InitialInput> => {
  return Object.freeze({
    configurator,
    current: initialInput
      ? configurator.inputResolver({
        current: configurator.default,
        input: initialInput,
      })
      : configurator.default,
  })
}

export type InitializeConfigurator<
  $Configurator extends Configurator,
  $InitialInput extends $Configurator['input'],
> = {
  configurator: $Configurator
  current: Configurator.ApplyConfiguratorInputResolver$Func<$Configurator, $Configurator['default'], $InitialInput>
}
