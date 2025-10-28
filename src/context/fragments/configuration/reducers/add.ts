import { hasNonUndefinedKeys } from '#src/lib/prelude.js'
import type { Ts } from '@wollybeard/kit'
import type * as Configurator from '@wollybeard/kit/configurator'
import type { ContextFragment, Index } from '../fragment.js'

export const add = <
  context extends ContextFragment,
  const configurationInput extends Index.Input,
>(context: context, configurationInput: configurationInput): Add<context, configurationInput> => {
  if (!hasNonUndefinedKeys(configurationInput)) return context as any
  // todo: performant checking if input changes configuration. If no change, then no copy context.
  // For default input resolvers we can do this automatically (shallow merge)
  // Any custom input resolvers would need to implement their own "is changed" logic.

  const configuration: Ts.Writeable<ContextFragment['configuration'] & Index> = {
    ...context.configuration,
  }

  for (const configuratorName in configurationInput) {
    const entry = configuration[configuratorName]
    // initializeConfigurator(entry.configurator,)
    const current = entry.configurator.inputResolver({
      current: entry.current,
      input: configurationInput[configuratorName]!,
    })
    const newEntry = Object.freeze({
      ...entry,
      current,
    })
    configuration[configuratorName] = newEntry
  }

  const fragment: context = Object.freeze({
    ...context,
    configuration,
  })

  return fragment as any
}

export type Add<
  $Context extends ContextFragment,
  $ConfigurationInput extends Index.Input,
  __ = {
    [__k__ in keyof $Context]: __k__ extends 'configuration' ? {
        readonly [_ in keyof $Context['configuration']]: _ extends keyof $ConfigurationInput
          ? $ConfigurationInput[_] extends object ? {
              // @ts-expect-error Non-index type being used
              configurator: $Context['configuration'][_]['configurator']
              current: Configurator.ApplyConfiguratorInputResolver$Func<
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
      : $Context[__k__]
  },
> = __
