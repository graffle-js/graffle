export { Context } from '../context/$.js'
import { type Context as Context_ } from '#/context/context'
export type Context = Context_

import { type Client as Client_ } from '#/client/client'
export type Client<$Context extends Context_> = Client_<$Context>
export * as Client from './kit_Client_.js'
