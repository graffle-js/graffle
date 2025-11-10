import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { CombatantSinglePokemon } from './_.js'

export interface $FragmentInline<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends
  CombatantSinglePokemon<_$Context>,
  GraphqlKit.Document.Object.Select.Directive.$Groups.InlineFragment.Fields
{}
