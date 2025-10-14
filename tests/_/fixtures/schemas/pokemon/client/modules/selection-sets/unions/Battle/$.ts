import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as Battle from './$$.js'

/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Members** | 3 |
 * | **Types** | {@link $Schema.BattleRoyale}, {@link $Schema.BattleTrainer}, {@link $Schema.BattleWild} |
 */
export interface Battle<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
   * the name is one of the member type names, whichever is ultimately returned at runtime.
   *
   * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
  /**
   * Inline fragment selection for {@link $Schema.BattleRoyale} member.
   *
   * When the runtime value is of type {@link $Schema.BattleRoyale}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.BattleRoyale} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.Battle} |
   * | **Path** | `Battle -> BattleRoyale` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
   *
   * @example
   * ```ts
   * query.battles({
   * __typename: true,
   * ___on_BattleRoyale: {
   * // ... BattleRoyale-specific fields
   * }
   * })
   * ```
   */
  ___on_BattleRoyale?: $Named.BattleRoyale<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.BattleTrainer} member.
   *
   * When the runtime value is of type {@link $Schema.BattleTrainer}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.BattleTrainer} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.Battle} |
   * | **Path** | `Battle -> BattleTrainer` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
   *
   * @example
   * ```ts
   * query.battles({
   * __typename: true,
   * ___on_BattleTrainer: {
   * // ... BattleTrainer-specific fields
   * }
   * })
   * ```
   */
  ___on_BattleTrainer?: $Named.BattleTrainer<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.BattleWild} member.
   *
   * When the runtime value is of type {@link $Schema.BattleWild}, this selection set is applied, allowing you to select fields specific to this member type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.BattleWild} |
   * | **Kind** | Union Member |
   * | **Parent** | {@link $Schema.Battle} |
   * | **Path** | `Battle -> BattleWild` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
   *
   * @example
   * ```ts
   * query.battles({
   * __typename: true,
   * ___on_BattleWild: {
   * // ... BattleWild-specific fields
   * }
   * })
   * ```
   */
  ___on_BattleWild?: $Named.BattleWild<_$Context>
  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
}
