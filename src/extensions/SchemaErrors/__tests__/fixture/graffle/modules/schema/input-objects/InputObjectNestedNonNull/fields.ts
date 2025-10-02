import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.InputObject}! |
 * | **Kind** | `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Docs} |
 * | **Parent** | {@link $Schema.InputObjectNestedNonNull} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.InputObject}!
 *
 * Kind: `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.InputObjectNestedNonNull}
 */
export interface InputObject extends $.Schema.InputField {
  kind: 'InputField'
  name: 'InputObject'
  inlineType: [1]
  namedType: $Schema.InputObject
}
