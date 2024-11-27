import { useReducer } from '../../client/builderExtensions/use.js'
import { type Client as BaseClient, createConstructorWithContext } from '../../client/client.js'
import { Context, type Context as BaseContext } from '../../client/context.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'

const context = useReducer(Context.States.contextEmpty, TransportHttp())

export type MinimalClientContext = typeof context

export const create = createConstructorWithContext(context)

export type Client = BaseClient<MinimalClientContext>

export namespace Client {
  export type Context = MinimalClientContext

  export type With<$ContextNewPartial extends Partial<BaseContext>> = BaseClient<
    // @ts-expect-error fixme
    ConfigManager.SetKeysOptional<
      MinimalClientContext,
      $ContextNewPartial
    >
  >
}
