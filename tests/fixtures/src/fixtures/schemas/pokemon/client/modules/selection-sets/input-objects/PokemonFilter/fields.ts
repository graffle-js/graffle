import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'

export type birthday<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.DateFilter<_$Context> | null | undefined>

export type name<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.StringFilter<_$Context> | null | undefined>

export type type<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.PokemonType | null | undefined>
