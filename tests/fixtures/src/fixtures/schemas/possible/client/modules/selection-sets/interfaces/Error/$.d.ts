import type * as $$Utilities from '#graffle/utilities-for-generated';
import type * as $Named from '../../$named.js';
import type { $DefaultSelectionContext } from '../../_context.js';
import type * as $Fields from './fields.js';
import type { $FragmentInline } from './fragment.js';
export type * as Error from './$$.js';
/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 1 |
 * | **Implementors** | {@link $Schema.ErrorOne}, {@link $Schema.ErrorTwo} |
 */
export interface Error<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $NamedTypes.$String}! |
     * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
     * | **Parent** | {@link $NamedTypes.$Error} |
     * | **Path** | `Error.message` |
     * | **Nullability** | Required |
     */
    message?: $Fields.message.$Expanded<_$Context> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.message<_$Context>> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString;
    /**
     * Inline fragment selection for {@link $Schema.ErrorOne} implementor.
     *
     * When the runtime value is of type {@link $Schema.ErrorOne}, this selection set is applied, allowing you to select fields specific to this implementor type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.ErrorOne} |
     * | **Kind** | Interface Implementor |
     * | **Parent** | {@link $Schema.Error} |
     * | **Path** | `Error -> ErrorOne` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
     *
     * @example
     * ```ts
     * query.errors({
     * id: true,
     * name: true,
     * ___on_ErrorOne: {
     * // ... ErrorOne-specific fields
     * }
     * })
     * ```
     */
    ___on_ErrorOne?: $Named.ErrorOne<_$Context>;
    /**
     * Inline fragment selection for {@link $Schema.ErrorTwo} implementor.
     *
     * When the runtime value is of type {@link $Schema.ErrorTwo}, this selection set is applied, allowing you to select fields specific to this implementor type.
     *
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $Schema.ErrorTwo} |
     * | **Kind** | Interface Implementor |
     * | **Parent** | {@link $Schema.Error} |
     * | **Path** | `Error -> ErrorTwo` |
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
     * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
     *
     * @example
     * ```ts
     * query.errors({
     * id: true,
     * name: true,
     * ___on_ErrorTwo: {
     * // ... ErrorTwo-specific fields
     * }
     * })
     * ```
     */
    ___on_ErrorTwo?: $Named.ErrorTwo<_$Context>;
    /**
     * Inline fragments for field groups.
     *
     * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
     * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
     *
     * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
     */
    ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[];
    /**
     * A meta field. Is the name of the type being selected. Since this is a interface type and thus polymorphic,
     * the name is one of the implementor type names, whichever is ultimately returned at runtime.
     *
     * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
     */
    __typename?: $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString;
}
//# sourceMappingURL=$.d.ts.map