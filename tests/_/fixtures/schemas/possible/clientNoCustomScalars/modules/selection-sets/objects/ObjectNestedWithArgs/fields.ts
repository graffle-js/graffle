import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type id<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | id.$SelectionSet<_$Context>

export namespace id {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
    /**
     * Arguments for `id` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
    | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
    | $SelectionSet<_$Context>
  >
}

type $object<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $object.$SelectionSet<_$Context>

namespace $object {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
    /**
     * Arguments for `object` field. No arguments are required so you may omit this.
     */
    $?: $Arguments<_$Context>
  }

  export interface $Arguments<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
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

  /**
   * This is the "expanded" version of the `object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

export type { $object as object }
