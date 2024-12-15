import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationQuery<$$Utilities.AssertExtendsObject<$SelectionSet>, $$Schema.Schema<$Context['scalars']>>
      >
    >
  >
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >

  InputObjectNested: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.InputObjectNested<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'InputObjectNested'
      >
    >
  >

  InputObjectNestedNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.InputObjectNestedNonNull<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ InputObjectNestedNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'InputObjectNestedNonNull'
      >
    >
  >
  /**
   * Query enum field documentation.
   */
  abcEnum: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.abcEnum<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ abcEnum: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'abcEnum'
      >
    >
  >

  argInputObjectCircular: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.argInputObjectCircular<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ argInputObjectCircular: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'argInputObjectCircular'
      >
    >
  >

  date: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.date<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ date: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'date'
      >
    >
  >

  dateArg: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArg: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArg'
      >
    >
  >

  dateArgInputObject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgInputObject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgInputObject: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgInputObject'
      >
    >
  >

  dateArgList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgList'
      >
    >
  >

  dateArgNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgNonNull'
      >
    >
  >

  dateArgNonNullList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNullList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNullList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgNonNullList'
      >
    >
  >

  dateArgNonNullListNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.dateArgNonNullListNonNull<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNullListNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgNonNullListNonNull'
      >
    >
  >

  dateInterface1: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateInterface1<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateInterface1: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateInterface1'
      >
    >
  >

  dateList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateList'
      >
    >
  >

  dateListList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateListList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateListList'
      >
    >
  >

  dateListNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateListNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateListNonNull'
      >
    >
  >

  dateNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateNonNull'
      >
    >
  >

  dateObject1: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateObject1<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateObject1: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateObject1'
      >
    >
  >

  dateUnion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateUnion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateUnion: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateUnion'
      >
    >
  >

  error: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.error<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ error: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'error'
      >
    >
  >

  id: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'id'
      >
    >
  >

  idNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.idNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'idNonNull'
      >
    >
  >

  interface: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$interface<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interface: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interface'
      >
    >
  >

  interfaceHierarchyChildA: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyChildA<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceHierarchyChildA: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceHierarchyChildA'
      >
    >
  >

  interfaceHierarchyChildB: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyChildB<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceHierarchyChildB: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceHierarchyChildB'
      >
    >
  >

  interfaceHierarchyGrandparents: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyGrandparents<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<
          { interfaceHierarchyGrandparents: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'interfaceHierarchyGrandparents'
      >
    >
  >

  interfaceHierarchyParents: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.interfaceHierarchyParents<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceHierarchyParents: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceHierarchyParents'
      >
    >
  >

  interfaceNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceNonNull'
      >
    >
  >

  interfaceWithArgs: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceWithArgs'
      >
    >
  >

  listInt: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listInt<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listInt: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listInt'
      >
    >
  >

  listIntNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listIntNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listIntNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listIntNonNull'
      >
    >
  >

  listListInt: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListInt<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listListInt: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listListInt'
      >
    >
  >

  listListIntNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListIntNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listListIntNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listListIntNonNull'
      >
    >
  >

  lowerCaseUnion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.lowerCaseUnion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ lowerCaseUnion: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'lowerCaseUnion'
      >
    >
  >

  object: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$object<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ object: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'object'
      >
    >
  >

  objectList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectList'
      >
    >
  >

  objectListNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectListNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectListNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectListNonNull'
      >
    >
  >

  objectNested: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNested<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectNested: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectNested'
      >
    >
  >

  objectNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectNonNull'
      >
    >
  >

  objectWithArgs: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectWithArgs'
      >
    >
  >

  result: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.result<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ result: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'result'
      >
    >
  >

  resultNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.resultNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ resultNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'resultNonNull'
      >
    >
  >

  string: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$string<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ string: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'string'
      >
    >
  >

  stringWithArgEnum: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgEnum<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgEnum: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithArgEnum'
      >
    >
  >

  stringWithArgInputObject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObject<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgInputObject: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithArgInputObject'
      >
    >
  >

  stringWithArgInputObjectRequired: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithArgInputObjectRequired<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<
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
  stringWithArgs: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithArgs'
      >
    >
  >

  stringWithListArg: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithListArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithListArg: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithListArg'
      >
    >
  >

  stringWithListArgRequired: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.stringWithListArgRequired<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithListArgRequired: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithListArgRequired'
      >
    >
  >

  stringWithRequiredArg: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithRequiredArg<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithRequiredArg: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithRequiredArg'
      >
    >
  >

  unionFooBar: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBar<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBar: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionFooBar'
      >
    >
  >

  unionFooBarNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBarNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionFooBarNonNull'
      >
    >
  >

  unionFooBarWithArgs: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarWithArgs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBarWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionFooBarWithArgs'
      >
    >
  >

  unionObject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionObject: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionObject'
      >
    >
  >

  unionObjectNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObjectNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionObjectNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionObjectNonNull'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >

  id: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.id<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'id'
      >
    >
  >

  idNonNull: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.idNonNull<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
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
