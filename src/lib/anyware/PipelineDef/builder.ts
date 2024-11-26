import type { ConfigManager } from '../../config-manager/__.js'
import { type Tuple } from '../../prelude.js'
import type { Extension } from '../Extension/__.js'
import { Overload } from '../Overload/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { StepRunner } from '../StepRunner.js'
import { Pipeline } from './_.js'
import type { PipelineDefinition } from './__.js'
import { type Options, resolveOptions } from './Config.js'

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
type GetNextStepParameterInput<$Context extends PipelineDefinition> =
  $Context['steps'] extends Tuple.NonEmpty
    ? Awaited<Tuple.GetLastValue<$Context['steps']>['output']>
    : $Context['input']

export interface Builder<$PipelineDef extends PipelineDefinition = PipelineDefinition> {
  type: $PipelineDef
  input: <$Input extends object>() => Builder<
    PipelineDefinition.Updaters.SetInput<$PipelineDef, $Input>
  >
  /**
   * TODO
   */
  stepWithRunnerType: <$Runner extends StepRunner<any, any, any>>() => <
    const $Name extends string,
    $Slots extends
      | undefined
      | StepDefinition.Slots = undefined,
  >(
    name: $Name,
    parameters?: {
      slots?: $Slots
      run?: $Runner
    },
  ) => Builder<
    PipelineDefinition.Updaters.AddStep<$PipelineDef, {
      name: $Name
      input: Parameters<$Runner>[0]
      output: ConfigManager.OrDefault2<ReturnType<$Runner>, {}>
      slots: ConfigManager.OrDefault2<$Slots, {}>
      run: $Runner
    }>
  >
  /**
   * TODO
   */
  step: StepMethod<$PipelineDef>
  /**
   * TODO
   */
  overload: <$OverloadBuilder extends Overload.Builder<$PipelineDef>>(
    overloadBuilder: Overload.BuilderCallback<$PipelineDef, $OverloadBuilder>,
  ) => Builder<
    PipelineDefinition.Updaters.AddOverload<$PipelineDef, $OverloadBuilder['type']>
  >
  /**
   * TODO
   */
  // todo test this
  use: <$Extension extends Extension.Builder>(
    extension: $Extension,
  ) => Builder<
    PipelineDefinition.Updaters.AddOverloads<$PipelineDef, $Extension['type']['overloads']>
  >
  done: () => Pipeline.InferFromDefinition<$PipelineDef>
}

interface StepMethod<$Context extends PipelineDefinition> {
  <
    const $Name extends string,
    $Slots extends
      | undefined
      | StepDefinition.Slots = undefined,
    $Input = GetNextStepParameterInput<$Context>,
    $Output = unknown,
  >(
    name: $Name,
    parameters?: {
      slots?: $Slots
      run?: (input: $Input, slots: $Slots, previous: GetNextStepParameterPrevious<$Context>) => $Output
    },
  ): Builder<
    PipelineDefinition.Updaters.AddStep<$Context, {
      name: $Name
      input: $Input
      output: ConfigManager.OrDefault2<$Output, {}>
      slots: ConfigManager.OrDefault2<$Slots, {}>
    }>
  >
  <
    const $Name extends string,
    $Slots extends
      | undefined
      | StepDefinition.Slots = undefined,
    $Input extends object = GetNextStepParameterInput<$Context>,
    $Output = unknown,
  >(
    parameters: {
      name: $Name
      slots?: $Slots
      run?: (input: $Input, slots: $Slots, previous: GetNextStepParameterPrevious<$Context>) => $Output
    },
  ): Builder<
    PipelineDefinition.Updaters.AddStep<$Context, {
      name: $Name
      input: $Input
      output: ConfigManager.OrDefault2<$Output, {}>
      slots: ConfigManager.OrDefault2<$Slots, {}>
    }>
  >
}

// dprint-ignore
export type GetNextStepParameterPrevious<$Context extends PipelineDefinition> =
  $Context['steps'] extends Tuple.NonEmpty
    ? GetNextStepPrevious_<$Context['steps']>
    : undefined

type GetNextStepPrevious_<$Steps extends StepDefinition[]> = Tuple.IntersectItems<
  {
    [$Index in keyof $Steps]: {
      [$StepName in $Steps[$Index]['name']]: {
        input: Awaited<$Steps[$Index]['input']>
        output: Awaited<$Steps[$Index]['output']>
      }
    }
  }
>

export type InferPipeline<$Builder extends Builder> = InferPipelineFromContext<$Builder['type']>

// dprint-ignore
type InferPipelineFromContext<$Pipeline extends PipelineDefinition> =
  $Pipeline

/**
 * TODO
 */
export const create = (options?: Options): Builder<PipelineDefinition.States.Empty> => {
  const config = resolveOptions(options)
  return recreate({
    steps: [],
    config,
    overloads: [],
  } as any as PipelineDefinition) as any
}

const recreate = <$Pipeline extends PipelineDefinition>(pipeline: $Pipeline): Builder<$Pipeline> => {
  const builder: Builder<$Pipeline> = {
    type: pipeline,
    input: () => builder as any,
    done: () => Pipeline.create(pipeline),
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
        ...pipeline,
        steps: [
          ...pipeline.steps,
          step,
        ],
      } as any)
    },
    use: (extension) => {
      return recreate({
        ...pipeline,
        overloads: [
          ...pipeline.overloads,
          ...extension.type.overloads,
        ],
      } as any)
    },
    overload: (builderCallback) => {
      const overload = builderCallback({ create: Overload.create })
      // todo why mutating here? stop it. make like use extension.
      pipeline.overloads.push(overload.type)

      return recreate(pipeline) as any
    },
  }

  return builder
}

const passthroughStep = (params: { input: object }) => params.input
