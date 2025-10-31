import { TypeKind } from '#~/schema/ast/__.js'
import type { OutputObject } from './OutputObject.js'

export type Union<
  $Name extends string = string,
  $Members extends [OutputObject, ...OutputObject[]] = [OutputObject, ...OutputObject[]],
> = {
  kind: TypeKind.Union
  name: $Name
  members: $Members
  membersUnion: $Members[number]
  membersIndex: Record<$Members[number]['name'], $Members[number]>
}
