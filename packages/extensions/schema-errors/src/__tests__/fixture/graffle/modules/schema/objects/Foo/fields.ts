import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Foo"`
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
    value: 'Foo'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Foo}.
 *
 * Field documentation.
 *
 * @deprecated Field a is deprecated.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Foo} |
 * | **Path** | `Foo.id` |
 * | **⚠ Deprecated** | Field a is deprecated. |
 * | **Nullability** | Optional |
 */
export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}
