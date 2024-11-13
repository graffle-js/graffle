import type { Simplify } from 'type-fest'
import type { ConfigManager } from '../../config-manager/__.js'
import type { _ } from '../../prelude.js'
import { type Tuple } from '../../prelude.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import type { Step } from '../Step.js'
import { type Config, type Options, resolveOptions } from './Config.js'
import { createExecutableStepsIndex } from './createWithSpec.js'
import type { StepsIndex } from './ExecutablePipeline.js'
import type { Result } from './Result.js'

export interface Context {
  config: Config
  input: object
  steps: Step[]
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
  step: BuilderStep<$Context>
  /**
   * TODO
   */
  overload: <$OverloadBuilder extends OverloadBuilder<$Context>>(
    overloadBuilder: (overloadBuilder: OverloadBuilder<$Context>) => $OverloadBuilder,
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
          slots: $Slots
        },
      ]
    >
  >
  <
    const $Name extends string,
    $Slots extends
      | undefined
      | Step.Slots = undefined,
    $Input = GetNextStepParameterInput<$Context>,
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
          slots: $Slots
        },
      ]
    >
  >
}

interface OverloadBuilderContext {
  discriminant: [string, unknown]
  input: object
  steps: Record<string, Step>
}

interface OverloadBuilderContextEmpty extends OverloadBuilderContext {
  input: {}
  steps: {}
}

type OverloadBuilder<
  $RootContext extends Context = Context,
  $Context extends OverloadBuilderContext = OverloadBuilderContextEmpty,
> = {
  context: $Context
  discriminant: <
    $DiscriminantName extends string,
    $DiscriminantValue extends DiscriminantPropertyValue,
  >(
    discriminantName: $DiscriminantName,
    discriminantValue: $DiscriminantValue,
  ) => OverloadBuilder<
    $RootContext,
    ConfigManager.UpdateOneKey<$Context, 'discriminant', [$DiscriminantName, $DiscriminantValue]>
  >
  input: <$Input extends object>() => OverloadBuilder<
    $RootContext,
    ConfigManager.UpdateOneKey<$Context, 'input', $Input>
  >
  step: <
    $Name extends $RootContext['steps'][number]['name'],
    $Slots extends undefined | Step.Slots = undefined,
    $Input = Tuple.PreviousItem<$RootContext['steps'], { name: $Name }> extends Step
      ? Tuple.PreviousItem<$RootContext['steps'], { name: $Name }>['name'] extends keyof $Context['steps']
        ? $Context['steps'][Tuple.PreviousItem<$RootContext['steps'], { name: $Name }>['name']]['output']
      :
        & Tuple.ToIndexByObjectKey<$RootContext['steps'], 'name'>[$Name]['input']
        & $Context['input']
        & { [_ in $Context['discriminant'][0]]: $Context['discriminant'][1] }
      :
        & Tuple.ToIndexByObjectKey<$RootContext['steps'], 'name'>[$Name]['input']
        & $Context['input']
        & { [_ in $Context['discriminant'][0]]: $Context['discriminant'][1] },
    $Output = unknown,
  >(
    name: $Name,
    spec: {
      slots?: $Slots
      run: (input: $Input, slots: $Slots) => $Output
    },
  ) => OverloadBuilder<
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
          slots: $Slots
        }
      }
    >
  >
}

// type OverloadParameterSteps<$Steps extends ExecutableStep[]> = OverloadParameterSteps_<
//   Tuple.ToIndexByObjectKey<$Steps, 'name'>
// >

// type OverloadParameterSteps_<$Steps extends Record<string, ExecutableStep>> = {
//   [$Name in keyof $Steps]?: {
//     slots?: _
//     run: (parameters: {
//       input: $Steps[$Name]['input']
//       slots: _
//       previous: _
//     }) => _
//   }
// }

// type OverloadReturn<
//   $RootContext extends Context,
//   $Context extends OverloadBuilderContext,
// > = Builder<
//   ConfigManager.UpdateOneKey<
//     ConfigManager.UpdateOneKey<
//       $RootContext,
//       'input',
//       & $RootContext['input']
//       & $Context['input']
//       & { [_ in $Context['discriminant'][0]]: $Context['discriminant'][1] }
//     >,
//     'steps',
//     x<$RootContext['steps'], $Context>
//   >
// >

// type x<$Steps extends Step[], $Context extends OverloadBuilderContext> = {
//   [$Index in keyof $Steps]: $Steps[$Index]['name'] extends keyof $Context['steps'] ? {
//       name: $Steps[$Index]['name']
//       input: $Context['steps'][$Steps[$Index]['name']]['input']
//       output: $Context['steps'][$Steps[$Index]['name']]['output']
//       // run: any
//     }
//     : $Steps[$Index]
// }

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
      steps: MergeOverloads<$Context>
    }
    config: $Context['config']
    input: InferInput<$Context>
    steps: ExecutableStep[]
    stepsIndex: StepsIndex
    output: Result<InferOutput<$Context>>
  }

// dprint-ignore
type InferOutput<$Context extends Context> = Awaited<
  $Context['steps'] extends Tuple.NonEmpty
    ? Tuple.GetLastValue<$Context['steps']>['output']
    : $Context['input']
>

type MergeOverloads<$Context extends Context> = MergeOverloads_<$Context['steps'], $Context>

// dprint-ignore
type MergeOverloads_<$Steps extends Step[], $Context extends Context> = {
  [$Index in keyof $Steps]:
    $Context['overloads'] extends []
      ? $Steps[$Index]
      : {
          name: $Steps[$Index]['name']
          input: Simplify<InferStepInput<$Steps[$Index], $Context['overloads']>>
          output: Simplify<InferStepOutput<$Steps[$Index], $Context['overloads']>>
          slots: $Steps[$Index]['slots']
        }
}

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
  } as any)
}

const recreate = <$Context extends Context>(context: $Context): Builder<$Context> => {
  const builder: Builder<$Context> = {
    context,
    stepWithInput: () => builder.step,
    step: (parameters) => {
      // todo handle overload of step name being its own first parameter
      // step: (...args) => {
      const step = {
        run: passthroughStep,
        ...parameters,
      }
      return recreate({
        ...context,
        steps: [
          ...context.steps,
          step,
        ],
      } as any)
    },
    overload: () => {
      throw new Error(`overload not implemented`)
      // return recreate(context)
    },
    done: () => {
      const pipeline = context
      const stepsIndex = createExecutableStepsIndex(pipeline.steps)
      return {
        ...pipeline,
        stepsIndex,
      } as any
    },
  }

  return builder
}

const passthroughStep = (params: { input: object }) => params.input

type DiscriminantPropertyValue = string | number | symbol
