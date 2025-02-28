import type { Context } from '../context/context.js'
import type { ObjectMergeShallow } from '../lib/prelude.js'

export type ContextFragment = Partial<Context>

export namespace ContextFragments {
  export type Reducer<$ContextFragment extends ContextFragment = ContextFragment, $Input = any> = <
    context extends $ContextFragment,
  >(
    context: context,
    input: $Input,
  ) => context

  export const defineReducer = <$ContextFragment extends ContextFragment, $Input>(
    reducer: Reducer<$ContextFragment, $Input>,
  ): Reducer<$ContextFragment, $Input> => {
    return reducer
  }

  export const merge = <$Context extends Context, $Fragment extends ContextFragment>(
    context: $Context,
    fragment: $Fragment,
  ): ObjectMergeShallow<$Context, $Fragment> => {
    // @ts-expect-error checking for reference if no change
    if (fragment === context) return context as any

    const newContext = Object.freeze({
      ...context,
      ...fragment,
    }) as any
    return newContext
  }
}
