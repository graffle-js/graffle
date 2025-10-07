import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as lowerCaseObject2 from './fields.js'

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
export interface lowerCaseObject2 extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'lowerCaseObject2'
  fields: {
    __typename: $Fields.__typename
    int: $Fields.int
  }
}
