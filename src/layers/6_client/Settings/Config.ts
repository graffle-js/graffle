import type { ConfigManager, RequireProperties, StringKeyof } from '../../../lib/prelude.js'
import type { Schema } from '../../1_Schema/__.js'
import type { GlobalRegistry } from '../../2_generator/globalRegistry.js'
import type { SelectionSet } from '../../3_SelectionSet/__.js'
import type { Transport } from '../../5_core/types.js'
import type { ConfigGetOutputError } from '../handleOutput.js'
import type { TransportHttpInput } from '../transportHttp/request.js'
import type { InputStatic } from './Input.js'

export type OutputChannel = 'throw' | 'return'

export type OutputChannelConfig = 'throw' | 'return' | 'default'

export type ErrorCategory = 'execution' | 'other' | 'schema'

export const readConfigErrorCategoryOutputChannel = (
  config: Config,
  errorCategory: ErrorCategory,
): OutputChannel | false => {
  if (config.output.errors[errorCategory] === `default`) {
    return config.output.defaults.errorChannel
  }
  return config.output.errors[errorCategory]
}

export const traditionalGraphqlOutput: OutputConfig = {
  defaults: { errorChannel: `throw` },
  envelope: { enabled: true, errors: { execution: true, other: false, schema: false } },
  errors: { execution: `default`, other: `default`, schema: false },
}
export const traditionalGraphqlOutputThrowing: OutputConfig = {
  ...traditionalGraphqlOutput,
  envelope: {
    ...traditionalGraphqlOutput.envelope,
    errors: {
      ...traditionalGraphqlOutput.envelope.errors,
      execution: false,
    },
  },
}

export const isContextConfigTraditionalGraphQLOutput = (config: Config) => {
  return config.output.envelope.enabled && config.output.envelope.errors.execution
    && !config.output.envelope.errors.other && !config.output.envelope.errors.schema
}

export type OutputConfig = {
  defaults: {
    errorChannel: OutputChannel
  }
  envelope: {
    enabled: boolean
    errors: {
      execution: boolean
      other: boolean
      schema: boolean
    }
  }
  errors: {
    execution: OutputChannelConfig
    other: OutputChannelConfig
    schema: false | OutputChannelConfig
  }
}

export const outputConfigDefault: OutputConfigDefault = {
  defaults: {
    errorChannel: `throw`,
  },
  envelope: {
    enabled: false,
    errors: {
      execution: true,
      other: false,
      schema: false,
    },
  },
  errors: {
    execution: `default`,
    other: `default`,
    schema: false,
  },
}

export type OutputConfigDefault = {
  defaults: {
    errorChannel: 'throw'
  }
  envelope: {
    enabled: false
    errors: {
      execution: true
      other: false
      schema: false
    }
  }
  errors: {
    execution: 'default'
    other: 'default'
    schema: false
  }
}

export type Config = {
  /**
   * The initial input that was given to derive this config.
   */
  initialInput: InputStatic<any> // InputStatic<GlobalRegistry.SchemaUnion>
  name: GlobalRegistry.SchemaNames
  output: OutputConfig
  transport: {
    type: Transport
    config: RequireProperties<TransportHttpInput, 'methodMode'>
  }
}

// todo this changed, check tests, add new tests as needed.
// dprint-ignore
export type OrThrowifyConfig<$Config extends Config> =
  ConfigManager.Set<$Config, ['output', 'errors'], { other: 'throw', execution: 'throw', schema: 'throw' }>

/**
 * We inject __typename select when:
 * 1. using schema errors
 * 2. using return mode dataSuccess
 */

type TypenameSelection = { __typename: true }

// dprint-ignore
export type CreateSelectionTypename<$Config extends Config, $Index extends Schema.Index> =
  IsNeedSelectionTypename<$Config, $Index> extends true ? TypenameSelection : {} // eslint-disable-line

// dprint-ignore
export type IsNeedSelectionTypename<$Config extends Config, $Index extends Schema.Index> =
  ConfigGetOutputError<$Config, 'schema'> extends 'throw'
    ? GlobalRegistry.HasSchemaErrorsViaName<$Index['name']> extends true
      ? true
      : false
    : false

export type AugmentRootTypeSelectionWithTypename<
  $Config extends Config,
  $Index extends Schema.Index,
  $RootTypeName extends Schema.RootTypeName,
  $Selection extends object,
> = IsNeedSelectionTypename<$Config, $Index> extends true ? {
    [$Key in StringKeyof<$Selection>]:
      & $Selection[$Key]
      & (IsRootFieldNameAResultField<$Index, $RootTypeName, $Key> extends true ? TypenameSelection : {}) // eslint-disable-line
  }
  : $Selection

type IsRootFieldNameAResultField<
  $Index extends Schema.Index,
  $RootTypeName extends Schema.RootTypeName,
  $FieldName extends string,
> = SelectionSet.AliasNameOrigin<$FieldName> extends keyof $Index['error']['rootResultFields'][$RootTypeName] ? true
  : false
