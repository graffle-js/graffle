import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import type { ConfigInit, InitOutputEnvelopeLonghand } from './ConfigInit.js'
import { outputConfigDefault } from './Output.js'

// dprint-ignore
export type NormalizeConfigInit<$ConfigInit extends ConfigInit> = {
  name: ConfigManager.OrDefault<$ConfigInit['name'], GlobalRegistry.DefaultClientName>
  schemaMap: $ConfigInit['schemaMap']
  checkPreflight: $ConfigInit['checkPreflight']
    output: {
      defaults: {
        errorChannel: ConfigManager.GetAtPathOrDefault<$ConfigInit, ['output', 'defaults', 'errorChannel'], 'throw'>
      }
      envelope: {
        enabled:
              ConfigManager.GetOptional<$ConfigInit, ['output','envelope']> 					  extends boolean 		? ConfigManager.GetOptional<$ConfigInit, ['output','envelope']>
            : ConfigManager.GetOptional<$ConfigInit, ['output','envelope','enabled']>		extends boolean 		? ConfigManager.GetOptional<$ConfigInit, ['output','envelope','enabled']>
            : ConfigManager.GetOptional<$ConfigInit, ['output','envelope']> 						extends object 			? true
            : false
        errors: {
          execution: ConfigManager.GetAtPathOrDefault<$ConfigInit, ['output','envelope','errors','execution'], true>
          other: ConfigManager.GetAtPathOrDefault<$ConfigInit, ['output','envelope','errors','other'], false> 
          schema: ConfigManager.GetAtPathOrDefault<$ConfigInit, ['output','envelope','errors','schema'], false>
        }
      }
      errors: {
        execution: ConfigManager.GetAtPathOrDefault<$ConfigInit,['output', 'errors', 'execution'], 'default'>
        other: ConfigManager.GetAtPathOrDefault<$ConfigInit,['output', 'errors', 'other'], 'default'>
        schema: ConfigManager.GetAtPathOrDefault<$ConfigInit,['output', 'errors', 'schema'], false>
      }
    }
}

export const defaultSchemaName: GlobalRegistry.DefaultClientName = `default`

export const normalizeConfigInit = <$Input extends ConfigInit>(
  input: $Input,
): NormalizeConfigInit<$Input> => {
  const outputEnvelopeLonghand: InitOutputEnvelopeLonghand | undefined = typeof input.output?.envelope === `object`
    ? { enabled: true, ...input.output.envelope }
    : typeof input.output?.envelope === `boolean`
    ? { enabled: input.output.envelope }
    : undefined

  return {
    schemaMap: input.schemaMap ?? null as any,
    output: {
      defaults: {
        // @ts-expect-error conditional type
        errorChannel: input.output?.defaults?.errorChannel ?? outputConfigDefault.defaults.errorChannel,
      },
      envelope: {
        // @ts-expect-error conditional type
        enabled: outputEnvelopeLonghand?.enabled ?? outputConfigDefault.envelope.enabled,
        errors: {
          // @ts-expect-error conditional type
          execution: outputEnvelopeLonghand?.errors?.execution ?? outputConfigDefault.envelope.errors.execution,
          // @ts-expect-error conditional type
          other: outputEnvelopeLonghand?.errors?.other ?? outputConfigDefault.envelope.errors.other,
          // @ts-expect-error conditional type

          schema: outputEnvelopeLonghand?.errors?.schema ?? outputConfigDefault.envelope.errors.schema,
        },
      },
      errors: {
        // @ts-expect-error conditional type
        execution: input.output?.errors?.execution ?? outputConfigDefault.errors.execution,
        // @ts-expect-error conditional type
        other: input.output?.errors?.other ?? outputConfigDefault.errors.other,
        // @ts-expect-error conditional type

        schema: input.output?.errors?.schema ?? outputConfigDefault.errors.schema,
      },
    },
  }
}
