import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'

export interface InterfaceGrandparent<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent.a` |
   * | **Nullability** | Required |
   */
  a?:
    | $Fields.a$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.a<_$Context>>
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
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> ObjectChildA` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
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
   * Inline fragment selection for {@link $Schema.ObjectChildB} implementor.
   *
   * When the runtime value is of type {@link $Schema.ObjectChildB}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectChildB} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> ObjectChildB` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
   * id: true,
   * name: true,
   * ___on_ObjectChildB: {
   * // ... ObjectChildB-specific fields
   * }
   * })
   * ```
   */
  ___on_ObjectChildB?: $Named.ObjectChildB<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.ObjectGrandparent} implementor.
   *
   * When the runtime value is of type {@link $Schema.ObjectGrandparent}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectGrandparent} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> ObjectGrandparent` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
   * id: true,
   * name: true,
   * ___on_ObjectGrandparent: {
   * // ... ObjectGrandparent-specific fields
   * }
   * })
   * ```
   */
  ___on_ObjectGrandparent?: $Named.ObjectGrandparent<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.ObjectParent} implementor.
   *
   * When the runtime value is of type {@link $Schema.ObjectParent}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectParent} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> ObjectParent` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
   * id: true,
   * name: true,
   * ___on_ObjectParent: {
   * // ... ObjectParent-specific fields
   * }
   * })
   * ```
   */
  ___on_ObjectParent?: $Named.ObjectParent<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.InterfaceChildA} implementor.
   *
   * When the runtime value is of type {@link $Schema.InterfaceChildA}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceChildA} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> InterfaceChildA` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
   * id: true,
   * name: true,
   * ___on_InterfaceChildA: {
   * // ... InterfaceChildA-specific fields
   * }
   * })
   * ```
   */
  ___on_InterfaceChildA?: $Named.InterfaceChildA<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.InterfaceChildB} implementor.
   *
   * When the runtime value is of type {@link $Schema.InterfaceChildB}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceChildB} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> InterfaceChildB` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
   * id: true,
   * name: true,
   * ___on_InterfaceChildB: {
   * // ... InterfaceChildB-specific fields
   * }
   * })
   * ```
   */
  ___on_InterfaceChildB?: $Named.InterfaceChildB<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.InterfaceParent} implementor.
   *
   * When the runtime value is of type {@link $Schema.InterfaceParent}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceParent} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.InterfaceGrandparent} |
   * | **Path** | `InterfaceGrandparent -> InterfaceParent` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.interfacegrandparents({
   * id: true,
   * name: true,
   * ___on_InterfaceParent: {
   * // ... InterfaceParent-specific fields
   * }
   * })
   * ```
   */
  ___on_InterfaceParent?: $Named.InterfaceParent<_$Context>
  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: InterfaceGrandparent$FragmentInline<_$Context> | InterfaceGrandparent$FragmentInline<_$Context>[]
  /**
   * A meta field. Is the name of the type being selected. Since this is a interface type and thus polymorphic,
   * the name is one of the implementor type names, whichever is ultimately returned at runtime.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface InterfaceGrandparent$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends
  InterfaceGrandparent<_$Context>,
  $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields
{
}
