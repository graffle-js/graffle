import { Builder } from './builder.js'
import type { Data } from './data.js'

export type Input<$Data extends Data = Data> = $Data | Builder<$Data>

export const receive = <$Data extends Data>(input: Input<$Data>): $Data => {
  if (Builder.is(input)) {
    return input.return()
  }
  return input
}
