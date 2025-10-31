import type * as $Fields from './fields.js'

export * as Object2ImplementingInterface from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 2 |
 * | **Implements** | {@link $Schema.Interface} |
 */
export interface Object2ImplementingInterface {
  kind: 'Object'
  name: 'Object2ImplementingInterface'
  fields: {
    __typename: $Fields.__typename
    boolean: $Fields.boolean
    id: $Fields.id
  }
}
