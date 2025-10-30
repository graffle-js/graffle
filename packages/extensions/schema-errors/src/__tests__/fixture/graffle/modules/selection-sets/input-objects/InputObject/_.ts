import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/_.js'

export type * as InputObject from './fields.js'

/**
 * Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 5 |
 * | **All Fields Nullable** | Yes |
 */
export interface InputObject<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  $abcEnum?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.ABCEnum | null | undefined>
  date?: $Scalars.Date<_$Context>
  dateRequired: $Scalars.Date$NonNull<_$Context>
  id?: $Scalars.ID<_$Context>
  idRequired: $Scalars.ID$NonNull<_$Context>
}
