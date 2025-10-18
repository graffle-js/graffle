import type { Grafaid } from '#lib/grafaid'
import { sendRequest } from '#src/client/send.js'
import { type Context } from '#src/context/context.js'
import { Docpar } from '#src/docpar/$.js'
import { getOperationDefinition } from '#src/lib/grafaid/document.js'
import { isSymbol } from '#src/lib/prelude.js'
import { print } from 'graphql'
import type { OperationTypeNode } from 'graphql'

/**
 * Document runner for deferred execution when variables are present.
 *
 * Instead of auto-executing, returns an object with:
 * - `document`: The GraphQL document string
 * - `run`: Function to execute with variables
 *
 * @typeParam $Variables - The variables type inferred from the selection set
 * @typeParam $Result - The result type inferred from the selection set
 */
export interface DocumentRunner<$Variables = Grafaid.Variables, $Result = unknown> {
  /**
   * The GraphQL document string.
   * Can be used with any GraphQL client or for inspection.
   */
  document: string
  /**
   * Execute the operation with the required variables.
   *
   * @param variables - The variables required by the operation
   * @returns The operation result
   */
  run: (variables: $Variables) => Promise<$Result>
}

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
        return (selectionSetOrIndicator: Docpar.Object.Select.SelectionSet.AnySelectionSet) => {
          // Check for manual hoisting (explicit $ markers) to determine execution strategy
          if (Docpar.Object.Var.containsManualHoisting(selectionSetOrIndicator)) {
            return buildDocumentRunner(state, operationType, selectionSetOrIndicator)
          }
          return executeOperation(state, operationType, selectionSetOrIndicator)
        }
      } else {
        const fieldName = key
        return (selectionSetOrArgs: Docpar.Object.Select.SelectionSet.AnySelectionSet) => {
          const rootTypeSelectionSet = { [fieldName]: selectionSetOrArgs ?? {} }
          // Check for manual hoisting (explicit $ markers) to determine execution strategy
          if (Docpar.Object.Var.containsManualHoisting(rootTypeSelectionSet)) {
            return buildDocumentRunnerForRootField(state, operationType, fieldName, selectionSetOrArgs)
          }
          return executeRootField(state, operationType, fieldName, selectionSetOrArgs)
        }
      }
    },
  })
}

const buildDocumentRunnerForRootField = (
  context: Context,
  operationType: OperationTypeNode,
  rootFieldName: string,
  rootFieldSelectionSet?: Docpar.Object.Select.SelectionSet.AnySelectionSet,
): DocumentRunner => {
  const rootTypeSelectionSet = { [rootFieldName]: rootFieldSelectionSet ?? {} }
  const documentNormalized = Docpar.Object.Select.Document.createDocumentNormalizedFromRootTypeSelection(
    operationType,
    rootTypeSelectionSet,
  )

  const encoded = Docpar.Object.ToGraphQLDocument.toGraphQL(documentNormalized, {
    sddm: context.configuration.schema.current.map,
    scalars: context.scalars.map,
  })

  const documentString = print(encoded.document)

  return {
    document: documentString,
    run: async (variables: Grafaid.Variables) => {
      const request = graffleMappedResultToRequest(
        { ...encoded, operationsVariables: { $default: variables } },
        undefined,
      )
      const result = await sendRequest(context, request)

      if (result instanceof Error) return result

      return context.configuration.output.current.envelope.enabled
        ? result
        // @ts-expect-error
        : result[rootFieldName]
    },
  }
}

const buildDocumentRunner = (
  context: Context,
  operationType: OperationTypeNode,
  rootTypeSelectionSet: Docpar.Object.Select.SelectionSet.AnySelectionSet,
): DocumentRunner => {
  const documentNormalized = Docpar.Object.Select.Document.createDocumentNormalizedFromRootTypeSelection(
    operationType,
    rootTypeSelectionSet,
  )

  const encoded = Docpar.Object.ToGraphQLDocument.toGraphQL(documentNormalized, {
    sddm: context.configuration.schema.current.map,
    scalars: context.scalars.map,
  })

  const documentString = print(encoded.document)

  return {
    document: documentString,
    run: async (variables: Grafaid.Variables) => {
      const request = graffleMappedResultToRequest(
        { ...encoded, operationsVariables: { $default: variables } },
        undefined,
      )
      return sendRequest(context, request)
    },
  }
}

export const executeRootField = async (
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

/**
 * Helper to create a curried root field executor for domain-organized methods.
 * Used by the domain generator to reduce boilerplate.
 */
export const createRootFieldExecutor = (
  operationType: OperationTypeNode,
  rootFieldName: string,
  context: Context,
) => {
  return (rootFieldSelectionSet?: Docpar.Object.Select.SelectionSet.AnySelectionSet) => {
    return executeRootField(context, operationType, rootFieldName, rootFieldSelectionSet)
  }
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
