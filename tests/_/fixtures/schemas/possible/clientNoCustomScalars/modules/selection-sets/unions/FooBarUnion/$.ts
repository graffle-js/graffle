import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as FooBarUnion from './$$.js'

/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * Union documentation.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
 * | **Members** | 2 |
 * | **Types** | {@link $Schema.Bar}, {@link $Schema.Foo} |
 */
export interface FooBarUnion<
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
   * Inline fragment selection for {@link $Schema.Bar} member.
   *
   * When the runtime value is of type {@link $Schema.Bar}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Bar} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.FooBarUnion} |
   * | **Path** | `FooBarUnion -> Bar` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.foobarunions({
   * __typename: true,
   * ___on_Bar: {
   * // ... Bar-specific fields
   * }
   * })
   * ```
   */
  ___on_Bar?: $Named.Bar<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Foo} member.
   *
   * When the runtime value is of type {@link $Schema.Foo}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Foo} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.FooBarUnion} |
   * | **Path** | `FooBarUnion -> Foo` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types} ↗
   *
   * @example
   * ```ts
   * query.foobarunions({
   * __typename: true,
   * ___on_Foo: {
   * // ... Foo-specific fields
   * }
   * })
   * ```
   */
  ___on_Foo?: $Named.Foo<_$Context>
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
