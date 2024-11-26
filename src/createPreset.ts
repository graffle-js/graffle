import type { Client } from './client/client.js'
import type { Context } from './client/context.js'
import { __ } from './lib/prelude.js'

export const createPresetFromContext = <$Context extends Context>(
  context: $Context,
): () => Client<$Context> => {
  return () => __(context)
}
