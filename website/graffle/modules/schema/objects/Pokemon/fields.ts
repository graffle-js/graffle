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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The attack power of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The date this Pokemon was born or caught.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The defense power of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The health points (HP) of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The unique identifier for this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The name of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The trainer who owns this Pokemon, if any.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Pokemon}.
 *
 * The elemental type of this Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.PokemonType}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
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
