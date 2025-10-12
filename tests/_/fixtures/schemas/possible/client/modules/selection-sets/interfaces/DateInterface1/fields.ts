import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type date1<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date1$SelectionSet<_$Context>

export interface date1$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type date1$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date1$SelectionSet<_$Context>
>
