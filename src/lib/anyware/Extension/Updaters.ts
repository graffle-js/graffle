import type { ConfigManager } from '../../config-manager/__.js'
import type { Overload } from '../Overload/__.js'
import type { Extension } from './__.js'

export namespace Updaters {
  export type AddOverload<
    $Extension extends Extension,
    $Overload extends Overload,
  > = ConfigManager.UpdateKeyWithAppend<
    $Extension,
    'overloads',
    $Overload
  >
}
