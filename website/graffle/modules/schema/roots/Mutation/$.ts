import type * as $Fields from "./fields.js";

export * as Mutation from "./fields.js";

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
 *
 * Root mutation type for modifying Pokemon data.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 1 |
 */
export interface Mutation {
  kind: "Object";
  name: "Mutation";
  fields: {
    __typename: $Fields.__typename;
    addPokemon: $Fields.addPokemon;
  };
}
