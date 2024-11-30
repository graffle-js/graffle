import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { PipelineDefinition } from '../PipelineDef/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Overload } from './__.js'

export const create: Create = (parameters) => {
  const overload_: Omit<Overload, 'input'> = {
    discriminant: parameters.discriminant,
    steps: {},
  }
  const overload = overload_ as Overload

  const builder: Builder = {
    type: overload,
    config: () => builder as any,
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
>(
  parameters: { discriminant: $DiscriminantSpec },
) => Builder<
  $Pipeline,
  {
    discriminant: $DiscriminantSpec
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
  config: <$InputExtension extends object>() => Builder<
    $Pipeline,
    Overload.Updaters.SetInput<$Overload, $InputExtension>
  >
  configInit: <$InputExtension extends object>() => Builder<
    $Pipeline,
    Overload.Updaters.SetInputInit<$Overload, $InputExtension>
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
