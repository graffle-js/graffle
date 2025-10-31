import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'

export type * as StringFilter from './fields.js'

/**
 * Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 2 |
 * | **All Fields Nullable** | Yes |
 */
export interface StringFilter<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  contains?: $Scalars.String<_$Context>
  in?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
}
