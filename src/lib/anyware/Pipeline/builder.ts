import type { IsUnknown, Simplify } from 'type-fest'
import type { ConfigManager } from '../../config-manager/__.js'
import type { _, ExcludeUndefined } from '../../prelude.js'
import { type Tuple } from '../../prelude.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import type { Step } from '../Step.js'
import { type Config, type Options, resolveOptions } from './Config.js'
import { createExecutableStepsIndex } from './createWithSpec.js'
import type { StepsIndex } from './ExecutablePipeline.js'
import type { Result } from './Result.js'

interface ContextStep extends Step {
  /**
   * Tracking the run signature type is useful for deriving the executable step.
   * For example if Vitest mocks were used for the step run functions, their type
   * would be carried through to the executable step. This is useful for testing.
   *
   * If we only relied on the spec types, which don't track the given run type itself,
   * they Vitest mock type would not be carried through.
   *
   * The executable step is not design for public use. Testing is an exception.
   *
   * This run signature is NOT used for deriving the specification step.
   */
  run?: Step.Runner<any, any, any>
}

export interface Context {
  config: Config
  input: object
  steps: ContextStep[]
  overloads: OverloadBuilderContext[]
}

export interface ContextEmpty extends Context {
  input: object
  steps: []
  config: Config
  overloads: []
}

/**
 * Get the `input` parameter for a step that would be appended to the given Pipeline.
 *
 * Recall that non-first steps have input corresponding to the output of the previous step.
 *
 * So this returns:
 * - If the pipeline has no steps then the pipeline input itself.
 * - Otherwise the last step's output.
 */
// dprint-ignore
type GetNextStepParameterInput<$Context extends Context> =
  $Context['steps'] extends Tuple.NonEmpty
    ? Awaited<Tuple.GetLastValue<$Context['steps']>['output']>
    : $Context['input']

export interface Builder<$Context extends Context = Context> {
  context: $Context
  /**
   * TODO
   */
  stepWithRunnerType: <$Runner extends Step.Runner<any, any, any>>() => <
    const $Name extends string,
    $Slots extends
      | undefined
      | Step.Slots = undefined,
  >(
    name: $Name,
    parameters?: {
      slots?: $Slots
      run?: $Runner
    },
  ) => Builder<
    ConfigManager.UpdateOneKey<
      $Context,
      'steps',
      [
        ...$Context['steps'],
        {
          name: $Name
          input: Parameters<$Runner>[0]
          output: ConfigManager.OrDefault2<ReturnType<$Runner>, {}>
          slots: ConfigManager.OrDefault2<$Slots, {}>
          run: $Runner
        },
      ]
    >
  >
  /**
   * TODO
   */
  step: BuilderStep<$Context>
  /**
   * TODO
   */
  overload: <$OverloadBuilder extends OverloadBuilder<$Context>>(
    overloadBuilder: (overloadBuilder: OverloadBuilderNamespace<$Context>) => $OverloadBuilder,
  ) => Builder<
    ConfigManager.AppendAtKey<$Context, 'overloads', $OverloadBuilder['context']>
  >
  /**
   * TODO
   */
  done: () => InferPipelineFromContext<$Context>
}

interface BuilderStep<$Context extends Context> {
  <
    const $Name extends string,
    $Slots extends
      | undefined
      | Step.Slots = undefined,
    $Input = GetNextStepParameterInput<$Context>,
    $Output = unknown,
  >(
    name: $Name,
    parameters?: {
      slots?: $Slots
      run?: (input: $Input, slots: $Slots, previous: GetNextStepParameterPrevious<$Context>) => $Output
    },
  ): Builder<
    ConfigManager.UpdateOneKey<
      $Context,
      'steps',
      [
        ...$Context['steps'],
        {
          name: $Name
          input: $Input
          output: ConfigManager.OrDefault2<$Output, {}>
          slots: ConfigManager.OrDefault2<$Slots, {}>
        },
      ]
    >
  >
  <
    const $Name extends string,
    $Slots extends
      | undefined
      | Step.Slots = undefined,
    $Input extends object = GetNextStepParameterInput<$Context>,
    $Output = unknown,
  >(
    parameters: {
      name: $Name
      slots?: $Slots
      run?: (input: $Input, slots: $Slots, previous: GetNextStepParameterPrevious<$Context>) => $Output
    },
  ): Builder<
    ConfigManager.UpdateOneKey<
      $Context,
      'steps',
      [
        ...$Context['steps'],
        {
          name: $Name
          input: $Input
          output: ConfigManager.OrDefault2<$Output, {}>
          slots: ConfigManager.OrDefault2<$Slots, {}>
        },
      ]
    >
  >
}

type DiscriminantSpec = readonly [string, DiscriminantPropertyValue]

interface OverloadBuilderContext {
  discriminant: DiscriminantSpec
  input: object
  steps: Record<string, Step>
}

interface OverloadBuilderContextEmpty extends OverloadBuilderContext {
  input: {}
  steps: {}
}

