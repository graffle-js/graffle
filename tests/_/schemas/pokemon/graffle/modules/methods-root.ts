import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >

  battles: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.battles<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { battles: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'battles'
      >
    >
  >

  beings: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.beings<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { beings: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'beings'
      >
    >
  >

  pokemonByName: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.pokemonByName<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { pokemonByName: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pokemonByName'
      >
    >
  >

  pokemons: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.pokemons<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { pokemons: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pokemons'
      >
    >
  >

  trainerByName: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.trainerByName<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { trainerByName: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'trainerByName'
      >
    >
  >

  trainers: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.trainers<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { trainers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'trainers'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >

  addPokemon: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addPokemon<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addPokemon: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPokemon'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  query: QueryMethods<$Context>
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
