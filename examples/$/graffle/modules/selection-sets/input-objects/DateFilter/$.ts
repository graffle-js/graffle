import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type * as DateFilter from './fields.js'

/**
 * Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * Input filter for querying by date ranges.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 2 |
 * | **All Fields Nullable** | Yes |
 */
export interface DateFilter<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * The minimum date (greater than or equal to).
   */
  gte?: $Scalars.Date<_$Context>
  /**
   * The maximum date (less than or equal to).
   */
  lte?: $Scalars.Date<_$Context>
}
