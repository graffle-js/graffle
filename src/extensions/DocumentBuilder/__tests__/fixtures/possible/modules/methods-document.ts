import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as $$Schema from './schema.js'
import type * as $$SelectionSets from './selection-sets.js'

export interface Document<$Context extends $$Utilities.Context> {
  <$Document>(
    document: $$Utilities.ExactNonEmpty<
      $Document,
      $$SelectionSets.$Document<
        { scalars: $Context['scalars'] }
      >
    >,
  ): $$Utilities.DocumentBuilderKit.DocumentRunner<
    $Context,
    $$Schema.Schema,
    // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
    // Satisfying the constraint on the DocumentRunner type.
    $Document
  >
}

export interface BuilderMethodsDocumentFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: Document<this['params']>
}
