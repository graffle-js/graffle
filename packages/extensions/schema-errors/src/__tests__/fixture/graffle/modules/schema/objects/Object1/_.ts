import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as Object1 from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 6 |
 */
export interface Object1 extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'Object1'
  fields: {
    __typename: $Fields.__typename
    ABCEnum: $Fields.ABCEnum
    boolean: $Fields.boolean
    float: $Fields.float
    id: $Fields.id
    int: $Fields.int
    string: $Fields.string
  }
}
