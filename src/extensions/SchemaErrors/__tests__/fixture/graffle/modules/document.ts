import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'
import type { $TypeInputsIndex } from './type-inputs-index.js'

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$var` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 *   id: true,
 *   name: true,
 *   email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 *   $: { id: $var },
 *   name: true,
 *   posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export interface QueryBuilder {
  InputObjectNested: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['InputObjectNested'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { InputObjectNested: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  InputObjectNestedNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['InputObjectNestedNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { InputObjectNestedNonNull: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { InputObjectNestedNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  abcEnum: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['abcEnum'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ abcEnum: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { abcEnum: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  argInputObjectCircular: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['argInputObjectCircular'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { argInputObjectCircular: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { argInputObjectCircular: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  bigintField: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['bigintField'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ bigintField: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { bigintField: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  bigintFieldNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['bigintFieldNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ bigintFieldNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { bigintFieldNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  date: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['date']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ date: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { date: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateArg: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['dateArg'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArg: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateArg: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateArgInputObject: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateArgInputObject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgInputObject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateArgInputObject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateArgList: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateArgList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateArgList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateArgNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateArgNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateArgNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateArgNonNullList: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateArgNonNullList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateArgNonNullList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateArgNonNullList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateArgNonNullListNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateArgNonNullListNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { dateArgNonNullListNonNull: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateArgNonNullListNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateInterface1: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateInterface1'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateInterface1: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateInterface1: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateList: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['dateList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateListList: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateListList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateListList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateListList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateListNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateListNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateListNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateListNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateObject1: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dateObject1'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateObject1: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateObject1: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  dateUnion: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['dateUnion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ dateUnion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dateUnion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  error: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['error'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ error: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { error: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  id: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { id: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  idNonNull: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { idNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interface: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['interface'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ interface: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interface: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interfaceHierarchyChildA: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['interfaceHierarchyChildA'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyChildA: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interfaceHierarchyChildA: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interfaceHierarchyChildB: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['interfaceHierarchyChildB'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyChildB: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interfaceHierarchyChildB: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interfaceHierarchyGrandparents: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['interfaceHierarchyGrandparents'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyGrandparents: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interfaceHierarchyGrandparents: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interfaceHierarchyParents: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['interfaceHierarchyParents'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { interfaceHierarchyParents: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interfaceHierarchyParents: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interfaceNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['interfaceNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ interfaceNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interfaceNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  interfaceWithArgs: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['interfaceWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ interfaceWithArgs: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { interfaceWithArgs: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  listInt: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['listInt'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listInt: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { listInt: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  listIntNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['listIntNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listIntNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { listIntNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  listListInt: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['listListInt'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listListInt: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { listListInt: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  listListIntNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['listListIntNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ listListIntNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { listListIntNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  lowerCaseUnion: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['lowerCaseUnion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ lowerCaseUnion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { lowerCaseUnion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  object: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['object'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ object: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { object: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  objectList: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['objectList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { objectList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  objectListNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['objectListNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectListNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { objectListNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  objectNested: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['objectNested'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectNested: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { objectNested: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  objectNestedWithArgs: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['objectNestedWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectNestedWithArgs: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { objectNestedWithArgs: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  objectNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['objectNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { objectNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  objectWithArgs: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['objectWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ objectWithArgs: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { objectWithArgs: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  result: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['result'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ result: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { result: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  resultNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['resultNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ resultNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { resultNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  string: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['string'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ string: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { string: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithArgEnum: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithArgEnum'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ stringWithArgEnum: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithArgEnum: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithArgInputObject: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithArgInputObject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithArgInputObject: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithArgInputObject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithArgInputObjectEnum: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithArgInputObjectEnum'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithArgInputObjectEnum: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithArgInputObjectEnum: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithArgInputObjectRequired: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithArgInputObjectRequired'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithArgInputObjectRequired: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithArgInputObjectRequired: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithArgs: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ stringWithArgs: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithArgs: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithListArg: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithListArg'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ stringWithListArg: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithListArg: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithListArgRequired: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithListArgRequired'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithListArgRequired: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithListArgRequired: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  stringWithRequiredArg: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['stringWithRequiredArg'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { stringWithRequiredArg: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { stringWithRequiredArg: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  unionFooBar: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unionFooBar'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionFooBar: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unionFooBar: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  unionFooBarNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unionFooBarNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionFooBarNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unionFooBarNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  unionFooBarWithArgs: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unionFooBarWithArgs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionFooBarWithArgs: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unionFooBarWithArgs: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  unionObject: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unionObject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionObject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unionObject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  unionObjectNonNull: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unionObjectNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ unionObjectNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unionObjectNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
}

/**
 * Static query document builder instance.
 *
 * @example
 * ```ts
 * import { query } from './generated/document.js'
 *
 * const myQuery = query.user({ id: true, name: true })
 * ```
 */
export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$var` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 *   $: { input: $var },
 *   id: true,
 *   name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 */
export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { id: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  idNonNull: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { idNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
}

/**
 * Static mutation document builder instance.
 *
 * @example
 * ```ts
 * import { mutation } from './generated/document.js'
 *
 * const myMutation = mutation.createUser({
 *   $: { input: { name: 'Alice', email: 'alice@example.com' } },
 *   id: true
 * })
 * ```
 */
export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
