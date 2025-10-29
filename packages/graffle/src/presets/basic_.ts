import { type Client as BaseClient, createConstructorWithContext } from '@graffle/client/client.js'
import { type Context as BaseContext } from '@graffle/core/context.js'
import { contextEmpty } from '@graffle/core/ContextEmpty.js'
import { addAndApplyMany } from '@graffle/core/fragments/extensions/fragment.js'
import type { ConfigManager } from '@wollybeard/kit'
import type { Obj } from '@wollybeard/kit'
import { DocumentBuilder } from '@graffle/extension-document-builder/runtime.js'
import { TransportHttp } from '@graffle/extension-transport-http/runtime.js'
import { TransportMemory } from '@graffle/extension-transport-memory/runtime.js'

const contextEmptyBasic = addAndApplyMany(contextEmpty, [TransportHttp, TransportMemory, DocumentBuilder()])

export type ContextEmpty = typeof contextEmptyBasic

export const create = createConstructorWithContext(contextEmptyBasic)

export type Client = BaseClient<ContextEmpty>

export namespace Client {
  export type With<$ContextNewPartial extends Obj.PartialOrUndefined<BaseContext>> = BaseClient<
    ConfigManager.SetKeysOptional<
      ContextEmpty,
      $ContextNewPartial
    >
  >
}
