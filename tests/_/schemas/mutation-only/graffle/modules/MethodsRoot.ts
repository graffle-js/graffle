import { type Simplify } from 'type-fest'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface MutationMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.Mutation<$SelectionSet, Schema<$Context['scalars']>>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >
  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation.id<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ id: $SelectionSet }, Schema<$Context['scalars']>>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ idNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'idNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.ClientContext> {
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
