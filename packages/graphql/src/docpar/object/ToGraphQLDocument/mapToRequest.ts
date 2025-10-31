import { getOperationDefinition } from '../../../document/ast.js'
import type { RequestAnalyzedDocumentNodeInput } from '../../../request.js'
import type { Encoded } from './nodes/1_Document.js'

/**
 * Maps the output of `ToGraphQLDocument.toGraphQL` to a request object ready for execution.
 *
 * Takes the encoded Graffle document (which includes a GraphQL DocumentNode and variables for all operations)
 * and prepares it for a specific operation execution by:
 * - Selecting the correct variables for the operation being executed
 * - Extracting the operation definition from the document
 * - Returning a complete request object for the transport layer
 *
 * @param encoded - The output from `ToGraphQLDocument.toGraphQL` containing the document and all operation variables
 * @param operationName - Optional name of the operation to execute. If omitted, uses the first operation.
 * @returns A request object ready for the transport layer with the operation, query, variables, and operation name
 *
 * @example
 * ```ts
 * const encoded = ToGraphQLDocument.toGraphQL(graffleDoc, { scalars, sddm })
 * const request = graffleMappedResultToRequest(encoded, 'GetUser')
 * // request = { query, variables, operation, operationName }
 * ```
 */
export const graffleMappedResultToRequest = (
  { document, operationsVariables }: Encoded,
  operationName?: string,
): RequestAnalyzedDocumentNodeInput => {
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
