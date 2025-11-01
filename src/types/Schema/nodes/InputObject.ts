import type { GraphqlKit } from '#src/lib/grafaid/_.js'
import type { InputFields } from './InputField.js'

export interface InputObject<
  $Name extends string = string,
  $Fields extends InputFields = InputFields,
  $IsFieldsAllNullable extends boolean = boolean,
> {
  kind: GraphqlKit.Schema.TypeKind.InputObject
  name: $Name
  fields: $Fields
  isAllFieldsNullable: $IsFieldsAllNullable
}
