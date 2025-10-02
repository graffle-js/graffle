import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Error"`
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
    value: 'Error'
  }
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.Error} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.String}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.Error}
 */
export interface message extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'message'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}
