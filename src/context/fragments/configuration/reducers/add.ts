import type { Configurator } from '../../../../lib/configurator/configurator.js'
import { hasNonUndefinedKeys, type Writeable } from '../../../../lib/prelude.js'
import type { ContextFragment, Index } from '../fragment.js'

export const add = <
  context extends ContextFragment,
  configurationInput extends ConfigurationIndex.Input,
>(context: context, configurationInput: configurationInput): Add<context, configurationInput> => {
  if (!hasNonUndefinedKeys(configurationInput)) return context as any
  // todo: performant checking if input changes configuration. If no change, then no copy context.
  // For default input resolvers we can do this automatically (shallow merge)
  // Any custom input resolvers would need to implement their own "is changed" logic.

  const configuration: Writeable<ContextFragment['configuration'] & Index> = {
    ...context.configuration,
  }

  for (const configuratorName in configurationInput) {
    const entry = configuration[configuratorName]
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
  $ConfigurationInput extends ConfigurationIndex.Input,
  __ = {
    [__k__ in keyof $Context]: __k__ extends 'configuration' ? {
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
      : $Context[__k__]
  },
> = __
