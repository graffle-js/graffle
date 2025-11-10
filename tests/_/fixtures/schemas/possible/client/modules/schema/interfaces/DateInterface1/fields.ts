import type { Schema as $Schema } from '../../_.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"DateInterface1"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'DateInterface1'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DateInterface1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.DateInterface1} |
 * | **Path** | `DateInterface1.date1` |
 * | **Nullability** | Optional |
 */
export interface date1 {
  kind: 'OutputField'
  name: 'date1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Date
}
