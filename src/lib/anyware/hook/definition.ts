export type HookSequence = readonly [string, ...string[]]

export type HookDefinitionMap<$HookSequence extends HookSequence> = Record<
  $HookSequence[number],
  HookDefinition
>

export type HookDefinition = {
  input: any /* object <- type error but more accurate */
  slots?: any /* object <- type error but more accurate */
}

export type HookName = string
