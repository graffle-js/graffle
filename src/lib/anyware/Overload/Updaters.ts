import type { ConfigManager } from '../../config-manager/__.js'
import type { StepDef } from '../StepDef.js'
import type { Overload } from './__.js'

export namespace Updaters {
  export type SetInput<
    $Overload extends Overload,
    $InputExtension extends object,
  > = ConfigManager.SetKey<$Overload, 'input', $InputExtension>

  export type AddStep<
    $Overload extends Overload,
    $Name extends string,
    $Step extends StepDef,
  > = ConfigManager.UpdateKeyWithIntersection<
    $Overload,
    'steps',
    {
      [_ in $Name]: $Step
    }
  >
}
