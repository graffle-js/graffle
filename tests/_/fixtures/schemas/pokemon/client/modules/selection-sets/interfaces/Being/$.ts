import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'

export interface Being<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Being} |
   * | **Path** | `Being.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | $Fields.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Being} |
   * | **Path** | `Being.name` |
   * | **Nullability** | Optional |
   */
  name?:
    | $Fields.name$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.name<_$Context>>
  /**
   * Inline fragment selection for {@link $Schema.Patron} implementor.
   *
   * When the runtime value is of type {@link $Schema.Patron}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Patron} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Being} |
   * | **Path** | `Being -> Patron` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.beings({
   * id: true,
   * name: true,
   * ___on_Patron: {
   * // ... Patron-specific fields
   * }
   * })
   * ```
   */
  ___on_Patron?: $Named.Patron<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Pokemon} implementor.
   *
   * When the runtime value is of type {@link $Schema.Pokemon}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Being} |
   * | **Path** | `Being -> Pokemon` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.beings({
   * id: true,
   * name: true,
   * ___on_Pokemon: {
   * // ... Pokemon-specific fields
   * }
   * })
   * ```
   */
  ___on_Pokemon?: $Named.Pokemon<_$Context>
  /**
   * Inline fragment selection for {@link $Schema.Trainer} implementor.
   *
   * When the runtime value is of type {@link $Schema.Trainer}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.Being} |
   * | **Path** | `Being -> Trainer` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types} ↗
   *
   * @example
   * ```ts
   * query.beings({
   * id: true,
   * name: true,
   * ___on_Trainer: {
   * // ... Trainer-specific fields
   * }
   * })
   * ```
   */
  ___on_Trainer?: $Named.Trainer<_$Context>
  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: Being$FragmentInline<_$Context> | Being$FragmentInline<_$Context>[]
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

export interface Being$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends Being<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}
