import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type pokemons<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemons.$SelectionSet<_$Context>

export namespace pokemons {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
  }

  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type trainer<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = trainer.$SelectionSet<_$Context>

export namespace trainer {
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
