import type * as $Fields from "./fields.js";

export * as Patron from "./fields.js";

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
