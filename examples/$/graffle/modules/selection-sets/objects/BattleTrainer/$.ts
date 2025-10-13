import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as BattleTrainer from './$$.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A one-on-one battle between two trainers.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 5 |
 */
export interface BattleTrainer<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * The first combatant in this trainer battle.
   *
   * ```graphql
   * combatant1: CombatantSinglePokemon
   *
   * type CombatantSinglePokemon {
   * pokemon: Pokemon
   * trainer: Trainer
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.combatant1` |
   * | **Nullability** | Optional |
   */
  combatant1?:
    | $Fields.combatant1.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.combatant1<_$Context>>
  /**
   * The second combatant in this trainer battle.
   *
   * ```graphql
   * combatant2: CombatantSinglePokemon
   *
   * type CombatantSinglePokemon {
   * pokemon: Pokemon
   * trainer: Trainer
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$CombatantSinglePokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.combatant2` |
   * | **Nullability** | Optional |
   */
  combatant2?:
    | $Fields.combatant2.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.combatant2<_$Context>>
  /**
   * The date when this battle took place, stored as a Unix timestamp.
   *
   * ```graphql
   * date: Float
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Float} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.date` |
   * | **Nullability** | Optional |
   */
  date?:
    | $Fields.date.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.date<_$Context>>
  /**
   * The unique identifier for this battle.
   *
   * ```graphql
   * id: ID
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
  /**
   * The trainer who won this battle.
   *
   * ```graphql
   * winner: Trainer
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
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleTrainer} |
   * | **Path** | `BattleTrainer.winner` |
   * | **Nullability** | Optional |
   */
  winner?:
    | $Fields.winner.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.winner<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}
