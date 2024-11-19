import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
  ) => Promise<
    & (null | {})
    & $$Utilities.HandleOutput<
      $Context,
      InferResult.OperationMutation<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$Schema.Schema<$Context['scalars']>
      >
    >
  >
  __typename: () => Promise<
    & (null | {})
    & $$Utilities.HandleOutputGraffleRootField<
      $Context,
      { __typename: 'Mutation' },
      '__typename'
    >
  >

  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.id<$Context['scalars']>>,
  ) => Promise<
    & (null | {})
    & $$Utilities.HandleOutputGraffleRootField<
      $Context,
      InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
      'id'
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    & (null | {})
    & $$Utilities.HandleOutputGraffleRootField<
      $Context,
      InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
      'idNonNull'
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
