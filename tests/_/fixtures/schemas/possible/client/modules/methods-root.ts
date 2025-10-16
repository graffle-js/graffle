import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema/$.js'
import type * as $$SelectionSets from './selection-sets/$.js'

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
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutput<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
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
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.InputObjectNested` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  InputObjectNested: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.InputObjectNested<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ InputObjectNested: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { InputObjectNested: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'InputObjectNested'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ InputObjectNested: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { InputObjectNested: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'InputObjectNested'
        >
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
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.InputObjectNestedNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  InputObjectNestedNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.InputObjectNestedNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { InputObjectNestedNonNull: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { InputObjectNestedNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'InputObjectNestedNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { InputObjectNestedNonNull: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { InputObjectNestedNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'InputObjectNestedNonNull'
        >
      >
    >
  >

  /**
   * Query enum field documentation.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ABCEnum} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.abcEnum` |
   * | **Nullability** | Optional |
   */

  abcEnum: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.abcEnum<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ abcEnum: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { abcEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'abcEnum'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ abcEnum: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { abcEnum: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'abcEnum'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.argInputObjectCircular` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  argInputObjectCircular: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.argInputObjectCircular<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { argInputObjectCircular: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { argInputObjectCircular: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'argInputObjectCircular'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { argInputObjectCircular: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { argInputObjectCircular: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'argInputObjectCircular'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.bigint} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.bigintField` |
   * | **Nullability** | Optional |
   */

  bigintField: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.bigintField<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ bigintField: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { bigintField: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'bigintField'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ bigintField: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { bigintField: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'bigintField'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.bigint}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.bigintFieldNonNull` |
   * | **Nullability** | Required |
   */

  bigintFieldNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.bigintFieldNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ bigintFieldNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { bigintFieldNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'bigintFieldNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { bigintFieldNonNull: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { bigintFieldNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'bigintFieldNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.date` |
   * | **Nullability** | Optional |
   */

  date: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.date<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ date: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { date: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'date'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ date: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { date: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'date'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  dateArg: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArg<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArg: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArg'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArg: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateArg: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateArg'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgInputObject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  dateArgInputObject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgInputObject<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArgInputObject: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateArgInputObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgInputObject'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { dateArgInputObject: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateArgInputObject: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateArgInputObject'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  dateArgList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgList<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArgList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateArgList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgList'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArgList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateArgList: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateArgList'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  dateArgNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArgNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateArgNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArgNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateArgNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateArgNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgNonNullList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  dateArgNonNullList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgNonNullList<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateArgNonNullList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateArgNonNullList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNullList'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { dateArgNonNullList: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateArgNonNullList: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateArgNonNullList'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateArgNonNullListNonNull` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  dateArgNonNullListNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgNonNullListNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { dateArgNonNullListNonNull: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateArgNonNullListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNullListNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { dateArgNonNullListNonNull: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateArgNonNullListNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateArgNonNullListNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateInterface1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateInterface1` |
   * | **Nullability** | Optional |
   */

  dateInterface1: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateInterface1<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateInterface1: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateInterface1: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateInterface1'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateInterface1: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateInterface1: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateInterface1'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  dateList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateList<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateList'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateList: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateList'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateListList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  dateListList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateListList<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateListList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateListList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateListList'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateListList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateListList: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateListList'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateListNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  dateListNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateListNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateListNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateListNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateListNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateListNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateListNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Date}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateNonNull` |
   * | **Nullability** | Required |
   */

  dateNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateObject1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateObject1` |
   * | **Nullability** | Optional |
   */

  dateObject1: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateObject1<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateObject1: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateObject1: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateObject1'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateObject1: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateObject1: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateObject1'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DateUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.dateUnion` |
   * | **Nullability** | Optional |
   */

  dateUnion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateUnion<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateUnion: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { dateUnion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateUnion'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ dateUnion: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { dateUnion: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'dateUnion'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.error` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  error: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.error<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ error: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { error: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'error'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ error: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { error: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'error'
        >
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
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.id` |
   * | **Nullability** | Optional |
   */

  id: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ id: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ id: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
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
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ idNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ idNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { idNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'idNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Interface} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interface` |
   * | **Nullability** | Optional |
   */

  interface: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interface<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ interface: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interface: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interface'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ interface: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interface: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interface'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceChildA}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyChildA` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  interfaceHierarchyChildA: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyChildA<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyChildA: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interfaceHierarchyChildA: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyChildA'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { interfaceHierarchyChildA: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interfaceHierarchyChildA: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interfaceHierarchyChildA'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceChildB}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyChildB` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  interfaceHierarchyChildB: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyChildB<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyChildB: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interfaceHierarchyChildB: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyChildB'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { interfaceHierarchyChildB: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interfaceHierarchyChildB: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interfaceHierarchyChildB'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceGrandparent}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyGrandparents` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  interfaceHierarchyGrandparents: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyGrandparents<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyGrandparents: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interfaceHierarchyGrandparents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyGrandparents'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { interfaceHierarchyGrandparents: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interfaceHierarchyGrandparents: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interfaceHierarchyGrandparents'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InterfaceParent}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceHierarchyParents` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */

  interfaceHierarchyParents: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyParents<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { interfaceHierarchyParents: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interfaceHierarchyParents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyParents'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { interfaceHierarchyParents: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interfaceHierarchyParents: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interfaceHierarchyParents'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Interface}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceNonNull` |
   * | **Nullability** | Required |
   */

  interfaceNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ interfaceNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interfaceNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ interfaceNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interfaceNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interfaceNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Interface} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.interfaceWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  interfaceWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceWithArgs<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ interfaceWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { interfaceWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceWithArgs'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ interfaceWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { interfaceWithArgs: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'interfaceWithArgs'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listInt` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  listInt: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listInt<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ listInt: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { listInt: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listInt'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ listInt: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { listInt: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'listInt'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listIntNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  listIntNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.listIntNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ listIntNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { listIntNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listIntNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ listIntNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { listIntNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'listIntNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listListInt` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  listListInt: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.listListInt<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ listListInt: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { listListInt: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listListInt'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ listListInt: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { listListInt: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'listListInt'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Int}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.listListIntNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  listListIntNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.listListIntNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ listListIntNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { listListIntNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listListIntNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { listListIntNonNull: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { listListIntNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'listListIntNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.lowerCaseUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.lowerCaseUnion` |
   * | **Nullability** | Optional |
   */

  lowerCaseUnion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.lowerCaseUnion<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ lowerCaseUnion: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { lowerCaseUnion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'lowerCaseUnion'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ lowerCaseUnion: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { lowerCaseUnion: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'lowerCaseUnion'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.object` |
   * | **Nullability** | Optional |
   */

  object: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.object<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ object: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { object: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'object'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ object: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { object: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'object'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectList` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */

  objectList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.objectList<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { objectList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectList'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectList: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { objectList: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'objectList'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectListNonNull` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */

  objectListNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.objectListNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectListNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { objectListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectListNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectListNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { objectListNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'objectListNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectNested} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectNested` |
   * | **Nullability** | Optional |
   */

  objectNested: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.objectNested<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectNested: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { objectNested: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNested'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectNested: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { objectNested: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'objectNested'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectNestedWithArgs} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectNestedWithArgs` |
   * | **Nullability** | Optional |
   */

  objectNestedWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.objectNestedWithArgs<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { objectNestedWithArgs: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { objectNestedWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNestedWithArgs'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { objectNestedWithArgs: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { objectNestedWithArgs: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'objectNestedWithArgs'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectNonNull` |
   * | **Nullability** | Required |
   */

  objectNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.objectNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { objectNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { objectNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'objectNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Object1} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.objectWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */

  objectWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.objectWithArgs<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { objectWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectWithArgs'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ objectWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { objectWithArgs: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'objectWithArgs'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Result} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.result` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  result: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.result<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ result: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { result: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'result'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ result: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { result: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'result'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Result}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.resultNonNull` |
   * | **Nullability** | Required |
   * | **Arguments** | 1 |
   */

  resultNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.resultNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ resultNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { resultNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'resultNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ resultNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { resultNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'resultNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.string` |
   * | **Nullability** | Optional |
   */

  string: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.string<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ string: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { string: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'string'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ string: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { string: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'string'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgEnum` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithArgEnum: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgEnum<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ stringWithArgEnum: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithArgEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgEnum'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ stringWithArgEnum: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithArgEnum: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithArgEnum'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgInputObject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithArgInputObject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObject<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgInputObject: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithArgInputObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObject'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { stringWithArgInputObject: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithArgInputObject: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithArgInputObject'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgInputObjectEnum` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithArgInputObjectEnum: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObjectEnum<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgInputObjectEnum: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithArgInputObjectEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObjectEnum'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { stringWithArgInputObjectEnum: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithArgInputObjectEnum: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithArgInputObjectEnum'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgInputObjectRequired` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithArgInputObjectRequired: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObjectRequired<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithArgInputObjectRequired: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithArgInputObjectRequired: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObjectRequired'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { stringWithArgInputObjectRequired: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithArgInputObjectRequired: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithArgInputObjectRequired'
        >
      >
    >
  >

  /**
   * The given arguments are reflected back as a JSON string.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   */

  stringWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgs<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ stringWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgs'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ stringWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithArgs: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithArgs'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithListArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithListArg: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithListArg<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ stringWithListArg: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithListArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithListArg'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ stringWithListArg: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithListArg: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithListArg'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithListArgRequired` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithListArgRequired: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithListArgRequired<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithListArgRequired: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithListArgRequired: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithListArgRequired'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { stringWithListArgRequired: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithListArgRequired: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithListArgRequired'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.stringWithRequiredArg` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  stringWithRequiredArg: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithRequiredArg<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { stringWithRequiredArg: $SelectionSet },
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { stringWithRequiredArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithRequiredArg'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { stringWithRequiredArg: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { stringWithRequiredArg: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'stringWithRequiredArg'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FooBarUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionFooBar` |
   * | **Nullability** | Optional |
   */

  unionFooBar: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.unionFooBar<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionFooBar: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { unionFooBar: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBar'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionFooBar: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { unionFooBar: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'unionFooBar'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FooBarUnion}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionFooBarNonNull` |
   * | **Nullability** | Required |
   */

  unionFooBarNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.unionFooBarNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionFooBarNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { unionFooBarNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBarNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { unionFooBarNonNull: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { unionFooBarNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'unionFooBarNonNull'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FooBarUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionFooBarWithArgs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */

  unionFooBarWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.unionFooBarWithArgs<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionFooBarWithArgs: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { unionFooBarWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBarWithArgs'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { unionFooBarWithArgs: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { unionFooBarWithArgs: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'unionFooBarWithArgs'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectUnion} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionObject` |
   * | **Nullability** | Optional |
   */

  unionObject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.unionObject<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionObject: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { unionObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionObject'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionObject: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { unionObject: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'unionObject'
        >
      >
    >
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ObjectUnion}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.unionObjectNonNull` |
   * | **Nullability** | Required |
   */

  unionObjectNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.unionObjectNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromQuery<{ unionObjectNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationQuery<
          { unionObjectNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionObjectNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromQuery<
          { unionObjectNonNull: $SelectionSet },
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationQuery<
            { unionObjectNonNull: $SelectionSet },
            $$Schema.Schema<$Context['scalars']>
          >,
          'unionObjectNonNull'
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
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromMutation<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$ArgumentsMap.ArgumentsMap
      >,
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$ArgumentsMap.ArgumentsMap
        >,
        & (null | {})
        & $$Utilities.HandleOutput<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationMutation<
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
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.id<{ scalars: $Context['scalars'] }>>,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromMutation<{ id: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationMutation<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromMutation<{ id: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationMutation<
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
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.idNonNull<{ scalars: $Context['scalars'] }>
      >,
    ) => $$Utilities.Docpar.Object.Var.MethodReturn<
      $$Utilities.Docpar.Object.Var.InferFromMutation<{ idNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.Docpar.Object.InferResult.OperationMutation<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
      >,
      $$Utilities.DocumentRunnerDeferred<
        $$Utilities.Docpar.Object.Var.InferFromMutation<{ idNonNull: $SelectionSet }, $$ArgumentsMap.ArgumentsMap>,
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.Docpar.Object.InferResult.OperationMutation<
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
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
