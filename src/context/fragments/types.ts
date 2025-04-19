import type { Client } from '../../client/client.js'
import type { Context } from '../context.js'

export interface ContextComputerParameters<$Context extends Context, $Configuration extends object> {
  configuration: $Configuration
  context: $Context
  client: Client<$Context>
}
