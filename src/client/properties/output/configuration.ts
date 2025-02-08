import type { ConfigManager } from '../../../lib/config-manager/__.js'
import { Configurator as C } from '../../../lib/configurator/configurator.js'

export type OutputChannel = 'throw' | 'return'

export type OutputChannelConfig = 'throw' | 'return' | 'default'

export type ErrorCategory = 'execution' | 'other'

export interface Input {
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
  envelope?: boolean | ConfigurationInputOutputEnvelopeLonghand
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

export interface ConfigurationInputOutputEnvelopeLonghand {
  /**
   * @defaultValue `true`
   */
  enabled?: boolean
  errors?: {
    execution?: boolean
    other?: boolean
  }
}

export type Normalized = {
  defaults: {
    errorChannel: OutputChannel
  }
  envelope: {
    enabled: boolean
    errors: {
      execution: boolean
      other: boolean
    }
  }
  errors: {
    execution: OutputChannelConfig
    other: OutputChannelConfig
  }
}

const default_ = {
  defaults: {
    errorChannel: `throw`,
  },
  envelope: {
    enabled: false,
    errors: {
      execution: true,
      other: false,
    },
  },
  errors: {
    execution: `default`,
    other: `default`,
  },
} satisfies Partial<Normalized>

type Default_ = typeof default_

export const configurator = C()
  .input<Input>()
  .normalized<Normalized>()
  .default(default_)
  .inputResolver<InputResolver$Func>(({ current, input }) => {
    const outputEnvelopeLonghand: ConfigurationInputOutputEnvelopeLonghand | undefined =
      typeof input.envelope === `object`
        ? { enabled: true, ...input.envelope }
        : typeof input.envelope === `boolean`
        ? { enabled: input.envelope }
        : undefined

    return {
      defaults: {
        errorChannel: input.defaults?.errorChannel ?? current.defaults?.errorChannel,
      },
      envelope: {
        enabled: outputEnvelopeLonghand?.enabled ?? current.envelope.enabled,
        errors: {
          execution: outputEnvelopeLonghand?.errors?.execution ?? current.envelope.errors.execution,
          other: outputEnvelopeLonghand?.errors?.other ?? current.envelope.errors.other,
          // @ts-expect-error
          schema: outputEnvelopeLonghand?.errors?.schema ?? current.envelope.errors.schema,
        },
      },
      errors: {
        execution: input.errors?.execution ?? current.errors.execution,
        other: input.errors?.other ?? current.errors.other,
        // @ts-expect-error conditional type
        schema: input.errors?.schema ?? current.errors.schema,
      },
    }
  })
  .return()

export type Configurator = typeof configurator

export interface InputResolver$Func extends C.InputResolver.$Func<Input, Normalized, Default_> {
  return: InputResolver<this['parameters']>
}

// dprint-ignore
export interface InputResolver<
  $Parameters extends C.InputResolver.Parameters<Input, Normalized, Default_>,
  // Variables
  $Input = $Parameters['input'],
  _$Current = $Parameters['current'],
> {
  // todo: integrate _$Current into logic
  defaults: {
    errorChannel: ConfigManager.GetAtPathOrDefault<$Input, ['defaults', 'errorChannel'], 'throw'>
  }
  envelope: {
    enabled:
          ConfigManager.GetOptional<$Input, ['envelope']> 					  extends boolean 		? ConfigManager.GetOptional<$Input, ['envelope']>
        : ConfigManager.GetOptional<$Input, ['envelope','enabled']>	  extends boolean 		? ConfigManager.GetOptional<$Input, ['envelope','enabled']>
        : ConfigManager.GetOptional<$Input, ['envelope']> 						extends object 			? true
        : false
    errors: {
      execution: ConfigManager.GetAtPathOrDefault<$Input, ['envelope','errors','execution'], true>
      other: ConfigManager.GetAtPathOrDefault<$Input, ['envelope','errors','other'], false> 
      schema: ConfigManager.GetAtPathOrDefault<$Input, ['envelope','errors','schema'], false>
    }
  }
  errors: {
    execution: ConfigManager.GetAtPathOrDefault<$Input,['errors', 'execution'], 'default'>
    other: ConfigManager.GetAtPathOrDefault<$Input,['errors', 'other'], 'default'>
    schema: ConfigManager.GetAtPathOrDefault<$Input,['errors', 'schema'], false>
  }
}

export const isOutputTraditionalGraphQLOutput = (output: Normalized) => {
  return output.envelope.enabled && output.envelope.errors.execution
    && !output.envelope.errors.other
}
export const readErrorCategoryOutputChannel = (
  output: Normalized,
  errorCategory: ErrorCategory,
): OutputChannel | false => {
  if (output.errors[errorCategory] === `default`) {
    return output.defaults.errorChannel
  }
  return output.errors[errorCategory]
}

// export const traditionalGraphqlOutput = {
//   defaults: { errorChannel: `throw` },
//   envelope: { enabled: true, errors: { execution: true, other: false } },
//   errors: { execution: `default`, other: `default` },
// } satisfies OutputNormalized

// export const traditionalGraphqlOutputThrowing: OutputNormalized = {
//   ...traditionalGraphqlOutput,
//   envelope: {
//     ...traditionalGraphqlOutput.envelope,
//     errors: {
//       ...traditionalGraphqlOutput.envelope.errors,
//       execution: false,
//     },
//   },
// }
