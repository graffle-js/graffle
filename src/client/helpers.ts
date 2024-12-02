import type { PartialOrUndefined } from '../lib/prelude.js'
import type { Context } from '../types/context.js'
import type { ClientGeneric } from './client.js'

export const createProperties = (
  callback: (
    clientConstructor: (context: Context) => ClientGeneric,
    context: Context,
  ) => PartialOrUndefined<ClientGeneric>,
) => {
  return callback
}
