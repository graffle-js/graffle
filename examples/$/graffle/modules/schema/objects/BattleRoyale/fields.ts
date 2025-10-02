import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"BattleRoyale"`
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
    value: 'BattleRoyale'
  }
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleRoyale}.
 *
 * The list of combatants participating in this battle royale.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.CombatantMultiPokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Path** | `BattleRoyale.combatants` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface combatants {
  kind: 'OutputField'
  name: 'combatants'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.CombatantMultiPokemon
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleRoyale}.
 *
 * The date when this battle took place, stored as a Unix timestamp.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Float} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Path** | `BattleRoyale.date` |
 * | **Nullability** | Optional |
 */
export interface date {
  kind: 'OutputField'
  name: 'date'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Float
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleRoyale}.
 *
 * The unique identifier for this battle.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Path** | `BattleRoyale.id` |
 * | **Nullability** | Optional |
 */
export interface id {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleRoyale}.
 *
 * The trainer who won this battle royale.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Path** | `BattleRoyale.winner` |
 * | **Nullability** | Optional |
 */
export interface winner {
  kind: 'OutputField'
  name: 'winner'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}
