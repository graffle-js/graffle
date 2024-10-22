import type { Schema } from '../../types/Schema/__.js'
import type { InlineFragmentTypeConditional } from './InlineFragment.js'

// dprint-ignore
export type Interface<$SelectionSet, $Schema extends Schema, $Node extends Schema.Interface> =
  InlineFragmentTypeConditional<$SelectionSet, $Node['implementorsUnion'], $Schema>
