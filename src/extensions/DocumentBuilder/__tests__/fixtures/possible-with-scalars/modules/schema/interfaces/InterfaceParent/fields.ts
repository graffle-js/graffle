import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"InterfaceParent"`
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
    value: 'InterfaceParent'
  }
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.InterfaceParent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.InterfaceParent} |
 * | **Path** | `InterfaceParent.a` |
 * | **Nullability** | Required |
 */
export interface a extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'a'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.InterfaceParent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.InterfaceParent} |
 * | **Path** | `InterfaceParent.b` |
 * | **Nullability** | Required |
 */
export interface b extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'b'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}
