import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObjectNested}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InputObject} |
 * | **Kind** | `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.InputObjectNested} |
 * | **Path** | `InputObjectNested.InputObject` |
 * | **Nullability** | Optional |
 */
export interface InputObject extends $.Schema.InputField {
  kind: 'InputField'
  name: 'InputObject'
  inlineType: [0]
  namedType: $Schema.InputObject
}
