import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ObjectUnion"`
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
    value: 'ObjectUnion'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectUnion}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.FooBarUnion} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.ObjectUnion} |
 * | **Path** | `ObjectUnion.fooBarUnion` |
 * | **Nullability** | Optional |
 */
export interface fooBarUnion {
  kind: 'OutputField'
  name: 'fooBarUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}
