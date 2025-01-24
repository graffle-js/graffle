import type { Configurator } from '../../../types/configurator.js'
import type { Overload } from './_namespace.js'

export namespace States {
  export interface Empty extends Overload {
    configurator: Configurator.States.Empty
    steps: {}
  }
}
