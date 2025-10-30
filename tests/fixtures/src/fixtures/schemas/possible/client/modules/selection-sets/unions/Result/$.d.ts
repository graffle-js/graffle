import type * as $$Utilities from '#graffle/utilities-for-generated';
import type * as $Named from '../../$named.js';
import type { $DefaultSelectionContext } from '../../_context.js';
import type { $FragmentInline } from './fragment.js';
export type * as Result from './$$.js';
/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Members** | 3 |
 * | **Types** | {@link $Schema.ErrorOne}, {@link $Schema.ErrorTwo}, {@link $Schema.Object1} |
 */
export interface Result<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> {
    /**
     * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
     * the name is one of the member type names, whichever is ultimately returned at runtime.
     *
     * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
     */
    __typename?: $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString;
    /**
     * Inline fragment selection for {@link $Schema.ErrorOne} member.
     *
     * When the runtime value is of type {@link $Schema.ErrorOne}, this selection set is applied, allowing you to select fields specific to this member type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.ErrorOne} |
     * | **Kind** | Union Member |
     * | **Parent** | {@link $Schema.Result} |
     * | **Path** | `Result -> ErrorOne` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
     *
     * @example
     * ```ts
     * query.results({
     * __typename: true,
     * ___on_ErrorOne: {
     * // ... ErrorOne-specific fields
     * }
     * })
     * ```
     */
    ___on_ErrorOne?: $Named.ErrorOne<_$Context>;
    /**
     * Inline fragment selection for {@link $Schema.ErrorTwo} member.
     *
     * When the runtime value is of type {@link $Schema.ErrorTwo}, this selection set is applied, allowing you to select fields specific to this member type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.ErrorTwo} |
     * | **Kind** | Union Member |
     * | **Parent** | {@link $Schema.Result} |
     * | **Path** | `Result -> ErrorTwo` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
     *
     * @example
     * ```ts
     * query.results({
     * __typename: true,
     * ___on_ErrorTwo: {
     * // ... ErrorTwo-specific fields
     * }
     * })
     * ```
     */
    ___on_ErrorTwo?: $Named.ErrorTwo<_$Context>;
    /**
     * Inline fragment selection for {@link $Schema.Object1} member.
     *
     * When the runtime value is of type {@link $Schema.Object1}, this selection set is applied, allowing you to select fields specific to this member type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.Object1} |
     * | **Kind** | Union Member |
     * | **Parent** | {@link $Schema.Result} |
     * | **Path** | `Result -> Object1` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
     *
     * @example
     * ```ts
     * query.results({
     * __typename: true,
     * ___on_Object1: {
     * // ... Object1-specific fields
     * }
     * })
     * ```
     */
    ___on_Object1?: $Named.Object1<_$Context>;
    /**
     * Inline fragments for field groups.
     *
     * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
     * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
     */
    ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[];
}
//# sourceMappingURL=$.d.ts.map