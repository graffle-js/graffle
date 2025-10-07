export { Context } from '../context/$.js'
import { type Context as Context_ } from '#src/context/context.js'
export type Context = Context_

import { type Client as Client_ } from '#src/client/client.js'
export type Client<$Context extends Context_> = Client_<$Context>
export * as Client from './kit_Client_.js'
