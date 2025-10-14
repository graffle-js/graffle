import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as InterfaceChildA from './$$.js'

/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 3 |
 * | **Implementors** | {@link $Schema.ObjectChildA} |
 */
export interface InterfaceChildA<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$InterfaceChildA} |
   * | **Path** | `InterfaceChildA.a` |
   * | **Nullability** | Required |
   */
  a?:
    | $Fields.a.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.a<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$InterfaceChildA} |
   * | **Path** | `InterfaceChildA.b` |
   * | **Nullability** | Required |
   */
  b?:
    | $Fields.b.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.b<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$InterfaceChildA} |
   * | **Path** | `InterfaceChildA.c1` |
   * | **Nullability** | Required |
   */
  c1?:
    | $Fields.c1.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.c1<_$Context>>
  /**
   * Inline fragment selection for {@link $Schema.ObjectChildA} implementor.
   *
   * When the runtime value is of type {@link $Schema.ObjectChildA}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectChildA} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceChildA} |
   * | **Path** | `InterfaceChildA -> ObjectChildA` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.interfacechildas({
   * id: true,
   * name: true,
   * ___on_ObjectChildA: {
   * // ... ObjectChildA-specific fields
   * }
   * })
   * ```
   */
  ___on_ObjectChildA?: $Named.ObjectChildA<_$Context>
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
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}
