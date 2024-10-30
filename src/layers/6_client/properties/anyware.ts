import type { Anyware, Anyware as AnywareLib } from '../../../lib/anyware/__.js'
import { Chain } from '../../../lib/chain/__.js'
import type { RequestPipeline } from '../../../requestPipeline/__.js'
import { type Context } from '../context.js'
import { createExtension } from '../extension/extension.js'

export interface Anyware_ extends Chain.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Anyware<this['params']>
}

export interface Anyware<$Arguments extends Chain.Extension.Parameters<Anyware_>> {
  /**
   * TODO Anyware Docs.
   */
  anyware: (
    anyware: AnywareLib.Extension2<RequestPipeline.Core<$Arguments['context']['config']>>,
  ) => Chain.Definition.MaterializeWithNewContext<$Arguments['chain'], $Arguments['context']>
}

export const AnywareExtension = Chain.Extension.create<Anyware_>((builder, context) => {
  const properties = {
    anyware: (anyware: Anyware.Extension2<RequestPipeline.Core>) => {
      return builder({
        ...context,
        extensions: [...context.extensions, createExtension({ name: `InlineAnyware`, onRequest: anyware })],
      })
    },
  }
  return properties
})
