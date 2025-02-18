import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
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

  InputObjectNested: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.InputObjectNested<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { InputObjectNested: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'InputObjectNested'
      >
    >
  >

  InputObjectNestedNonNull: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
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
  abcEnum: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.abcEnum<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { abcEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'abcEnum'
      >
    >
  >

  argInputObjectCircular: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { argInputObjectCircular: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'argInputObjectCircular'
      >
    >
  >

  date: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.date<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { date: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'date'
      >
    >
  >

  dateArg: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArg'
      >
    >
  >

  dateArgInputObject: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgInputObject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateArgInputObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgInputObject'
      >
    >
  >

  dateArgList: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateArgList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgList'
      >
    >
  >

  dateArgNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateArgNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNull'
      >
    >
  >

  dateArgNonNullList: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNullList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateArgNonNullList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNullList'
      >
    >
  >

  dateArgNonNullListNonNull: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateArgNonNullListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateArgNonNullListNonNull'
      >
    >
  >

  dateInterface1: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateInterface1<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateInterface1: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateInterface1'
      >
    >
  >

  dateList: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateList'
      >
    >
  >

  dateListList: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateListList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateListList'
      >
    >
  >

  dateListNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateListNonNull'
      >
    >
  >

  dateNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateNonNull'
      >
    >
  >

  dateObject1: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateObject1<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateObject1: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateObject1'
      >
    >
  >

  dateUnion: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateUnion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { dateUnion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dateUnion'
      >
    >
  >

  error: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.error<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { error: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'error'
      >
    >
  >

  id: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >
    >
  >

  idNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.idNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
      >
    >
  >

  interface: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$interface<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interface: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interface'
      >
    >
  >

  interfaceHierarchyChildA: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interfaceHierarchyChildA: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyChildA'
      >
    >
  >

  interfaceHierarchyChildB: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interfaceHierarchyChildB: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyChildB'
      >
    >
  >

  interfaceHierarchyGrandparents: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interfaceHierarchyGrandparents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyGrandparents'
      >
    >
  >

  interfaceHierarchyParents: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interfaceHierarchyParents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyParents'
      >
    >
  >

  interfaceNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interfaceNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceNonNull'
      >
    >
  >

  interfaceWithArgs: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { interfaceWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceWithArgs'
      >
    >
  >

  listInt: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listInt<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { listInt: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listInt'
      >
    >
  >

  listIntNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listIntNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { listIntNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listIntNonNull'
      >
    >
  >

  listListInt: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListInt<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { listListInt: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listListInt'
      >
    >
  >

  listListIntNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListIntNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { listListIntNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'listListIntNonNull'
      >
    >
  >

  lowerCaseUnion: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.lowerCaseUnion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { lowerCaseUnion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'lowerCaseUnion'
      >
    >
  >

  object: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$object<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { object: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'object'
      >
    >
  >

  objectList: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { objectList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectList'
      >
    >
  >

  objectListNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectListNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { objectListNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectListNonNull'
      >
    >
  >

  objectNested: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNested<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { objectNested: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNested'
      >
    >
  >

  objectNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { objectNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectNonNull'
      >
    >
  >

  objectWithArgs: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { objectWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectWithArgs'
      >
    >
  >

  result: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.result<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { result: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'result'
      >
    >
  >

  resultNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.resultNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { resultNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'resultNonNull'
      >
    >
  >

  string: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$string<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { string: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'string'
      >
    >
  >

  stringWithArgEnum: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgEnum<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithArgEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgEnum'
      >
    >
  >

  stringWithArgInputObject: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithArgInputObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObject'
      >
    >
  >

  stringWithArgInputObjectEnum: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithArgInputObjectEnum: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObjectEnum'
      >
    >
  >

  stringWithArgInputObjectRequired: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
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
  stringWithArgs: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgs'
      >
    >
  >

  stringWithListArg: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithListArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithListArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithListArg'
      >
    >
  >

  stringWithListArgRequired: $$Utilities.ContextTransports.PreflightCheck<
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
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithListArgRequired: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithListArgRequired'
      >
    >
  >

  stringWithRequiredArg: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithRequiredArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { stringWithRequiredArg: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithRequiredArg'
      >
    >
  >

  unionFooBar: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBar<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { unionFooBar: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBar'
      >
    >
  >

  unionFooBarNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { unionFooBarNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBarNonNull'
      >
    >
  >

  unionFooBarWithArgs: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { unionFooBarWithArgs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionFooBarWithArgs'
      >
    >
  >

  unionObject: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { unionObject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionObject'
      >
    >
  >

  unionObjectNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObjectNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { unionObjectNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unionObjectNonNull'
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

  id: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.id<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >
    >
  >

  idNonNull: $$Utilities.ContextTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.idNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
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
