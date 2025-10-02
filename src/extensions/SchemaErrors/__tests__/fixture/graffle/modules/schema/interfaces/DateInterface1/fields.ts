import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"DateInterface1"`
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
    value: 'DateInterface1'
  }
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.DateInterface1} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Date}
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.DateInterface1}
 */
export interface date1 extends $.Schema.OutputField {
  kind: 'OutputField'
  name: 'date1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Date
}
