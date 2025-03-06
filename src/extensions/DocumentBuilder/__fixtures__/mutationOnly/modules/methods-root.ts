import type * as $$Utilities from '../../../../../entrypoints/utilities-for-generated.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
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
      & $$Utilities.HandleOutputDocumentBuilderRootField<
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
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
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
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { idNonNull: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'idNonNull'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}
