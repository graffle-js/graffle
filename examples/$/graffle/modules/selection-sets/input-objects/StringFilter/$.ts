import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'
import type * as $Fields from './fields.js'

export type * as StringFilter from './fields.js'

/**
 * Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * Input filter for querying by string values.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject} ↗ |
 * | **Fields** | 2 |
 * | **All Fields Nullable** | Yes |
 */
export interface StringFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * Filter for strings containing this substring.
   */
  contains?: $Scalars.String<_$Context>
  /**
   * Filter for strings matching any value in this list.
   */
  in?: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.String<_$Context>> | null | undefined>
}
