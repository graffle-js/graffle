import { isObjectEmpty } from '#src/lib/prelude.js'
import type { ContextFragment } from '../fragment.js'
import { type Configure, configure } from './configure.js'

export const setCurrentAndOptionallyConfigure = <
  context extends ContextFragment,
  transportName extends string,
  configurationInput extends context['transports']['registry'][transportName]['configurator']['input'],
  _IsConfigured extends boolean = context['transports']['registry'][transportName]['configurator']['input'] extends
    configurationInput ? false : true,
>(
  context: context,
  transportName: transportName,
  configurationInput?: configurationInput,
): Configure<
  context,
  transportName,
  _IsConfigured extends true ? configurationInput : {},
  true
> => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = (!configurationInput || isObjectEmpty(configurationInput))
    && transportName === context.transports.current
  if (noChange) return context as any

  const transports: ContextFragment['transports'] = {
    ...context.transports,
    current: transportName,
  }
  const newContext = {
    ...context,
    transports,
    // todo: not needed, only changed when adding a transport type.
    // the thing is, we don't have concept of partial context fragment.
    // one solution is to merge request pipeline definition and transports keys under one new top level key.
    requestPipelineDefinition: context.requestPipelineDefinition,
  }

  if (configurationInput) {
    return configure(newContext, transportName, configurationInput) as any
  }

  return newContext as any
}
