import type { Grafaid } from '../../../lib/grafaid/_namespace.js'
import type { InputFields } from './InputField.js'

export interface InputObject<
  $Name extends string = string,
  $Fields extends InputFields = InputFields,
  $IsFieldsAllNullable extends boolean = boolean,
> {
  kind: Grafaid.Schema.TypeKind.InputObject
  name: $Name
  fields: $Fields
  isAllFieldsNullable: $IsFieldsAllNullable
}
