import type { ConfigManager } from '../../config-manager/__.js'
import type { Overload } from '../Overload/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { PipelineDefinition } from './__.js'

export namespace Updaters {
  export type SetInput<
    $PipelineDef extends PipelineDefinition,
    $Input extends object,
  > = ConfigManager.SetKey<$PipelineDef, 'input', $Input>

  export type AddStep<
    $PipelineDef extends PipelineDefinition,
    $Step extends StepDefinition,
  > = ConfigManager.UpdateKeyWithAppendOne<$PipelineDef, 'steps', $Step>

  export type AddOverload<
    $PipelineDef extends PipelineDefinition,
    $Overload extends Overload,
  > = ConfigManager.UpdateKeyWithAppendOne<$PipelineDef, 'overloads', $Overload>

  export type AddOverloads<
    $PipelineDef extends PipelineDefinition,
    $Overloads extends Overload[],
  > = ConfigManager.UpdateKeyWithAppendMany<$PipelineDef, 'overloads', $Overloads>
}
