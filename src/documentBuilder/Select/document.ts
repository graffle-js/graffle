import type { OperationTypeNode } from 'graphql'
import { Grafaid } from '../../lib/grafaid/__.js'
import type { AssertExtendsObject, FirstNonUnknownNever, Values } from '../../lib/prelude.js'
import type { Select } from './__.js'

export type OperationName = string

export interface SomeDocumentOperation {
  [k: string]: object
}
export type DocumentObject = {
  query?: Record<string, Select.SelectionSet.AnySelectionSet>
  mutation?: Record<string, Select.SelectionSet.AnySelectionSet>
}

export interface SomeDocument {
  mutation?: SomeDocumentOperation
  query?: SomeDocumentOperation
}

// // dprint-ignore
// type IsHasMultipleOperations<$Document extends SomeDocument> =
//   All<[
//     IsHasMultipleKeys<$Document[OperationType.Query]>,
//     IsHasMultipleKeys<$Document[OperationType.Mutation]>,
//   ]>

// dprint-ignore
export type GetOperationNames<$Document extends SomeDocument> = Values<
  {
    [$OperationType in keyof $Document]: keyof $Document[$OperationType] & string
  }
>

// dprint-ignore
export type GetOperationType<$Document extends SomeDocument, $Name extends string> =
  $Name extends keyof $Document[OperationTypeNode.MUTATION] ? OperationTypeNode.MUTATION :
  $Name extends keyof $Document[OperationTypeNode.QUERY]    ? OperationTypeNode.QUERY    :
                                                              never

// dprint-ignore
export type GetOperation<$Document extends SomeDocument, $Name extends string> =
  AssertExtendsObject<
    FirstNonUnknownNever<[
      // @ts-expect-error could be unknown
      $Document[OperationTypeNode.MUTATION][$Name],
      // @ts-expect-error could be unknown
      $Document[OperationTypeNode.QUERY][$Name]
    ]>
  >

export interface OperationNormalized {
  name: string | null
  type: OperationTypeNode
  selectionSet: Select.SelectionSet.AnySelectionSet
}

export interface DocumentNormalized {
  operations: Record<string, OperationNormalized>
  facts: {
    hasMultipleOperations: boolean
  }
}

export const createDocumentNormalizedFromQuerySelection = (
  selectionSet: Select.SelectionSet.AnySelectionSet,
  operationName?: string,
): DocumentNormalized =>
  createDocumentNormalizedFromRootTypeSelection(Grafaid.Document.OperationTypeNode.QUERY, selectionSet, operationName)

export const createDocumentNormalizedFromRootTypeSelection = (
  operationType: Grafaid.Document.OperationTypeNode,
  selectionSet: Select.SelectionSet.AnySelectionSet,
  operationName?: string,
): DocumentNormalized =>
  createDocumentNormalized({
    operations: {
      [operationName ?? defaultOperationName]: {
        name: operationName ?? null,
        type: operationType,
        selectionSet,
      },
    },
    facts: {
      hasMultipleOperations: false,
    },
  })

export const normalizeOrThrow = (document: DocumentObject): DocumentNormalized => {
  const queryOperations = Object.entries(document.query ?? {}).map((
    [name, selectionSet],
  ): [name: string, OperationNormalized] => [name, {
    name,
    type: Grafaid.Document.OperationTypeNode.QUERY,
    selectionSet,
  }])
  const mutationOperations = Object.entries(document.mutation ?? {}).map((
    [name, selectionSet],
  ): [name: string, OperationNormalized] => [name, {
    name,
    type: Grafaid.Document.OperationTypeNode.MUTATION,
    selectionSet,
  }])
  const operations = [
    ...queryOperations,
    ...mutationOperations,
  ]

  // todo test case for this
  const conflictingOperationNames = queryOperations.filter(([_, queryOp]) =>
    mutationOperations.some(([_, mutationOp]) => mutationOp.name === queryOp.name)
  )

  if (conflictingOperationNames.length > 0) {
    throw {
      errors: [
        new Error(`Document has multiple uses of operation name(s): ${conflictingOperationNames.join(`, `)}.`),
      ],
    }
  }

  const hasMultipleOperations = operations.length > 1

  const hasNoOperations = operations.length === 0

  if (hasNoOperations) {
    throw {
      errors: [new Error(`Document has no operations.`)],
    }
  }

  return createDocumentNormalized({
    operations: Object.fromEntries(operations),
    facts: {
      hasMultipleOperations,
    },
  })
}

const defaultOperationName = `__default__`

export const getOperationOrThrow = (
  document: DocumentNormalized,
  operationName?: OperationName,
): OperationNormalized => {
  if (!operationName) {
    if (document.facts.hasMultipleOperations) {
      throw new Error(`Must provide operation name if query contains multiple operations.`)
    }
    // The default operation may be named or not so instead of looking it up by name we rely on the fact that
    // there is guaranteed to be exactly one operation in the document based on checks up to this point.
    return Object.values(document.operations)[0]!
  }

  if (!(operationName in document.operations)) {
    throw new Error(`Unknown operation named "${operationName}".`)
  }
  return document.operations[operationName]!
}

const createDocumentNormalized = (document: DocumentNormalized) => document
