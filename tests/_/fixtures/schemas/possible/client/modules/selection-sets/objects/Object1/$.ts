import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'

export interface Object1<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ABCEnum} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.ABCEnum` |
   * | **Nullability** | Optional |
   */
  ABCEnum?:
    | $Fields.ABCEnum$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.ABCEnum<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Boolean} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.boolean` |
   * | **Nullability** | Optional |
   */
  boolean?:
    | $Fields.boolean$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.boolean<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Float} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.float` |
   * | **Nullability** | Optional |
   */
  float?:
    | $Fields.float$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.float<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.int` |
   * | **Nullability** | Optional |
   */
  int?:
    | $Fields.int$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.int<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Object1} |
   * | **Path** | `Object1.string` |
   * | **Nullability** | Optional |
   */
  string?:
    | $Fields.string$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.string<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: Object1$FragmentInline<_$Context> | Object1$FragmentInline<_$Context>[]
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

export interface Object1$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Object1<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}
