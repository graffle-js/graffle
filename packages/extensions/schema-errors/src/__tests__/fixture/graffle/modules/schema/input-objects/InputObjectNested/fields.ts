import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../_.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObjectNested}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InputObject} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
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
