import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as ObjectNestedWithArgs from './$$.js'

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 2 |
 */
export interface ObjectNestedWithArgs<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs} |
   * | **Path** | `ObjectNestedWithArgs.id` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   * | **Type** | {@link $NamedTypes.$Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs} |
   * | **Path** | `ObjectNestedWithArgs.object` |
   * | **Nullability** | Optional |
   * | **Arguments** | 4 |
   */
  object?:
    | $Fields.object.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.object<_$Context>>

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
