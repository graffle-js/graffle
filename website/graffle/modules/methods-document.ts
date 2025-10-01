import type * as $$Utilities from "graffle/utilities-for-generated";
import type * as $$Schema from "./schema.js";
import type * as $$SelectionSets from "./selection-sets.js";

export interface Document<$Context> {
  <$Document>(
    document: $$Utilities.ExactNonEmpty<
      $Document,
      $$SelectionSets.$Document<
        // @ts-expect-error Context constraint missing to avoid TS compare depth limit.
        { scalars: $Context["scalars"] }
      >
    >,
  ): $$Utilities.DocumentBuilderKit.DocumentRunner<
    $Context,
    $$Schema.Schema,
    // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
    // Satisfying the constraint on the DocumentRunner type.
    $Document
  >;
}

export interface BuilderMethodsDocumentFn extends $$Utilities.TypeFunction {
  return: Document<this["params"]>;
}
