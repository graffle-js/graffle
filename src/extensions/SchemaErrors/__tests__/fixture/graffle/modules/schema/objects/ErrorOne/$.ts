import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as ErrorOne from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 2 |
 * | **Implements** | {@link $Schema.Error} |
 */
export interface ErrorOne extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ErrorOne'
  fields: {
    __typename: $Fields.__typename
    infoId: $Fields.infoId
    message: $Fields.message
  }
}
