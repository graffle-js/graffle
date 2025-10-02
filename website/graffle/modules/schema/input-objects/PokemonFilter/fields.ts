import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * Filter by Pokemon birth/catch date.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.DateFilter} |
 * | **Kind** | `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Docs} |
 * | **Parent** | {@link $Schema.PokemonFilter} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.DateFilter}
 *
 * Kind: `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.PokemonFilter}
 */
export interface birthday {
  kind: "InputField";
  name: "birthday";
  inlineType: [0];
  namedType: $Schema.DateFilter;
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * Filter by Pokemon name.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.StringFilter} |
 * | **Kind** | `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Docs} |
 * | **Parent** | {@link $Schema.PokemonFilter} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.StringFilter}
 *
 * Kind: `InputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | Official Documentation}
 *
 * Parent: {@link $Schema.PokemonFilter}
 */
export interface name {
  kind: "InputField";
  name: "name";
  inlineType: [0];
  namedType: $Schema.StringFilter;
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * Filter by Pokemon type.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.PokemonType} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Docs} |
 * | **Parent** | {@link $Schema.PokemonFilter} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.PokemonType}
 *
 * Kind: `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Official Documentation}
 *
 * Parent: {@link $Schema.PokemonFilter}
 */
export interface type {
  kind: "InputField";
  name: "type";
  inlineType: [0];
  namedType: $Schema.PokemonType;
}
