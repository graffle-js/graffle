import type { Configurator } from './configurator.js'

export interface ConfiguratorIndexInput {
  readonly [configuratorName: string]: Configurator.Configuration | undefined
}

export interface ConfiguratorIndexCurrent {
  readonly [configuratorName: string]: Configurator.Configuration
}

export interface ConfiguratorIndex {
  readonly [configuratorName: string]: Configurator
}
