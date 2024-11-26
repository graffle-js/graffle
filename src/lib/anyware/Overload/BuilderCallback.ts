import type { PipelineDefinition } from '../PipelineDef/__.js'
import type { Create } from './Builder.js'
import type { Builder } from './Builder.js'

export type BuilderCallback<
  $Pipeline extends PipelineDefinition,
  $OverloadBuilder extends Builder<$Pipeline>,
> = (
  OverloadBuilder: {
    create: Create<$Pipeline>
  },
) => $OverloadBuilder
