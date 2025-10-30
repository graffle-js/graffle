import type * as $$Utilities from '#graffle/utilities-for-generated';
import type * as $Named from '../../$named.js';
import type { $DefaultSelectionContext } from '../../_context.js';
export type fooBarUnion<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = fooBarUnion.$SelectionSet<_$Context>;
export declare namespace fooBarUnion {
    interface $SelectionSet<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> extends $$Utilities.Docpar.Object.Select.Bases.Base, $Named.FooBarUnion<_$Context> {
    }
    /**
     * This is the "expanded" version of the `fooBarUnion` type. It is identical except for the fact
     * that IDEs will display its contents (a union type) directly, rather than the name of this type.
     * In some cases, this is a preferable DX, making the types easier to read for users.
     */
    type $Expanded<_$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}
//# sourceMappingURL=fields.d.ts.map