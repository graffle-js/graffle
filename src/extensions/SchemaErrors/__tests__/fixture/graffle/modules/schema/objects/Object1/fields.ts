import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Object1"`
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
    value: 'Object1'
  }
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Object1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ABCEnum} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | lang docs} |
 * | **Parent** | {@link $Schema.Object1} |
 * | **Path** | `Object1.ABCEnum` |
 * | **Nullability** | Optional |
 */
export interface ABCEnum extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'ABCEnum'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Object1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Boolean} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Object1} |
 * | **Path** | `Object1.boolean` |
 * | **Nullability** | Optional |
 */
interface $boolean extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'boolean'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Boolean
}
export { type $boolean as boolean }

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Object1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Float} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Object1} |
 * | **Path** | `Object1.float` |
 * | **Nullability** | Optional |
 */
export interface float extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'float'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Float
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Object1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Object1} |
 * | **Path** | `Object1.id` |
 * | **Nullability** | Optional |
 */
export interface id extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Object1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Object1} |
 * | **Path** | `Object1.int` |
 * | **Nullability** | Optional |
 */
export interface int extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'int'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Int
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Object1}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Object1} |
 * | **Path** | `Object1.string` |
 * | **Nullability** | Optional |
 */
interface $string extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'string'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.String
}
export { type $string as string }
