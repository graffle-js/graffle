import type { InputObject } from './_.js'
import type { __typename } from './nodes/__typename.js'
import type { Enum } from './nodes/Enum.js'
import type { Interface } from './nodes/Interface.js'
import type { List } from './nodes/List.js'
import type { Nullable } from './nodes/Nullable.js'
import type { OutputObject } from './nodes/OutputObject.js'
import type { Scalar } from './nodes/Scalar/Scalar.js'
import type { Union } from './nodes/Union.js'

export type NamedTypes = NamedInputTypes | NamedOutputTypes

export type OutputTypes =
  | InlineTypes
  | NamedOutputTypes
  | __typename

export type NamedOutputTypes =
  | Interface
  | Enum
  | OutputObject
  | Union<string, [OutputObject, ...OutputObject[]]>
  | Scalar
  | Scalar.ScalarCodecless
  | __typename

export type InputTypes =
  | InlineTypes
  | NamedInputTypes

export type NamedInputTypes = Enum | Scalar | InputObject | Scalar.ScalarCodecless

export type InlineTypes =
  | List
  | Nullable

export type ScalarLikeTypes =
  | Scalar
  | Enum
  | Scalar.ScalarCodecless
  | __typename
