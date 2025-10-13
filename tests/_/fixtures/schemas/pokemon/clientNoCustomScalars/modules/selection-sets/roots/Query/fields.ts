import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type battles<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = battles$SelectionSet<_$Context>

export interface battles$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Battle<_$Context> {
}

export type battles$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  battles$SelectionSet<_$Context>
>

export type beings<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = beings$SelectionSet<_$Context>

export interface beings$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Being<_$Context> {
}

export type beings$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  beings$SelectionSet<_$Context>
>

export type pokemonByName<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemonByName$SelectionSet<_$Context>

export interface pokemonByName$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
  /**
   * Arguments for `pokemonByName` field. All arguments are required so you must include this.
   */
  $: pokemonByName$Arguments<_$Context>
}

export interface pokemonByName$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String!` |
   * | **Parent** | {@link $NamedTypes.$Query}.pokemonByName |
   * | **Path** | `Query.pokemonByName(name)` |
   * | **Nullability** | Required |
   */
  name: $Scalars.String$NonNull<_$Context>
}

export type pokemonByName$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  pokemonByName$SelectionSet<_$Context>
>

export type pokemons<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemons$SelectionSet<_$Context>

export interface pokemons$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
  /**
   * Arguments for `pokemons` field. No arguments are required so you may omit this.
   */
  $?: pokemons$Arguments<_$Context>
}

export interface pokemons$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `PokemonFilter` |
   * | **Parent** | {@link $NamedTypes.$Query}.pokemons |
   * | **Path** | `Query.pokemons(filter)` |
   * | **Nullability** | Optional |
   */
  filter?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.PokemonFilter<_$Context> | null | undefined>
}

export type pokemons$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  pokemons$SelectionSet<_$Context>
>

export type trainerByName<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = trainerByName$SelectionSet<_$Context>

export interface trainerByName$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Trainer<_$Context> {
  /**
   * Arguments for `trainerByName` field. All arguments are required so you must include this.
   */
  $: trainerByName$Arguments<_$Context>
}

export interface trainerByName$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String!` |
   * | **Parent** | {@link $NamedTypes.$Query}.trainerByName |
   * | **Path** | `Query.trainerByName(name)` |
   * | **Nullability** | Required |
   */
  name: $Scalars.String$NonNull<_$Context>
}

export type trainerByName$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  trainerByName$SelectionSet<_$Context>
>

export type trainers<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = trainers$SelectionSet<_$Context>

export interface trainers$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Trainer<_$Context> {
}

export type trainers$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  trainers$SelectionSet<_$Context>
>
