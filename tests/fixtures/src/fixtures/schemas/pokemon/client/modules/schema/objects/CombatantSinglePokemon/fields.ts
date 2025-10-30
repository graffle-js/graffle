import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"CombatantSinglePokemon"`
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
    value: 'CombatantSinglePokemon'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CombatantSinglePokemon}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.CombatantSinglePokemon} |
 * | **Path** | `CombatantSinglePokemon.pokemon` |
 * | **Nullability** | Optional |
 */
export interface pokemon {
  kind: 'OutputField'
  name: 'pokemon'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Pokemon
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CombatantSinglePokemon}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.CombatantSinglePokemon} |
 * | **Path** | `CombatantSinglePokemon.trainer` |
 * | **Nullability** | Optional |
 */
export interface trainer {
  kind: 'OutputField'
  name: 'trainer'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}
