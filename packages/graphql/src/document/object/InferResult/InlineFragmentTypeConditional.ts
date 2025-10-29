import type { Select } from '../../object/Select/$.js'
import type { Schema } from '@graffle/graphql/schema-types'
import type { Obj } from '@wollybeard/kit'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type InlineFragmentTypeConditional<
  $SelectionSet,
  $Node extends Schema.InlineFragmentTypeConditionTypes,
  $Schema,
> =
  $Node extends any // force distribution
    // ? $Node extends Schema.Interface
    //   ? {
    //       debug: Obj.GetKeyOr<
    //         $SelectionSet,
    //         `${Select.InlineFragment.TypeConditionalKeyPrefix}${$Node['name']}`,
    //         {}
    //       >
    //     & Select.InlineFragment.OmitInlineFragmentsWithTypeConditions<$SelectionSet>,
    //     debug2: $Node['fields']
    //     }
    ? OutputObjectLike<
        & Obj.GetKeyOr<
            $SelectionSet,
            `${Select.InlineFragment.TypeConditionalKeyPrefix}${$Node['name']}`,
            {}
          >
        & Select.InlineFragment.OmitInlineFragmentsWithTypeConditions<$SelectionSet>,
        $Schema,
        $Node
      >
    : never
