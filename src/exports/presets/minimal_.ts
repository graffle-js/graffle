import { type Client, createConstructorWithContext } from '../../client/client.js'
import { type Context as BaseContext } from '../../context/context.js'
import { contextEmpty } from '../../context/ContextEmpty.js'
import { addAndApplyMany } from '../../context/fragments/extensions/fragment.js'
import type { ConfigManager } from '../../lib/config-manager/$.js'
import type { PartialOrUndefined } from '../../lib/prelude.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'

export { type Client } from '../../client/client.js'

const contextEmptyMinimal = addAndApplyMany(contextEmpty, [TransportHttp])

export type ContextEmpty = typeof contextEmptyMinimal

export const create = createConstructorWithContext(contextEmptyMinimal)

export type ClientEmpty = Client<ContextEmpty>

export namespace Client {
  // export type Context = Context
  export type With<$ContextNewPartial extends PartialOrUndefined<BaseContext>> = Client<
    ConfigManager.SetKeysOptional<
      ContextEmpty,
      $ContextNewPartial
    >
  >
}
