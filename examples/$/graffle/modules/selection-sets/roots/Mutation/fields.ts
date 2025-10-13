import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type addPokemon<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = addPokemon$SelectionSet<_$Context>

export interface addPokemon$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
  /**
   * Arguments for `addPokemon` field. Some (2/5) arguments are required so you must include this.
   */
  $: addPokemon$Arguments<_$Context>
}

export interface addPokemon$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * The attack power of the new Pokemon.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Int` |
   * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
   * | **Path** | `Mutation.addPokemon(attack)` |
   * | **Nullability** | Optional |
   */
  attack?: $Scalars.Int<_$Context>
  /**
   * The defense power of the new Pokemon.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Int` |
   * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
   * | **Path** | `Mutation.addPokemon(defense)` |
   * | **Nullability** | Optional |
   */
  defense?: $Scalars.Int<_$Context>
  /**
   * The health points of the new Pokemon.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Int` |
   * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
   * | **Path** | `Mutation.addPokemon(hp)` |
   * | **Nullability** | Optional |
   */
  hp?: $Scalars.Int<_$Context>
  /**
   * The name of the new Pokemon.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String!` |
   * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
   * | **Path** | `Mutation.addPokemon(name)` |
   * | **Nullability** | Required |
   */
  name: $Scalars.String$NonNull<_$Context>
  /**
   * The elemental type of the new Pokemon.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `PokemonType!` |
   * | **Parent** | {@link $NamedTypes.$Mutation}.addPokemon |
   * | **Path** | `Mutation.addPokemon(type)` |
   * | **Nullability** | Required |
   */
  $type: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.PokemonType>
}

export type addPokemon$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  addPokemon$SelectionSet<_$Context>
>
