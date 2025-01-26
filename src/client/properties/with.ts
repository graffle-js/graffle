import type { Configurator } from '../../types/configurator.js'
import type { ConfiguratorIndexInput } from '../../types/ConfiguratorIndex.js'
import type { Context } from '../../types/context.js'
import { createProperties } from '../helpers.js'

export const withProperties = createProperties((builder, context) => {
  return {
    with: (configurationIndexInput: ConfiguratorIndexInput) => {
      const newContext = calcConfigurationIndexUpdateForContext(context, configurationIndexInput)
      return builder(newContext)
    },
  } as any
})

export const calcConfigurationIndexUpdateForContext = <
  context extends Context,
  configurationIndexInput extends ConfiguratorIndexInput,
>(context: context, configurationIndexInput: configurationIndexInput): Context => {
  const newConfigurationIndex = {
    ...context.configurationIndex,
  }
  for (const configuratorName in configurationIndexInput) {
    const input = configurationIndexInput[configuratorName]!
    const current = context.configurationIndex[configuratorName]!
    const configurator = context.configuratorIndex[configuratorName]!
    const newConfiguration = configurator.inputResolver({ current, input })
    newConfigurationIndex[configuratorName] = newConfiguration
  }
  const newContext = {
    ...context,
    configurationIndex: newConfigurationIndex,
  }
  return newContext
}

export type CalcConfigurationIndexUpdateForContext<
  $Context extends Context,
  $ConfigurationIndexInput extends ConfiguratorIndexInput,
  __ =
    & Omit<$Context, 'configurationIndex'>
    & {
      readonly configurationIndex: {
        readonly [_ in keyof $Context['configurationIndex']]: _ extends keyof $ConfigurationIndexInput
          ? $ConfigurationIndexInput[_] extends object ? Configurator.ApplyInputResolver$Func<
              $Context['configuratorIndex'][_],
              $Context['configurationIndex'][_],
              $ConfigurationIndexInput[_]
            >
          : $Context['configurationIndex'][_]
          : $Context['configurationIndex'][_]
      }
    },
> = __
