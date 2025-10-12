import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'
import type * as $Fields from './fields.js'

export type * as PokemonFilter from './fields.js'

export interface PokemonFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  birthday?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.DateFilter<_$Context> | null | undefined>
  name?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.StringFilter<_$Context> | null | undefined>
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.PokemonType | null | undefined>
}
