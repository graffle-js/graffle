import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../_.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObjectCircular}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.InputObjectCircular} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
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
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObjectCircular}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
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
