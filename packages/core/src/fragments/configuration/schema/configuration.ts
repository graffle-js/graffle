import type { Docpar } from '@graffle/graphql'
import { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import { Configurator } from '@wollybeard/kit'

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
  name?: GlobalRegistry.Client['name'] | undefined
  /**
   * todo
   */
  map?: SchemaDrivenDataMap | undefined
}

export const configurator = Configurator
  .create()
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
