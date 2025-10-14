import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type battles<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = battles.$SelectionSet<_$Context>

export namespace battles {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Battle<_$Context> {
  }

  /**
   * This is the "expanded" version of the `battles` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type beings<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = beings.$SelectionSet<_$Context>

export namespace beings {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Being<_$Context> {
  }

  /**
   * This is the "expanded" version of the `beings` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type pokemonByName<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemonByName.$SelectionSet<_$Context>

export namespace pokemonByName {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
    /**
     * Arguments for `pokemonByName` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
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

  /**
   * This is the "expanded" version of the `pokemonByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type pokemons<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = pokemons.$SelectionSet<_$Context>

export namespace pokemons {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Pokemon<_$Context> {
    /**
     * Arguments for `pokemons` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
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

export type trainerByName<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = trainerByName.$SelectionSet<_$Context>

export namespace trainerByName {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Trainer<_$Context> {
    /**
     * Arguments for `trainerByName` field. All arguments are required so you must include this.
     */
    $: $Arguments<_$Context>
  }

  export interface $Arguments<
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

  /**
   * This is the "expanded" version of the `trainerByName` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type trainers<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = trainers.$SelectionSet<_$Context>

export namespace trainers {
  export interface $SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Trainer<_$Context> {
  }

  /**
   * This is the "expanded" version of the `trainers` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}
