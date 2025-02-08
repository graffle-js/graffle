import type { Writable } from 'type-fest'
import type { ConfigManager } from '../../config-manager/__.js'
import { Configurator } from '../../configurator/configurator.js'
import { createMutableBuilder } from '../../mutableBuilder.js'
import type { Tuple } from '../../prelude.js'
import type { PipelineDefinition } from '../PipelineDefinition/__.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Data, DataEmpty } from './Data.js'

export const create: Create = (parameters) => {
  const data: Writable<Data> = {
    discriminant: parameters.discriminant,
    configurator: Configurator.$.empty,
    steps: {},
  }
  const step = (name: string, spec: StepDefinition) => {
    data.steps[name] = {
      ...spec,
      name,
    } as unknown as StepDefinition
  }
  return createMutableBuilder({
    data,
    builder: {
      configurator(configuratorTypeInput) {
        data.configurator = Configurator.$.normalizeTypeInput(configuratorTypeInput)
      },
      step,
      stepWithExtendedInput() {
        return step
      },
    },
  }) as any
}

export type Create<$Pipeline extends PipelineDefinition = PipelineDefinition> = <
  const $DiscriminantSpec extends Data['discriminant'],
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
  $Data extends Data = DataEmpty,
> {
  data: $Data
  /**
   * TODO
   */
  configurator: <$Configurator extends Configurator>(
    configurator:
      | $Configurator
      | Configurator.Builder<$Configurator>
      | Configurator.BuilderProviderCallback<$Configurator>,
  ) => Builder<$Pipeline, {
    steps: $Data['steps']
    discriminant: $Data['discriminant']
    configurator: $Configurator
  }>
  /**
   * TODO
   */
  step: StepMethod<$Pipeline, $Data>
  /**
   * TODO
   */
  stepWithExtendedInput: <$InputExtension extends object>() => StepMethod<
    $Pipeline,
    $Data,
    $InputExtension
  >
}

interface StepMethod<
  $Pipeline extends PipelineDefinition,
  $Data extends Data,
  $InputExtension extends object = {},
> {
  <
    $Name extends $Pipeline['steps'][number]['name'],
    $Slots extends undefined | StepDefinition.Slots = undefined,
    $Input =
      & InferStepInput<
        $Data,
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
    $Data & {
      steps: {
        [_ in $Name]: {
          name: $Name
          input: $Input
          output: Awaited<$Output>
          slots: ConfigManager.OrDefault2<$Slots, {}>
        }
      }
    }
  >
}

// dprint-ignore
type InferStepInput<
  $Data extends Data,
  $CurrentStep extends StepDefinition,
  $PreviousStep extends StepDefinition | undefined,
> =
  $PreviousStep extends StepDefinition
    ? $PreviousStep['name'] extends keyof $Data['steps']
      ? $Data['steps'][$PreviousStep['name']]['output']
      :
        & $CurrentStep['input']
        & $Data['configurator']['input']
        & { [_ in $Data['discriminant']['name']]: $Data['discriminant']['value'] }
      :
        & $CurrentStep['input']
        & $Data['configurator']['input']
        & { [_ in $Data['discriminant']['name']]: $Data['discriminant']['value'] }
