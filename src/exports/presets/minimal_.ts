import { type Client, createConstructorWithContext } from '#/client/client'
import { type Context as BaseContext } from '#/context/context'
import { contextEmpty } from '#/context/ContextEmpty'
import { addAndApplyMany } from '#/context/fragments/extensions/fragment'
import type { PartialOrUndefined } from '#/lib/prelude'
import type { ConfigManager } from '#lib/config-manager'
import { TransportHttp } from '../extensions/transport-http/runtime.js'

export { type Client } from '#/client/client'

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
