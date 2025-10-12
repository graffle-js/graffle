import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from './_context.js'
import type { Query } from './roots/Query/$.js'

export interface $Document<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  query?: Record<string, Query<_$Context>>
}
