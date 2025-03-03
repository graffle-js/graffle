import { type Client as BaseClient, createConstructorWithContext } from '../../client/client.js'
import { type Context as BaseContext } from '../../context/context.js'
import { contextEmpty } from '../../context/ContextEmpty.js'
import { addAndApplyMany } from '../../context/fragments/extensions/fragment.js'
import type { ConfigManager } from '../../lib/config-manager/_namespace.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import type { PartialOrUndefined } from '../main.js'

const context = addAndApplyMany(contextEmpty, [TransportHttp])

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
