import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'

export type id<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
  | id.$SelectionSet<_$Context>

export namespace id {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base {
  }

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    | $SelectionSet<_$Context>
  >
}
