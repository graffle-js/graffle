import type { Schema as $Schema } from '../../_.js'

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
 * Add a new Pokemon to the database.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.addPokemon` |
 * | **Nullability** | Optional |
 * | **Arguments** | 5 |
 */
export interface addPokemon {
  kind: 'OutputField'
  name: 'addPokemon'
  arguments: {
    /**
     * The attack power of the new Pokemon.
     */
    attack: {
      kind: 'InputField'
      name: 'attack'
      inlineType: [0]
      namedType: $Schema.Int
    }
    /**
     * The defense power of the new Pokemon.
     */
    defense: {
      kind: 'InputField'
      name: 'defense'
      inlineType: [0]
      namedType: $Schema.Int
    }
    /**
     * The health points of the new Pokemon.
     */
    hp: {
      kind: 'InputField'
      name: 'hp'
      inlineType: [0]
      namedType: $Schema.Int
    }
    /**
     * The name of the new Pokemon.
     */
    name: {
      kind: 'InputField'
      name: 'name'
      inlineType: [1]
      namedType: $Schema.String
    }
    /**
     * The elemental type of the new Pokemon.
     */
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
