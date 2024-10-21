import { type Simplify } from 'type-fest'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as Utils from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface MutationMethods<$Context extends Utils.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Mutation<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutput<
        $Context,
        InferResult.Mutation<$SelectionSet, Schema>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >
  id: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Mutation.id<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ id: $SelectionSet }, Schema>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ idNonNull: $SelectionSet }, Schema>,
        'idNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends Utils.ClientContext> {
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends Utils.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
