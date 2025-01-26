import type { PartialOrUndefined } from '../lib/prelude.js'
import type { Context } from '../types/context.js'
import type { ClientGeneric } from './client.js'

export const createProperties = (
  callback: (parameters: {
    createClient: (context: Context) => ClientGeneric
    client: ClientGeneric
    context: Context
  }) => PartialOrUndefined<ClientGeneric>,
) => {
  return callback
}
