import { type GetKeyOr } from '../../lib/prelude.js'
import type { Schema } from '../../types/Schema/__.js'
import type { Select } from '../2_Select/__.js'
import type { Object } from './Object.js'

// dprint-ignore
export type InlineFragmentTypeConditional<$SelectionSet, $Node extends Schema.OutputObject, $Schema extends Schema> =
  $Node extends any // force distribution
    ? Object<
        & GetKeyOr<
            $SelectionSet,
            `${Select.InlineFragment.TypeConditionalKeyPrefix}${$Node['fields']['__typename']['type']['type']}`,
            {}
          >
        & Select.InlineFragment.OmitInlineFragmentsWithTypeConditions<$SelectionSet>,
        $Schema,
        $Node
      >
    : never
