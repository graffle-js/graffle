import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from './_context.js'
import type { Mutation } from './roots/Mutation/_.js'
import type { Query } from './roots/Query/_.js'

export interface $Document<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  query?: Record<string, Query<_$Context>>
  mutation?: Record<string, Mutation<_$Context>>
}
