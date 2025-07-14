import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as $$Schema from './schema.js'
import type * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
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

  InputObjectNested: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.InputObjectNested<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { InputObjectNested: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'InputObjectNested'
      >
    >
  >

  InputObjectNestedNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.InputObjectNestedNonNull<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { InputObjectNestedNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'InputObjectNestedNonNull'
      >
    >
  >
  /**
   * Query enum field documentation.
   */
  abcEnum: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.abcEnum<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { abcEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'abcEnum'
      >
    >
  >

  argInputObjectCircular: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.argInputObjectCircular<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { argInputObjectCircular: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'argInputObjectCircular'
      >
    >
  >

  bigintField: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.bigintField<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { bigintField: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'bigintField'
      >
    >
  >

  bigintFieldNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.bigintFieldNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { bigintFieldNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'bigintFieldNonNull'
      >
    >
  >

  date: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.date<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { date: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'date'
      >
    >
  >

  dateArg: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArg'
      >
    >
  >

  dateArgInputObject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgInputObject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateArgInputObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgInputObject'
      >
    >
  >

  dateArgList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateArgList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgList'
      >
    >
  >

  dateArgNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateArgNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNull'
      >
    >
  >

  dateArgNonNullList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNullList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateArgNonNullList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNullList'
      >
    >
  >

  dateArgNonNullListNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgNonNullListNonNull<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateArgNonNullListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNullListNonNull'
      >
    >
  >

  dateInterface1: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateInterface1<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateInterface1: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateInterface1'
      >
    >
  >

  dateList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateList'
      >
    >
  >

  dateListList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateListList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateListList'
      >
    >
  >

  dateListNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateListNonNull'
      >
    >
  >

  dateNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateNonNull'
      >
    >
  >

  dateObject1: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateObject1<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateObject1: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateObject1'
      >
    >
  >

  dateUnion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateUnion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { dateUnion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateUnion'
      >
    >
  >

  error: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.error<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { error: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'error'
      >
    >
  >

  id: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<$Context['scalars']>>,
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

  idNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.idNonNull<$Context['scalars']>>,
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

  interface: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$interface<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interface: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interface'
      >
    >
  >

  interfaceHierarchyChildA: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyChildA<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interfaceHierarchyChildA: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyChildA'
      >
    >
  >

  interfaceHierarchyChildB: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyChildB<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interfaceHierarchyChildB: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyChildB'
      >
    >
  >

  interfaceHierarchyGrandparents: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyGrandparents<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interfaceHierarchyGrandparents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyGrandparents'
      >
    >
  >

  interfaceHierarchyParents: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyParents<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interfaceHierarchyParents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyParents'
      >
    >
  >

  interfaceNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interfaceNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceNonNull'
      >
    >
  >

  interfaceWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { interfaceWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceWithArgs'
      >
    >
  >

  listInt: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listInt<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { listInt: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listInt'
      >
    >
  >

  listIntNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listIntNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { listIntNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listIntNonNull'
      >
    >
  >

  listListInt: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListInt<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { listListInt: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listListInt'
      >
    >
  >

  listListIntNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListIntNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { listListIntNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listListIntNonNull'
      >
    >
  >

  lowerCaseUnion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.lowerCaseUnion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { lowerCaseUnion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'lowerCaseUnion'
      >
    >
  >

  object: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$object<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { object: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'object'
      >
    >
  >

  objectList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { objectList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectList'
      >
    >
  >

  objectListNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectListNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { objectListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectListNonNull'
      >
    >
  >

  objectNested: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNested<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { objectNested: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNested'
      >
    >
  >

  objectNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { objectNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNonNull'
      >
    >
  >

  objectWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { objectWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectWithArgs'
      >
    >
  >

  result: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.result<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { result: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'result'
      >
    >
  >

  resultNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.resultNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { resultNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'resultNonNull'
      >
    >
  >

  string: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$string<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { string: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'string'
      >
    >
  >

  stringWithArgEnum: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgEnum<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithArgEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgEnum'
      >
    >
  >

  stringWithArgInputObject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObject<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithArgInputObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObject'
      >
    >
  >

  stringWithArgInputObjectEnum: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObjectEnum<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithArgInputObjectEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObjectEnum'
      >
    >
  >

  stringWithArgInputObjectRequired: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObjectRequired<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithArgInputObjectRequired: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObjectRequired'
      >
    >
  >
  /**
   * The given arguments are reflected back as a JSON string.
   */
  stringWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgs'
      >
    >
  >

  stringWithListArg: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithListArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithListArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithListArg'
      >
    >
  >

  stringWithListArgRequired: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithListArgRequired<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithListArgRequired: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithListArgRequired'
      >
    >
  >

  stringWithRequiredArg: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithRequiredArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { stringWithRequiredArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithRequiredArg'
      >
    >
  >

  unionFooBar: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBar<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { unionFooBar: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBar'
      >
    >
  >

  unionFooBarNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { unionFooBarNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBarNonNull'
      >
    >
  >

  unionFooBarWithArgs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { unionFooBarWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBarWithArgs'
      >
    >
  >

  unionObject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { unionObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionObject'
      >
    >
  >

  unionObjectNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObjectNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { unionObjectNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionObjectNonNull'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
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

  id: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.id<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >
    >
  >

  idNonNull: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.idNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
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
