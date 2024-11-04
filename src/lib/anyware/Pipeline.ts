import type { HookDefinitionMap, HookSequence } from './hook/definition.js'

import type { FindValueAfter, IsLastValue } from '../prelude.js'
import type { Private } from '../private.js'
import type { PipelineInput } from './builder.js'
import type { HookPrivateInput, PrivateHook } from './hook/private.js'

export type Pipeline<
  $HookSequence extends HookSequence = HookSequence,
  $HookMap extends HookDefinitionMap<$HookSequence> = HookDefinitionMap<$HookSequence>,
  $Result = unknown,
> = Private.Add<{
  hookNamesOrderedBySequence: $HookSequence
  // dprint-ignore
  hooks: {
    [$HookName in $HookSequence[number]]:
      PrivateHook<
        $HookMap[$HookName]['slots'],
        HookPrivateInput<
          $HookMap[$HookName]['input'],
          $HookMap[$HookName]['slots']
        >,
        IsLastValue<$HookName, $HookSequence> extends true
          ? $Result
          : $HookMap[FindValueAfter<$HookName, $HookSequence>]
      >
    // [$HookName in $HookSequence[number]]: {
    //   slots: $HookMap[$HookName]['slots']
    //   run: (
    //     input: HookPrivateInput<
    //       $HookMap[$HookName]['input'],
    //       $HookMap[$HookName]['slots']
    //     >,
    //   ) => MaybePromise<
    //     IsLastValue<$HookName, $HookSequence> extends true ? $Result
    //       : $HookMap[FindValueAfter<$HookName, $HookSequence>]
    //   >
    // }
  }
  passthroughErrorInstanceOf?: PipelineInput['passthroughErrorInstanceOf']
  passthroughErrorWith?: PipelineInput['passthroughErrorWith']
}, {
  hookSequence: $HookSequence
  hookMap: $HookMap
  result: $Result
}>
