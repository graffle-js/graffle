import type { Schema } from '../../types/Schema/__.js'
import type { InlineFragmentTypeConditional } from './InlineFragment.js'

// dprint-ignore
export type Union<$SelectionSet, $Schema extends Schema, $Node extends Schema.Union> =
  InlineFragmentTypeConditional<$SelectionSet, $Node['membersUnion'], $Schema>
