import type { InlineFragmentTypeConditional } from './InlineFragmentTypeConditional.js'

// dprint-ignore
export type Union<
  $SelectionSet,
  $Schema,
  $Node,
> =
  InlineFragmentTypeConditional<
    $SelectionSet,
    // @ts-expect-error context constraint missing to avoid TS compare depth limit
    $Node['membersUnion'],
    $Schema
  >
