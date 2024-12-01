import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { PipelineDefinition } from '../PipelineDef/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Overload } from './__.js'

export const create: Create = (parameters) => {
  const overload_: Omit<Overload, 'input'> = {
    discriminant: parameters.discriminant,
    inputDefaults: parameters.inputDefaults,
    steps: {},
  }
  const overload = overload_ as Overload

  const builder: Builder = {
    type: overload,
    config: () => builder as any,
    defaults: (inputDefaults: object) => {
      overload.inputDefaults = inputDefaults
      return builder as any
    },
    configInit: () => builder as any,
    stepWithExtendedInput: () => builder.step as any,
    step: (name, spec) => {
      overload.steps[name] = {
        name,
        ...spec,
      } as unknown as StepDefinition
      return builder as any
    },
  }

  return builder as any
}

export type Create<$Pipeline extends PipelineDefinition = PipelineDefinition> = <
  const $DiscriminantSpec extends Overload['discriminant'],
  const $InputDefaults extends object | undefined,
>(
  parameters: {
    discriminant: $DiscriminantSpec
    inputDefaults?: $InputDefaults
  },
) => Builder<
  $Pipeline,
  {
    discriminant: $DiscriminantSpec
    inputDefaults: $InputDefaults
    input: {}
    steps: {}
  }
>

export interface Builder<
  $Pipeline extends PipelineDefinition = PipelineDefinition,
  $Overload extends Overload = Overload.States.Empty,
> {
  type: $Overload
  /**
   * TODO
   */
  step: StepMethod<$Pipeline, $Overload>
  /**
   * TODO
   */
  config: <inputExtension extends object>() => Builder<
    $Pipeline,
    Overload.Updaters.SetInput<$Overload, inputExtension>
  >
  defaults: <inputDefaults extends object>(inputDefaults: inputDefaults) => Builder<
    $Pipeline,
    Overload.Updaters.SetInputDefaults<$Overload, inputDefaults>
  >
  configInit: <inputExtension extends object>() => Builder<
    $Pipeline,
    Overload.Updaters.SetInputInit<$Overload, inputExtension>
  >
  /**
   * TODO
   */
  stepWithExtendedInput: <$InputExtension extends object>() => StepMethod<
    $Pipeline,
    $Overload,
    $InputExtension
  >
}

interface StepMethod<
  $Pipeline extends PipelineDefinition,
  $Overload extends Overload,
  $InputExtension extends object = {},
> {
  <
    $Name extends $Pipeline['steps'][number]['name'],
    $Slots extends undefined | StepDefinition.Slots = undefined,
    $Input =
      & InferStepInput<
        $Overload,
        Extract<$Pipeline['steps'][number], { name: $Name }>,
        Tuple.PreviousItem<$Pipeline['steps'], { name: $Name }>
      >
      & $InputExtension,
    $Output = unknown,
  >(
    name: $Name,
    spec: {
      slots?: $Slots
      run: (input: $Input, slots: $Slots) => $Output
    },
  ): Builder<
    $Pipeline,
    Overload.Updaters.AddStep<$Overload, $Name, {
      name: $Name
      input: $Input
      output: Awaited<$Output>
      slots: ConfigManager.OrDefault2<$Slots, {}>
    }>
  >
}

// dprint-ignore
type InferStepInput<
  $Overload extends Overload,
  $CurrentStep extends StepDefinition,
  $PreviousStep extends StepDefinition | undefined,
> =
  $PreviousStep extends StepDefinition
    ? $PreviousStep['name'] extends keyof $Overload['steps']
      ? $Overload['steps'][$PreviousStep['name']]['output']
      :
        & $CurrentStep['input']
        & $Overload['input']
        & { [_ in $Overload['discriminant'][0]]: $Overload['discriminant'][1] }
      :
        & $CurrentStep['input']
        & $Overload['input']
        & { [_ in $Overload['discriminant'][0]]: $Overload['discriminant'][1] }
