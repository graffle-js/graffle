import type * as $$Utilities from "graffle/utilities-for-generated";
import type * as $$Schema from "./schema/$.js";
import type * as $$SelectionSets from "./selection-sets.js";

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<{ scalars: $Context["scalars"] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context["scalars"]>
        >
      >
    >
  >;
  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: "Query" },
        "__typename"
      >
    >
  >;
  /**
   * Retrieve all battles that have occurred.
   */
  battles: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.battles<{ scalars: $Context["scalars"] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { battles: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "battles"
      >
    >
  >;
  /**
   * Retrieve all beings (Pokemon, Trainers, and Patrons).
   */
  beings: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.beings<{ scalars: $Context["scalars"] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { beings: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "beings"
      >
    >
  >;
  /**
   * Find Pokemon by their name.
   */
  pokemonByName: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.pokemonByName<{ scalars: $Context["scalars"] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { pokemonByName: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "pokemonByName"
      >
    >
  >;
  /**
   * Retrieve all Pokemon, optionally filtered.
   */
  pokemons: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.pokemons<{ scalars: $Context["scalars"] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { pokemons: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "pokemons"
      >
    >
  >;
  /**
   * Find a trainer by their name.
   */
  trainerByName: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.trainerByName<{ scalars: $Context["scalars"] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { trainerByName: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "trainerByName"
      >
    >
  >;
  /**
   * Retrieve all trainers.
   */
  trainers: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.trainers<{ scalars: $Context["scalars"] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { trainers: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "trainers"
      >
    >
  >;
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<{ scalars: $Context["scalars"] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context["scalars"]>
        >
      >
    >
  >;
  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: "Mutation" },
        "__typename"
      >
    >
  >;
  /**
   * Add a new Pokemon to the database.
   */
  addPokemon: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPokemon<{ scalars: $Context["scalars"] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
          { addPokemon: $SelectionSet },
          $$Schema.Schema<$Context["scalars"]>
        >,
        "addPokemon"
      >
    >
  >;
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  query: QueryMethods<$Context>;
  mutation: MutationMethods<$Context>;
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this["params"]>;
}
