import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'

// Helper to extract variables from selection set
type ExtractVariables<$SelectionSet> = $SelectionSet extends Record<string, any>
  ? $SelectionSet extends { $: infer Args } ? ExtractVariablesFromArgs<Args>
  : UnionToIntersection<{ [K in keyof $SelectionSet]: ExtractVariables<$SelectionSet[K]> }[keyof $SelectionSet]>
  : {}

type ExtractVariablesFromArgs<Args> = Args extends Record<string, any>
  ? { [K in keyof Args as Args[K] extends $$Utilities.DocumentBuilderKit.VariableMarker ? K : never]: boolean }
  : {}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export interface QueryBuilder {
  InputObjectNested: <$SelectionSet extends SelectionSets.Query['InputObjectNested']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ InputObjectNested: $SelectionSet }>
  >
  InputObjectNestedNonNull: <$SelectionSet extends SelectionSets.Query['InputObjectNestedNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { InputObjectNestedNonNull: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ InputObjectNestedNonNull: $SelectionSet }>
  >
  abcEnum: <$SelectionSet extends SelectionSets.Query['abcEnum']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ abcEnum: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ abcEnum: $SelectionSet }>
  >
  argInputObjectCircular: <$SelectionSet extends SelectionSets.Query['argInputObjectCircular']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { argInputObjectCircular: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ argInputObjectCircular: $SelectionSet }>
  >
  bigintField: <$SelectionSet extends SelectionSets.Query['bigintField']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ bigintField: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ bigintField: $SelectionSet }>
  >
  bigintFieldNonNull: <$SelectionSet extends SelectionSets.Query['bigintFieldNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ bigintFieldNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ bigintFieldNonNull: $SelectionSet }>
  >
  date: <$SelectionSet extends SelectionSets.Query['date']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ date: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ date: $SelectionSet }>
  >
  dateArg: <$SelectionSet extends SelectionSets.Query['dateArg']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArg: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateArg: $SelectionSet }>
  >
  dateArgInputObject: <$SelectionSet extends SelectionSets.Query['dateArgInputObject']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgInputObject: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateArgInputObject: $SelectionSet }>
  >
  dateArgList: <$SelectionSet extends SelectionSets.Query['dateArgList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgList: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateArgList: $SelectionSet }>
  >
  dateArgNonNull: <$SelectionSet extends SelectionSets.Query['dateArgNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateArgNonNull: $SelectionSet }>
  >
  dateArgNonNullList: <$SelectionSet extends SelectionSets.Query['dateArgNonNullList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgNonNullList: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateArgNonNullList: $SelectionSet }>
  >
  dateArgNonNullListNonNull: <$SelectionSet extends SelectionSets.Query['dateArgNonNullListNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { dateArgNonNullListNonNull: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ dateArgNonNullListNonNull: $SelectionSet }>
  >
  dateInterface1: <$SelectionSet extends SelectionSets.Query['dateInterface1']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateInterface1: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateInterface1: $SelectionSet }>
  >
  dateList: <$SelectionSet extends SelectionSets.Query['dateList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateList: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateList: $SelectionSet }>
  >
  dateListList: <$SelectionSet extends SelectionSets.Query['dateListList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateListList: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateListList: $SelectionSet }>
  >
  dateListNonNull: <$SelectionSet extends SelectionSets.Query['dateListNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateListNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateListNonNull: $SelectionSet }>
  >
  dateNonNull: <$SelectionSet extends SelectionSets.Query['dateNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateNonNull: $SelectionSet }>
  >
  dateObject1: <$SelectionSet extends SelectionSets.Query['dateObject1']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateObject1: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateObject1: $SelectionSet }>
  >
  dateUnion: <$SelectionSet extends SelectionSets.Query['dateUnion']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateUnion: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ dateUnion: $SelectionSet }>
  >
  error: <$SelectionSet extends SelectionSets.Query['error']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ error: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ error: $SelectionSet }>
  >
  id: <$SelectionSet extends SelectionSets.Query['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Query['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ idNonNull: $SelectionSet }>
  >
  interface: <$SelectionSet extends SelectionSets.Query['interface']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ interface: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ interface: $SelectionSet }>
  >
  interfaceHierarchyChildA: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyChildA']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyChildA: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ interfaceHierarchyChildA: $SelectionSet }>
  >
  interfaceHierarchyChildB: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyChildB']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyChildB: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ interfaceHierarchyChildB: $SelectionSet }>
  >
  interfaceHierarchyGrandparents: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyGrandparents']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyGrandparents: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ interfaceHierarchyGrandparents: $SelectionSet }>
  >
  interfaceHierarchyParents: <$SelectionSet extends SelectionSets.Query['interfaceHierarchyParents']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyParents: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ interfaceHierarchyParents: $SelectionSet }>
  >
  interfaceNonNull: <$SelectionSet extends SelectionSets.Query['interfaceNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ interfaceNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ interfaceNonNull: $SelectionSet }>
  >
  interfaceWithArgs: <$SelectionSet extends SelectionSets.Query['interfaceWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ interfaceWithArgs: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ interfaceWithArgs: $SelectionSet }>
  >
  listInt: <$SelectionSet extends SelectionSets.Query['listInt']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listInt: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ listInt: $SelectionSet }>
  >
  listIntNonNull: <$SelectionSet extends SelectionSets.Query['listIntNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listIntNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ listIntNonNull: $SelectionSet }>
  >
  listListInt: <$SelectionSet extends SelectionSets.Query['listListInt']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listListInt: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ listListInt: $SelectionSet }>
  >
  listListIntNonNull: <$SelectionSet extends SelectionSets.Query['listListIntNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listListIntNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ listListIntNonNull: $SelectionSet }>
  >
  lowerCaseUnion: <$SelectionSet extends SelectionSets.Query['lowerCaseUnion']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ lowerCaseUnion: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ lowerCaseUnion: $SelectionSet }>
  >
  object: <$SelectionSet extends SelectionSets.Query['object']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ object: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ object: $SelectionSet }>
  >
  objectList: <$SelectionSet extends SelectionSets.Query['objectList']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectList: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ objectList: $SelectionSet }>
  >
  objectListNonNull: <$SelectionSet extends SelectionSets.Query['objectListNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectListNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ objectListNonNull: $SelectionSet }>
  >
  objectNested: <$SelectionSet extends SelectionSets.Query['objectNested']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectNested: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ objectNested: $SelectionSet }>
  >
  objectNonNull: <$SelectionSet extends SelectionSets.Query['objectNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ objectNonNull: $SelectionSet }>
  >
  objectWithArgs: <$SelectionSet extends SelectionSets.Query['objectWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectWithArgs: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ objectWithArgs: $SelectionSet }>
  >
  result: <$SelectionSet extends SelectionSets.Query['result']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ result: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ result: $SelectionSet }>
  >
  resultNonNull: <$SelectionSet extends SelectionSets.Query['resultNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ resultNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ resultNonNull: $SelectionSet }>
  >
  string: <$SelectionSet extends SelectionSets.Query['string']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ string: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ string: $SelectionSet }>
  >
  stringWithArgEnum: <$SelectionSet extends SelectionSets.Query['stringWithArgEnum']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ stringWithArgEnum: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ stringWithArgEnum: $SelectionSet }>
  >
  stringWithArgInputObject: <$SelectionSet extends SelectionSets.Query['stringWithArgInputObject']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithArgInputObject: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ stringWithArgInputObject: $SelectionSet }>
  >
  stringWithArgInputObjectEnum: <$SelectionSet extends SelectionSets.Query['stringWithArgInputObjectEnum']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithArgInputObjectEnum: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ stringWithArgInputObjectEnum: $SelectionSet }>
  >
  stringWithArgInputObjectRequired: <$SelectionSet extends SelectionSets.Query['stringWithArgInputObjectRequired']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithArgInputObjectRequired: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ stringWithArgInputObjectRequired: $SelectionSet }>
  >
  stringWithArgs: <$SelectionSet extends SelectionSets.Query['stringWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ stringWithArgs: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ stringWithArgs: $SelectionSet }>
  >
  stringWithListArg: <$SelectionSet extends SelectionSets.Query['stringWithListArg']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ stringWithListArg: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ stringWithListArg: $SelectionSet }>
  >
  stringWithListArgRequired: <$SelectionSet extends SelectionSets.Query['stringWithListArgRequired']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithListArgRequired: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ stringWithListArgRequired: $SelectionSet }>
  >
  stringWithRequiredArg: <$SelectionSet extends SelectionSets.Query['stringWithRequiredArg']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithRequiredArg: $SelectionSet },
      $$Schema.Schema
    >,
    ExtractVariables<{ stringWithRequiredArg: $SelectionSet }>
  >
  unionFooBar: <$SelectionSet extends SelectionSets.Query['unionFooBar']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionFooBar: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ unionFooBar: $SelectionSet }>
  >
  unionFooBarNonNull: <$SelectionSet extends SelectionSets.Query['unionFooBarNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionFooBarNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ unionFooBarNonNull: $SelectionSet }>
  >
  unionFooBarWithArgs: <$SelectionSet extends SelectionSets.Query['unionFooBarWithArgs']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionFooBarWithArgs: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ unionFooBarWithArgs: $SelectionSet }>
  >
  unionObject: <$SelectionSet extends SelectionSets.Query['unionObject']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionObject: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ unionObject: $SelectionSet }>
  >
  unionObjectNonNull: <$SelectionSet extends SelectionSets.Query['unionObjectNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionObjectNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ unionObjectNonNull: $SelectionSet }>
  >
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Mutation['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ idNonNull: $SelectionSet }>
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