interface OverloadBuilderNamespace<$RootContext extends Context = Context> {
  /**
   * TODO
   */
  create: <const $DiscriminantSpec extends DiscriminantSpec>(
    parameters: { discriminant: $DiscriminantSpec },
  ) => OverloadBuilder<
    $RootContext,
    {
      discriminant: $DiscriminantSpec
      input: {}
      steps: {}
    }
  >
  /**
   * TODO
   */
  createWithInput: <$Input extends object>() => <const $DiscriminantSpec extends DiscriminantSpec>(
    parameters: { discriminant: $DiscriminantSpec },
  ) => OverloadBuilder<
    $RootContext,
    {
      discriminant: $DiscriminantSpec
      input: $Input
      steps: {}
    }
  >
}

interface OverloadBuilder<
  $RootContext extends Context = Context,
  $Context extends OverloadBuilderContext = OverloadBuilderContextEmpty,
> {
  context: $Context
  /**
   * TODO
   */
  step: OverloadBuilderStep<$RootContext, $Context>
  stepWithInputExtension: <$InputExtension extends object>() => OverloadBuilderStep<
    $RootContext,
    $Context,
    $InputExtension
  >
}

interface OverloadBuilderStep<
  $RootContext extends Context,
  $Context extends OverloadBuilderContext,
  $InputExtension extends object = {},
> {
  <
    $Name extends $RootContext['steps'][number]['name'],
    $Slots extends undefined | Step.Slots = undefined,
    $Input =
      & InferOverloadStepInput<
        $Context,
        Extract<$RootContext['steps'][number], { name: $Name }>,
        Tuple.PreviousItem<$RootContext['steps'], { name: $Name }>
      >
      & $InputExtension,
    $Output = unknown,
  >(
    name: $Name,
    spec: {
      slots?: $Slots
      run: (input: $Input, slots: $Slots) => $Output
    },
  ): OverloadBuilder<
    $RootContext,
    ConfigManager.UpdateOneKey<
      $Context,
      'steps',
      & $Context['steps']
      & {
        [_ in $Name]: {
          name: $Name
          input: $Input
          output: Awaited<$Output>
          slots: ConfigManager.OrDefault2<$Slots, {}>
        }
      }
    >
  >
}

// dprint-ignore
type InferOverloadStepInput<
  $OverloadContext extends OverloadBuilderContext,
  $CurrentStep extends Step,
  $PreviousStep extends Step | undefined,
> =
  $PreviousStep extends Step
    ? $PreviousStep['name'] extends keyof $OverloadContext['steps']
      ? $OverloadContext['steps'][$PreviousStep['name']]['output']
      :
        & $CurrentStep['input']
        & $OverloadContext['input']
        & { [_ in $OverloadContext['discriminant'][0]]: $OverloadContext['discriminant'][1] }
      :
        & $CurrentStep['input']
        & $OverloadContext['input']
        & { [_ in $OverloadContext['discriminant'][0]]: $OverloadContext['discriminant'][1] }

// dprint-ignore
export type GetNextStepParameterPrevious<$Context extends Context> =
  $Context['steps'] extends Tuple.NonEmpty
    ? GetNextStepPrevious_<$Context['steps']>
    : undefined

type GetNextStepPrevious_<$Steps extends Step[]> = Tuple.IntersectItems<
  {
    [$Index in keyof $Steps]: {
      [$StepName in $Steps[$Index]['name']]: {
        input: Awaited<$Steps[$Index]['input']>
        output: Awaited<$Steps[$Index]['output']>
      }
    }
  }
>

export type InferPipeline<$Builder extends Builder> = InferPipelineFromContext<$Builder['context']>

// dprint-ignore
type InferPipelineFromContext<$Context extends Context> =
  & {
    spec: {
      config: $Context['config']
      input: InferInput<$Context>
      output: InferOutput<$Context>
      steps: InferSteps<$Context>
    }
    config: $Context['config']
    input: InferInput<$Context>
    steps: InferExecutableSteps<$Context>
    stepsIndex: StepsIndex<$Context['steps'][number]['name'], InferExecutableSteps<$Context>[number]>
    output: Result<InferOutput<$Context>>
  }

// dprint-ignore
type InferOutput<$Context extends Context> = Awaited<
  $Context['steps'] extends Tuple.NonEmpty
    ? Tuple.GetLastValue<$Context['steps']>['output']
    : $Context['input']
>

type InferExecutableSteps<$Context extends Context> = InferExecutableSteps_<$Context['steps'], $Context>

type InferExecutableSteps_<$Steps extends ContextStep[], _$Context extends Context> = {
  [$Index in keyof $Steps]: {
    name: $Steps[$Index]['name']
    slots: $Steps[$Index]['slots']
    // We exclude undefined here because at the type level it could be coming from the overloads which isn't considered here.
    // We know that at runtime an executable function will be defined.
    run: IsUnknown<$Steps[$Index]['run']> extends true ? Step.Runner
      : ExcludeUndefined<$Steps[$Index]['run']>
  }
}

type InferSteps<$Context extends Context> = InferSteps_<$Context['steps'], $Context>

