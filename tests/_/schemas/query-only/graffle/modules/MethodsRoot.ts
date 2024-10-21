import { type Simplify } from 'type-fest'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as Utils from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface QueryMethods<$Context extends Utils.ClientContext> {
  $batch: <$SelectionSet>(selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query<$Context['scalars']>>) => Promise<
    Simplify<
      Utils.HandleOutput<
        $Context,
        InferResult.Query<$SelectionSet, Schema>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >
  id: <$SelectionSet>(selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.id<$Context['scalars']>>) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ id: $SelectionSet }, Schema>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ idNonNull: $SelectionSet }, Schema>,
        'idNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends Utils.ClientContext> {
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends Utils.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
