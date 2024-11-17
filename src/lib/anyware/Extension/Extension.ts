import { __ } from '../../prelude.js'
import { Overload } from '../Overload/__.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Builder, Context, ContextEmpty } from './Builder.js'

export * from './Builder.js'

export const create: Create = () => {
  const context: Context = {
    overloads: [],
  }

  const builder: Builder = {
    context,
    overload: (builderCallback) => {
      const overload = builderCallback({ create: Overload.create })
      context.overloads.push(overload.context)
      return builder as any
    },
  }

  return builder as any
}

type Create = <$PipelineContext extends Pipeline.Context>() => Builder<$PipelineContext, ContextEmpty>
