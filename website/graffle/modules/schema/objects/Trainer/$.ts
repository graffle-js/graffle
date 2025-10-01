import type * as $Fields from "./fields.js";

export * as Trainer from "./fields.js";

export interface Trainer {
  kind: "Object";
  name: "Trainer";
  fields: {
    __typename: $Fields.__typename;
    class: $Fields.class;
    fans: $Fields.fans;
    id: $Fields.id;
    name: $Fields.name;
    pokemon: $Fields.pokemon;
  };
}
