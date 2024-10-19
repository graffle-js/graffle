import type { Schema } from '../../generator/generators/Schema.js'
import type { SchemaKit } from '../1_Schema/__.js'
import type { InlineFragmentTypeConditional } from './InlineFragment.js'

// dprint-ignore
export type Union<$SelectionSet, $Index extends Schema, $Node extends SchemaKit.Output.Union> =
  InlineFragmentTypeConditional<$SelectionSet, $Node['members'][number], $Index>
