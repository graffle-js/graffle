import type { StepDefinition } from './StepDefinition.js'

export type StepRunner<
  $Input extends StepDefinition.Input = StepDefinition.Input,
  // $Slots extends undefined | Step.Slots = undefined,
  $Slots extends undefined | object = undefined,
  $Previous extends undefined | object = undefined,
  $Output = any,
> = (
  input: $Input,
  slots: $Slots,
  previous: $Previous,
) => $Output
