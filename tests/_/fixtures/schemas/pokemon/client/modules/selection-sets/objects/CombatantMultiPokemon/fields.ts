import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'

export type pokemons<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemons.$SelectionSet<_$Context>

export namespace pokemons {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
  }

  /**
   * This is the "expanded" version of the `pokemons` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
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

  /**
   * This is the "expanded" version of the `trainer` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}
