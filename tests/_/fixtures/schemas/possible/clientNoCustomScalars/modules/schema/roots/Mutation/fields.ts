import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Mutation"`
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
    value: 'Mutation'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.id` |
 * | **Nullability** | Optional |
 */
export interface id {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.idNonNull` |
 * | **Nullability** | Required |
 */
export interface idNonNull {
  kind: 'OutputField'
  name: 'idNonNull'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ID
}
