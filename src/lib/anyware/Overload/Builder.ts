import type { _, Tuple } from '#/lib/prelude'
import type { ConfigManager } from '#lib/config-manager'
import type { Writable } from 'type-fest'
import { Configurator } from '../../configurator/configurator.js'
import { createMutableBuilder } from '../../mutableBuilder.js'
import type { PipelineDefinition } from '../PipelineDefinition/$.js'
import type { StepDefinition } from '../StepDefinition.js'
import type { Data, DataEmpty } from './Data.js'

export const create: Create = (parameters) => {
  const data: Writable<Data> = {
    discriminant: parameters.discriminant,
    configurator: Configurator.$.empty,
    steps: {},
    configurationMount: undefined,
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
        data.configurator = Configurator.$.normalizeDataInput(configuratorTypeInput)
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
  Data<
    $DiscriminantSpec,
    DataEmpty['configurator'],
    DataEmpty['steps'],
    DataEmpty['configurationMount']
  >
>

export interface Builder<
  $Pipeline extends PipelineDefinition = PipelineDefinition,
  $Data extends Data = Data,
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
  ) => Builder<
    $Pipeline,
    {
      [_ in keyof $Data]: _ extends 'configurator' ? $Configurator
        : $Data[_]
    }
  >
  /**
   * TODO
   */
  step: MethodStep<$Pipeline, $Data>
  /**
   * TODO
   */
  stepWithExtendedInput: <$InputExtension extends object>() => MethodStep<
    $Pipeline,
    $Data,
    $InputExtension
  >
}

interface MethodStep<
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
    {
      [_ in keyof $Data]: _ extends 'steps' ?
          & $Data['steps']
          & {
            [_ in $Name]: {
              name: $Name
              input: $Input
              output: Awaited<$Output>
              slots: ConfigManager.OrDefault2<$Slots, {}>
            }
          }
        : $Data[_]
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
