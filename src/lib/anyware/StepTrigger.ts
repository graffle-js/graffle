import type { Simplify } from 'type-fest'
import type { Func } from '../prelude.js'
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
    [stepTriggerSymbol]: StepTriggerSymbol
    // todo the result is unknown, but if we build a EndEnvelope, then we can work with this type more logically and put it here.
    // E.g. adding `| unknown` would destroy the knowledge of hook envelope case
    // todo this is not strictly true, it could also be the final result
    input: $OriginalInput
  }

  // dprint-ignore
  export interface Infer<
    $Step extends Step,
    $NextSteps extends Step[],
    $PipelineOutput> extends StepTrigger.Properties<$Step['input']
  > {
     (
      params?: Simplify<
        & {
            input?: $Step['input']
          }
        & (
          $Step['slots'] extends undefined
            ? {}
            : { using?: {
                [$SlotName in keyof $Step['slots']]?: Func.AppendAwaitedReturnType<$Step['slots'][$SlotName], undefined>
              }
            }
        )
      >
    ): Promise<
        $NextSteps extends [infer $NextStep extends Step, ...infer $NextNextSteps extends Step[]]
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
