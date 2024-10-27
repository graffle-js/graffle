import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface QueryMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationQuery<$SelectionSet, Schema<$Context['scalars']>>
      >
    >
  >
  __typename: () => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >

  battles: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.battles<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ battles: $SelectionSet }, Schema<$Context['scalars']>>,
        'battles'
      >
    >
  >

  beings: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.beings<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ beings: $SelectionSet }, Schema<$Context['scalars']>>,
        'beings'
      >
    >
  >

  pokemon: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.pokemon<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ pokemon: $SelectionSet }, Schema<$Context['scalars']>>,
        'pokemon'
      >
    >
  >

  pokemonByName: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.pokemonByName<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ pokemonByName: $SelectionSet }, Schema<$Context['scalars']>>,
        'pokemonByName'
      >
    >
  >

  pokemons: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.pokemons<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ pokemons: $SelectionSet }, Schema<$Context['scalars']>>,
        'pokemons'
      >
    >
  >

  trainerByName: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.trainerByName<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ trainerByName: $SelectionSet }, Schema<$Context['scalars']>>,
        'trainerByName'
      >
    >
  >

  trainers: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.trainers<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ trainers: $SelectionSet }, Schema<$Context['scalars']>>,
        'trainers'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationMutation<$SelectionSet, Schema<$Context['scalars']>>
      >
    >
  >
  __typename: () => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >

  addPokemon: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation.addPokemon<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ addPokemon: $SelectionSet }, Schema<$Context['scalars']>>,
        'addPokemon'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.ClientContext> {
  query: QueryMethods<$Context>
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
