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
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The attack power of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.attack` |
 * | **Nullability** | Required |
 */
export interface attack {
  kind: "OutputField";
  name: "attack";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Int;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The date this Pokemon was born or caught.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.birthday` |
 * | **Nullability** | Required |
 */
export interface birthday {
  kind: "OutputField";
  name: "birthday";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Date;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The defense power of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.defense` |
 * | **Nullability** | Required |
 */
export interface defense {
  kind: "OutputField";
  name: "defense";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Int;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The health points (HP) of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.hp` |
 * | **Nullability** | Required |
 */
export interface hp {
  kind: "OutputField";
  name: "hp";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.Int;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The unique identifier for this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.id` |
 * | **Nullability** | Required |
 */
export interface id {
  kind: "OutputField";
  name: "id";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.ID;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The name of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.name` |
 * | **Nullability** | Required |
 */
export interface name {
  kind: "OutputField";
  name: "name";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.String;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The trainer who owns this Pokemon, if any.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.trainer` |
 * | **Nullability** | Optional |
 */
export interface trainer {
  kind: "OutputField";
  name: "trainer";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Trainer;
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Pokemon}.
 *
 * The elemental type of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.PokemonType}! |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | lang docs} |
 * | **Parent** | {@link $Schema.Pokemon} |
 * | **Path** | `Pokemon.type` |
 * | **Nullability** | Required |
 */
export interface type {
  kind: "OutputField";
  name: "type";
  arguments: {};
  inlineType: [1];
  namedType: $Schema.PokemonType;
}
