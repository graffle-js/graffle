import { type Client as BaseClient, createConstructorWithContext } from '#/client/client'
import { type Context as BaseContext } from '#/context/context'
import { contextEmpty } from '#/context/ContextEmpty'
import { addAndApplyMany } from '#/context/fragments/extensions/fragment'
import type { PartialOrUndefined } from '#/lib/prelude'
import type { ConfigManager } from '#lib/config-manager'
import { DocumentBuilder } from '../extensions/document-builder/runtime.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import { TransportMemory } from '../extensions/transport-memory/runtime.js'

const contextEmptyBasic = addAndApplyMany(contextEmpty, [TransportHttp, TransportMemory, DocumentBuilder])

export type ContextEmpty = typeof contextEmptyBasic

export const create = createConstructorWithContext(contextEmptyBasic)

export type Client = BaseClient<ContextEmpty>

export namespace Client {
  export type With<$ContextNewPartial extends PartialOrUndefined<BaseContext>> = BaseClient<
    ConfigManager.SetKeysOptional<
      ContextEmpty,
      $ContextNewPartial
    >
  >
}
