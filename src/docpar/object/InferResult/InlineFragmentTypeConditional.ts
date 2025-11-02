import type { Select } from '#src/docpar/object/Select/$.js'
import type { Schema } from '#src/types/Schema/_.js'
import type { Obj } from '@wollybeard/kit'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type InlineFragmentTypeConditional<
  $SelectionSet,
  $Node extends Schema.NodeGroups.InlineFragmentTypeCondition,
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
