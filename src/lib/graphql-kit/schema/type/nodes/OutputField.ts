// todo: this should not be importing grpahqlkit!
type InlineType = GraphqlKit.Schema.SchemaDrivenDataMap.InlineType
import type { GraphqlKit } from '#src/exports/utilities-for-generated.js'
import type { __typename } from '../__.js'
import type { NamedOutput } from '../node-groups.js'
import type { InputFields } from './InputField.js'

export type OutputField<
  $Name extends string = string,
  $Arguments extends InputFields | null = InputFields | null,
  $InlineType extends InlineType = InlineType,
  $NamedType extends NamedOutput = NamedOutput,
> = {
  name: $Name
  arguments: $Arguments
  inlineType: $InlineType
  namedType: $NamedType
}

export type OutputFields = {
  [key: string]: OutputField
}
