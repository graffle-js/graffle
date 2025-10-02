import type * as $Fields from "./fields.js";

export * as CombatantSinglePokemon from "./fields.js";

/**
 * A combatant in a one-on-one battle with a single Pokemon.
 */
export interface CombatantSinglePokemon {
  kind: "Object";
  name: "CombatantSinglePokemon";
  fields: {
    __typename: $Fields.__typename;
    pokemon: $Fields.pokemon;
    trainer: $Fields.trainer;
  };
}
