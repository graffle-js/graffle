import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"BattleWild"`
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
    value: "BattleWild";
  };
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
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Float}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.BattleWild}
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
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.ID}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.BattleWild}
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
 * The trainer's Pokemon that participated in this battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Pokemon}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleWild}
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
 * The outcome of this wild Pokemon battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.BattleWildResult} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.BattleWildResult}
 *
 * Kind: `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleWild}
 */
export interface result {
  kind: "OutputField";
  name: "result";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.BattleWildResult;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The trainer who engaged in this wild battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Trainer}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleWild}
 */
export interface trainer {
  kind: "OutputField";
  name: "trainer";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Trainer;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The wild Pokemon encountered in this battle.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 *
 * Type: {@link $Schema.Pokemon}[]
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.BattleWild}
 */
export interface wildPokemons {
  kind: "OutputField";
  name: "wildPokemons";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}
