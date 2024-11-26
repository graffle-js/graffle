import type { ClientConstructor } from './client/client.js'
import type { Context } from './client/context.js'
import { __ } from './lib/prelude.js'

export const createPresetFromContext = <$Context extends Context>(
  context: $Context,
): ClientConstructor<$Context> => {
  return (configInit) => __(context, configInit)
}
