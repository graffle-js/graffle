import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type combatant1<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = combatant1.$SelectionSet<_$Context>

export namespace combatant1 {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.CombatantSinglePokemon<_$Context> {
  }

  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type combatant2<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = combatant2.$SelectionSet<_$Context>

export namespace combatant2 {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.CombatantSinglePokemon<_$Context> {
  }

  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type date<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | date.$SelectionSet<_$Context>

export namespace date {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  }

  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $SelectionSet<_$Context>
  >
}

export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id.$SelectionSet<_$Context>

export namespace id {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  }

  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $SelectionSet<_$Context>
  >
}

export type winner<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = winner.$SelectionSet<_$Context>

export namespace winner {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Trainer<_$Context> {
  }

  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}
