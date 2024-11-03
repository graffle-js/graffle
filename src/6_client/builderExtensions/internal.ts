import { Builder } from '../../lib/builder/__.js'
import type { Context } from '../context.js'

export interface BuilderExtensionInternal extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: BuilderExtensionInternal_<this['params']>
}

type BuilderExtensionInternal_<$Args extends Builder.Extension.Parameters> = {
  /**
   * TODO
   */
  _: $Args['context']
}

export const builderExtensionInternal = Builder.Extension.create<BuilderExtensionInternal>((_, context) => {
  return {
    _: context,
  }
})
