import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { Query } from './_.js'

export interface $FragmentInline<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends Query<_$Context>, GraphqlKit.Document.Object.Select.Directive.$Groups.InlineFragment.Fields {}
