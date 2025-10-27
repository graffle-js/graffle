import type { ConfigManager } from '@wollybeard/kit/config-manager'
import { type Client, createConstructorWithContext } from '#src/client/client.js'
import { type Context as BaseContext } from '#src/context/context.js'
import { contextEmpty } from '#src/context/ContextEmpty.js'
import { addAndApplyMany } from '#src/context/fragments/extensions/fragment.js'
import type { Obj } from '@wollybeard/kit'
import { TransportHttp } from '../extensions/transport-http/runtime.js'

export { type Client } from '#src/client/client.js'

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
