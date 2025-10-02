import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"CombatantMultiPokemon"`
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
    value: "CombatantMultiPokemon";
  };
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.CombatantMultiPokemon}.
 *
 * The team of Pokemon used by this combatant.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.CombatantMultiPokemon} |
 * | **Path** | `CombatantMultiPokemon.pokemons` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface pokemons {
  kind: "OutputField";
  name: "pokemons";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.CombatantMultiPokemon}.
 *
 * The trainer commanding this team of Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.CombatantMultiPokemon} |
 * | **Path** | `CombatantMultiPokemon.trainer` |
 * | **Nullability** | Optional |
 */
export interface trainer {
  kind: "OutputField";
  name: "trainer";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Trainer;
}
