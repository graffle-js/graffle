import { type Client, create as baseCreate } from '../../client/client.js'
import { createPresetFromContext } from '../../createPreset.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'

const context = baseCreate()
  .use(TransportHttp())
  ._

export type MinimalClientContext = typeof context

export const create = createPresetFromContext(context)

export type MinimalClient = Client<MinimalClientContext>

export type MinimalClientWith<$ContextNewPartial extends Partial<MinimalClientContext>> = Client<
  ConfigManager.SetKeysOptional<
    MinimalClientContext,
    $ContextNewPartial
  >
>
