import type * as Configurator from '@wollybeard/kit/configurator'

export const createEntry = <
  $Configurator extends Configurator,
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
  $Configurator extends Configurator,
  $InitialInput extends $Configurator['input'],
> = {
  configurator: $Configurator
  current: Configurator.ApplyConfiguratorInputResolver$Func<$Configurator, $Configurator['default'], $InitialInput>
}
