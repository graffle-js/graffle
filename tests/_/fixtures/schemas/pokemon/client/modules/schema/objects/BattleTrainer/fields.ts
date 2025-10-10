import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"BattleTrainer"`
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
    value: 'BattleTrainer'
  }
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.BattleTrainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.CombatantSinglePokemon} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Path** | `BattleTrainer.combatant1` |
 * | **Nullability** | Optional |
 */
export interface combatant1 {
  kind: 'OutputField'
  name: 'combatant1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.CombatantSinglePokemon
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.BattleTrainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.CombatantSinglePokemon} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Path** | `BattleTrainer.combatant2` |
 * | **Nullability** | Optional |
 */
export interface combatant2 {
  kind: 'OutputField'
  name: 'combatant2'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.CombatantSinglePokemon
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.BattleTrainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Float} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Path** | `BattleTrainer.date` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.BattleTrainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Path** | `BattleTrainer.id` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.BattleTrainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Path** | `BattleTrainer.winner` |
 * | **Nullability** | Optional |
 */
export interface winner {
  kind: 'OutputField'
  name: 'winner'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}
