import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import type { OutputChannel, OutputChannelConfig } from './Output.js'

export type DefaultCheckPreflight = true

export type DefaultName = GlobalRegistry.DefaultClientName

/**
 * @remarks This input extends base with properties that can be filled with exports from the generated client.
 */
export type ConfigInit<$Client extends GlobalRegistry.Client = GlobalRegistry.Client> = {
  /**
   * TODO
   */
  checkPreflight?: boolean
  /**
   * TODO
   */
  output?: OutputInit
  /**
   * The generated client to use.
   *
   * @defaultValue 'default'
   */
  name?: $Client['name']
  /**
   * todo
   */
  readonly schemaMap?: SchemaDrivenDataMap | null
}

export type InitOutputEnvelopeLonghand = {
  /**
   * @defaultValue `true`
   */
  enabled?: boolean
  errors?: {
    execution?: boolean
    other?: boolean
  }
}

// dprint-ignore
export type OutputInit =
  {
    /**
     * Defaults for certain aspects of output behavior.
     */
    defaults?: {
      /**
       * The default error channel to use.
       *
       * @defaultValue `'throw'`
       */
      errorChannel?: OutputChannel
    }
    /**
     * @defaultValue `false`
     */
    envelope?: boolean | InitOutputEnvelopeLonghand
    /**
     * Granular control of how to output errors by category.
     */
    errors?: {
      /**
       * Execution errors. These are errors you would traditionally see in the GraphQL execution result `'errors'` field.
       */
      execution?: OutputChannelConfig
      /**
       * Other errors include things like network errors thrown by fetch (when using HTTP transport), errors thrown from extensions, etc.
       */
      other?: OutputChannelConfig
    }
  }
