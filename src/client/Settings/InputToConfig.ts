import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { outputConfigDefault } from './Config.js'
import type { InputOutputEnvelopeLonghand, InputStatic } from './Input.js'

// dprint-ignore
export type NormalizeInput<$Input extends InputStatic> = {
  output: {
    defaults: {
      errorChannel: ConfigManager.GetAtPathOrDefault<$Input, ['output', 'defaults', 'errorChannel'], 'throw'>
    }
    envelope: {
      enabled:
						ConfigManager.GetOptional<$Input, ['output','envelope']> 					  extends boolean 		? ConfigManager.GetOptional<$Input, ['output','envelope']>
					: ConfigManager.GetOptional<$Input, ['output','envelope','enabled']>		extends boolean 		? ConfigManager.GetOptional<$Input, ['output','envelope','enabled']>
					: ConfigManager.GetOptional<$Input, ['output','envelope']> 						extends object 			? true
					: false
      errors: {
        execution: ConfigManager.GetAtPathOrDefault<$Input, ['output','envelope','errors','execution'], true>
        other: ConfigManager.GetAtPathOrDefault<$Input, ['output','envelope','errors','other'], false> 
        schema: ConfigManager.GetAtPathOrDefault<$Input, ['output','envelope','errors','schema'], false>
      }
    }
    errors: {
      execution: ConfigManager.GetAtPathOrDefault<$Input,['output', 'errors', 'execution'], 'default'>
      other: ConfigManager.GetAtPathOrDefault<$Input,['output', 'errors', 'other'], 'default'>
      schema: ConfigManager.GetAtPathOrDefault<$Input,['output', 'errors', 'schema'], false>
    }
  }
}

export const defaultSchemaName: GlobalRegistry.DefaultClientName = `default`

export const inputToConfig = <$Input extends InputStatic>(
  input: $Input,
): NormalizeInput<$Input> => {
  const outputEnvelopeLonghand: InputOutputEnvelopeLonghand | undefined = typeof input.output?.envelope === `object`
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
