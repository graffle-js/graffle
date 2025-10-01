import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'
import type { DateObject1 } from '../objects/DateObject1/$.js'
import type { DateObject2 } from '../objects/DateObject2/$.js'

export interface DateUnion extends $.Schema.Union {
  kind: 'Union'
  name: 'DateUnion'
  members: [DateObject1, DateObject2]
  membersUnion:
    | DateObject1
    | DateObject2
  membersIndex: {
    DateObject1: DateObject1
    DateObject2: DateObject2
  }
}
