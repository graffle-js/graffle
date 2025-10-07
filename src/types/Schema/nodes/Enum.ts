import type { Grafaid } from '#lib/grafaid'

export interface Enum<
  $Name extends string = string,
  $Members extends [string, ...string[]] = [string, ...string[]],
> {
  kind: Grafaid.Schema.TypeKind.Enum
  name: $Name
  members: $Members
  membersUnion: $Members[number]
}
