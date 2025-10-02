import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.InputObjectCircular} |
 * | **Kind** | `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Docs} |
 * | **Parent** | {@link $Schema.InputObjectCircular} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.InputObjectCircular}
 *
 * Kind: `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.InputObjectCircular}
 */
export interface circular extends $.Schema.InputField {
  kind: 'InputField'
  name: 'circular'
  inlineType: [0]
  namedType: $Schema.InputObjectCircular
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.InputObjectCircular} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Date}
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.InputObjectCircular}
 */
export interface date extends $.Schema.InputField {
  kind: 'InputField'
  name: 'date'
  inlineType: [0]
  namedType: $Schema.Date
}
