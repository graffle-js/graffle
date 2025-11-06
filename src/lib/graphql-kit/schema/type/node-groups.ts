import type { InputObject } from './__.js'
import type { __typename } from './nodes/__typename.js'
import type { Enum } from './nodes/Enum.js'
import type { Interface } from './nodes/Interface.js'
import type { List } from './nodes/List.js'
import type { Nullable } from './nodes/Nullable.js'
import type { OutputObject } from './nodes/OutputObject.js'
import type { Scalar } from './nodes/Scalar/_.js'
import type { Union } from './nodes/Union.js'

export type Named = NamedInput | NamedOutput

export type OutputObjectLike = OutputObject | Interface

/**
 * Types that can show up in the condition of an inline fragment.
 *
 * Interfaces can extend other interfaces so they are possible here.
 */
export type InlineFragmentTypeCondition = OutputObject | Interface

export type Output =
  | Inline
  | NamedOutput
  | __typename

export type NamedOutput =
  | Interface
  | Enum
  | OutputObject
  | Union<string, [OutputObject, ...OutputObject[]]>
  | Scalar
  | __typename

export type Input =
  | Inline
  | NamedInput

export type NamedInput = Enum | Scalar | InputObject

export type Inline =
  | List
  | Nullable

export type ScalarLike =
  | Scalar
  | Enum
  | __typename
