import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.DateFilter}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.DateFilter} |
 * | **Path** | `DateFilter.gte` |
 * | **Nullability** | Optional |
 */
export interface gte {
  kind: 'InputField'
  name: 'gte'
  inlineType: [0]
  namedType: $Schema.Date
  type: $Schema.Date['codec']['_typeDecoded'] | null | undefined
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.DateFilter}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.DateFilter} |
 * | **Path** | `DateFilter.lte` |
 * | **Nullability** | Optional |
 */
export interface lte {
  kind: 'InputField'
  name: 'lte'
  inlineType: [0]
  namedType: $Schema.Date
  type: $Schema.Date['codec']['_typeDecoded'] | null | undefined
}
