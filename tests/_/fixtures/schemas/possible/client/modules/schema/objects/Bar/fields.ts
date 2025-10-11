import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Bar"`
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
    value: 'Bar'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Bar}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.Bar} |
 * | **Path** | `Bar.int` |
 * | **Nullability** | Optional |
 */
export interface int {
  kind: 'OutputField'
  name: 'int'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Int
}
