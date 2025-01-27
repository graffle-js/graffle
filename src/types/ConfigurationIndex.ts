import type { Configurator } from './configurator.js'

export interface ConfigurationIndex {
  readonly [configuratorName: string]: {
    configurator: Configurator
    current: Configurator.Configuration
  }
}

export namespace ConfigurationIndex {
  export interface Entry<$Configurator extends Configurator = Configurator> {
    configurator: $Configurator
    current: $Configurator['normalizedIncremental']
  }
  export interface Input {
    readonly [configuratorName: string]: Configurator.Configuration | undefined
  }
}
