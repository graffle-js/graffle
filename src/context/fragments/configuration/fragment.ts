import type { Configurator } from '../../../lib/configurator/configurator.js'
import { Output } from '../output/_namespace.js'
import { Schema } from '../schema/__.js'
import { Check } from './fragment.js'

export * as Check from '../check/configuration.js'
export * from './reducers/add.js'

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
