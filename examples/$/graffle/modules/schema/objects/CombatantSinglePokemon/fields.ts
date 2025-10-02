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
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.CombatantSinglePokemon}.
 *
 * The Pokemon used by this combatant.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
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
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.CombatantSinglePokemon}.
 *
 * The trainer commanding this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
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
