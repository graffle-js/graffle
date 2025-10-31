import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../_.js'

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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ErrorOne}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ErrorOne}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
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
