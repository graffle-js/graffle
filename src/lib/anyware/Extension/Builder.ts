import { Overload } from '../Overload/__.js'
import type { PipelineDefinition } from '../PipelineDef/__.js'
import type { Extension } from './__.js'

type Create = <$Pipeline extends PipelineDefinition>() => Builder<$Pipeline, Extension.States.Empty>

export interface Builder<
  $Pipeline extends PipelineDefinition = PipelineDefinition,
  $Extension extends Extension = Extension,
> {
  type: $Extension
  /**
   * TODO
   */
  overload: <$OverloadBuilder extends Overload.Builder<$Pipeline>>(
    overloadBuilderCallback: Overload.BuilderCallback<$Pipeline, $OverloadBuilder>,
  ) => Builder<
    $Pipeline,
    Extension.Updaters.AddOverload<$Extension, $OverloadBuilder['type']>
  >
}

export namespace Builder {
  export const create: Create = () => {
    const extension: Extension = {
      overloads: [],
    }

    const builder: Builder = {
      type: extension,
      overload: (builderCallback) => {
        const overload = builderCallback({ create: Overload.create })
        extension.overloads.push(overload.type)
        return builder as any
      },
    }

    return builder as any
  }
}
