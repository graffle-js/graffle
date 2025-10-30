import type * as $ from '#graffle/utilities-for-generated'
import type { Schema as $Schema } from '../../_.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ObjectNestedWithArgs"`
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
    value: 'ObjectNestedWithArgs'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectNestedWithArgs}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectNestedWithArgs} |
 * | **Path** | `ObjectNestedWithArgs.id` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {
    filter: {
      kind: 'InputField'
      name: 'filter'
      inlineType: [0]
      namedType: $Schema.ID
    }
  }
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectNestedWithArgs}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Object1} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.ObjectNestedWithArgs} |
 * | **Path** | `ObjectNestedWithArgs.object` |
 * | **Nullability** | Optional |
 * | **Arguments** | 4 |
 */
interface $object extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'object'
  arguments: {
    boolean: {
      kind: 'InputField'
      name: 'boolean'
      inlineType: [0]
      namedType: $Schema.Boolean
    }
    float: {
      kind: 'InputField'
      name: 'float'
      inlineType: [0]
      namedType: $Schema.Float
    }
    int: {
      kind: 'InputField'
      name: 'int'
      inlineType: [0]
      namedType: $Schema.Int
    }
    string: {
      kind: 'InputField'
      name: 'string'
      inlineType: [0]
      namedType: $Schema.String
    }
  }
  inlineType: [0]
  namedType: $Schema.Object1
}
export { type $object as object }
