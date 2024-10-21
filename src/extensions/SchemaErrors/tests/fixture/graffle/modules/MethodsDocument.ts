import type * as Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSets from './SelectionSets.js'

export interface Document<$Context extends Utilities.ClientContext> {
  <$Document>(
    document: Utilities.ExactNonEmpty<$Document, SelectionSets.$Document<$Context['scalars']>>,
  ): Utilities.DocumentRunner<
    $Context,
    Schema,
    // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
    // Satisfying the constraint on the DocumentRunner type.
    $Document
  >
}

export interface BuilderMethodsDocumentFn extends Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: Document<this['params']>
}
