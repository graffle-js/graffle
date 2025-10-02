import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"BattleRoyale"`
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
    value: "BattleRoyale";
  };
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The list of combatants participating in this battle royale.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.CombatantMultiPokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 *
 * Type: {@link $Schema.CombatantMultiPokemon}[]
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleRoyale}
 */
export interface combatants {
  kind: "OutputField";
  name: "combatants";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.CombatantMultiPokemon;
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
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Float}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.BattleRoyale}
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
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.ID}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.BattleRoyale}
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
 * The trainer who won this battle royale.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleRoyale} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Trainer}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleRoyale}
 */
export interface winner {
  kind: "OutputField";
  name: "winner";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Trainer;
}
