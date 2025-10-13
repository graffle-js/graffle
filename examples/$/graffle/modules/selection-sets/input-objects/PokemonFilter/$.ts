import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $Named from '../../$named.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/$.js'
import type * as $Fields from './fields.js'

export type * as PokemonFilter from './fields.js'

/**
 * Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * Input filter for querying Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject} ↗ |
 * | **Fields** | 3 |
 * | **All Fields Nullable** | Yes |
 */
export interface PokemonFilter<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> {
  /**
   * Filter by Pokemon birth/catch date.
   */
  birthday?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.DateFilter<_$Context> | null | undefined>
  /**
   * Filter by Pokemon name.
   */
  name?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.StringFilter<_$Context> | null | undefined>
  /**
   * Filter by Pokemon type.
   */
  $type?: $$Utilities.DocumentBuilderKit.Var.Maybe<$Named.PokemonType | null | undefined>
}
