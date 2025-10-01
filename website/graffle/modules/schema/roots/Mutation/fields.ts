import type { Schema as $Schema } from "../../$.js";

export interface __typename {
  kind: "OutputField";
  name: "__typename";
  arguments: {};
  inlineType: [1];
  namedType: {
    kind: "__typename";
    value: "Mutation";
  };
}

export interface addPokemon {
  kind: "OutputField";
  name: "addPokemon";
  arguments: {
    attack: {
      kind: "InputField";
      name: "attack";
      inlineType: [0];
      namedType: $Schema.Int;
    };
    defense: {
      kind: "InputField";
      name: "defense";
      inlineType: [0];
      namedType: $Schema.Int;
    };
    hp: {
      kind: "InputField";
      name: "hp";
      inlineType: [0];
      namedType: $Schema.Int;
    };
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
    type: {
      kind: "InputField";
      name: "type";
      inlineType: [1];
      namedType: $Schema.PokemonType;
    };
  };
  inlineType: [0];
  namedType: $Schema.Pokemon;
}
