import type { InlineType } from '../../SchemaDrivenDataMap/InlineType.js'
import type { __typename } from '../_.js'
import type { NamedOutputTypes } from '../typeGroups.js'
import type { InputFields } from './InputField.js'

export type OutputField<
  $Name extends string = string,
  $Arguments extends InputFields | null = InputFields | null,
  $InlineType extends InlineType = InlineType,
  $NamedType extends NamedOutputTypes = NamedOutputTypes,
> = {
  name: $Name
  arguments: $Arguments
  inlineType: $InlineType
  namedType: $NamedType
}

export type OutputFields = {
  [key: string]: OutputField
}
