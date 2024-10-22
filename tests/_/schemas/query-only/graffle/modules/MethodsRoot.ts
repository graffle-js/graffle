import { type Simplify } from 'type-fest'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface QueryMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.Query<$SelectionSet, Schema<$Context['scalars']>>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >

  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.id<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ id: $SelectionSet }, Schema<$Context['scalars']>>,
        'id'
      >
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ idNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'idNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.ClientContext> {
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
