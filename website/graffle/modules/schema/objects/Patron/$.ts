import type * as $Fields from "./fields.js";

export * as Patron from "./fields.js";

/**
 * A patron who is a fan of a particular trainer.
 */
export interface Patron {
  kind: "Object";
  name: "Patron";
  fields: {
    __typename: $Fields.__typename;
    id: $Fields.id;
    money: $Fields.money;
    name: $Fields.name;
  };
}
