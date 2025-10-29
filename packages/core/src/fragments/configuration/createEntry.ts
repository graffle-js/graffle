import type { Configurator } from '@wollybeard/kit'

export const createEntry = <
  $Configurator extends Configurator.Configurator,
  $InitialInput extends $Configurator['input'],
>(
  configurator: $Configurator,
  initialInput: $InitialInput,
): CreateEntry<$Configurator, $InitialInput> => {
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

export type CreateEntry<
  $Configurator extends Configurator.Configurator,
  $InitialInput extends $Configurator['input'],
> = {
  configurator: $Configurator
  current: Configurator.ApplyConfiguratorInputResolver$Func<$Configurator, $Configurator['default'], $InitialInput>
}
