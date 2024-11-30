import type { Context } from '../types/context.js'
import type { ClientGeneric } from './client.js'

export const createProperties = (
  callback: (
    clientConstructor: (context: Context) => ClientGeneric,
    context: Context,
  ) => Partial<ClientGeneric>,
) => {
  return callback
}
