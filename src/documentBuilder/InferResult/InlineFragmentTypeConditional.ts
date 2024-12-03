import { type GetKeyOr } from '../../lib/prelude.js'
import type { Schema } from '../../types/Schema/__.js'
import type { Select } from '../Select/__.js'
import type { OutputObjectLike } from './OutputObjectLike.js'

// dprint-ignore
export type InlineFragmentTypeConditional<$SelectionSet, $Node extends Schema.InlineFragmentTypeConditionTypes, $Schema extends Schema> =
  $Node extends any // force distribution
    // ? $Node extends Schema.Interface
    //   ? {
    //       debug: GetKeyOr<
    //         $SelectionSet,
    //         `${Select.InlineFragment.TypeConditionalKeyPrefix}${$Node['name']}`,
    //         {}
    //       >
    //     & Select.InlineFragment.OmitInlineFragmentsWithTypeConditions<$SelectionSet>,
    //     debug2: $Node['fields']
    //     }
    ? OutputObjectLike<
        & GetKeyOr<
            $SelectionSet,
            `${Select.InlineFragment.TypeConditionalKeyPrefix}${$Node['name']}`,
            {}
          >
        & Select.InlineFragment.OmitInlineFragmentsWithTypeConditions<$SelectionSet>,
        $Schema,
        $Node
      >
    : never
