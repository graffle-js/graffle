import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as DateUnion from './$$.js'

/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
 * | **Members** | 2 |
 * | **Types** | {@link $Schema.DateObject1}, {@link $Schema.DateObject2} |
 */
export interface DateUnion<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
   * the name is one of the member type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
  /**
   * Inline fragment selection for {@link $Schema.DateObject1} member.
   *
   * When the runtime value is of type {@link $Schema.DateObject1}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateObject1} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.DateUnion} |
   * | **Path** | `DateUnion -> DateObject1` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.dateunions({
   * __typename: true,
   * ___on_DateObject1: {
   * // ... DateObject1-specific fields
   * }
   * })
   * ```
   */
  ___on_DateObject1?: $Named.DateObject1<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.DateObject2} member.
   *
   * When the runtime value is of type {@link $Schema.DateObject2}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateObject2} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.DateUnion} |
   * | **Path** | `DateUnion -> DateObject2` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.dateunions({
   * __typename: true,
   * ___on_DateObject2: {
   * // ... DateObject2-specific fields
   * }
   * })
   * ```
   */
  ___on_DateObject2?: $Named.DateObject2<_$Context>
  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
}
