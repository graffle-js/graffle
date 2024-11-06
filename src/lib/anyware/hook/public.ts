import type { InterceptorOptions } from '../Interceptor/Interceptor.js'
import type { Pipeline } from '../Pipeline/__.js'
import type { Step } from '../Step/__.js'

// export type InferPublicHooks<
//   $Pipeline extends Pipeline,
//   // $HookSequence extends HookSequence,
//   // $HookMap extends Record<$HookSequence[number], HookDefinition> = Record<$HookSequence[number], HookDefinition>,
//   // $Result = unknown,
//   $Options extends InterceptorOptions = InterceptorOptions,
// > = {
//   [$Index in keyof $Pipeline['steps'][number]]: InferPublicHook<$Pipeline['steps'][$Index], $Options>
// }

// type InferPublicHook<
//   $Step extends Step,
//   // $HookSequence extends HookSequence,
//   // $HookMap extends HookDefinitionMap<$HookSequence> = HookDefinitionMap<$HookSequence>,
//   // $Result = unknown,
//   // $Name extends $HookSequence[number] = $HookSequence[number],
//   $Options extends InterceptorOptions = InterceptorOptions,
// > = PublicStep<
//   ((...args: Parameters<$Step['run']>) => InferPublicHookReturn<$Step, $Options>),
//   $HookMap[$Name]['input']
// >

// & (<$$Input extends $HookMap[$Name]['input']>(
//   input?: // InferHookPrivateInput<$HookSequence,$HookMap,$Name>
//     {
//       input?: $$Input
//     } & (keyof $HookMap[$Name]['slots'] extends never ? {} : { using?: SlotInputify<$HookMap[$Name]['slots']> }),
// ) => PublicHookReturn<$HookSequence, $HookMap, $Result, $Name, $Options>)
// & {
//   [hookSymbol]: HookSymbol
//   input: $HookMap[$Name]['input']
// }

// // dprint-ignore
// type InferPublicHookReturn<
//   $Step extends Step,
//   // $HookSequence extends HookSequence,
//   // $HookMap extends HookDefinitionMap<$HookSequence> = HookDefinitionMap<$HookSequence>,
//   // $Result = unknown,
//   // $Name extends $HookSequence[number] = $HookSequence[number],
//   $Options extends InterceptorOptions = InterceptorOptions,
// > = Promise<
//   | ($Options['retrying'] extends true ? Error : never)
//   | (IsLastValue<$Name, $HookSequence> extends true
//       ? $Result
//       : {
//           [$NameNext in FindValueAfter<$Name, $HookSequence>]: InferPublicHook<
//             $HookSequence,
//             $HookMap,
//             $Result,
//             $NameNext
//           >
//         }
//     )
// >

// type SlotInputify<$Slots extends Record<string, (...args: any) => any>> = {
//   [K in keyof $Slots]?: SlotInput<$Slots[K]>
// }

// type SlotInput<F extends (...args: any) => any> = (...args: Parameters<F>) => ReturnType<F> | undefined

const stepTriggerSymbol = Symbol(`hook`)

type StepTriggerSymbol = typeof stepTriggerSymbol

export type SomeStepTriggerEnvelope = {
  [name: string]: PublicStep
}

export const createStepTrigger = <$OriginalInput, $Fn extends PublicHookFn>(
  originalInput: $OriginalInput,
  fn: $Fn,
): PublicStep<$Fn> => {
  // ): $Hook & { input: $OriginalInput } => {
  // @ts-expect-error
  fn.input = originalInput
  // @ts-expect-error
  return fn
}

export type PublicStep<
  $Fn extends PublicHookFn = PublicHookFn,
  $OriginalInput extends object = object, // Exclude<Parameters<$Fn>[0], undefined>['input'],
> =
  & $Fn
  & {
    [stepTriggerSymbol]: StepTriggerSymbol
    // todo the result is unknown, but if we build a EndEnvelope, then we can work with this type more logically and put it here.
    // E.g. adding `| unknown` would destroy the knowledge of hook envelope case
    // todo this is not strictly true, it could also be the final result
    input: $OriginalInput
  }

type PublicHookFn = (input?: HookPublicInput) => any

interface HookPublicInput {
  input?: any
  using?: any
}
