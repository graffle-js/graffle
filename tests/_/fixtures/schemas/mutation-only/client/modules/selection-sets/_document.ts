import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from './_context.js'
import type { Mutation } from './roots/Mutation/$.js'

export interface $Document<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  mutation?: Record<string, Mutation<_$Context>>
}
