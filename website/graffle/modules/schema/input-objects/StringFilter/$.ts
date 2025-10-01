import type * as $Fields from "./fields.js";

export * as StringFilter from "./fields.js";

export interface StringFilter {
  kind: "InputObject";
  name: "StringFilter";
  isAllFieldsNullable: true;
  fields: {
    contains: $Fields.contains;
    in: $Fields.in;
  };
}
