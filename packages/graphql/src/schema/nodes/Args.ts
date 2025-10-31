type InputFields = Record<string, any>

export interface Args<$InputFields extends InputFields, $IsFieldsAllNullable extends boolean = boolean> {
  fields: $InputFields
  isFieldsAllNullable: $IsFieldsAllNullable
}
