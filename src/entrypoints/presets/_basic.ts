import { type Client as BaseClient, createConstructorWithContext } from '../../client/client.js'
import { contextFragmentAddAndApplyMany } from '../../client/properties/extensions/extensions.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { type Context as BaseContext } from '../../types/context.js'
import { contextEmpty } from '../../types/ContextEmpty.js'
import { DocumentBuilder } from '../extensions/document-builder/runtime.js'
import { TransportHttp } from '../extensions/transport-http/runtime.js'
import { TransportMemory } from '../extensions/transport-memory/runtime.js'
import type { PartialOrUndefined } from '../main.js'

const context = contextFragmentAddAndApplyMany(contextEmpty, [TransportHttp, TransportMemory, DocumentBuilder])

type BasicClientContext = typeof context

export const create = createConstructorWithContext(context)

export type Client = BaseClient<BasicClientContext>

export namespace Client {
  export type Context = BasicClientContext

  export type With<$ContextNewPartial extends PartialOrUndefined<BaseContext>> = BaseClient<
    ConfigManager.SetKeysOptional<
      BasicClientContext,
      $ContextNewPartial
    >
  >
}
