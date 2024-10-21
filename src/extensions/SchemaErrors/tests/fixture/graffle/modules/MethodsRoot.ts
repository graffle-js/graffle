import { type Simplify } from 'type-fest'
import type { InferResult } from '../../../../../../entrypoints/schema.js'
import type * as Utils from '../../../../../../entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface MutationMethods<$Context extends Utils.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Mutation<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutput<
        $Context,
        InferResult.Mutation<$SelectionSet, Schema>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >
  id: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Mutation.id<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ id: $SelectionSet }, Schema>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ idNonNull: $SelectionSet }, Schema>,
        'idNonNull'
      >
    >
  >
}

export interface QueryMethods<$Context extends Utils.ClientContext> {
  $batch: <$SelectionSet>(selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query<$Context['scalars']>>) => Promise<
    Simplify<
      Utils.HandleOutput<
        $Context,
        InferResult.Query<$SelectionSet, Schema>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >
  InputObjectNested: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.InputObjectNested<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ InputObjectNested: $SelectionSet }, Schema>,
        'InputObjectNested'
      >
    >
  >
  InputObjectNestedNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.InputObjectNestedNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ InputObjectNestedNonNull: $SelectionSet }, Schema>,
        'InputObjectNestedNonNull'
      >
    >
  >
  /**
   * Query enum field documentation.
   */
  abcEnum: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.abcEnum<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ abcEnum: $SelectionSet }, Schema>,
        'abcEnum'
      >
    >
  >
  argInputObjectCircular: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.argInputObjectCircular<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ argInputObjectCircular: $SelectionSet }, Schema>,
        'argInputObjectCircular'
      >
    >
  >
  date: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.date<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ date: $SelectionSet }, Schema>,
        'date'
      >
    >
  >
  dateArg: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateArg<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArg: $SelectionSet }, Schema>,
        'dateArg'
      >
    >
  >
  dateArgInputObject: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateArgInputObject<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgInputObject: $SelectionSet }, Schema>,
        'dateArgInputObject'
      >
    >
  >
  dateArgList: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateArgList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgList: $SelectionSet }, Schema>,
        'dateArgList'
      >
    >
  >
  dateArgNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgNonNull: $SelectionSet }, Schema>,
        'dateArgNonNull'
      >
    >
  >
  dateArgNonNullList: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNullList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgNonNullList: $SelectionSet }, Schema>,
        'dateArgNonNullList'
      >
    >
  >
  dateArgNonNullListNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNullListNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgNonNullListNonNull: $SelectionSet }, Schema>,
        'dateArgNonNullListNonNull'
      >
    >
  >
  dateInterface1: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.dateInterface1<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateInterface1: $SelectionSet }, Schema>,
        'dateInterface1'
      >
    >
  >
  dateList: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateList: $SelectionSet }, Schema>,
        'dateList'
      >
    >
  >
  dateListList: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateListList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateListList: $SelectionSet }, Schema>,
        'dateListList'
      >
    >
  >
  dateListNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateListNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateListNonNull: $SelectionSet }, Schema>,
        'dateListNonNull'
      >
    >
  >
  dateNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.dateNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateNonNull: $SelectionSet }, Schema>,
        'dateNonNull'
      >
    >
  >
  dateObject1: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.dateObject1<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateObject1: $SelectionSet }, Schema>,
        'dateObject1'
      >
    >
  >
  dateUnion: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.dateUnion<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateUnion: $SelectionSet }, Schema>,
        'dateUnion'
      >
    >
  >
  error: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.error<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ error: $SelectionSet }, Schema>,
        'error'
      >
    >
  >
  id: <$SelectionSet>(selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.id<$Context['scalars']>>) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ id: $SelectionSet }, Schema>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ idNonNull: $SelectionSet }, Schema>,
        'idNonNull'
      >
    >
  >
  interface: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.$interface<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ interface: $SelectionSet }, Schema>,
        'interface'
      >
    >
  >
  interfaceNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.interfaceNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ interfaceNonNull: $SelectionSet }, Schema>,
        'interfaceNonNull'
      >
    >
  >
  interfaceWithArgs: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.interfaceWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ interfaceWithArgs: $SelectionSet }, Schema>,
        'interfaceWithArgs'
      >
    >
  >
  listInt: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.listInt<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listInt: $SelectionSet }, Schema>,
        'listInt'
      >
    >
  >
  listIntNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.listIntNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listIntNonNull: $SelectionSet }, Schema>,
        'listIntNonNull'
      >
    >
  >
  listListInt: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.listListInt<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listListInt: $SelectionSet }, Schema>,
        'listListInt'
      >
    >
  >
  listListIntNonNull: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.listListIntNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listListIntNonNull: $SelectionSet }, Schema>,
        'listListIntNonNull'
      >
    >
  >
  lowerCaseUnion: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.lowerCaseUnion<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ lowerCaseUnion: $SelectionSet }, Schema>,
        'lowerCaseUnion'
      >
    >
  >
  object: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.$object<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ object: $SelectionSet }, Schema>,
        'object'
      >
    >
  >
  objectList: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.objectList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectList: $SelectionSet }, Schema>,
        'objectList'
      >
    >
  >
  objectListNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.objectListNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectListNonNull: $SelectionSet }, Schema>,
        'objectListNonNull'
      >
    >
  >
  objectNested: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.objectNested<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectNested: $SelectionSet }, Schema>,
        'objectNested'
      >
    >
  >
  objectNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.objectNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectNonNull: $SelectionSet }, Schema>,
        'objectNonNull'
      >
    >
  >
  objectWithArgs: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.objectWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectWithArgs: $SelectionSet }, Schema>,
        'objectWithArgs'
      >
    >
  >
  result: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.result<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ result: $SelectionSet }, Schema>,
        'result'
      >
    >
  >
  resultNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.resultNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ resultNonNull: $SelectionSet }, Schema>,
        'resultNonNull'
      >
    >
  >
  string: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.$string<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ string: $SelectionSet }, Schema>,
        'string'
      >
    >
  >
  stringWithArgEnum: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithArgEnum<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgEnum: $SelectionSet }, Schema>,
        'stringWithArgEnum'
      >
    >
  >
  stringWithArgInputObject: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithArgInputObject<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgInputObject: $SelectionSet }, Schema>,
        'stringWithArgInputObject'
      >
    >
  >
  stringWithArgInputObjectRequired: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithArgInputObjectRequired<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgInputObjectRequired: $SelectionSet }, Schema>,
        'stringWithArgInputObjectRequired'
      >
    >
  >
  /**
   * The given arguments are reflected back as a JSON string.
   */
  stringWithArgs: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgs: $SelectionSet }, Schema>,
        'stringWithArgs'
      >
    >
  >
  stringWithListArg: <$SelectionSet>(
    selectionSet?: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithListArg<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithListArg: $SelectionSet }, Schema>,
        'stringWithListArg'
      >
    >
  >
  stringWithListArgRequired: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithListArgRequired<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithListArgRequired: $SelectionSet }, Schema>,
        'stringWithListArgRequired'
      >
    >
  >
  stringWithRequiredArg: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.stringWithRequiredArg<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithRequiredArg: $SelectionSet }, Schema>,
        'stringWithRequiredArg'
      >
    >
  >
  unionFooBar: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.unionFooBar<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionFooBar: $SelectionSet }, Schema>,
        'unionFooBar'
      >
    >
  >
  unionFooBarNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.unionFooBarNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionFooBarNonNull: $SelectionSet }, Schema>,
        'unionFooBarNonNull'
      >
    >
  >
  unionFooBarWithArgs: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.unionFooBarWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionFooBarWithArgs: $SelectionSet }, Schema>,
        'unionFooBarWithArgs'
      >
    >
  >
  unionObject: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.unionObject<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionObject: $SelectionSet }, Schema>,
        'unionObject'
      >
    >
  >
  unionObjectNonNull: <$SelectionSet>(
    selectionSet: Utils.Exact<$SelectionSet, SelectionSet.Query.unionObjectNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      Utils.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionObjectNonNull: $SelectionSet }, Schema>,
        'unionObjectNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends Utils.ClientContext> {
  mutation: MutationMethods<$Context>
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends Utils.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
