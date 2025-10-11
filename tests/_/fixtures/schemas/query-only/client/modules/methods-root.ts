import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'
import type * as $$SelectionSets from './selection-sets.js'

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
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >

  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | `__typename`} meta-field.
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
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.id` |
   * | **Nullability** | Optional |
   */

  id: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.idNonNull` |
   * | **Nullability** | Required |
   */

  idNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.idNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
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
   *
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.query.$batch({
   *   user: { id: true, name: true },
   *   posts: { title: true, content: true }
   * })
   * ```
   */
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
