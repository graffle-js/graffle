import { type Client, createConstructorWithContext } from '@graffle/client/client.js'
import { type Context as BaseContext } from '@graffle/core/context.js'
import { contextEmpty } from '@graffle/core/ContextEmpty.js'
import { addAndApplyMany } from '@graffle/core/fragments/extensions/fragment.js'
import type { ConfigManager } from '@wollybeard/kit'
import type { Obj } from '@wollybeard/kit'
import { TransportHttp } from '@graffle/extension-transport-http/runtime.js'

export { type Client } from '@graffle/client/client.js'

const contextEmptyMinimal = addAndApplyMany(contextEmpty, [TransportHttp])

export type ContextEmpty = typeof contextEmptyMinimal

export const create = createConstructorWithContext(contextEmptyMinimal)

export type ClientEmpty = Client<ContextEmpty>

export namespace Client {
  // export type Context = Context
  export type With<$ContextNewPartial extends Obj.PartialOrUndefined<BaseContext>> = Client<
    ConfigManager.SetKeysOptional<
      ContextEmpty,
      $ContextNewPartial
    >
  >
}
