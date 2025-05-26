export { Context } from '../context/_namespace.js'
import { type Context as Context_ } from '../context/context.js'
export type Context = Context_

import { type Client as Client_ } from '../client/client.js'
export type Client<$Context extends Context_> = Client_<$Context>
export * as Client from './kit_Client_.js'
