import { hasNonUndefinedKeys, type Writeable } from '../../lib/prelude.js'
import type { ConfigurationIndex } from '../../types/ConfigurationIndex.js'
import type { Configurator } from '../../types/configurator.js'
import { Configurators } from '../../types/configurators/_namespace.js'
import type { Context } from '../../types/context.js'

export const contextFragmentConfigurationConfigure = <
  context extends Context,
  configurationInput extends ConfigurationIndex.Input,
>(context: context, configurationInput: configurationInput): null | Writeable<ContextFragmentConfiguration> => {
  if (!hasNonUndefinedKeys(configurationInput)) return null
  // todo: performant checking if input changes configuration. If no change, then no copy context.
  // For default input resolvers we can do this automatically (shallow merge)
  // Any custom input resolvers would need to implement their own "is changed" logic.

  const configuration: Writeable<ContextFragmentConfiguration['configuration'] & ConfigurationIndex> = {
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

  const fragment = {
    configuration,
  }

  return fragment
}

export type ContextFragmentConfigurationConfigure<
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

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ContextFragmentConfiguration {
  readonly configuration: {
    readonly output: {
      readonly configurator: Configurators.Output.OutputConfigurator
      readonly current: Configurators.Output.OutputConfigurator['normalizedIncremental']
    }
    readonly check: {
      readonly configurator: Configurators.Check.CheckConfigurator
      readonly current: Configurators.Check.CheckConfigurator['normalizedIncremental']
    }
    readonly schema: {
      readonly configurator: Configurators.Schema.SchemaConfigurator
      readonly current: Configurators.Schema.SchemaConfigurator['normalizedIncremental']
    }
  }
}

export const contextFragmentConfigurationEmpty: ContextFragmentConfiguration = {
  configuration: Object.freeze({
    output: Object.freeze({
      configurator: Configurators.Output.configurator,
      current: Configurators.Output.configurator.default,
    }),
    check: Object.freeze({
      configurator: Configurators.Check.configurator,
      current: Configurators.Check.configurator.default,
    }),
    schema: Object.freeze({
      configurator: Configurators.Schema.configurator,
      current: Configurators.Schema.configurator.default,
    }),
  }),
}
