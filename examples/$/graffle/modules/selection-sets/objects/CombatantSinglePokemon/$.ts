import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as CombatantSinglePokemon from './$$.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A combatant in a one-on-one battle with a single Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 2 |
 */
export interface CombatantSinglePokemon<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike {
  /**
   * The Pokemon used by this combatant.
   *
   * ```graphql
   * pokemon: Pokemon
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
   * | **Type** | {@link $NamedTypes.$Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Path** | `CombatantSinglePokemon.pokemon` |
   * | **Nullability** | Optional |
   */
  pokemon?:
    | $Fields.pokemon.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.pokemon<_$Context>>
  /**
   * The trainer commanding this Pokemon.
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
   * | **Parent** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Path** | `CombatantSinglePokemon.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | $Fields.trainer.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.trainer<_$Context>>

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
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<
      $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    >
}
