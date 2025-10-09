import type { ConfigManager } from '#lib/config-manager'
import { type Client as BaseClient, createConstructorWithContext } from '#src/client/client.js'
import { type Context as BaseContext } from '#src/context/context.js'
import { contextEmpty } from '#src/context/ContextEmpty.js'
import { addAndApplyMany } from '#src/context/fragments/extensions/fragment.js'
import type { Obj } from '@wollybeard/kit'
import { DocumentBuilder } from '../extensions/document-builder/runtime.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import { TransportMemory } from '../extensions/transport-memory/runtime.js'

const contextEmptyBasic = addAndApplyMany(contextEmpty, [TransportHttp, TransportMemory, DocumentBuilder])

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
