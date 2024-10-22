import type { InlineType } from '../../SchemaDrivenDataMap/InlineType.js'
import type { NamedInputTypes } from '../typeGroups.js'

export interface InputField<
  $Name extends string = string,
  $InlineType extends InlineType = InlineType,
  $NamedType extends NamedInputTypes = NamedInputTypes,
> {
  kind: 'InputField'
  name: $Name
  inlineType: $InlineType
  namedType: $NamedType
}

export type InputFields = Record<string, InputField>
