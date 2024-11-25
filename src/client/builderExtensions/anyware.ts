import { createExtension } from '../../extension/extension.js'
import type { Anyware as AnywareLib } from '../../lib/anyware/__.js'
import { Builder } from '../../lib/builder/__.js'
import type { RequestPipeline } from '../../requestPipeline/__.js'
import { type Context } from '../context.js'

export interface BuilderExtensionAnyware extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Anyware<this['params']>
}

export interface Anyware<$Arguments extends Builder.Extension.Parameters<BuilderExtensionAnyware>> {
  /**
   * TODO Anyware Docs.
   */
  anyware: (
    interceptor: AnywareLib.Interceptor.InferFromPipeline<RequestPipeline>,
  ) => Builder.Definition.MaterializeWith<$Arguments['definition'], $Arguments['context']>
}

export const builderExtensionAnyware = Builder.Extension.create<BuilderExtensionAnyware>((builder, context) => {
  const properties = {
    anyware: (interceptor: AnywareLib.Interceptor.InferFromPipeline<RequestPipeline>) => {
      return builder({
        ...context,
        extensions: [
          ...context.extensions,
          createExtension({
            name: `InlineAnyware`,
            create: () => ({ onRequest: interceptor }),
          })(),
        ],
      })
    },
  }
  return properties
})
