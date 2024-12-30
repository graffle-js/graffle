import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import type { OutputChannel, OutputChannelConfig } from './Output.js'

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
  output?: ConfigInitOutput
  /**
   * The generated client to use.
   *
   * @defaultValue 'default'
   */
  name?: $Client['name']
  /**
   * todo
   */
  readonly schemaMap?: SchemaDrivenDataMap
}

export type ConfigInitOutputEnvelopeLonghand = {
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
export type ConfigInitOutput =
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
    envelope?: boolean | ConfigInitOutputEnvelopeLonghand
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

// dprint-ignore
export type NormalizeConfigInit<$ConfigInit extends ConfigInit> =
  ConfigInit extends $ConfigInit
    ? {}
    : {
        [_ in keyof $ConfigInit]:
          _ extends 'output'
            ? NormalizeConfigInitOutput<$ConfigInit['output']>
            : $ConfigInit[_]
      }

// dprint-ignore
type NormalizeConfigInitOutput<$Output extends ConfigInitOutput | undefined> = {
  defaults: {
    errorChannel: ConfigManager.GetAtPathOrDefault<$Output, ['defaults', 'errorChannel'], 'throw'>
  }
  envelope: {
    enabled:
          ConfigManager.GetOptional<$Output, ['envelope']> 					  extends boolean 		? ConfigManager.GetOptional<$Output, ['envelope']>
        : ConfigManager.GetOptional<$Output, ['envelope','enabled']>	extends boolean 		? ConfigManager.GetOptional<$Output, ['envelope','enabled']>
        : ConfigManager.GetOptional<$Output, ['envelope']> 						extends object 			? true
        : false
    errors: {
      execution: ConfigManager.GetAtPathOrDefault<$Output, ['envelope','errors','execution'], true>
      other: ConfigManager.GetAtPathOrDefault<$Output, ['envelope','errors','other'], false> 
      schema: ConfigManager.GetAtPathOrDefault<$Output, ['envelope','errors','schema'], false>
    }
  }
  errors: {
    execution: ConfigManager.GetAtPathOrDefault<$Output,['errors', 'execution'], 'default'>
    other: ConfigManager.GetAtPathOrDefault<$Output,['errors', 'other'], 'default'>
    schema: ConfigManager.GetAtPathOrDefault<$Output,['errors', 'schema'], false>
  }
}
