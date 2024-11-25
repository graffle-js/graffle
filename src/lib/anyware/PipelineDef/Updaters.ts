import type { ConfigManager } from '../../config-manager/__.js'
import type { Overload } from '../Overload/__.js'
import type { StepDef } from '../StepDef.js'
import type { PipelineDef } from './__.js'

export namespace Updaters {
  export type SetInput<
    $Pipeline extends PipelineDef,
    $Input extends object,
  > = ConfigManager.SetKey<$Pipeline, 'input', $Input>

  export type AddStep<
    $Pipeline extends PipelineDef,
    $Step extends StepDef,
  > = ConfigManager.UpdateKeyWithAppend<$Pipeline, 'steps', $Step>

  export type AddOverload<
    $Pipeline extends PipelineDef,
    $Overload extends Overload,
  > = ConfigManager.UpdateKeyWithAppend<$Pipeline, 'overloads', $Overload>

  export type AddOverloads<
    $Pipeline extends PipelineDef,
    $Overloads extends Overload[],
  > = ConfigManager.UpdateKeyWithAppendMany<$Pipeline, 'overloads', $Overloads>
}
