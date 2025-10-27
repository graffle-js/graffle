import type { Configurator } from '@wollybeard/kit/configurator'
import type { ContextFragment } from '../fragment.js'
import { type Configure, configure } from './configure.js'

export const configureCurrentOrThrow = <
  context extends ContextFragment,
  configurationInput extends Configurator.Configuration,
>(
  context: context,
  configurationInput: configurationInput,
): ConfigureCurrent<context, configurationInput> => {
  if (!context.transports.current) {
    throw new Error(`No transport is currently set.`)
  }
  return configure(context, context.transports.current, configurationInput) as any
}

// dprint-ignore
export type ConfigureCurrent<
  $Context extends ContextFragment,
  $ConfigurationInput extends Configurator.Configuration,
> =
  $Context['transports']['current'] extends string
    ? {
        [_ in keyof $Context]:
          _ extends 'transports'
            ? Configure<$Context, $Context['transports']['current'], $ConfigurationInput>['transports']
            : $Context[_]
      }
    : $Context
