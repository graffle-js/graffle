import type { Client } from './client/client.js'

export const createPreset = <$Client extends Client>(client: $Client) => {
  return {
    create: () => client,
  }
}
