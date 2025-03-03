import { type Client as BaseClient, createConstructorWithContext } from '../../client/client.js'
import { type Context as BaseContext } from '../../context/context.js'
import { contextEmpty } from '../../context/ContextEmpty.js'
import { addAndApplyMany } from '../../context/fragments/extensions/fragment.js'
import type { ConfigManager } from '../../lib/config-manager/_namespace.js'
import { DocumentBuilder } from '../extensions/document-builder/runtime.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import { TransportMemory } from '../extensions/transport-memory/runtime.js'
import type { PartialOrUndefined } from '../main.js'

const context = addAndApplyMany(contextEmpty, [TransportHttp, TransportMemory, DocumentBuilder])

export const create = createConstructorWithContext(context)

export type Client = BaseClient<typeof context>

export namespace Client {
  export type Context = typeof context

  export type With<$ContextNewPartial extends PartialOrUndefined<BaseContext>> = BaseClient<
    ConfigManager.SetKeysOptional<
      Context,
      $ContextNewPartial
    >
  >
}
