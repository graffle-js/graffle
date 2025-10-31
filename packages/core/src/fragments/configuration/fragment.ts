import type { Configurator } from '@wollybeard/kit'
import { Check } from './check/_.js'
import { createEntry } from './createEntry.js'
import { Output } from './output/_.js'
import { Schema } from './schema/_.js'

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
    output: createEntry(Output.configurator, {}),
    check: createEntry(Check.configurator, {}),
    schema: createEntry(Schema.configurator, {}),
  }),
}

// ------------------------------------------------------------
// Generic Context Fragment
// ------------------------------------------------------------

export interface Index {
  readonly [configuratorName: string]: ConfigurationNamespace<Configurator.Configurator>
}

export namespace Index {
  export interface Input {
    readonly [configuratorName: string]: Configurator.Configuration | undefined
  }
}

// ------------------------------------------------------------

export interface ConfigurationNamespace<$Configurator extends Configurator.Configurator> {
  readonly configurator: $Configurator
  readonly current: $Configurator['normalizedIncremental']
}

export interface ConfigurationNamespaceEmpty<$Configurator extends Configurator.Configurator> {
  readonly configurator: $Configurator
  readonly current: $Configurator['default']
}
