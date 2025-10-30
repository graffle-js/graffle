import type * as $$Utilities from '#graffle/utilities-for-generated';
import type { $DefaultSelectionContext } from '../../_context.js';
import type * as $Fields from './fields.js';
import type { $FragmentInline } from './fragment.js';
export type * as DateObject2 from './$$.js';
/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 1 |
 */
export interface DateObject2<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **Type** | {@link $NamedTypes.$Date} |
     * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
     * | **Parent** | {@link $NamedTypes.$DateObject2} |
     * | **Path** | `DateObject2.date2` |
     * | **Nullability** | Optional |
     */
    date2?: $Fields.date2.$Expanded<_$Context> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.date2<_$Context>> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString;
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
     * A meta field. Is the name of the type being selected.
     *
     * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
     */
    __typename?: $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator> | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString;
}
//# sourceMappingURL=$.d.ts.map