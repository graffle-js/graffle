import type { Builder } from '../../../lib/chain/__.js'
import type { Context } from '../context.js'

export interface Internal_ extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Internal<this['params']>
}

type Internal<$Args extends Builder.Extension.Parameters> = {
  /**
   * TODO
   */
  _: $Args['context']
}
