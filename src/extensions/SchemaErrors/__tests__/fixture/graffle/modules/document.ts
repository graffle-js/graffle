import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'
import type { $TypeInputsIndex } from './type-inputs-index.js'

export interface QueryBuilder {
  InputObjectNested: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['InputObjectNested'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ InputObjectNested: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { InputObjectNested: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { InputObjectNestedNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { abcEnum: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { argInputObjectCircular: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { bigintField: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { bigintFieldNonNull: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
  date: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['date']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ date: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { date: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateArg: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateArgInputObject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateArgList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateArgNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateArgNonNullList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateArgNonNullListNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateInterface1: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateListList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateListNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateObject1: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dateUnion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { error: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
  id: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { id: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { idNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interface: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interfaceHierarchyChildA: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interfaceHierarchyChildB: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interfaceHierarchyGrandparents: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interfaceHierarchyParents: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interfaceNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { interfaceWithArgs: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { listInt: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { listIntNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { listListInt: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { listListIntNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { lowerCaseUnion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { object: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { objectList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { objectListNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { objectNested: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { objectNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { objectWithArgs: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { result: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { resultNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { string: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithArgEnum: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithArgInputObject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithArgInputObjectEnum: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithArgInputObjectRequired: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithArgs: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithListArg: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithListArgRequired: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { stringWithRequiredArg: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unionFooBar: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unionFooBarNonNull: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unionFooBarWithArgs: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unionObject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unionObjectNonNull: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { id: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { idNonNull: $SelectionSet },
        ArgumentsMap.ArgumentsMap['mutation'],
        $TypeInputsIndex
      >
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
