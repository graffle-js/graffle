import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Mutation"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Mutation'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.addPokemon` |
 * | **Nullability** | Optional |
 * | **Arguments** | 5 |
 */
export interface addPokemon {
  kind: 'OutputField'
  name: 'addPokemon'
  arguments: {
    attack: {
      kind: 'InputField'
      name: 'attack'
      inlineType: [0]
      namedType: $Schema.Int
    }
    defense: {
      kind: 'InputField'
      name: 'defense'
      inlineType: [0]
      namedType: $Schema.Int
    }
    hp: {
      kind: 'InputField'
      name: 'hp'
      inlineType: [0]
      namedType: $Schema.Int
    }
    name: {
      kind: 'InputField'
      name: 'name'
      inlineType: [1]
      namedType: $Schema.String
    }
    type: {
      kind: 'InputField'
      name: 'type'
      inlineType: [1]
      namedType: $Schema.PokemonType
    }
  }
  inlineType: [0]
  namedType: $Schema.Pokemon
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Boolean}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.resetData` |
 * | **Nullability** | Required |
 */
export interface resetData {
  kind: 'OutputField'
  name: 'resetData'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Boolean
}
