import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type combatants<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = combatants$SelectionSet<_$Context>

export interface combatants$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.CombatantMultiPokemon<_$Context> {
}

export type combatants$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  combatants$SelectionSet<_$Context>
>

export type date<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date$SelectionSet<_$Context>

export interface date$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type date$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date$SelectionSet<_$Context>
>

export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id$SelectionSet<_$Context>

export interface id$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
}

export type id$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id$SelectionSet<_$Context>
>

export type winner<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = winner$SelectionSet<_$Context>

export interface winner$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Trainer<_$Context> {
}

export type winner$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  winner$SelectionSet<_$Context>
>
