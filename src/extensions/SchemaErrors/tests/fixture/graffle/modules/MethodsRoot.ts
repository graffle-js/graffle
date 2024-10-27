import type { InferResult } from '../../../../../../entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface QueryMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationQuery<$SelectionSet, Schema<$Context['scalars']>>
      >
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
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.InputObjectNested<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, Schema<$Context['scalars']>>,
        'InputObjectNested'
      >
    >
  >

  InputObjectNestedNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.InputObjectNestedNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ InputObjectNestedNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'InputObjectNestedNonNull'
      >
    >
  >
  /**
   * Query enum field documentation.
   */
  abcEnum: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.abcEnum<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ abcEnum: $SelectionSet }, Schema<$Context['scalars']>>,
        'abcEnum'
      >
    >
  >

  argInputObjectCircular: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.argInputObjectCircular<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ argInputObjectCircular: $SelectionSet }, Schema<$Context['scalars']>>,
        'argInputObjectCircular'
      >
    >
  >

  date: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.date<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ date: $SelectionSet }, Schema<$Context['scalars']>>,
        'date'
      >
    >
  >

  dateArg: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArg<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArg: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArg'
      >
    >
  >

  dateArgInputObject: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgInputObject<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgInputObject: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgInputObject'
      >
    >
  >

  dateArgList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgList'
      >
    >
  >

  dateArgNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgNonNull'
      >
    >
  >

  dateArgNonNullList: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNullList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNullList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgNonNullList'
      >
    >
  >

  dateArgNonNullListNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNullListNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateArgNonNullListNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgNonNullListNonNull'
      >
    >
  >

  dateInterface1: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateInterface1<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateInterface1: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateInterface1'
      >
    >
  >

  dateList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateList'
      >
    >
  >

  dateListList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateListList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateListList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateListList'
      >
    >
  >

  dateListNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateListNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateListNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateListNonNull'
      >
    >
  >

  dateNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateNonNull'
      >
    >
  >

  dateObject1: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateObject1<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateObject1: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateObject1'
      >
    >
  >

  dateUnion: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateUnion<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ dateUnion: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateUnion'
      >
    >
  >

  error: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.error<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ error: $SelectionSet }, Schema<$Context['scalars']>>,
        'error'
      >
    >
  >

  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.id<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ id: $SelectionSet }, Schema<$Context['scalars']>>,
        'id'
      >
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ idNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'idNonNull'
      >
    >
  >

  interface: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.$interface<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interface: $SelectionSet }, Schema<$Context['scalars']>>,
        'interface'
      >
    >
  >

  interfaceNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.interfaceNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'interfaceNonNull'
      >
    >
  >

  interfaceWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.interfaceWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ interfaceWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'interfaceWithArgs'
      >
    >
  >

  listInt: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listInt<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listInt: $SelectionSet }, Schema<$Context['scalars']>>,
        'listInt'
      >
    >
  >

  listIntNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listIntNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listIntNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'listIntNonNull'
      >
    >
  >

  listListInt: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listListInt<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listListInt: $SelectionSet }, Schema<$Context['scalars']>>,
        'listListInt'
      >
    >
  >

  listListIntNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listListIntNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ listListIntNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'listListIntNonNull'
      >
    >
  >

  lowerCaseUnion: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.lowerCaseUnion<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ lowerCaseUnion: $SelectionSet }, Schema<$Context['scalars']>>,
        'lowerCaseUnion'
      >
    >
  >

  object: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.$object<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ object: $SelectionSet }, Schema<$Context['scalars']>>,
        'object'
      >
    >
  >

  objectList: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectList<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectList: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectList'
      >
    >
  >

  objectListNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectListNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectListNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectListNonNull'
      >
    >
  >

  objectNested: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectNested<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectNested: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectNested'
      >
    >
  >

  objectNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectNonNull'
      >
    >
  >

  objectWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ objectWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectWithArgs'
      >
    >
  >

  result: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.result<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ result: $SelectionSet }, Schema<$Context['scalars']>>,
        'result'
      >
    >
  >

  resultNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.resultNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ resultNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'resultNonNull'
      >
    >
  >

  string: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.$string<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ string: $SelectionSet }, Schema<$Context['scalars']>>,
        'string'
      >
    >
  >

  stringWithArgEnum: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithArgEnum<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgEnum: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithArgEnum'
      >
    >
  >

  stringWithArgInputObject: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithArgInputObject<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgInputObject: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithArgInputObject'
      >
    >
  >

  stringWithArgInputObjectRequired: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      SelectionSet.Query.stringWithArgInputObjectRequired<$Context['scalars']>
    >,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgInputObjectRequired: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithArgInputObjectRequired'
      >
    >
  >
  /**
   * The given arguments are reflected back as a JSON string.
   */
  stringWithArgs: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithArgs'
      >
    >
  >

  stringWithListArg: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithListArg<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithListArg: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithListArg'
      >
    >
  >

  stringWithListArgRequired: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithListArgRequired<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithListArgRequired: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithListArgRequired'
      >
    >
  >

  stringWithRequiredArg: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithRequiredArg<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ stringWithRequiredArg: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithRequiredArg'
      >
    >
  >

  unionFooBar: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionFooBar<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBar: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionFooBar'
      >
    >
  >

  unionFooBarNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionFooBarNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBarNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionFooBarNonNull'
      >
    >
  >

  unionFooBarWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionFooBarWithArgs<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionFooBarWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionFooBarWithArgs'
      >
    >
  >

  unionObject: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionObject<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionObject: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionObject'
      >
    >
  >

  unionObjectNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionObjectNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ unionObjectNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionObjectNonNull'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationMutation<$SelectionSet, Schema<$Context['scalars']>>
      >
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
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation.id<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ id: $SelectionSet }, Schema<$Context['scalars']>>,
        'id'
      >
    >
  >

  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationMutation<{ idNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'idNonNull'
      >
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
