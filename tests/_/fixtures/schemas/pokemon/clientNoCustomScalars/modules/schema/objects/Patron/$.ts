import type * as $Fields from './fields.js'

export * as Patron from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 3 |
 * | **Implements** | {@link $Schema.Being} |
 */
export interface Patron {
  kind: 'Object'
  name: 'Patron'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    money: $Fields.money
    name: $Fields.name
  }
}
