import type { ConfigManager } from '../../config-manager/_namespace.js'
import type { Overload } from '../Overload/_namespace.js'
import type { Extension } from './__.js'

export namespace Updaters {
  export type AddOverload<
    $Extension extends Extension,
    $Overload extends Overload,
  > = ConfigManager.UpdateKeyWithAppendOne<
    $Extension,
    'overloads',
    $Overload
  >
}
