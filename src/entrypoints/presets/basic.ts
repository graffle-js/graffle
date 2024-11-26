import { type Client, create as baseCreate } from '../../client/client.js'
import type { Context } from '../../client/context.js'
import { createPresetFromContext } from '../../createPreset.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import { TransportMemory } from '../extensions/transport-memory/runtime.js'

const context = baseCreate()
  .use(TransportHttp())
  .use(TransportMemory())
  ._

export type BasicClientContext = typeof context

export const create = createPresetFromContext(context)

export type BasicClient = Client<BasicClientContext>

export type BasicClientWith<$ContextNewPartial extends Partial<Context>> = Client<
  ConfigManager.SetKeysOptional<
    BasicClientContext,
    $ContextNewPartial
  >
>
