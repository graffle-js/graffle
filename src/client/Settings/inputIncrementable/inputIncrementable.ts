import type { Transport, TransportMemory } from '../../../types/Transport.js'
import type { TransportHttpInput } from '../../transportHttp/request.js'
import type { OutputInput } from './output.js'

// dprint-ignore
export type WithInput<$Context extends IncrementableInputContext = IncrementableInputContext> =
  & {
      /**
       * Configure output behavior, such as if errors should be returned or thrown.
       */
      output?: OutputInput
    }
  & (
      $Context['transport']['type'] extends TransportMemory
      ? { transport?: never }
      : { transport?: TransportHttpInput }
    )

export type IncrementableInputContext = {
  transport: {
    type: Transport
  }
}
