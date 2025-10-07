import type { ConfigManager } from '#lib/config-manager'
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
