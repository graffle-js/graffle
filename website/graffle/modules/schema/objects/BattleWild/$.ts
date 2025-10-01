import type * as $Fields from "./fields.js";

export * as BattleWild from "./fields.js";

export interface BattleWild {
  kind: "Object";
  name: "BattleWild";
  fields: {
    __typename: $Fields.__typename;
    date: $Fields.date;
    id: $Fields.id;
    pokemon: $Fields.pokemon;
    result: $Fields.result;
    trainer: $Fields.trainer;
    wildPokemons: $Fields.wildPokemons;
  };
}
