import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObjectNestedNonNull}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InputObject}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Parent** | {@link $Schema.InputObjectNestedNonNull} |
 * | **Path** | `InputObjectNestedNonNull.InputObject` |
 * | **Nullability** | Required |
 */
export interface InputObject extends $.Schema.InputField {
  kind: 'InputField'
  name: 'InputObject'
  inlineType: [1]
  namedType: $Schema.InputObject
  type: $Schema.InputObject['type']
}
