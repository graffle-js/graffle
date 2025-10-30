import type * as $$Utilities from '#graffle/utilities-for-generated';
import type * as $Named from '../../$named.js';
import type { $DefaultSelectionContext } from '../../_context.js';
import type { $FragmentInline } from './fragment.js';
export type * as lowerCaseUnion from './$$.js';
/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Members** | 2 |
 * | **Types** | {@link $Schema.lowerCaseObject}, {@link $Schema.lowerCaseObject2} |
 */
export interface lowerCaseUnion<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> {
    /**
     * A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
     * the name is one of the member type names, whichever is ultimately returned at runtime.
     *
     * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
     */
    __typename?: $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString;
    /**
     * Inline fragment selection for {@link $Schema.lowerCaseObject} member.
     *
     * When the runtime value is of type {@link $Schema.lowerCaseObject}, this selection set is applied, allowing you to select fields specific to this member type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.lowerCaseObject} |
     * | **Kind** | Union Member |
     * | **Parent** | {@link $Schema.lowerCaseUnion} |
     * | **Path** | `lowerCaseUnion -> lowerCaseObject` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
     *
     * @example
     * ```ts
     * query.lowercaseunions({
     * __typename: true,
     * ___on_lowerCaseObject: {
     * // ... lowerCaseObject-specific fields
     * }
     * })
     * ```
     */
    ___on_lowerCaseObject?: $Named.lowerCaseObject<_$Context>;
    /**
     * Inline fragment selection for {@link $Schema.lowerCaseObject2} member.
     *
     * When the runtime value is of type {@link $Schema.lowerCaseObject2}, this selection set is applied, allowing you to select fields specific to this member type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.lowerCaseObject2} |
     * | **Kind** | Union Member |
     * | **Parent** | {@link $Schema.lowerCaseUnion} |
     * | **Path** | `lowerCaseUnion -> lowerCaseObject2` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
     *
     * @example
     * ```ts
     * query.lowercaseunions({
     * __typename: true,
     * ___on_lowerCaseObject2: {
     * // ... lowerCaseObject2-specific fields
     * }
     * })
     * ```
     */
    ___on_lowerCaseObject2?: $Named.lowerCaseObject2<_$Context>;
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