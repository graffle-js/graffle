import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.ABCEnum} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.ABCEnum}
 *
 * Kind: `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Official Documentation}
 *
 * Parent: {@link $Schema.InputObject}
 */
export interface abcEnum extends $.Schema.InputField {
  kind: 'InputField'
  name: 'abcEnum'
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Date}
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.InputObject}
 */
export interface date extends $.Schema.InputField {
  kind: 'InputField'
  name: 'date'
  inlineType: [0]
  namedType: $Schema.Date
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.Date}!
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.InputObject}
 */
export interface dateRequired extends $.Schema.InputField {
  kind: 'InputField'
  name: 'dateRequired'
  inlineType: [1]
  namedType: $Schema.Date
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.ID}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.InputObject}
 */
export interface id extends $.Schema.InputField {
  kind: 'InputField'
  name: 'id'
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.InputObject} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.ID}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.InputObject}
 */
export interface idRequired extends $.Schema.InputField {
  kind: 'InputField'
  name: 'idRequired'
  inlineType: [1]
  namedType: $Schema.ID
}
