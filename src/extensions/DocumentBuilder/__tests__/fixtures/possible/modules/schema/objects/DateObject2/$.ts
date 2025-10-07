import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as DateObject2 from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 1 |
 */
export interface DateObject2 extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'DateObject2'
  fields: {
    __typename: $Fields.__typename
    date2: $Fields.date2
  }
}
