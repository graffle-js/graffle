export type OutputChannel = 'throw' | 'return'

export type OutputChannelConfig = 'throw' | 'return' | 'default'

export type ErrorCategory = 'execution' | 'other'

export const readErrorCategoryOutputChannel = (
  output: OutputConfig,
  errorCategory: ErrorCategory,
): OutputChannel | false => {
  if (output.errors[errorCategory] === `default`) {
    return output.defaults.errorChannel
  }
  return output.errors[errorCategory]
}

export const traditionalGraphqlOutput = {
  defaults: { errorChannel: `throw` },
  envelope: { enabled: true, errors: { execution: true, other: false } },
  errors: { execution: `default`, other: `default` },
} satisfies OutputConfig

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

export const isOutputTraditionalGraphQLOutput = (output: OutputConfig) => {
  return output.envelope.enabled && output.envelope.errors.execution
    && !output.envelope.errors.other
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
    }
  }
  errors: {
    execution: OutputChannelConfig
    other: OutputChannelConfig
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
    },
  },
  errors: {
    execution: `default`,
    other: `default`,
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
    }
  }
  errors: {
    execution: 'default'
    other: 'default'
  }
}
