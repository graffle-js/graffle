import { type Client as BaseClient, createConstructorWithContext } from '../../client/client.js'
import { contextFragmentAddMany } from '../../client/properties/extensions/extensions.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { Context, type Context as BaseContext } from '../../types/context.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import type { PartialOrUndefined } from '../main.js'

const context = contextFragmentAddMany(Context.States.empty, TransportHttp)

export type MinimalClientContext = typeof context

export const create = createConstructorWithContext(context)

export type Client = BaseClient<MinimalClientContext>

export namespace Client {
  export type Context = MinimalClientContext

  export type With<$ContextNewPartial extends PartialOrUndefined<BaseContext>> = BaseClient<
    ConfigManager.SetKeysOptional<
      MinimalClientContext,
      $ContextNewPartial
    >
  >
}
