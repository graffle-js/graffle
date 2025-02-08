import type { Configurator } from '../lib/configurator/configurator.js'

export interface ConfigurationIndex {
  readonly [configuratorName: string]: {
    readonly configurator: Configurator
    readonly current: Configurator.Configuration
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
