import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { InputFields } from './InputField.js'

export interface InputObject<
  $Name extends string = string,
  $Fields extends InputFields = InputFields,
  $IsFieldsAllNullable extends boolean = boolean,
> {
  kind: GraphqlKit.Schema.Kind.TypeKind.InputObject
  name: $Name
  fields: $Fields
  isAllFieldsNullable: $IsFieldsAllNullable
}
