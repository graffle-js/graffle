import type { ConfigManager } from '../../config-manager/__.js'
import type { Tuple } from '../../prelude.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Step.js'

export interface Builder<
  $RootContext extends Pipeline.Context = Pipeline.Context,
  $Context extends BuilderContext = BuilderContextEmpty,
> {
  context: $Context
  /**
   * TODO
   */
  step: BuilderStep<$RootContext, $Context>
  /**
   * TODO
   */
  extendInput: <$InputExtension extends object>() => Builder<
    $RootContext,
    ConfigManager.UpdateOneKey<$Context, 'input', $InputExtension>
  >
  /**
   * TODO
   */
  stepWithExtendedInput: <$InputExtension extends object>() => BuilderStep<
    $RootContext,
    $Context,
    $InputExtension
  >
}

interface BuilderStep<
  $RootContext extends Pipeline.Context,
  $Context extends BuilderContext,
  $InputExtension extends object = {},
> {
  <
    $Name extends $RootContext['steps'][number]['name'],
    $Slots extends undefined | Step.Slots = undefined,
    $Input =
      & InferStepInput<
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
  ): Builder<
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
type InferStepInput<
  $OverloadContext extends BuilderContext,
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

export interface BuilderContext {
  discriminant: DiscriminantSpec
  input: object
  steps: Record<string, Step>
}

export type DiscriminantSpec = readonly [string, DiscriminantPropertyValue]

export type DiscriminantPropertyValue = string | number | symbol

interface BuilderContextEmpty extends BuilderContext {
  input: {}
  steps: {}
}
