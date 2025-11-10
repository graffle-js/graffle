import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { Obj } from '@wollybeard/kit'
import type { Schema } from '../../../../schema/_.js'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type InlineFragmentTypeConditional<
  $SelectionSet,
  $Node extends Schema.Type.NodeGroups.InlineFragmentTypeCondition,
  $Schema,
> =
  $Node extends any // force distribution
    // ? $Node extends Schema.Type.Interface
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
