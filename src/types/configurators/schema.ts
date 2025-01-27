import { Configurator } from '../configurator.js'
import { GlobalRegistry } from '../GlobalRegistry/GlobalRegistry.js'
import type { SchemaDrivenDataMap } from '../SchemaDrivenDataMap/__.js'

/**
 * @remarks This input extends base with properties that can be filled with exports from the generated client.
 */
export interface Input {
  /**
   * The generated client to use.
   *
   * @defaultValue 'default'
   */
  name?: GlobalRegistry.Client['name']
  /**
   * todo
   */
  map?: SchemaDrivenDataMap
}

export const configurator = Configurator()
  .input<Input>()
  .normalized<{
    name: GlobalRegistry.Client['name']
    map: SchemaDrivenDataMap | undefined
  }>()
  .default({
    name: GlobalRegistry.defaultClientName,
    map: undefined,
  })
  .return()

export type SchemaConfigurator = typeof configurator
