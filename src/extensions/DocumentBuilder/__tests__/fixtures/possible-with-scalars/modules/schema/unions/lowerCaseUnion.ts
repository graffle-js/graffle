import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'
import type { lowerCaseObject } from '../objects/lowerCaseObject/$.js'
import type { lowerCaseObject2 } from '../objects/lowerCaseObject2/$.js'

export interface lowerCaseUnion extends $.Schema.Union {
  kind: 'Union'
  name: 'lowerCaseUnion'
  members: [lowerCaseObject, lowerCaseObject2]
  membersUnion:
    | lowerCaseObject
    | lowerCaseObject2
  membersIndex: {
    lowerCaseObject: lowerCaseObject
    lowerCaseObject2: lowerCaseObject2
  }
}
