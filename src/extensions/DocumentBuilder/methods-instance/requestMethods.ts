import type { Grafaid } from '#lib/grafaid'
import { sendRequest } from '#src/client/send.js'
import { type Context } from '#src/context/context.js'
import { Docpar } from '#src/docpar/$.js'
import { getOperationDefinition } from '#src/lib/grafaid/document.js'
import { isSymbol } from '#src/lib/prelude.js'
import type { OperationTypeNode } from 'graphql'

export const createMethodDocument = (state: Context) => (document: Docpar.Object.Select.Document.DocumentObject) => {
  const documentNormalized = Docpar.Object.Select.Document.normalizeOrThrow(document)
  return {
    run: async (maybeOperationName?: string) => {
      return await executeDocument(state, documentNormalized, maybeOperationName)
    },
  }
}

export const createMethodOperationType = (state: Context, operationType: OperationTypeNode) => {
  return new Proxy({}, {
    get: (_, key) => {
      if (isSymbol(key)) throw new Error(`Symbols not supported.`)

      if (key.startsWith(`$batch`)) {
        return async (selectionSetOrIndicator: Docpar.Object.Select.SelectionSet.AnySelectionSet) =>
          executeOperation(state, operationType, selectionSetOrIndicator)
      } else {
        const fieldName = key
        return (selectionSetOrArgs: Docpar.Object.Select.SelectionSet.AnySelectionSet) =>
          executeRootField(state, operationType, fieldName, selectionSetOrArgs)
      }
    },
  })
}

const executeRootField = async (
  context: Context,
  operationType: OperationTypeNode,
  rootFieldName: string,
  rootFieldSelectionSet?: Docpar.Object.Select.SelectionSet.AnySelectionSet,
) => {
  const result = await executeOperation(context, operationType, {
    [rootFieldName]: rootFieldSelectionSet ?? {},
  })

  if (result instanceof Error) return result

  return context.configuration.output.current.envelope.enabled
    ? result
    // @ts-expect-error
    : result[rootFieldName]
}

const executeOperation = async (
  context: Context,
  operationType: OperationTypeNode,
  rootTypeSelectionSet: Docpar.Object.Select.SelectionSet.AnySelectionSet,
) => {
  return executeDocument(
    context,
    Docpar.Object.Select.Document.createDocumentNormalizedFromRootTypeSelection(
      operationType,
      rootTypeSelectionSet,
    ),
  )
}

const executeDocument = async (
  context: Context,
  document: Docpar.Object.Select.Document.DocumentNormalized,
  operationName?: string,
) => {
  const request = graffleMappedResultToRequest(
    Docpar.Object.ToGraphQLDocument.toGraphQL(document, {
      sddm: context.configuration.schema.current.map,
      // todo test that when custom scalars are used they are mapped correctly
      scalars: context.scalars.map,
    }),
    operationName,
  )

  return sendRequest(context, request)
}

export const graffleMappedResultToRequest = (
  { document, operationsVariables }: Docpar.Object.ToGraphQLDocument.Encoded,
  operationName?: string,
): Grafaid.RequestAnalyzedDocumentNodeInput => {
  // We get back variables for every operation in the Graffle document.
  // However, we only need the variables for the operation that was selected to be executed.
  // If there was NO operation name provided then we assume that the first operation in the document is the one that should be executed.
  // If there are MULTIPLE operations in the Graffle document AND the user has supplied an invalid operation name (either none or given matches none)
  // then what happens here is the variables from one operation can be mixed into another operation.
  // This shouldn't matter because such a state would be rejected by the server since it wouldn't know what operation to execute.
  const variables_ = operationName
    ? operationsVariables[operationName]
    : Object.values(operationsVariables)[0]

  const operation_ = getOperationDefinition({ query: document, operationName })
  if (!operation_) throw new Error(`Unknown operation named "${String(operationName)}".`)

  return {
    operationName,
    operation: operation_,
    query: document,
    variables: variables_,
  }
}
