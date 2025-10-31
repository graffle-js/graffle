import { TypeKind } from '#~/schema/ast/__.js'
import type { InputFields } from './InputField.js'

export interface InputObject<
  $Name extends string = string,
  $Fields extends InputFields = InputFields,
  $IsFieldsAllNullable extends boolean = boolean,
> {
  kind: TypeKind.InputObject
  name: $Name
  fields: $Fields
  isAllFieldsNullable: $IsFieldsAllNullable
}
