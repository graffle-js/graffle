import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'
import type * as $Fields from './fields.js'

export type * as InputObjectCircular from './fields.js'

export interface InputObjectCircular<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  circular?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.InputObjectCircular<_$Context> | null | undefined>
  date?: $Scalars.Date<_$Context>
}
