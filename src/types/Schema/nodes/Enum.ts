export interface Enum<
  $Name extends string = string,
  $Members extends [string, ...string[]] = [string, ...string[]],
> {
  kind: 'Enum'
  name: $Name
  members: $Members
  membersUnion: $Members[number]
}
