import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type contains<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $Scalars.String<_$Context>

type $in<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  $$Utilities.Docpar.Object.Var.Maybe<Array<$Scalars.String<_$Context>> | null | undefined>
export { type $in as in }
