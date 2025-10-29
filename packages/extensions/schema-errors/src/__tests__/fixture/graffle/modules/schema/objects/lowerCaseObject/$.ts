import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as lowerCaseObject from './fields.js'

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
export interface lowerCaseObject extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'lowerCaseObject'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
  }
}
