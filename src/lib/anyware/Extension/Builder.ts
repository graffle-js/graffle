import type { ConfigManager } from '../../config-manager/__.js'
import type { Overload } from '../Overload/__.js'
import type { Pipeline } from '../Pipeline/__.js'

export interface Builder<
  $PipelineContext extends Pipeline.Context = Pipeline.Context,
  $Context extends Context = Context,
> {
  context: $Context
  /**
   * TODO
   */
  overload: <$OverloadBuilder extends Overload.Builder<$PipelineContext>>(
    overloadBuilder: Overload.BuilderCallback<$PipelineContext, $OverloadBuilder>,
  ) => Builder<
    $PipelineContext,
    ConfigManager.AppendAtKey<
      $Context,
      'overloads',
      $OverloadBuilder['context']
    >
  >
}

export interface Context {
  overloads: Overload.BuilderContext[]
}

export interface ContextEmpty extends Context {
  overloads: []
}
