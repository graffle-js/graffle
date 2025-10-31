import { sendRequest } from '@graffle/client/send.js'
import { type Context } from '@graffle/core/context.js'
import { Docpar } from '@graffle/document/_.js'
import type { Graphql } from '@graffle/graphql'
import { Lang } from '@wollybeard/kit'
import { OperationTypeNode, print } from 'graphql'

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
export interface DocumentRunner<$Variables = Graphql.Variables, $Result = unknown> {
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
      if (Lang.isSymbol(key)) throw new Error(`Symbols not supported.`)

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
    run: async (variables: Graphql.Variables) => {
      const request = Docpar.Object.ToGraphQLDocument.graffleMappedResultToRequest(
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
    run: async (variables: Graphql.Variables) => {
      const request = Docpar.Object.ToGraphQLDocument.graffleMappedResultToRequest(
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
export const createRootFieldExecutor = (operationType: OperationTypeNode) => {
  return (rootFieldName: string) => {
    return (context: Context) => {
      return (rootFieldSelectionSet?: Docpar.Object.Select.SelectionSet.AnySelectionSet) => {
        return executeRootField(context, operationType, rootFieldName, rootFieldSelectionSet)
      }
    }
  }
}

/**
 * Pre-curried helpers for domain-organized methods.
 * Exported for use by generated domain modules.
 */
export const $$query = createRootFieldExecutor(OperationTypeNode.QUERY)
export const $$mutation = createRootFieldExecutor(OperationTypeNode.MUTATION)
export const $$subscription = createRootFieldExecutor(OperationTypeNode.SUBSCRIPTION)

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
  const request = Docpar.Object.ToGraphQLDocument.graffleMappedResultToRequest(
    Docpar.Object.ToGraphQLDocument.toGraphQL(document, {
      sddm: context.configuration.schema.current.map,
      // todo test that when custom scalars are used they are mapped correctly
      scalars: context.scalars.map,
    }),
    operationName,
  )

  return sendRequest(context, request)
}
