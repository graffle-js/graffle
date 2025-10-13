import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as BattleWild from './$$.js'

/**
 * A battle between a trainer and wild Pokemon.
 */
export interface BattleWild<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
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
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.date` |
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
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
  /**
   * The trainer's Pokemon that participated in this battle.
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
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.pokemon` |
   * | **Nullability** | Optional |
   */
  pokemon?:
    | $Fields.pokemon.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.pokemon<_$Context>>
  /**
   * The outcome of this wild Pokemon battle.
   *
   * ```graphql
   * result: BattleWildResult
   *
   * enum BattleWildResult {
   * pokemonsCaptured
   * pokemonsDefeated
   * trainerDefeated
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$BattleWildResult} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.result` |
   * | **Nullability** | Optional |
   */
  result?:
    | $Fields.result.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.result<_$Context>>
  /**
   * The trainer who engaged in this wild battle.
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
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | $Fields.trainer.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.trainer<_$Context>>
  /**
   * The wild Pokemon encountered in this battle.
   *
   * ```graphql
   * wildPokemons: [Pokemon!]
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
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$BattleWild} |
   * | **Path** | `BattleWild.wildPokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  wildPokemons?:
    | $Fields.wildPokemons.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.wildPokemons<_$Context>>

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
