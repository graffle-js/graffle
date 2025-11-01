import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'

export interface Enum<
  $Name extends string = string,
  $Members extends [string, ...string[]] = [string, ...string[]],
> {
  kind: GraphqlKit.Schema.TypeKind.Enum
  name: $Name
  members: $Members
  membersUnion: $Members[number]
}
