import type { Docpar } from '#~/docpar/_.js'

import type { __typename } from '../__.js'
import type { NamedOutputTypes } from '../typeGroups.js'
import type { InputFields } from './InputField.js'

export type OutputField<
  $Name extends string = string,
  $Arguments extends InputFields | null = InputFields | null,
  $InlineType extends Docpar.InlineType = Docpar.InlineType,
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
