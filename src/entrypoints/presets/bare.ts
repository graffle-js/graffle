import type { Client as BaseClient } from '../../client/client.js'
import type { Context } from '../../types/context.js'
export { create } from '../../client/client.js'

export type Client = BaseClient<Context.States.Empty, {}, {}>
