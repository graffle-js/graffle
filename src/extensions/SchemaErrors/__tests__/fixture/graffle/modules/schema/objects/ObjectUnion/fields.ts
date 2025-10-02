import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ObjectUnion"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename extends $.Schema.OutputField {
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
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.ObjectUnion}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.FooBarUnion} |
 * | **Kind** | `Union` ↗ {@link https://graphql.org/graphql-js/type/#graphqluniontype | lang docs} |
 * | **Parent** | {@link $Schema.ObjectUnion} |
 * | **Path** | `ObjectUnion.fooBarUnion` |
 * | **Nullability** | Optional |
 */
export interface fooBarUnion extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'fooBarUnion'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.FooBarUnion
}
