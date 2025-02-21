import type { Configurator } from '../../../lib/configurator/configurator.js'
import { hasNonUndefinedKeys, type Writeable } from '../../../lib/prelude.js'
import { Output } from '../output/_namespace.js'
import { Schema } from '../schema/__.js'
import { Check } from './configuration.js'

export * as Check from '../check/configuration.js'

export const contextFragmentAdd = <
  context extends ContextFragment,
  configurationInput extends ConfigurationIndex.Input,
>(context: context, configurationInput: configurationInput): context => {
  if (!hasNonUndefinedKeys(configurationInput)) return context
  // todo: performant checking if input changes configuration. If no change, then no copy context.
  // For default input resolvers we can do this automatically (shallow merge)
  // Any custom input resolvers would need to implement their own "is changed" logic.

  const configuration: Writeable<ContextFragment['configuration'] & ConfigurationIndex> = {
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

  return fragment
}

export type ContextFragmentAdd<
  $Fragment extends ContextFragment,
  $ConfigurationInput extends ConfigurationIndex.Input,
  __ = {
    [_ in keyof $Fragment]: _ extends 'configuration' ? {
        readonly [_ in keyof $Fragment['configuration']]: _ extends keyof $ConfigurationInput
          ? $ConfigurationInput[_] extends object ? {
              // @ts-expect-error Non-index type being used
              configurator: $Fragment['configuration'][_]['configurator']
              current: Configurator.ApplyInputResolver$Func<
                // @ts-expect-error Non-index type being used
                $Fragment['configuration'][_]['configurator'],
                // @ts-expect-error Non-index type being used
                $Fragment['configuration'][_]['current'],
                $ConfigurationInput[_]
              >
            }
          : $Fragment['configuration'][_]
          : $Fragment['configuration'][_]
      }
      : $Fragment[_]
  },
> = __

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ConfigurationNamespace<$Configurator extends Configurator> {
  readonly configurator: $Configurator
  readonly current: $Configurator['normalizedIncremental']
}

export interface ConfigurationNamespaceEmpty<$Configurator extends Configurator> {
  readonly configurator: $Configurator
  readonly current: $Configurator['default']
}

export interface ContextFragment {
  readonly configuration: {
    readonly output: ConfigurationNamespace<Output.Configurator>
    readonly check: ConfigurationNamespace<Check.Configurator>
    readonly schema: ConfigurationNamespace<Schema.Configurator>
  }
}

export interface ContextFragmentConfigurationEmpty extends ContextFragment {
  readonly configuration: {
    readonly output: ConfigurationNamespaceEmpty<Output.Configurator>
    readonly check: ConfigurationNamespaceEmpty<Check.Configurator>
    readonly schema: ConfigurationNamespaceEmpty<Schema.Configurator>
  }
}

export const contextFragmentConfigurationEmpty: ContextFragmentConfigurationEmpty = {
  configuration: Object.freeze({
    output: Object.freeze({
      configurator: Output.configurator,
      current: Output.configurator.default,
    }),
    check: Object.freeze({
      configurator: Check.configurator,
      current: Check.configurator.default,
    }),
    schema: Object.freeze({
      configurator: Schema.configurator,
      current: Schema.configurator.default,
    }),
  }),
}

// ------------------------------------------------------------
// Generic Context Fragment
// ------------------------------------------------------------

export interface ConfigurationIndex {
  readonly [configuratorName: string]: ConfigurationNamespace<Configurator>
}

export namespace ConfigurationIndex {
  export interface Input {
    readonly [configuratorName: string]: Configurator.Configuration | undefined
  }
}
