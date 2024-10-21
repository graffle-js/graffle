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
  addPokemon: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Mutation.addPokemon<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ addPokemon: $SelectionSet }, Schema>,
        'addPokemon'
      >
    >
  >
}

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
  battles: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.battles<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ battles: $SelectionSet }, Schema>,
        'battles'
      >
    >
  >
  beings: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.beings<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ beings: $SelectionSet }, Schema>,
        'beings'
      >
    >
  >
  pokemon: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.pokemon<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ pokemon: $SelectionSet }, Schema>,
        'pokemon'
      >
    >
  >
  pokemonByName: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.pokemonByName<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ pokemonByName: $SelectionSet }, Schema>,
        'pokemonByName'
      >
    >
  >
  pokemons: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.pokemons<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ pokemons: $SelectionSet }, Schema>,
        'pokemons'
      >
    >
  >
  trainerByName: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.trainerByName<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ trainerByName: $SelectionSet }, Schema>,
        'trainerByName'
      >
    >
  >
  trainers: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.trainers<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ trainers: $SelectionSet }, Schema>,
        'trainers'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends Utils.ClientContext> {
  mutation: MutationMethods<$Context>
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends Utils.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
