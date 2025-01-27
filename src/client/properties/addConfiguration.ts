import { hasNonUndefinedKeys, type Writeable } from '../../lib/prelude.js'
import type { ConfigurationIndex } from '../../types/ConfigurationIndex.js'
import type { Configurator } from '../../types/configurator.js'
import type { Context } from '../../types/context.js'

export const contextAddConfigurationInput = <
  context extends Context,
  configurationInput extends ConfigurationIndex.Input,
>(context: context, configurationInput: configurationInput): Context => {
  if (!hasNonUndefinedKeys(configurationInput)) return context
  // todo: performant checking if input changes configuration. If no change, then no copy context.
  // For default input resolvers we can do this automatically (shallow merge)
  // Any custom input resolvers would need to implement their own "is changed" logic.

  const newConfigurationIndex = {
    ...context.configuration,
  } as Writeable<ConfigurationIndex>

  for (const configuratorName in configurationInput) {
    const configurationIndexEntry = newConfigurationIndex[configuratorName]!
    const newConfiguration = configurationIndexEntry.configurator.inputResolver({
      current: configurationIndexEntry.current,
      input: configurationInput[configuratorName]!,
    })
    newConfigurationIndex[configuratorName] = {
      configurator: configurationIndexEntry.configurator,
      current: newConfiguration,
    }
  }
  const newContext = {
    ...context,
    configuration: newConfigurationIndex,
  }
  return newContext
}

export type ContextAddConfiguration<
  $Context extends Context,
  $ConfigurationInput extends ConfigurationIndex.Input,
  __ = {
    [_ in keyof $Context]: _ extends 'configuration' ? {
        readonly [_ in keyof $Context['configuration']]: _ extends keyof $ConfigurationInput
          ? $ConfigurationInput[_] extends object ? {
              // @ts-expect-error Non-index type being used
              configurator: $Context['configuration'][_]['configurator']
              current: Configurator.ApplyInputResolver$Func<
                // @ts-expect-error Non-index type being used
                $Context['configuration'][_]['configurator'],
                // @ts-expect-error Non-index type being used
                $Context['configuration'][_]['current'],
                $ConfigurationInput[_]
              >
            }
          : $Context['configuration'][_]
          : $Context['configuration'][_]
      }
      : $Context[_]
  },
> = __
