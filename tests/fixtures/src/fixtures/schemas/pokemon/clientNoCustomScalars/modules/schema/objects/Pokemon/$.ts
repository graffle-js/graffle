import type * as $Fields from './fields.js'

export * as Pokemon from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 8 |
 * | **Implements** | {@link $Schema.Being} |
 */
export interface Pokemon {
  kind: 'Object'
  name: 'Pokemon'
  fields: {
    __typename: $Fields.__typename
    attack: $Fields.attack
    birthday: $Fields.birthday
    defense: $Fields.defense
    hp: $Fields.hp
    id: $Fields.id
    name: $Fields.name
    trainer: $Fields.trainer
    type: $Fields.type
  }
}
