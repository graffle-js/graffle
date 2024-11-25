import type { StepDef } from './StepDef.js'

export type StepRunner<
  $Input extends StepDef.Input = StepDef.Input,
  // $Slots extends undefined | Step.Slots = undefined,
  $Slots extends undefined | object = undefined,
  $Previous extends undefined | object = undefined,
  $Output = any,
> = (
  input: $Input,
  slots: $Slots,
  previous: $Previous,
) => $Output
