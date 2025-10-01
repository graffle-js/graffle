import type * as $Fields from "./fields.js";

export * as Query from "./fields.js";

export interface Query {
  kind: "Object";
  name: "Query";
  fields: {
    __typename: $Fields.__typename;
    battles: $Fields.battles;
    beings: $Fields.beings;
    pokemonByName: $Fields.pokemonByName;
    pokemons: $Fields.pokemons;
    trainerByName: $Fields.trainerByName;
    trainers: $Fields.trainers;
  };
}
