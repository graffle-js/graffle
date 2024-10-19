export type InputFields = Record<string, any>

export interface InputObject<
  $Name extends string = string,
  $Fields extends InputFields = InputFields,
  $IsFieldsAllNullable extends boolean = boolean,
> {
  kind: 'InputObject'
  name: $Name
  fields: $Fields
  isAllFieldsNullable: $IsFieldsAllNullable
}
