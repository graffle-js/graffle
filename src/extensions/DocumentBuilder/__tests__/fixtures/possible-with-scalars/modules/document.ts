import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as SelectionSets from './selection-sets.js'
export interface QueryBuilder {
  InputObjectNested: <$SelectionSet extends SelectionSets.Query['InputObjectNested']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ InputObjectNested: $SelectionSet }>,
    SelectionSets.Query$Variables<{ InputObjectNested: $SelectionSet }>
  >
  InputObjectNestedNonNull: <$SelectionSet extends SelectionSets.Query['InputObjectNestedNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ InputObjectNestedNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ InputObjectNestedNonNull: $SelectionSet }>
  >
  abcEnum: <$SelectionSet extends SelectionSets.Query['abcEnum']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ abcEnum: $SelectionSet }>,
    SelectionSets.Query$Variables<{ abcEnum: $SelectionSet }>
  >
  argInputObjectCircular: <$SelectionSet extends SelectionSets.Query['argInputObjectCircular']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ argInputObjectCircular: $SelectionSet }>,
    SelectionSets.Query$Variables<{ argInputObjectCircular: $SelectionSet }>
  >
  bigintField: <$SelectionSet extends SelectionSets.Query['bigintField']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ bigintField: $SelectionSet }>,
    SelectionSets.Query$Variables<{ bigintField: $SelectionSet }>
  >
  bigintFieldNonNull: <$SelectionSet extends SelectionSets.Query['bigintFieldNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ bigintFieldNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ bigintFieldNonNull: $SelectionSet }>
  >
  date: <$SelectionSet extends SelectionSets.Query['date']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ date: $SelectionSet }>,
    SelectionSets.Query$Variables<{ date: $SelectionSet }>
  >
  dateArg: <$SelectionSet extends SelectionSets.Query['dateArg']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateArg: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateArg: $SelectionSet }>
  >
  dateArgInputObject: <$SelectionSet extends SelectionSets.Query['dateArgInputObject']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateArgInputObject: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateArgInputObject: $SelectionSet }>
  >
  dateArgList: <$SelectionSet extends SelectionSets.Query['dateArgList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateArgList: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateArgList: $SelectionSet }>
  >
  dateArgNonNull: <$SelectionSet extends SelectionSets.Query['dateArgNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateArgNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateArgNonNull: $SelectionSet }>
  >
  dateArgNonNullList: <$SelectionSet extends SelectionSets.Query['dateArgNonNullList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateArgNonNullList: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateArgNonNullList: $SelectionSet }>
  >
  dateArgNonNullListNonNull: <$SelectionSet extends SelectionSets.Query['dateArgNonNullListNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateArgNonNullListNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateArgNonNullListNonNull: $SelectionSet }>
  >
  dateInterface1: <$SelectionSet extends SelectionSets.Query['dateInterface1']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateInterface1: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateInterface1: $SelectionSet }>
  >
  dateList: <$SelectionSet extends SelectionSets.Query['dateList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateList: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateList: $SelectionSet }>
  >
  dateListList: <$SelectionSet extends SelectionSets.Query['dateListList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateListList: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateListList: $SelectionSet }>
  >
  dateListNonNull: <$SelectionSet extends SelectionSets.Query['dateListNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateListNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateListNonNull: $SelectionSet }>
  >
  dateNonNull: <$SelectionSet extends SelectionSets.Query['dateNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateNonNull: $SelectionSet }>
  >
  dateObject1: <$SelectionSet extends SelectionSets.Query['dateObject1']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateObject1: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateObject1: $SelectionSet }>
  >
  dateUnion: <$SelectionSet extends SelectionSets.Query['dateUnion']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ dateUnion: $SelectionSet }>,
    SelectionSets.Query$Variables<{ dateUnion: $SelectionSet }>
  >
  error: <$SelectionSet extends SelectionSets.Query['error']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ error: $SelectionSet }>,
    SelectionSets.Query$Variables<{ error: $SelectionSet }>
  >
  id: <$SelectionSet extends SelectionSets.Query['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ id: $SelectionSet }>,
    SelectionSets.Query$Variables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Query['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ idNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ idNonNull: $SelectionSet }>
  >
  interface: <$SelectionSet extends SelectionSets.Query['interface']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interface: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interface: $SelectionSet }>
  >
  interfaceHierarchyChildA: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyChildA']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interfaceHierarchyChildA: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interfaceHierarchyChildA: $SelectionSet }>
  >
  interfaceHierarchyChildB: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyChildB']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interfaceHierarchyChildB: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interfaceHierarchyChildB: $SelectionSet }>
  >
  interfaceHierarchyGrandparents: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyGrandparents']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interfaceHierarchyGrandparents: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interfaceHierarchyGrandparents: $SelectionSet }>
  >
  interfaceHierarchyParents: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyParents']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interfaceHierarchyParents: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interfaceHierarchyParents: $SelectionSet }>
  >
  interfaceNonNull: <$SelectionSet extends SelectionSets.Query['interfaceNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interfaceNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interfaceNonNull: $SelectionSet }>
  >
  interfaceWithArgs: <$SelectionSet extends SelectionSets.Query['interfaceWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ interfaceWithArgs: $SelectionSet }>,
    SelectionSets.Query$Variables<{ interfaceWithArgs: $SelectionSet }>
  >
  listInt: <$SelectionSet extends SelectionSets.Query['listInt']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ listInt: $SelectionSet }>,
    SelectionSets.Query$Variables<{ listInt: $SelectionSet }>
  >
  listIntNonNull: <$SelectionSet extends SelectionSets.Query['listIntNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ listIntNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ listIntNonNull: $SelectionSet }>
  >
  listListInt: <$SelectionSet extends SelectionSets.Query['listListInt']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ listListInt: $SelectionSet }>,
    SelectionSets.Query$Variables<{ listListInt: $SelectionSet }>
  >
  listListIntNonNull: <$SelectionSet extends SelectionSets.Query['listListIntNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ listListIntNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ listListIntNonNull: $SelectionSet }>
  >
  lowerCaseUnion: <$SelectionSet extends SelectionSets.Query['lowerCaseUnion']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ lowerCaseUnion: $SelectionSet }>,
    SelectionSets.Query$Variables<{ lowerCaseUnion: $SelectionSet }>
  >
  object: <$SelectionSet extends SelectionSets.Query['object']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ object: $SelectionSet }>,
    SelectionSets.Query$Variables<{ object: $SelectionSet }>
  >
  objectList: <$SelectionSet extends SelectionSets.Query['objectList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ objectList: $SelectionSet }>,
    SelectionSets.Query$Variables<{ objectList: $SelectionSet }>
  >
  objectListNonNull: <$SelectionSet extends SelectionSets.Query['objectListNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ objectListNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ objectListNonNull: $SelectionSet }>
  >
  objectNested: <$SelectionSet extends SelectionSets.Query['objectNested']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ objectNested: $SelectionSet }>,
    SelectionSets.Query$Variables<{ objectNested: $SelectionSet }>
  >
  objectNonNull: <$SelectionSet extends SelectionSets.Query['objectNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ objectNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ objectNonNull: $SelectionSet }>
  >
  objectWithArgs: <$SelectionSet extends SelectionSets.Query['objectWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ objectWithArgs: $SelectionSet }>,
    SelectionSets.Query$Variables<{ objectWithArgs: $SelectionSet }>
  >
  result: <$SelectionSet extends SelectionSets.Query['result']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ result: $SelectionSet }>,
    SelectionSets.Query$Variables<{ result: $SelectionSet }>
  >
  resultNonNull: <$SelectionSet extends SelectionSets.Query['resultNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ resultNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ resultNonNull: $SelectionSet }>
  >
  string: <$SelectionSet extends SelectionSets.Query['string']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ string: $SelectionSet }>,
    SelectionSets.Query$Variables<{ string: $SelectionSet }>
  >
  stringWithArgEnum: <$SelectionSet extends SelectionSets.Query['stringWithArgEnum']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithArgEnum: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithArgEnum: $SelectionSet }>
  >
  stringWithArgInputObject: <$SelectionSet extends SelectionSets.Query['stringWithArgInputObject']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithArgInputObject: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithArgInputObject: $SelectionSet }>
  >
  stringWithArgInputObjectEnum: <$SelectionSet extends SelectionSets.Query['stringWithArgInputObjectEnum']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithArgInputObjectEnum: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithArgInputObjectEnum: $SelectionSet }>
  >
  stringWithArgInputObjectRequired: <$SelectionSet extends SelectionSets.Query['stringWithArgInputObjectRequired']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithArgInputObjectRequired: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithArgInputObjectRequired: $SelectionSet }>
  >
  stringWithArgs: <$SelectionSet extends SelectionSets.Query['stringWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithArgs: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithArgs: $SelectionSet }>
  >
  stringWithListArg: <$SelectionSet extends SelectionSets.Query['stringWithListArg']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithListArg: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithListArg: $SelectionSet }>
  >
  stringWithListArgRequired: <$SelectionSet extends SelectionSets.Query['stringWithListArgRequired']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithListArgRequired: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithListArgRequired: $SelectionSet }>
  >
  stringWithRequiredArg: <$SelectionSet extends SelectionSets.Query['stringWithRequiredArg']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ stringWithRequiredArg: $SelectionSet }>,
    SelectionSets.Query$Variables<{ stringWithRequiredArg: $SelectionSet }>
  >
  unionFooBar: <$SelectionSet extends SelectionSets.Query['unionFooBar']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ unionFooBar: $SelectionSet }>,
    SelectionSets.Query$Variables<{ unionFooBar: $SelectionSet }>
  >
  unionFooBarNonNull: <$SelectionSet extends SelectionSets.Query['unionFooBarNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ unionFooBarNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ unionFooBarNonNull: $SelectionSet }>
  >
  unionFooBarWithArgs: <$SelectionSet extends SelectionSets.Query['unionFooBarWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ unionFooBarWithArgs: $SelectionSet }>,
    SelectionSets.Query$Variables<{ unionFooBarWithArgs: $SelectionSet }>
  >
  unionObject: <$SelectionSet extends SelectionSets.Query['unionObject']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ unionObject: $SelectionSet }>,
    SelectionSets.Query$Variables<{ unionObject: $SelectionSet }>
  >
  unionObjectNonNull: <$SelectionSet extends SelectionSets.Query['unionObjectNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ unionObjectNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ unionObjectNonNull: $SelectionSet }>
  >
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Mutation$Infer<{ id: $SelectionSet }>,
    SelectionSets.Mutation$Variables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Mutation['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Mutation$Infer<{ idNonNull: $SelectionSet }>,
    SelectionSets.Mutation$Variables<{ idNonNull: $SelectionSet }>
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
