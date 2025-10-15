import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'

export type id<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | id.$SelectionSet<_$Context>

export namespace id {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
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
    | $SelectionSet<_$Context>
  >
}

type $object<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $object.$SelectionSet<_$Context>

namespace $object {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.Object1<_$Context> {
  }

  /**
   * This is the "expanded" version of the `object` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    $SelectionSet<_$Context>
  >
}

export type { $object as object }
