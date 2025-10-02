import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.DateFilter}.
 *
 * The minimum date (greater than or equal to).
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | lang docs} |
 * | **Parent** | {@link $Schema.DateFilter} |
 * | **Path** | `DateFilter.gte` |
 * | **Nullability** | Optional |
 */
export interface gte {
  kind: 'InputField'
  name: 'gte'
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.DateFilter}.
 *
 * The maximum date (less than or equal to).
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | lang docs} |
 * | **Parent** | {@link $Schema.DateFilter} |
 * | **Path** | `DateFilter.lte` |
 * | **Nullability** | Optional |
 */
export interface lte {
  kind: 'InputField'
  name: 'lte'
  inlineType: [0]
  namedType: $Schema.Date
}
