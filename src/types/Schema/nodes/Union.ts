import type { OutputObject } from './OutputObject.js'

export type Union<
  $Name extends string = string,
  $Members extends [OutputObject, ...OutputObject[]] = [OutputObject, ...OutputObject[]],
> = {
  kind: `Union`
  name: $Name
  members: $Members
  membersUnion: $Members[number]
  membersIndex: Record<$Members[number]['name'], $Members[number]>
}
