import type { ConfigManager } from '../../config-manager/$.js'
import type { Overload } from '../Overload/$.js'
import type { Extension } from './$.js'

export namespace Updaters {
  export type AddOverload<
    $Extension extends Extension,
    $Overload extends Overload.Data,
  > = ConfigManager.UpdateKeyWithAppendOne<
    $Extension,
    'overloads',
    $Overload
  >
}
