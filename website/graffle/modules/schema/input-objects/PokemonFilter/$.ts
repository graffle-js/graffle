import type * as $Fields from "./fields.js";

export * as PokemonFilter from "./fields.js";

/**
 * Input filter for querying Pokemon.
 */
export interface PokemonFilter {
  kind: "InputObject";
  name: "PokemonFilter";
  isAllFieldsNullable: true;
  fields: {
    birthday: $Fields.birthday;
    name: $Fields.name;
    type: $Fields.type;
  };
}
