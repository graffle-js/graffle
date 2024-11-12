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
   * todo
   *
   * @remarks This is needed because of a TypeScript limitation. See:
   *
   *   - https://github.com/microsoft/TypeScript/issues/26242
   *   - https://stackoverflow.com/questions/60377365/typescript-infer-type-of-generic-after-optional-first-generic
   */
  // todo an alternative solution might be to stop using keyword parameters and instead have sig:
  // (input, slots, previous) => ...
  // So that users can type the input part while still having other parameters inferred.
  stepWithInput: <
    $Input = GetNextStepParameterInput<$Context>,
  >() => <
    const $Name extends string = any,
    $Slots extends
      | undefined
      | Step.Slots = undefined,
    $Output = unknown,
    $Parameters = {
      input: $Input
      slots: $Slots
      previous: GetNextStepParameterPrevious<$Context>
    },
  >(
    parameters: {
      name: $Name
      slots?: $Slots
      run?: (parameters: $Parameters) => $Output
    },
  ) => Builder<
    ConfigManager.UpdateOneKey<
      $Context,
      'steps',
      [
        ...$Context['steps'],
        {
          name: $Name
          input: $Input
          output: ConfigManager.OrDefault2<$Output, object>
          slots: $Slots
          // run: (params: $Parameters) => ConfigManager.OrDefault2<$Output, object>
        },
      ]
    >
  >
  /**
   * todo
   */
  step: <
    const $Name extends string,
    $Slots extends
      | undefined
      | Step.Slots = undefined,
    $Input = GetNextStepParameterInput<$Context>,
    $Output = unknown,
    $Parameters = {
      input: $Input
      slots: $Slots
      previous: GetNextStepParameterPrevious<$Context>
    },
  >(
    parameters: {
      name: $Name
      slots?: $Slots
      run?: (parameters: $Parameters) => $Output
    },
  ) => Builder<
    ConfigManager.UpdateOneKey<
      $Context,
      'steps',
      [
        ...$Context['steps'],
        {
          name: $Name
          input: $Input
          output: ConfigManager.OrDefault2<$Output, object>
          slots: $Slots
          // run: (
          //   params: $Parameters,
          // ) => ConfigManager.OrDefault2<$Output, object>
        },
      ]
    >
  >
  overload: <$OverloadBuilder extends OverloadBuilder<$Context>>(
    overloadBuilder: (overloadBuilder: OverloadBuilder<$Context>) => $OverloadBuilder,
  ) => Builder<
    ConfigManager.AppendAtKey<
      $Context,
      'overloads',
      $OverloadBuilder['context']
    >
  >
  // OverloadReturn<$Context, $OverloadBuilder['context']>
  // Builder<
  //   ConfigManager.UpdateOneKey<
  //     ConfigManager.UpdateOneKey<
  //       $Context,
  //       'input',
  //       & $Context['input']
  //       & $OverloadBuilder['context']['input']
  //       & { [_ in $OverloadBuilder['context']['discriminant'][0]]: $OverloadBuilder['context']['discriminant'][1] }
  //     >,
  //     'steps',
  //     OverloadReturnSteps<
  //       $Context['steps'],
  //       $OverloadBuilder['context']['discriminant'][0],
  //       $OverloadBuilder['context']['discriminant'][1]
  //     >
  //   >
  // >
  done: () => InferPipelineFromContext<$Context>
}

interface OverloadBuilderContext {
  discriminant?: [string, unknown]
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
      run: (parameters: { slots: $Slots; input: $Input }) => $Output
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
      input: $Context['input']
      output: Awaited<
        $Context['steps'] extends Tuple.NonEmpty
          ? Tuple.GetLastValue<$Context['steps']>['output']
          : $Context['input']
      >
      steps: $Context['steps']
    }
    config: $Context['config']
    input: $Context['input'] // todo integrate overloads
    // todo integrate overloads
    steps: ExecutableStep[]
    stepsIndex: StepsIndex
    /**
     * The overall result of the pipeline.
     *
     * If the pipeline has no steps then is the pipeline input itself.
     * Otherwise is the last step's output.
     */
    output:
      Result<
        Awaited<
          $Context['steps'] extends Tuple.NonEmpty
            ? Tuple.GetLastValue<$Context['steps']>['output']
            : $Context['input']
        >
      >
  }

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
