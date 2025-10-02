import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ErrorOne"`
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
    value: 'ErrorOne'
  }
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.ErrorOne}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.ErrorOne} |
 * | **Path** | `ErrorOne.infoId` |
 * | **Nullability** | Optional |
 */
export interface infoId extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'infoId'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.ErrorOne}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.ErrorOne} |
 * | **Path** | `ErrorOne.message` |
 * | **Nullability** | Required |
 */
export interface message extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'message'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}
