import { Configurator } from '../../../types/configurator.js'
import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { PipelineDefinition } from '../PipelineDefinition/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Overload } from './_namespace.js'

export const create: Create = (parameters) => {
  const overload: Overload = {
    discriminant: parameters.discriminant,
    configurator: Configurator.$.empty,
    steps: {},
  }

  const builder: Builder = {
    type: overload,
    configurator: (configuratorTypeInput) => {
      overload.configurator = Configurator.$.normalizeTypeInput(configuratorTypeInput)
      return builder as any
    },
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
  parameters: {
    discriminant: $DiscriminantSpec
  },
) => Builder<
  $Pipeline,
  {
    discriminant: $DiscriminantSpec
    configurator: Configurator.States.Empty
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
  configurator: <$Configurator extends Configurator>(
    configurator:
      | $Configurator
      | Configurator.Builder<$Configurator>
      | Configurator.BuilderProviderCallback<$Configurator>,
  ) => Builder<$Pipeline, {
    steps: $Overload['steps']
    discriminant: $Overload['discriminant']
    configurator: $Configurator
  }>
  /**
   * TODO
   */
  step: StepMethod<$Pipeline, $Overload>
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
        & $Overload['configurator']['input']
        & { [_ in $Overload['discriminant'][0]]: $Overload['name'] }
      :
        & $CurrentStep['input']
        & $Overload['configurator']['input']
        & { [_ in $Overload['discriminant'][0]]: $Overload['name'] }
