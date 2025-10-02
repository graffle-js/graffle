import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"BattleTrainer"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename {
  kind: "OutputField";
  name: "__typename";
  arguments: {};
  inlineType: [1];
  namedType: {
    kind: "__typename";
    value: "BattleTrainer";
  };
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The first combatant in this trainer battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.CombatantSinglePokemon} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.CombatantSinglePokemon}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleTrainer}
 */
export interface combatant1 {
  kind: "OutputField";
  name: "combatant1";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.CombatantSinglePokemon;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The second combatant in this trainer battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.CombatantSinglePokemon} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.CombatantSinglePokemon}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleTrainer}
 */
export interface combatant2 {
  kind: "OutputField";
  name: "combatant2";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.CombatantSinglePokemon;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The date when this battle took place, stored as a Unix timestamp.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Float} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Float}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.BattleTrainer}
 */
export interface date {
  kind: "OutputField";
  name: "date";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Float;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The unique identifier for this battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.ID}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.BattleTrainer}
 */
export interface id {
  kind: "OutputField";
  name: "id";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The trainer who won this battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleTrainer} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Trainer}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleTrainer}
 */
export interface winner {
  kind: "OutputField";
  name: "winner";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Trainer;
}
