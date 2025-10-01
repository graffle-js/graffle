import type { Schema as $Schema } from "../../$.js";

export interface __typename {
  kind: "OutputField";
  name: "__typename";
  arguments: {};
  inlineType: [1];
  namedType: {
    kind: "__typename";
    value: "Trainer";
  };
}

interface $class {
  kind: "OutputField";
  name: "class";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.TrainerClass;
}
export { type $class as class };

export interface fans {
  kind: "OutputField";
  name: "fans";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Patron;
}

export interface id {
  kind: "OutputField";
  name: "id";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

export interface name {
  kind: "OutputField";
  name: "name";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}

export interface pokemon {
  kind: "OutputField";
  name: "pokemon";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Pokemon;
}
