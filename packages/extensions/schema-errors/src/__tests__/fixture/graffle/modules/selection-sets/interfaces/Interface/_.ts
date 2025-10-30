import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as Interface from './__.js'

/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 1 |
 * | **Implementors** | {@link $Schema.Object1ImplementingInterface}, {@link $Schema.Object2ImplementingInterface} |
 */
export interface Interface<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.Docpar.Object.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Interface} |
   * | **Path** | `Interface.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id.$Expanded<_$Context>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasString
  /**
   * Inline fragment selection for {@link $Schema.Object1ImplementingInterface} implementor.
   *
   * When the runtime value is of type {@link $Schema.Object1ImplementingInterface}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1ImplementingInterface} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Interface} |
   * | **Path** | `Interface -> Object1ImplementingInterface` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.interfaces({
   * id: true,
   * name: true,
   * ___on_Object1ImplementingInterface: {
   * // ... Object1ImplementingInterface-specific fields
   * }
   * })
   * ```
   */
  ___on_Object1ImplementingInterface?: $Named.Object1ImplementingInterface<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Object2ImplementingInterface} implementor.
   *
   * When the runtime value is of type {@link $Schema.Object2ImplementingInterface}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object2ImplementingInterface} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Interface} |
   * | **Path** | `Interface -> Object2ImplementingInterface` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.interfaces({
   * id: true,
   * name: true,
   * ___on_Object2ImplementingInterface: {
   * // ... Object2ImplementingInterface-specific fields
   * }
   * })
   * ```
   */
  ___on_Object2ImplementingInterface?: $Named.Object2ImplementingInterface<_$Context>
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
   * A meta field. Is the name of the type being selected. Since this is a interface type and thus polymorphic,
   * the name is one of the implementor type names, whichever is ultimately returned at runtime.
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
