import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Mutation from './fields.js'

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 2 |
 */
export interface Mutation extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Mutation'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    idNonNull: $Fields.idNonNull
  }
}
