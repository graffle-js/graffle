import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import type { OutputInput } from './inputIncrementable/output.js'

/**
 * @remarks This input extends base with properties that can be filled with exports from the generated client.
 */
export type InputStatic<$Client extends GlobalRegistry.Client = GlobalRegistry.Client> = {
  checkPreflight?: boolean
  output?: OutputInput
  /**
   * The schema to use.
   *
   * TODO why don't we infer this from the runtime schemaIndex?
   *
   * @defaultValue 'default'
   */
  name?: $Client['name']
  /**
   * todo
   */
  readonly schemaMap?: SchemaDrivenDataMap | null
}

export type InputOutputEnvelopeLonghand = {
  /**
   * @defaultValue `true`
   */
  enabled?: boolean
  errors?: {
    execution?: boolean
    other?: boolean
  }
}
