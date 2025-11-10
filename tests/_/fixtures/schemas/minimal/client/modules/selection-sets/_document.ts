import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from './_context.js'
import type { Query } from './roots/Query/_.js'

export interface $Document<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  query?: Record<string, Query<_$Context>>
}
