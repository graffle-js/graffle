import type { Chain } from '../../../lib/chain/__.js'
import type { Context } from '../context.js'

export interface Internal_ extends Chain.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Internal<this['params']>
}

type Internal<$Args extends Chain.Extension.Parameters> = {
  /**
   * TODO
   */
  _: $Args['context']
}
