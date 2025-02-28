import type { Configurator } from '../../../../lib/configurator/configurator.js'
import { isObjectEmpty } from '../../../../lib/prelude.js'
import type { ContextFragment } from '../fragment.js'
import { configure } from './configure.js'

export const setCurrent = <context extends ContextFragment>(
  context: context,
  transportName: string,
  configurationInput?: Configurator.Configuration,
): context => {
  const transport = context.transports.registry[transportName]
  if (!transport) throw new Error(`Unknown transport: ${transportName}`)

  const noChange = (!configurationInput || isObjectEmpty(configurationInput))
    && transportName === context.transports.current
  if (noChange) return context

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

  return newContext
}
