import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../$.js'
import type { DateObject1 } from '../objects/DateObject1/$.js'
import type { DateObject2 } from '../objects/DateObject2/$.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Members** | 2 |
 * | **Types** | {@link $Schema.DateObject1}, {@link $Schema.DateObject2} |
 */
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
