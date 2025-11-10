import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/_.js'

export type addPokemon<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = addPokemon.$SelectionSet<_$Context>

export namespace addPokemon {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Pokemon<_$Context> {
    /**
     * Arguments for `addPokemon` field. Some (2/5) arguments are required so you must include this.
     */
    readonly $: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
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
    readonly attack?: $Scalars.Int<_$Context>
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
    readonly defense?: $Scalars.Int<_$Context>
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
    readonly hp?: $Scalars.Int<_$Context>
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
    readonly name: $Scalars.String$NonNull<_$Context>
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
    readonly $type: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.PokemonType>
  }

  /**
   * This is the "expanded" version of the `addPokemon` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}
