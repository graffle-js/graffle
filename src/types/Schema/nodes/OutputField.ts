import type { Scalar } from '../_.js'
import type { OutputTypes } from '../typeGroups.js'
import type { Args } from './Args.js'
import type { Enum } from './Enum.js'
import type { Interface } from './Interface.js'
import type { List } from './List.js'
import type { Nullable } from './Nullable.js'
import type { OutputObject } from './OutputObject.js'
import type { ScalarCodecless } from './Scalar/_.js'
import type { Union } from './Union.js'

export type OutputField<
  $Name extends string,
  $Type extends OutputTypes,
  $Args extends Args<any> | null,
> // $NamedType extends NamedOutputTypes,
 = {
  name: $Name
  args: $Args
  type: $Type
  // namedType: $NamedType
}

type FieldType =
  | Enum
  | Scalar
  | ScalarCodecless
  | List
  | Nullable
  | OutputObject<string, any>
  | Union<string, [any, ...any[]]>
  | Interface<string, Record<string, OutputField<string, any, Args<any> | null>>, [any, ...any[]]>

// todo test non null interface fields
export type SomeField = OutputField<string, FieldType, Args<any> | null>

export type SomeFields<$Keys extends SomeKey = SomeKey> = Record<$Keys, SomeField>

type SomeKey = string | number | symbol
