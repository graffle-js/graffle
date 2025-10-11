import type { Schema as $Schema } from '../$.js'
import type { ErrorOne } from '../objects/ErrorOne/$.js'
import type { ErrorTwo } from '../objects/ErrorTwo/$.js'
import type { Object1 } from '../objects/Object1/$.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
 * | **Members** | 3 |
 * | **Types** | {@link $Schema.ErrorOne}, {@link $Schema.ErrorTwo}, {@link $Schema.Object1} |
 */
export interface Result {
  kind: 'Union'
  name: 'Result'
  members: [ErrorOne, ErrorTwo, Object1]
  membersUnion:
    | ErrorOne
    | ErrorTwo
    | Object1
  membersIndex: {
    ErrorOne: ErrorOne
    ErrorTwo: ErrorTwo
    Object1: Object1
  }
}
