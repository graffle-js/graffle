import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as Pokemon from './$$.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A Pokemon with stats, type, and trainer information.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 8 |
 * | **Implements** | {@link $Schema.Being} |
 */
export interface Pokemon<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext>
  extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike
{
  /**
   * The attack power of this Pokemon.
   *
   * ```graphql
   * attack: Int!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.attack` |
   * | **Nullability** | Required |
   */
  attack?:
    | $Fields.attack.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.attack<_$Context>>
  /**
   * The date this Pokemon was born or caught.
   *
   * ```graphql
   * birthday: Date!
   *
   * scalar Date
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Date}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.birthday` |
   * | **Nullability** | Required |
   */
  birthday?:
    | $Fields.birthday.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.birthday<_$Context>>
  /**
   * The defense power of this Pokemon.
   *
   * ```graphql
   * defense: Int!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.defense` |
   * | **Nullability** | Required |
   */
  defense?:
    | $Fields.defense.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.defense<_$Context>>
  /**
   * The health points (HP) of this Pokemon.
   *
   * ```graphql
   * hp: Int!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.hp` |
   * | **Nullability** | Required |
   */
  hp?: $Fields.hp.$Expanded<_$Context> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.hp<_$Context>>
  /**
   * The unique identifier for this Pokemon.
   *
   * ```graphql
   * id: ID!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.id` |
   * | **Nullability** | Required |
   */
  id?: $Fields.id.$Expanded<_$Context> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
  /**
   * The name of this Pokemon.
   *
   * ```graphql
   * name: String!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.name` |
   * | **Nullability** | Required |
   */
  name?:
    | $Fields.name.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.name<_$Context>>
  /**
   * The trainer who owns this Pokemon, if any.
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
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.trainer` |
   * | **Nullability** | Optional |
   */
  trainer?:
    | $Fields.trainer.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.trainer<_$Context>>
  /**
   * The elemental type of this Pokemon.
   *
   * ```graphql
   * type: PokemonType!
   *
   * enum PokemonType {
   * bug
   * electric
   * fire
   * grass
   * water
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$PokemonType}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
   * | **Parent** | {@link $NamedTypes.$Pokemon} |
   * | **Path** | `Pokemon.type` |
   * | **Nullability** | Required |
   */
  type?:
    | $Fields.type.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.type<_$Context>>

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
