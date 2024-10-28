import type { InferResult } from '../../../../../../entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationQuery<$SelectionSet, $$Schema.Schema<$Context['scalars']>>
      >,
      $Context['scalars']['typesDecoded']
    >
  >
  __typename: () => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >

  InputObjectNested: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.InputObjectNested<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'InputObjectNested'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  InputObjectNestedNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.InputObjectNestedNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ InputObjectNestedNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'InputObjectNestedNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >
  /**
   * Query enum field documentation.
   */
  abcEnum: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.abcEnum<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ abcEnum: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'abcEnum'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  argInputObjectCircular: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.argInputObjectCircular<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ argInputObjectCircular: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'argInputObjectCircular'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  date: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.date<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ date: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'date'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateArg: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArg<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArg: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArg'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateArgInputObject: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgInputObject<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgInputObject: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgInputObject'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateArgList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgList'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateArgNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateArgNonNullList: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateArgNonNullList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNullList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgNonNullList'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateArgNonNullListNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.Query.dateArgNonNullListNonNull<$Context['scalars']>
    >,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNullListNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateArgNonNullListNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateInterface1: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateInterface1<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateInterface1: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateInterface1'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateList'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateListList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateListList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateListList'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateListNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateListNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateListNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateListNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateObject1: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateObject1<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateObject1: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateObject1'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  dateUnion: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.dateUnion<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateUnion: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'dateUnion'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  error: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.error<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ error: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'error'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'id'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'idNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  interface: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$interface<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interface: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interface'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  interfaceNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  interfaceWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.interfaceWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'interfaceWithArgs'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  listInt: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listInt<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listInt: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listInt'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  listIntNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listIntNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listIntNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listIntNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  listListInt: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListInt<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listListInt: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listListInt'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  listListIntNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.listListIntNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listListIntNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'listListIntNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  lowerCaseUnion: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.lowerCaseUnion<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ lowerCaseUnion: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'lowerCaseUnion'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  object: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$object<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ object: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'object'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  objectList: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectList: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectList'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  objectListNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectListNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectListNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectListNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  objectNested: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNested<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectNested: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectNested'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  objectNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  objectWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.objectWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'objectWithArgs'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  result: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.result<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ result: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'result'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  resultNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.resultNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ resultNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'resultNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  string: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.$string<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ string: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'string'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  stringWithArgEnum: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgEnum<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgEnum: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithArgEnum'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  stringWithArgInputObject: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.Query.stringWithArgInputObject<$Context['scalars']>
    >,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgInputObject: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithArgInputObject'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  stringWithArgInputObjectRequired: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.Query.stringWithArgInputObjectRequired<$Context['scalars']>
    >,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<
          { stringWithArgInputObjectRequired: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'stringWithArgInputObjectRequired'
      >,
      $Context['scalars']['typesDecoded']
    >
  >
  /**
   * The given arguments are reflected back as a JSON string.
   */
  stringWithArgs: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithArgs'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  stringWithListArg: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithListArg<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithListArg: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithListArg'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  stringWithListArgRequired: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.Query.stringWithListArgRequired<$Context['scalars']>
    >,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithListArgRequired: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithListArgRequired'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  stringWithRequiredArg: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.stringWithRequiredArg<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithRequiredArg: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'stringWithRequiredArg'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  unionFooBar: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBar<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBar: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionFooBar'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  unionFooBarNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBarNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionFooBarNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  unionFooBarWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionFooBarWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBarWithArgs: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionFooBarWithArgs'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  unionObject: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObject<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionObject: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionObject'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  unionObjectNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.unionObjectNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionObjectNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'unionObjectNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationMutation<$SelectionSet, $$Schema.Schema<$Context['scalars']>>
      >,
      $Context['scalars']['typesDecoded']
    >
  >
  __typename: () => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >

  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.id<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'id'
      >,
      $Context['scalars']['typesDecoded']
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.ConditionalSimplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema<$Context['scalars']>>,
        'idNonNull'
      >,
      $Context['scalars']['typesDecoded']
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.ClientContext> {
  query: QueryMethods<$Context>
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
