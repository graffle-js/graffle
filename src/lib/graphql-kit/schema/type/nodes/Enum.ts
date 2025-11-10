import type { Kind } from '../../kind/_.js'

export interface Enum<
  $Name extends string = string,
  $Members extends string = string,
> {
  kind: Kind.TypeKind.Enum
  name: $Name
  members: $Members
}
