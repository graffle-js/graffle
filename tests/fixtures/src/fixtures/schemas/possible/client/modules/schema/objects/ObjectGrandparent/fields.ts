import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ObjectGrandparent"`
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
    value: 'ObjectGrandparent'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectGrandparent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectGrandparent} |
 * | **Path** | `ObjectGrandparent.a` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectGrandparent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectGrandparent} |
 * | **Path** | `ObjectGrandparent.me` |
 * | **Nullability** | Required |
 */
export interface me {
  kind: 'OutputField'
  name: 'me'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Int
}
