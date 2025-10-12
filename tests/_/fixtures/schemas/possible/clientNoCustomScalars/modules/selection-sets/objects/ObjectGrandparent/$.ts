import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'

export interface ObjectGrandparent<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$ObjectGrandparent} |
   * | **Path** | `ObjectGrandparent.a` |
   * | **Nullability** | Required |
   */
  a?:
    | $Fields.a$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.a<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Int}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$ObjectGrandparent} |
   * | **Path** | `ObjectGrandparent.me` |
   * | **Nullability** | Required |
   */
  me?:
    | $Fields.me$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.me<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: ObjectGrandparent$FragmentInline<_$Context> | ObjectGrandparent$FragmentInline<_$Context>[]
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

export interface ObjectGrandparent$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends ObjectGrandparent<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}
