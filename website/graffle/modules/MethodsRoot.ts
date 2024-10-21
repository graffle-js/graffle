import type { InferResult } from 'graffle/schema'
import type * as $$Utilities from 'graffle/utilities-for-generated'
import { type Simplify } from 'type-fest'
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
  continent: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.continent<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ continent: $SelectionSet }, Schema<$Context['scalars']>>,
        'continent'
      >
    >
  >
  continents: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.continents<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ continents: $SelectionSet }, Schema<$Context['scalars']>>,
        'continents'
      >
    >
  >
  countries: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.countries<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ countries: $SelectionSet }, Schema<$Context['scalars']>>,
        'countries'
      >
    >
  >
  country: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.country<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ country: $SelectionSet }, Schema<$Context['scalars']>>,
        'country'
      >
    >
  >
  language: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.language<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ language: $SelectionSet }, Schema<$Context['scalars']>>,
        'language'
      >
    >
  >
  languages: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.languages<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ languages: $SelectionSet }, Schema<$Context['scalars']>>,
        'languages'
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
