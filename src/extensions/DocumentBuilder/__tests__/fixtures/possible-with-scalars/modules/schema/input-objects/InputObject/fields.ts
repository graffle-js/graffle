import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ABCEnum} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | lang docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.abcEnum` |
 * | **Nullability** | Optional |
 */
export interface abcEnum extends $.Schema.InputField {
  kind: 'InputField'
  name: 'abcEnum'
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | lang docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.date` |
 * | **Nullability** | Optional |
 */
export interface date extends $.Schema.InputField {
  kind: 'InputField'
  name: 'date'
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | lang docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.dateRequired` |
 * | **Nullability** | Required |
 */
export interface dateRequired extends $.Schema.InputField {
  kind: 'InputField'
  name: 'dateRequired'
  inlineType: [1]
  namedType: $Schema.Date
}

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.id` |
 * | **Nullability** | Optional |
 */
export interface id extends $.Schema.InputField {
  kind: 'InputField'
  name: 'id'
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL input field (↗ {@link https://graphql.org/learn/schema/#input-types | lang docs}) on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.idRequired` |
 * | **Nullability** | Required |
 */
export interface idRequired extends $.Schema.InputField {
  kind: 'InputField'
  name: 'idRequired'
  inlineType: [1]
  namedType: $Schema.ID
}
