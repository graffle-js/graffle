import type { GraphqlKit } from '#src/exports/utilities-for-generated.js'

type InlineType = GraphqlKit.Schema.SchemaDrivenDataMap.InlineType
import type { NamedInput } from '../node-groups.js'

export interface InputField<
  $Name extends string = string,
  $InlineType extends InlineType = InlineType,
  $NamedType extends NamedInput = NamedInput,
> {
  kind: 'InputField'
  name: $Name
  inlineType: $InlineType
  namedType: $NamedType
}

export type InputFields = Record<string, InputField>
