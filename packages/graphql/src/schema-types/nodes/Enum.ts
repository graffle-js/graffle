import { TypeKind } from '#~/schema/schema.js'

export interface Enum<
  $Name extends string = string,
  $Members extends [string, ...string[]] = [string, ...string[]],
> {
  kind: TypeKind.Enum
  name: $Name
  members: $Members
  membersUnion: $Members[number]
}
