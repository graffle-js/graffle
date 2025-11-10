import type * as $Fields from './fields.js'

export * as Trainer from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 5 |
 * | **Implements** | {@link $Schema.Being} |
 */
export interface Trainer {
  kind: 'Object'
  name: 'Trainer'
  fields: {
    __typename: $Fields.__typename
    class: $Fields.class
    fans: $Fields.fans
    id: $Fields.id
    name: $Fields.name
    pokemon: $Fields.pokemon
  }
}
