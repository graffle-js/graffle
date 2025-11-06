import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ABCEnum} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.abcEnum` |
 * | **Nullability** | Optional |
 */
export interface abcEnum {
  kind: 'InputField'
  name: 'abcEnum'
  inlineType: [0]
  namedType: $Schema.ABCEnum
  type: $Schema.ABCEnum['members'] | null | undefined
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.date` |
 * | **Nullability** | Optional |
 */
export interface date {
  kind: 'InputField'
  name: 'date'
  inlineType: [0]
  namedType: $Schema.Date
  type: $Schema.Date['codec']['_typeDecoded'] | null | undefined
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.dateRequired` |
 * | **Nullability** | Required |
 */
export interface dateRequired {
  kind: 'InputField'
  name: 'dateRequired'
  inlineType: [1]
  namedType: $Schema.Date
  type: $Schema.Date['codec']['_typeDecoded']
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.id` |
 * | **Nullability** | Optional |
 */
export interface id {
  kind: 'InputField'
  name: 'id'
  inlineType: [0]
  namedType: $Schema.ID
  type: $Schema.ID['codec']['_typeDecoded'] | null | undefined
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Path** | `InputObject.idRequired` |
 * | **Nullability** | Required |
 */
export interface idRequired {
  kind: 'InputField'
  name: 'idRequired'
  inlineType: [1]
  namedType: $Schema.ID
  type: $Schema.ID['codec']['_typeDecoded']
}
