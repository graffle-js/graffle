import type * as $Fields from "./fields.js";

export * as CombatantSinglePokemon from "./fields.js";

export interface CombatantSinglePokemon {
  kind: "Object";
  name: "CombatantSinglePokemon";
  fields: {
    __typename: $Fields.__typename;
    pokemon: $Fields.pokemon;
    trainer: $Fields.trainer;
  };
}
