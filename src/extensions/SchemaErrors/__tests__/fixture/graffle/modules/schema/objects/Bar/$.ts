import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Bar from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 1 |
 */
export interface Bar extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Bar'
  fields: {
    __typename: $Fields.__typename
    int: $Fields.int
  }
}
