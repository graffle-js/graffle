import type { Configurator } from '../../../lib/configurator/configurator.js'
import { Check } from './check/_namespace.js'
import { initializeConfigurator } from './initializeConfigurator.js'
import { Output } from './output/_namespace.js'
import { Schema } from './schema/_namespace.js'

export interface ContextFragment {
  readonly configuration: {
    readonly output: ConfigurationNamespace<Output.Configurator>
    readonly check: ConfigurationNamespace<Check.Configurator>
    readonly schema: ConfigurationNamespace<Schema.Configurator>
  }
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly configuration: {
    readonly output: ConfigurationNamespaceEmpty<Output.Configurator>
    readonly check: ConfigurationNamespaceEmpty<Check.Configurator>
    readonly schema: ConfigurationNamespaceEmpty<Schema.Configurator>
  }
}

export const contextFragmentEmpty: ContextFragmentEmpty = {
  configuration: Object.freeze({
    output: initializeConfigurator(Output.configurator, {}),
    check: initializeConfigurator(Check.configurator, {}),
    schema: initializeConfigurator(Schema.configurator, {}),
  }),
}

// ------------------------------------------------------------
// Generic Context Fragment
// ------------------------------------------------------------

export interface Index {
  readonly [configuratorName: string]: ConfigurationNamespace<Configurator>
}

export namespace Index {
  export interface Input {
    readonly [configuratorName: string]: Configurator.Configuration | undefined
  }
}

// ------------------------------------------------------------

export interface ConfigurationNamespace<$Configurator extends Configurator> {
  readonly configurator: $Configurator
  readonly current: $Configurator['normalizedIncremental']
}

export interface ConfigurationNamespaceEmpty<$Configurator extends Configurator> {
  readonly configurator: $Configurator
  readonly current: $Configurator['default']
}
