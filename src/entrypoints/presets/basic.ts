import { type Client as BaseClient, createConstructorWithContext } from '../../client/client.js'
import { useReducer } from '../../client/properties/use.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { Context, type Context as BaseContext } from '../../types/context.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import { TransportMemory } from '../extensions/transport-memory/runtime.js'
import type { PartialOrUndefined } from '../main.js'

const context = useReducer(useReducer(Context.States.contextEmpty, TransportHttp()), TransportMemory())

type BasicClientContext = typeof context

export const create = createConstructorWithContext(context)

export type Client = BaseClient<BasicClientContext, {}, {}>

export namespace Client {
  export type Context = BasicClientContext

  export type With<$ContextNewPartial extends PartialOrUndefined<BaseContext>> = BaseClient<
    // @ts-expect-error fixme
    ConfigManager.SetKeysOptional<
      BasicClientContext,
      $ContextNewPartial
    >,
    {},
    {}
  >
}
