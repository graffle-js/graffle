import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"InterfaceChildA"`
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
    value: 'InterfaceChildA'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.InterfaceChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.InterfaceChildA} |
 * | **Path** | `InterfaceChildA.a` |
 * | **Nullability** | Required |
 */
export interface a {
  kind: 'OutputField'
  name: 'a'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.InterfaceChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.InterfaceChildA} |
 * | **Path** | `InterfaceChildA.b` |
 * | **Nullability** | Required |
 */
export interface b {
  kind: 'OutputField'
  name: 'b'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.InterfaceChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.InterfaceChildA} |
 * | **Path** | `InterfaceChildA.c1` |
 * | **Nullability** | Required |
 */
export interface c1 {
  kind: 'OutputField'
  name: 'c1'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}
