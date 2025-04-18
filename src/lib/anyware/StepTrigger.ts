import type { Simplify } from 'type-fest'
import type { Func, Objekt } from '../prelude.js'
import type { Step } from './Step.js'

export namespace StepTrigger {
  export const create = <$OriginalInput, $Fn extends StepTriggerRaw>(
    originalInput: $OriginalInput,
    fn: $Fn,
  ): StepTrigger<$Fn> => {
    // ): $Hook & { input: $OriginalInput } => {
    // @ts-expect-error
    fn.input = originalInput
    // @ts-expect-error
    return fn
  }

  export interface Properties<
    $OriginalInput extends Step.Input = Step.Input,
  > {
    // todo: readonly properties
    [stepTriggerSymbol]: StepTriggerSymbol
    input: $OriginalInput
  }

  // dprint-ignore
  export interface Infer<
    $Step extends Step,
    $NextSteps extends readonly Step[],
    $PipelineOutput
  >
    extends StepTrigger.Properties<$Step['input']>
  {
     (
      parameters?: Simplify<
        & {
            input?: $Step['input']
          }
        & (
          Objekt.IsEmpty<$Step['slots']> extends true
            ? {}
            : { using?: {
                [$SlotName in keyof $Step['slots']]?: Func.AppendAwaitedReturnType<$Step['slots'][$SlotName], undefined>
              }
            }
        )
      >
    ): Promise<
        $NextSteps extends [infer $NextStep extends Step, ...infer $NextNextSteps extends readonly Step[]]
          ? {
              [_ in $NextStep['name']]: Infer<$NextStep, $NextNextSteps, $PipelineOutput>
            }
          : $PipelineOutput
      >
  }
}

export type StepTrigger<
  $Fn extends StepTriggerRaw = StepTriggerRaw,
  $OriginalInput extends Step.Input = Step.Input,
> = $Fn & StepTrigger.Properties<$OriginalInput>

type StepTriggerRaw = (input?: { input?: any; using?: any }) => any

const stepTriggerSymbol = Symbol(`hook`)

type StepTriggerSymbol = typeof stepTriggerSymbol
