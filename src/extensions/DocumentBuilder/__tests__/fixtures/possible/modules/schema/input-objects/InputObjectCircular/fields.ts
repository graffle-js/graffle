import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObjectCircular}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InputObjectCircular} |
 * | **Kind** | `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.InputObjectCircular} |
 * | **Path** | `InputObjectCircular.circular` |
 * | **Nullability** | Optional |
 */
export interface circular extends $.Schema.InputField {
  kind: 'InputField'
  name: 'circular'
  inlineType: [0]
  namedType: $Schema.InputObjectCircular
}

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObjectCircular}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | lang docs} |
 * | **Parent** | {@link $Schema.InputObjectCircular} |
 * | **Path** | `InputObjectCircular.date` |
 * | **Nullability** | Optional |
 */
export interface date extends $.Schema.InputField {
  kind: 'InputField'
  name: 'date'
  inlineType: [0]
  namedType: $Schema.Date
}
