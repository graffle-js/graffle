import type * as $$Utilities from '#graffle/utilities-for-generated';
import type * as $Named from '../../$named.js';
import type { $DefaultSelectionContext } from '../../_context.js';
import type * as $Scalars from '../../scalars/$.js';
export type * as InputObjectCircular from './fields.js';
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
export interface InputObjectCircular<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> {
    circular?: $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Named.InputObjectCircular<_$Context> | null | undefined>;
    date?: $Scalars.Date<_$Context>;
}
//# sourceMappingURL=$.d.ts.map