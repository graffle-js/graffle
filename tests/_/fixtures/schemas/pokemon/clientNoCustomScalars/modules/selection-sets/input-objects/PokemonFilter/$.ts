import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'

export type * as PokemonFilter from './fields.js'

/**
 * Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 3 |
 * | **All Fields Nullable** | Yes |
 */
export interface PokemonFilter<
  _$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> {
  birthday?: $$Utilities.Docpar.Object.Var.Maybe<$Named.DateFilter<_$Context> | null | undefined>
  name?: $$Utilities.Docpar.Object.Var.Maybe<$Named.StringFilter<_$Context> | null | undefined>
  $type?: $$Utilities.Docpar.Object.Var.Maybe<$Named.PokemonType | null | undefined>
}
