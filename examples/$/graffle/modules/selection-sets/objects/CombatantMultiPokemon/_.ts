import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as CombatantMultiPokemon from './__.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A combatant in a battle royale with multiple Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 2 |
 */
export interface CombatantMultiPokemon<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {
  /**
   * The team of Pokemon used by this combatant.
   *
   * ```graphql
   * pokemons: [Pokemon!]
   *
   * type Pokemon implements Being {
   * attack: Int!
   * birthday: Date!
   * defense: Int!
   * hp: Int!
   * id: ID!
   * name: String!
   * trainer: Trainer
   * type: PokemonType!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$CombatantMultiPokemon} |
   * | **Path** | `CombatantMultiPokemon.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  pokemons?:
    | $Fields.pokemons.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.pokemons<_$Context>>
  /**
   * The trainer commanding this team of Pokemon.
   *
   * ```graphql
   * trainer: Trainer
   *
   * type Trainer implements Being {
   * class: TrainerClass
   * fans: [Patron!]
   * id: ID
   * name: String
   * pokemon: [Pokemon!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$CombatantMultiPokemon} |
   * | **Path** | `CombatantMultiPokemon.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | $Fields.trainer.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.trainer<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
   */
  __typename?:
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
      GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
}
