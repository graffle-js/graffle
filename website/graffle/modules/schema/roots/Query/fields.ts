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
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * Retrieve all battles that have occurred.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Battle}[]! |
 * | **Kind** | `Union` ↗ {@link https://graphql.org/graphql-js/type/#graphqluniontype | Docs} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Nullability** | Required |
 * | **List** | Yes |
 *
 * Type: {@link $Schema.Battle}[]!
 *
 * Kind: `Union` ↗ {@link https://graphql.org/graphql-js/type/#graphqluniontype | Official Documentation}
 *
 * Parent: {@link $Schema.Query}
 */
export interface battles {
  kind: "OutputField";
  name: "battles";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Battle;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * Retrieve all beings (Pokemon, Trainers, and Patrons).
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Being}[]! |
 * | **Kind** | `Interface` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Docs} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Nullability** | Required |
 * | **List** | Yes |
 *
 * Type: {@link $Schema.Being}[]!
 *
 * Kind: `Interface` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Official Documentation}
 *
 * Parent: {@link $Schema.Query}
 */
export interface beings {
  kind: "OutputField";
  name: "beings";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Being;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * Find Pokemon by their name.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 *
 * Type: {@link $Schema.Pokemon}[]
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.Query}
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
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * Retrieve all Pokemon, optionally filtered.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 *
 * Type: {@link $Schema.Pokemon}[]
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.Query}
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
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * Find a trainer by their name.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 *
 * Type: {@link $Schema.Trainer}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.Query}
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
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * Retrieve all trainers.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 *
 * Type: {@link $Schema.Trainer}[]
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.Query}
 */
export interface trainers {
  kind: "OutputField";
  name: "trainers";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Trainer;
}
