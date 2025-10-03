import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as Query from './fields.js'

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 2 |
 */
export interface Query extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Query'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    idNonNull: $Fields.idNonNull
  }
}
