import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Query"`
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
    value: "Query";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * Retrieve all battles that have occurred.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Battle}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.battles` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export interface battles {
  kind: "OutputField";
  name: "battles";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Battle;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * Retrieve all beings (Pokemon, Trainers, and Patrons).
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Being}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.beings` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export interface beings {
  kind: "OutputField";
  name: "beings";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Being;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * Find Pokemon by their name.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.pokemonByName` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export interface pokemonByName {
  kind: "OutputField";
  name: "pokemonByName";
  arguments: {
    /**
     * The name of the Pokemon to search for.
     */
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * Retrieve all Pokemon, optionally filtered.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.pokemons` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export interface pokemons {
  kind: "OutputField";
  name: "pokemons";
  arguments: {
    /**
     * Optional filter criteria for Pokemon.
     */
    filter: {
      kind: "InputField";
      name: "filter";
      inlineType: [0];
      namedType: $Schema.PokemonFilter;
    };
  };
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * Find a trainer by their name.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.trainerByName` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export interface trainerByName {
  kind: "OutputField";
  name: "trainerByName";
  arguments: {
    /**
     * The name of the trainer to search for.
     */
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0];
  namedType: $Schema.Trainer;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * Retrieve all trainers.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.trainers` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface trainers {
  kind: "OutputField";
  name: "trainers";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Trainer;
}
