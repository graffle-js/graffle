import type { ConfigManager } from '../../config-manager/__.js'
import type { Overload } from '../Overload/__.js'
import type { StepDef } from '../StepDef.js'
import type { PipelineDef } from './__.js'

export namespace Updaters {
  export type SetInput<
    $PipelineDef extends PipelineDef,
    $Input extends object,
  > = ConfigManager.SetKey<$PipelineDef, 'input', $Input>

  export type AddStep<
    $PipelineDef extends PipelineDef,
    $Step extends StepDef,
  > = ConfigManager.UpdateKeyWithAppend<$PipelineDef, 'steps', $Step>

  export type AddOverload<
    $PipelineDef extends PipelineDef,
    $Overload extends Overload,
  > = ConfigManager.UpdateKeyWithAppend<$PipelineDef, 'overloads', $Overload>

  export type AddOverloads<
    $PipelineDef extends PipelineDef,
    $Overloads extends Overload[],
  > = ConfigManager.UpdateKeyWithAppendMany<$PipelineDef, 'overloads', $Overloads>
}
