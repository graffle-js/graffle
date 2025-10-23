import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as Patron from './$$.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A patron who is a fan of a particular trainer.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 3 |
 * | **Implements** | {@link $Schema.Being} |
 */
export interface Patron<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext>
  extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike
{
  /**
   * The unique identifier for this patron.
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
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Patron} |
   * | **Path** | `Patron.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * The amount of money this patron has.
   *
   * ```graphql
   * money: Int
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Patron} |
   * | **Path** | `Patron.money` |
   * | **Nullability** | Optional |
   */
  money?:
    | $Fields.money.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.money<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * The name of this patron.
   *
   * ```graphql
   * name: String
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Patron} |
   * | **Path** | `Patron.name` |
   * | **Nullability** | Optional |
   */
  name?:
    | $Fields.name.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.name<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString

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
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
}
