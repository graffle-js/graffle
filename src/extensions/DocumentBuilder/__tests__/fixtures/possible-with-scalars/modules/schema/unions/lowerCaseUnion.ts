import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../$.js'
import type { lowerCaseObject } from '../objects/lowerCaseObject/$.js'
import type { lowerCaseObject2 } from '../objects/lowerCaseObject2/$.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
 * | **Members** | 2 |
 * | **Types** | {@link $Schema.lowerCaseObject}, {@link $Schema.lowerCaseObject2} |
 */
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
