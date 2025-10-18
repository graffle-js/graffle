import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'

export type infoId<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | infoId.$SelectionSet<_$Context>

export namespace infoId {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `infoId` type. It is identical except for the fact
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

export type message<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | $$Utilities.Docpar.Object.Select.Indicator.NoArgsIndicator
  | $$Utilities.Docpar.Object.Select.SelectAlias.SelectAliasShort
  | message.$SelectionSet<_$Context>

export namespace message {
  export interface $SelectionSet<
    _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends $$Utilities.Docpar.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `message` type. It is identical except for the fact
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
