import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"CombatantSinglePokemon"`
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
    value: "CombatantSinglePokemon";
  };
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The Pokemon used by this combatant.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.CombatantSinglePokemon} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Pokemon}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.CombatantSinglePokemon}
 */
export interface pokemon {
  kind: "OutputField";
  name: "pokemon";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Pokemon;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The trainer commanding this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.CombatantSinglePokemon} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Trainer}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.CombatantSinglePokemon}
 */
export interface trainer {
  kind: "OutputField";
  name: "trainer";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Trainer;
}
