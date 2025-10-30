import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as Object1 from './__.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 6 |
 */
export interface Object1<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext>
  extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike
{
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ABCEnum} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.ABCEnum` |
   * | **Nullability** | Optional |
   */
  ABCEnum?:
    | $Fields.ABCEnum.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.ABCEnum<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Boolean} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.boolean` |
   * | **Nullability** | Optional |
   */
  boolean?:
    | $Fields.boolean.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.boolean<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Float} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.float` |
   * | **Nullability** | Optional |
   */
  float?:
    | $Fields.float.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.float<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.int` |
   * | **Nullability** | Optional |
   */
  int?:
    | $Fields.int.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.int<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.string` |
   * | **Nullability** | Optional |
   */
  string?:
    | $Fields.string.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.string<_$Context>>
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
