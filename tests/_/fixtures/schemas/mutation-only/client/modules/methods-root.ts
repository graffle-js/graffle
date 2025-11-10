import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type * as $$SchemaMap from './schema-driven-data-map.js'
import type * as $$Schema from './schema/_.js'
import type * as $$SelectionSets from './selection-sets/_.js'

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
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.id` |
   * | **Nullability** | Optional |
   */

  id: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.id<{ scalars: $Context['scalars'] }>>,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<{ id: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationMutation<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<{ id: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { id: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'id'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.idNonNull` |
   * | **Nullability** | Required |
   */

  idNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.idNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<{ idNonNull: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        GraphqlKit.Document.Object.InferResult.OperationMutation<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<{ idNonNull: $SelectionSet }, $$SchemaMap.SchemaDrivenDataMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { idNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'idNonNull'
        >
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
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
}

export interface BuilderMethodsRootFn extends $$Utilities.Kind.Kind {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['parameters']>
}
