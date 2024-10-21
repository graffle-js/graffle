import { type Simplify } from 'type-fest'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type { Schema } from './Schema.js'
import type * as SelectionSet from './SelectionSets.js'

export interface MutationMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.Mutation<$SelectionSet, Schema<$Context['scalars']>>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
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
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ id: $SelectionSet }, Schema<$Context['scalars']>>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Mutation.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Mutation<{ idNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'idNonNull'
      >
    >
  >
}

export interface QueryMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutput<
        $Context,
        InferResult.Query<$SelectionSet, Schema<$Context['scalars']>>
      >
    >
  >
  __typename: () => Promise<
    Simplify<
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
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ InputObjectNested: $SelectionSet }, Schema<$Context['scalars']>>,
        'InputObjectNested'
      >
    >
  >
  InputObjectNestedNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.InputObjectNestedNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ InputObjectNestedNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
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
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ abcEnum: $SelectionSet }, Schema<$Context['scalars']>>,
        'abcEnum'
      >
    >
  >
  argInputObjectCircular: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.argInputObjectCircular<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ argInputObjectCircular: $SelectionSet }, Schema<$Context['scalars']>>,
        'argInputObjectCircular'
      >
    >
  >
  date: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.date<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ date: $SelectionSet }, Schema<$Context['scalars']>>,
        'date'
      >
    >
  >
  dateArg: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArg<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArg: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArg'
      >
    >
  >
  dateArgInputObject: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgInputObject<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgInputObject: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgInputObject'
      >
    >
  >
  dateArgList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgList'
      >
    >
  >
  dateArgNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgNonNull'
      >
    >
  >
  dateArgNonNullList: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNullList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgNonNullList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgNonNullList'
      >
    >
  >
  dateArgNonNullListNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateArgNonNullListNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateArgNonNullListNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateArgNonNullListNonNull'
      >
    >
  >
  dateInterface1: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateInterface1<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateInterface1: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateInterface1'
      >
    >
  >
  dateList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateList'
      >
    >
  >
  dateListList: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateListList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateListList: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateListList'
      >
    >
  >
  dateListNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateListNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateListNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateListNonNull'
      >
    >
  >
  dateNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateNonNull'
      >
    >
  >
  dateObject1: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateObject1<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateObject1: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateObject1'
      >
    >
  >
  dateUnion: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.dateUnion<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ dateUnion: $SelectionSet }, Schema<$Context['scalars']>>,
        'dateUnion'
      >
    >
  >
  error: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.error<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ error: $SelectionSet }, Schema<$Context['scalars']>>,
        'error'
      >
    >
  >
  id: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.id<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ id: $SelectionSet }, Schema<$Context['scalars']>>,
        'id'
      >
    >
  >
  idNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.idNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ idNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'idNonNull'
      >
    >
  >
  interface: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.$interface<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ interface: $SelectionSet }, Schema<$Context['scalars']>>,
        'interface'
      >
    >
  >
  interfaceNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.interfaceNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ interfaceNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'interfaceNonNull'
      >
    >
  >
  interfaceWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.interfaceWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ interfaceWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'interfaceWithArgs'
      >
    >
  >
  listInt: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listInt<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listInt: $SelectionSet }, Schema<$Context['scalars']>>,
        'listInt'
      >
    >
  >
  listIntNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listIntNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listIntNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'listIntNonNull'
      >
    >
  >
  listListInt: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listListInt<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listListInt: $SelectionSet }, Schema<$Context['scalars']>>,
        'listListInt'
      >
    >
  >
  listListIntNonNull: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.listListIntNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ listListIntNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'listListIntNonNull'
      >
    >
  >
  lowerCaseUnion: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.lowerCaseUnion<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ lowerCaseUnion: $SelectionSet }, Schema<$Context['scalars']>>,
        'lowerCaseUnion'
      >
    >
  >
  object: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.$object<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ object: $SelectionSet }, Schema<$Context['scalars']>>,
        'object'
      >
    >
  >
  objectList: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectList<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectList: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectList'
      >
    >
  >
  objectListNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectListNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectListNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectListNonNull'
      >
    >
  >
  objectNested: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectNested<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectNested: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectNested'
      >
    >
  >
  objectNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectNonNull'
      >
    >
  >
  objectWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.objectWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ objectWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'objectWithArgs'
      >
    >
  >
  result: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.result<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ result: $SelectionSet }, Schema<$Context['scalars']>>,
        'result'
      >
    >
  >
  resultNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.resultNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ resultNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'resultNonNull'
      >
    >
  >
  string: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.$string<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ string: $SelectionSet }, Schema<$Context['scalars']>>,
        'string'
      >
    >
  >
  stringWithArgEnum: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithArgEnum<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgEnum: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithArgEnum'
      >
    >
  >
  stringWithArgInputObject: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithArgInputObject<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgInputObject: $SelectionSet }, Schema<$Context['scalars']>>,
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
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgInputObjectRequired: $SelectionSet }, Schema<$Context['scalars']>>,
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
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithArgs'
      >
    >
  >
  stringWithListArg: <$SelectionSet>(
    selectionSet?: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithListArg<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithListArg: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithListArg'
      >
    >
  >
  stringWithListArgRequired: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithListArgRequired<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithListArgRequired: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithListArgRequired'
      >
    >
  >
  stringWithRequiredArg: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.stringWithRequiredArg<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ stringWithRequiredArg: $SelectionSet }, Schema<$Context['scalars']>>,
        'stringWithRequiredArg'
      >
    >
  >
  unionFooBar: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionFooBar<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionFooBar: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionFooBar'
      >
    >
  >
  unionFooBarNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionFooBarNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionFooBarNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionFooBarNonNull'
      >
    >
  >
  unionFooBarWithArgs: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionFooBarWithArgs<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionFooBarWithArgs: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionFooBarWithArgs'
      >
    >
  >
  unionObject: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionObject<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionObject: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionObject'
      >
    >
  >
  unionObjectNonNull: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, SelectionSet.Query.unionObjectNonNull<$Context['scalars']>>,
  ) => Promise<
    Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.Query<{ unionObjectNonNull: $SelectionSet }, Schema<$Context['scalars']>>,
        'unionObjectNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.ClientContext> {
  mutation: MutationMethods<$Context>
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