// dprint-ignore
type InferSteps_<$Steps extends Step[], $Context extends Context> = {
  [$Index in keyof $Steps]:
    $Context['overloads'] extends []
      ? $Steps[$Index]
      : {
          name: $Steps[$Index]['name']
          input: Simplify<InferStepInput<$Steps[$Index], $Context['overloads']>>
          output: Simplify<InferStepOutput<$Steps[$Index], $Context['overloads']>>
          slots: Simplify<InferStepSlots<$Steps[$Index], $Context['overloads']>>
        }
}

type InferStepSlots<$Step extends Step, $Overloads extends OverloadBuilderContext[]> =
  & $Step['slots']
  & InferStepSlots_<$Step, $Overloads>

// dprint-ignore
type InferStepSlots_<$Step extends Step, $Overloads extends OverloadBuilderContext[]> =
  Tuple.IntersectItems<{
    [$Index in keyof $Overloads]:
      IsUnknown<$Overloads[$Index]['steps'][$Step['name']]> extends true
        ? unknown
        : $Overloads[$Index]['steps'][$Step['name']]['slots']
  }>

type InferStepOutput<$Step extends Step, $Overloads extends OverloadBuilderContext[]> = {
  [$Index in keyof $Overloads]:
    & $Step['output']
    & {
      [_ in $Overloads[$Index]['discriminant'][0]]: $Overloads[$Index]['discriminant'][1]
    }
    & $Overloads[$Index]['steps'][$Step['name']]['output']
}[number]

type InferStepInput<$Step extends Step, $Overloads extends OverloadBuilderContext[]> = {
  [$Index in keyof $Overloads]:
    & $Step['input']
    & {
      [_ in $Overloads[$Index]['discriminant'][0]]: $Overloads[$Index]['discriminant'][1]
    }
    & $Overloads[$Index]['steps'][$Step['name']]['input']
}[number]

// dprint-ignore
type InferInput<$Context extends Context> = Simplify<
  $Context['overloads'] extends []
    ? $Context['input']
    : InferInput_<$Context['input'], $Context['overloads']>
>
type InferInput_<$BaseInput extends object, $Overloads extends OverloadBuilderContext[]> = {
  [$Index in keyof $Overloads]:
    & $BaseInput
    & $Overloads[$Index]['input']
    & {
      [_ in $Overloads[$Index]['discriminant'][0]]: $Overloads[$Index]['discriminant'][1]
    }
}[number]

/**
 * TODO
 */
export const create = <$Input extends object>(options?: Options): Builder<{
  input: $Input
  steps: []
  config: Config
  overloads: []
}> => {
  const config = resolveOptions(options)
  return recreate({
    steps: [],
    config,
    overloads: [],
  } as any as Context) as any
}

const recreate = <$Context extends Context>(context: $Context): Builder<$Context> => {
  const builder: Builder<$Context> = {
    context,
    stepWithRunnerType: () => builder.step as any,
    step: (...args: any[]) => {
      const step = typeof args[0] === `string`
        ? {
          name: args[0],
          run: passthroughStep,
          ...(args[1] as undefined | object),
        }
        : {
          run: passthroughStep,
          ...args[0],
        }

      return recreate({
        ...context,
        steps: [
          ...context.steps,
          step,
        ],
      } as any)
    },
    overload: (builderCallback) => {
      const create: OverloadBuilderNamespace['create'] = (parameters) => {
        const context: Omit<OverloadBuilderContext, 'input'> = {
          discriminant: parameters.discriminant,
          steps: {},
        }

        const builder: OverloadBuilder = {
          context: context as OverloadBuilderContext,
          stepWithInputExtension: () => builder.step as any,
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
      const nameSpace: OverloadBuilderNamespace = {
        create,
        createWithInput: () => create as any,
      }
      const overload = builderCallback(nameSpace)
      context.overloads.push(overload.context)

      return recreate(context) as any
    },
    done: () => {
      let steps = context.steps as unknown as ExecutableStep[]
      if (context.overloads.length > 0) {
        steps = steps.map((step): ExecutableStep => {
          const stepOverloads = context.overloads
            .map(overload => {
              const stepOverload = overload.steps[step.name]
              if (!stepOverload) return null
              return {
                ...(stepOverload as unknown as ExecutableStep),
                discriminant: overload.discriminant,
              }
            })
            .filter(_ => _ !== null)
          return {
            name: step.name,
            run: (...args: Parameters<Step.Runner>) => {
              const input = args[0] as Record<string, unknown>
              const stepOverload = stepOverloads.find(stepOverload => {
                return input[stepOverload.discriminant[0]] === stepOverload.discriminant[1]
              })
              if (stepOverload) return stepOverload.run(...args)
              return step.run(...args)
            },
            slots: {
              ...step.slots,
              ...stepOverloads.reduce((acc, stepOverload) => {
                return {
                  ...acc,
                  ...stepOverload.slots,
                }
              }, {}),
            },
          }
        })
      }

      const stepsIndex = createExecutableStepsIndex(steps)

      return {
        ...context,
        steps, // todo: it is a bug to not have this here, but removing it and no anyware test breaks!
        stepsIndex,
      } as any
    },
  }

  return builder
}

const passthroughStep = (params: { input: object }) => params.input

type DiscriminantPropertyValue = string | number | symbol
