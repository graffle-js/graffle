import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/_.js'

export type abcEnum<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.ABCEnum | null | undefined>

export type date<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $Scalars.Date<_$Context>

export type dateRequired<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = $Scalars.Date$NonNull<_$Context>

export type id<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $Scalars.ID<_$Context>

export type idRequired<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $Scalars.ID$NonNull<_$Context>
