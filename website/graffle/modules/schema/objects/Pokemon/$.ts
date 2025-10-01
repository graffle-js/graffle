import type * as $Fields from "./fields.js";

export * as Pokemon from "./fields.js";

export interface Pokemon {
  kind: "Object";
  name: "Pokemon";
  fields: {
    __typename: $Fields.__typename;
    attack: $Fields.attack;
    birthday: $Fields.birthday;
    defense: $Fields.defense;
    hp: $Fields.hp;
    id: $Fields.id;
    name: $Fields.name;
    trainer: $Fields.trainer;
    type: $Fields.type;
  };
}
