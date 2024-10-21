import type { Hybrid } from '../../Hybrid/__.js'
import type { Args } from '../../Input/Args.js'
import type { Output } from '../__.js'

export type Field<$Name extends string, $Type extends Output.Any, $Args extends Args<any> | null> = {
  // todo when generating schema keep track of the unwrapped type too to avoid IDE runtime cost to calculate it
  // typeUnwrapped: $NamedType
  type: $Type
  name: $Name
  args: $Args
}

type FieldType =
  | Hybrid.Enum
  | Hybrid.Scalar.Scalar
  | Hybrid.Scalar.ScalarCodecless
  // | Output.__typename
  | Output.List<any>
  | Output.Nullable<any>
  | Output.Object$2<string, any>
  | Output.Union<string, [any, ...any[]]>
  | Output.Interface<string, Record<string, Field<string, any, Args<any> | null>>, [any, ...any[]]>

// todo test non null interface fields
export type SomeField = Field<string, FieldType, Args<any> | null>

export type SomeFields<$Keys extends SomeKey = SomeKey> = Record<$Keys, SomeField>

type SomeKey = string | number | symbol
