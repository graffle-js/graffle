const stepTriggerSymbol = Symbol(`hook`)

type StepTriggerSymbol = typeof stepTriggerSymbol

export namespace StepTrigger {
  export const create = <$OriginalInput, $Fn extends StepTriggerBase>(
    originalInput: $OriginalInput,
    fn: $Fn,
  ): StepTrigger<$Fn> => {
    // ): $Hook & { input: $OriginalInput } => {
    // @ts-expect-error
    fn.input = originalInput
    // @ts-expect-error
    return fn
  }
}

export interface StepTrigger<
  $OriginalInput extends object = object, // Exclude<Parameters<$Fn>[0], undefined>['input'],
> extends StepTriggerBase {
  [stepTriggerSymbol]: StepTriggerSymbol
  // todo the result is unknown, but if we build a EndEnvelope, then we can work with this type more logically and put it here.
  // E.g. adding `| unknown` would destroy the knowledge of hook envelope case
  // todo this is not strictly true, it could also be the final result
  input: $OriginalInput
}

type StepTriggerBase = (input?: { input?: any; using?: any }) => any
