import type { Schema as $Schema } from "../../$.js";

export interface __typename {
  kind: "OutputField";
  name: "__typename";
  arguments: {};
  inlineType: [1];
  namedType: {
    kind: "__typename";
    value: "Patron";
  };
}

export interface id {
  kind: "OutputField";
  name: "id";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

export interface money {
  kind: "OutputField";
  name: "money";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Int;
}

export interface name {
  kind: "OutputField";
  name: "name";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}
