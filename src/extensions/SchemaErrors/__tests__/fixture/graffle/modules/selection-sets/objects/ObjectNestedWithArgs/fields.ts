import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type id<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id$SelectionSet<_$Context>

export interface id$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {
  /**
   * Arguments for `id` field. No arguments are required so you may omit this.
   */
  $?: id$Arguments<_$Context>
}

export interface id$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `ID` |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs}.id |
   * | **Path** | `ObjectNestedWithArgs.id(filter)` |
   * | **Nullability** | Optional |
   */
  filter?: $Scalars.ID<_$Context>
}

export type id$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
  | id$SelectionSet<_$Context>
>

type $object<_$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> =
  $object$SelectionSet<_$Context>

export interface $object$SelectionSet<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.Base, $Named.Object1<_$Context> {
  /**
   * Arguments for `object` field. No arguments are required so you may omit this.
   */
  $?: $object$Arguments<_$Context>
}

export interface $object$Arguments<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Boolean` |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs}.object |
   * | **Path** | `ObjectNestedWithArgs.object(boolean)` |
   * | **Nullability** | Optional |
   */
  boolean?: $Scalars.Boolean<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Float` |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs}.object |
   * | **Path** | `ObjectNestedWithArgs.object(float)` |
   * | **Nullability** | Optional |
   */
  float?: $Scalars.Float<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `Int` |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs}.object |
   * | **Path** | `ObjectNestedWithArgs.object(int)` |
   * | **Nullability** | Optional |
   */
  int?: $Scalars.Int<_$Context>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **GraphQL Type** | `String` |
   * | **Parent** | {@link $NamedTypes.$ObjectNestedWithArgs}.object |
   * | **Path** | `ObjectNestedWithArgs.object(string)` |
   * | **Nullability** | Optional |
   */
  string?: $Scalars.String<_$Context>
}

type $object$Expanded<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Simplify<
  $object$SelectionSet<_$Context>
>

export { type $object as object }
export { type $object$Expanded as object$Expanded }
