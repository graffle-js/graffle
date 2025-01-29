import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
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
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  query: QueryMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
