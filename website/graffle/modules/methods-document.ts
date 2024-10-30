import type * as $$Utilities from "graffle/utilities-for-generated";
import * as $$Schema from "./schema.js";
import * as $$SelectionSets from "./selection-sets.js";

export interface Document<$Context extends $$Utilities.Context> {
  <$Document>(
    document: $$Utilities.ExactNonEmpty<$Document, $$SelectionSets.$Document<$Context["scalars"]>>,
  ): $$Utilities.DocumentRunner<
    $Context,
    $$Schema.Schema,
    // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
    // Satisfying the constraint on the DocumentRunner type.
    $Document
  >;
}

export interface BuilderMethodsDocumentFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: Document<this["params"]>;
}
