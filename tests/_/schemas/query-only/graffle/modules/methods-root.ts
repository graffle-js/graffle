import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
  ) => Promise<
    & (null | {})
    & $$Utilities.HandleOutput<
      $Context,
      InferResult.OperationQuery<$$Utilities.AssertExtendsObject<$SelectionSet>, $$Schema.Schema<$Context['scalars']>>
    >
  >
  __typename: () => Promise<
    & (null | {})
    & $$Utilities.HandleOutputGraffleRootField<
      $Context,
      { __typename: 'Query' },
      '__typename'
    >
  >

  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<$Context['scalars']>>,
  ) => Promise<
    & (null | {})
    & $$Utilities.HandleOutputGraffleRootField<
      $Context,
      InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
      'id'
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    & (null | {})
    & $$Utilities.HandleOutputGraffleRootField<
      $Context,
      InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
      'idNonNull'
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
