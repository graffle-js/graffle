import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type * as $$SchemaMap from './schema-driven-data-map.js'
import type * as $$Schema from './schema/_.js'
import type * as $$SelectionSets from './selection-sets/_.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root methods.
 *
 * All methods return Promises. Use `.query.$batch(...)` to select multiple fields at once.
 */
export interface QueryMethods<$Context extends $$Utilities.Context> {
  /**
   * Select multiple Query fields at once.
   *
   * Pass a selection set object that includes the fields you want.
   * Use this method to request multiple fields in a single request for better performance.
   */

  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query<{ scalars: $Context['scalars'] }>>,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$SchemaMap.SchemaDrivenDataMap
      >,
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutput<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            $$Utilities.AssertExtendsObject<$SelectionSet>,
            $$Schema.Schema<$Context['scalars']>
          >
        >
      >
    >
  >

  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | __typename} meta-field.
   *
   * The `__typename` field returns the name of the object type. In this case, it will always return `"Query"`.
   */

  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
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
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Battle}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.battles` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  battles: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.battles<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ battles: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { battles: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'battles'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ battles: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { battles: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'battles'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Being}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.beings` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  beings: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.beings<{ scalars: $Context['scalars'] }>>,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ beings: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { beings: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'beings'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ beings: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { beings: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'beings'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.pokemonByName` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  pokemonByName: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.pokemonByName<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ pokemonByName: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { pokemonByName: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pokemonByName'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { pokemonByName: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { pokemonByName: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'pokemonByName'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  pokemons: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.pokemons<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ pokemons: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { pokemons: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pokemons'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ pokemons: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { pokemons: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'pokemons'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.trainerByName` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  trainerByName: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.trainerByName<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ trainerByName: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { trainerByName: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'trainerByName'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { trainerByName: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { trainerByName: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'trainerByName'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.trainers` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  trainers: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.trainers<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ trainers: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { trainers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'trainers'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ trainers: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { trainers: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'trainers'
        >
      >
    >
  >
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root methods.
 *
 * All methods return Promises. Use `.mutation.$batch(...)` to select multiple fields at once.
 */
export interface MutationMethods<$Context extends $$Utilities.Context> {
  /**
   * Select multiple Mutation fields at once.
   *
   * Pass a selection set object that includes the fields you want.
   * Use this method to request multiple fields in a single request for better performance.
   */

  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation<{ scalars: $Context['scalars'] }>>,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$SchemaMap.SchemaDrivenDataMap
      >,
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutput<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            $$Utilities.AssertExtendsObject<$SelectionSet>,
            $$Schema.Schema<$Context['scalars']>
          >
        >
      >
    >
  >

  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | __typename} meta-field.
   *
   * The `__typename` field returns the name of the object type. In this case, it will always return `"Mutation"`.
   */

  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
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
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPokemon` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */

  addPokemon: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.addPokemon<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<{ addPokemon: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationMutation<
          { addPokemon: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPokemon'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          { addPokemon: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { addPokemon: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'addPokemon'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Boolean}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.resetData` |
   * | **Nullability** | Required |
   */

  resetData: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.resetData<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<{ resetData: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationMutation<
          { resetData: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'resetData'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<{ resetData: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { resetData: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'resetData'
        >
      >
    >
  >
}

export interface BattleMethods<$Context extends $$Utilities.Context> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Battle}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.battles` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  list: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.battles<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ battles: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { battles: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'battles'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ battles: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { battles: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'battles'
        >
      >
    >
  >
}

export interface BeingMethods<$Context extends $$Utilities.Context> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Being}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.beings` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  list: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.beings<{ scalars: $Context['scalars'] }>>,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ beings: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { beings: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'beings'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ beings: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { beings: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'beings'
        >
      >
    >
  >
}

export interface PokemonMethods<$Context extends $$Utilities.Context> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.pokemonByName` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  findByName: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.pokemonByName<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ pokemonByName: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { pokemonByName: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pokemonByName'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { pokemonByName: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { pokemonByName: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'pokemonByName'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  list: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.pokemons<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ pokemons: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { pokemons: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pokemons'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ pokemons: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { pokemons: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'pokemons'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPokemon` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */

  create: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.addPokemon<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<{ addPokemon: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationMutation<
          { addPokemon: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPokemon'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          { addPokemon: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { addPokemon: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'addPokemon'
        >
      >
    >
  >
}

export interface TrainerMethods<$Context extends $$Utilities.Context> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.trainerByName` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  findByName: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.trainerByName<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ trainerByName: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { trainerByName: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'trainerByName'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { trainerByName: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { trainerByName: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'trainerByName'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.trainers` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  list: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.trainers<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<{ trainers: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationQuery<
          { trainers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'trainers'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<{ trainers: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { trainers: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'trainers'
        >
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  /**
   * Access to {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root field methods.
   *
   * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
   * Use `.$batch(...)` to select multiple query fields in a single request.
   *
   * @example Single field
   * ```ts
   * const user = await graffle.query.user({ id: true, name: true })
   * ```
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.query.$batch({
   * user: { id: true, name: true },
   * posts: { title: true, content: true }
   * })
   * ```
   */
  query: QueryMethods<$Context>
  /**
   * Access to {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root field methods.
   *
   * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
   * Use `.$batch(...)` to select multiple mutation fields in a single request.
   *
   * @example Single field
   * ```ts
   * const result = await graffle.mutation.createUser({
   * id: true,
   * name: true
   * })
   * ```
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.mutation.$batch({
   * createUser: { id: true, name: true },
   * createPost: { id: true, title: true }
   * })
   * ```
   */
  mutation: MutationMethods<$Context>
  battle: BattleMethods<$Context>
  being: BeingMethods<$Context>
  pokemon: PokemonMethods<$Context>
  trainer: TrainerMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.Kind.Kind {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['parameters']>
}
