import type { Docpar } from '#src/docpar/$.js'
import { Configurator as C } from '@wollybeard/kit/configurator'
import { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'

type SchemaDrivenDataMap = Docpar.SchemaDrivenDataMap

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

export const configurator = C()
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

export type Configurator = typeof configurator
