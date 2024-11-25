import type { Transport } from '../../../types/Transport.js'
import type { OutputInput } from './output.js'

// dprint-ignore
export type WithInput = {
  /**
   * Configure output behavior, such as if errors should be returned or thrown.
   */
  output?: OutputInput
}

export type IncrementableInputContext = {
  transport: {
    type: Transport
  }
}
