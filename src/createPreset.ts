import type { Client } from './client/client.js'
import type { Context } from './client/context.js'
import { __ } from './lib/prelude.js'

export const createPreset = <$Client extends Client>(client: $Client) => {
  return {
    create: () => client,
  }
}

export const createPresetFromContext = <$Context extends Context>(
  context: $Context,
): {
  create: () => Client<$Context>
} => {
  return {
    create: () => __(context),
  }
}
