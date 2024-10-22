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

// type FieldType =
//   | Enum
//   | Scalar
//   | ScalarCodecless
//   | List
//   | Nullable
//   | OutputObject<string, any>
//   | Union<string, [any, ...any[]]>
//   | Interface<string, Record<string, OutputField<string, any, Args<any> | null>>, [any, ...any[]]>

// // todo test non null interface fields
// export type SomeField = OutputField<string, FieldType, Args<any> | null>

// export type SomeFields<$Keys extends SomeKey = SomeKey> = Record<$Keys, SomeField>

// type SomeKey = string | number | symbol

export type OutputFields = {
  [key: string]: OutputField | __typename
}
