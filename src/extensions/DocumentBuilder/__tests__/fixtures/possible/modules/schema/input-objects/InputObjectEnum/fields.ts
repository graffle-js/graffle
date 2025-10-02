import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObjectEnum}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ABCEnum} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | lang docs} |
 * | **Parent** | {@link $Schema.InputObjectEnum} |
 * | **Path** | `InputObjectEnum.abcEnum` |
 * | **Nullability** | Optional |
 */
export interface abcEnum extends $.Schema.InputField {
  kind: 'InputField'
  name: 'abcEnum'
  inlineType: [0]
  namedType: $Schema.ABCEnum
}
