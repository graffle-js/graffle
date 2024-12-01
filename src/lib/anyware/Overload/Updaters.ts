import type { ConfigManager } from '../../config-manager/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Overload } from './__.js'

export namespace Updaters {
  export type SetInput<
    $Overload extends Overload,
    $InputExtension extends object,
  > = ConfigManager.SetKey<$Overload, 'input', $InputExtension>

  export type SetInputDefaults<
    $Overload extends Overload,
    $InputDefaults extends object,
  > = ConfigManager.SetKey<$Overload, 'inputDefaults', $InputDefaults>

  export type SetInputInit<
    $Overload extends Overload,
    $InputExtension extends object,
  > = ConfigManager.SetKey<$Overload, 'inputInit', $InputExtension>

  export type AddStep<
    $Overload extends Overload,
    $Name extends string,
    $Step extends StepDefinition,
  > = ConfigManager.UpdateKeyWithIntersection<
    $Overload,
    'steps',
    {
      [_ in $Name]: $Step
    }
  >
}
