import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Pokemon"`
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
    value: "Pokemon";
  };
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The attack power of this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.Int}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface attack {
  kind: "OutputField";
  name: "attack";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Int;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The date this Pokemon was born or caught.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.Date}!
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface birthday {
  kind: "OutputField";
  name: "birthday";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Date;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The defense power of this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.Int}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface defense {
  kind: "OutputField";
  name: "defense";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Int;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The health points (HP) of this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.Int}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface hp {
  kind: "OutputField";
  name: "hp";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Int;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The unique identifier for this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.ID}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface id {
  kind: "OutputField";
  name: "id";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.ID;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The name of this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.String}!
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface name {
  kind: "OutputField";
  name: "name";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.String;
}

/**
 * GraphQL Field ↗ {@link https://graphql.org/learn/queries/#fields | Official Documentation}
 *
 * The trainer who owns this Pokemon, if any.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Trainer}
 *
 * Kind: `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
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
 * The elemental type of this Pokemon.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.PokemonType}! |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Nullability** | Required |
 *
 * Type: {@link $Schema.PokemonType}!
 *
 * Kind: `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Official Documentation}
 *
 * Parent: {@link $Schema.Pokemon}
 */
export interface type {
  kind: "OutputField";
  name: "type";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.PokemonType;
}
