import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { lowerCaseObject2 } from './_.js'

export interface $FragmentInline<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends lowerCaseObject2<_$Context>, GraphqlKit.Document.Object.Select.Directive.$Groups.InlineFragment.Fields {}
