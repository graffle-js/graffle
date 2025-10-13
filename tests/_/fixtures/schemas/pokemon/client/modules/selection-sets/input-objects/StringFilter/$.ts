import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'
import type * as $Fields from './fields.js'

export type * as StringFilter from './fields.js'

export interface StringFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  contains?: $Scalars.String<_$Context>
  in?: $$Utilities.DocumentBuilderKit.Var.Maybe<Array<$Scalars.String<_$Context>> | null | undefined>
}
