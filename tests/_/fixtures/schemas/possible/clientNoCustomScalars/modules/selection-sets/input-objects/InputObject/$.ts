import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'
import type * as $Fields from './fields.js'

export type * as InputObject from './fields.js'

export interface InputObject<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  $abcEnum?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.ABCEnum | null | undefined>
  date?: $Scalars.Date<_$Context>
  dateRequired: $Scalars.Date$NonNull<_$Context>
  id?: $Scalars.ID<_$Context>
  idRequired: $Scalars.ID$NonNull<_$Context>
}
