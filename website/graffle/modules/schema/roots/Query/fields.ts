import type { Schema as $Schema } from "../../$.js";

export interface __typename {
  kind: "OutputField";
  name: "__typename";
  arguments: {};
  inlineType: [1];
  namedType: {
    kind: "__typename";
    value: "Query";
  };
}

export interface battles {
  kind: "OutputField";
  name: "battles";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Battle;
}

export interface beings {
  kind: "OutputField";
  name: "beings";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Being;
}

export interface pokemonByName {
  kind: "OutputField";
  name: "pokemonByName";
  arguments: {
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}

export interface pokemons {
  kind: "OutputField";
  name: "pokemons";
  arguments: {
    filter: {
      kind: "InputField";
      name: "filter";
      inlineType: [0];
      namedType: $Schema.PokemonFilter;
    };
  };
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}

export interface trainerByName {
  kind: "OutputField";
  name: "trainerByName";
  arguments: {
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0];
  namedType: $Schema.Trainer;
}

export interface trainers {
  kind: "OutputField";
  name: "trainers";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Trainer;
}
