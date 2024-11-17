import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Step.js'
import type { Overload } from './__.js'
import type { Builder, BuilderContext, DiscriminantSpec } from './Builder.js'

export * from './Builder.js'

export const create: Create = (parameters) => {
  const context_: Omit<BuilderContext, 'input'> = {
    discriminant: parameters.discriminant,
    steps: {},
  }
  const context = context_ as BuilderContext

  const builder: Builder = {
    context,
    extendInput: () => builder as any,
    stepWithExtendedInput: () => builder.step as any,
    step: (name, spec) => {
      context.steps[name] = {
        name,
        ...spec,
      } as unknown as Step
      return builder as any
    },
  }

  return builder as any
}

export type Create<$RootContext extends Pipeline.Context = Pipeline.Context> = <
  const $DiscriminantSpec extends DiscriminantSpec,
>(
  parameters: { discriminant: $DiscriminantSpec },
) => Builder<
  $RootContext,
  {
    discriminant: $DiscriminantSpec
    input: {}
    steps: {}
  }
>

export type BuilderCallback<
  $Context extends Pipeline.Context,
  $OverloadBuilder extends Builder<$Context>,
> = (
  overloadBuilder: { create: Overload.Create<$Context> },
) => $OverloadBuilder
