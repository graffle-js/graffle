import { parse, print as graphqlWebPrint } from '@0no-co/graphql.web'
import { Str } from '@wollybeard/kit'
import type { DocumentNode, OperationDefinitionNode } from 'graphql'
import type * as Request from '../request/__.js'
import { OperationType } from '../schema/operation-type/_.js'
import { isOperationDefinitionNode } from './ast/guards.js'
import { Typed } from './typed/_.js'

export const toString = (document: Typed.TypedDocumentLike): string => {
  const documentUntyped = Typed.unType(document)
  return Str.is(documentUntyped) ? documentUntyped : graphqlWebPrint(documentUntyped)
}

export const getOperationDefinition = (
  request: Request.RequestDocumentNodeInput,
): OperationDefinitionNode | null => {
  for (const node of request.query.definitions) {
    const opDefNode = isOperationDefinitionNode(node) ? node : null
    if (!request.operationName) return opDefNode
    if (opDefNode?.name?.value === request.operationName) return opDefNode
  }
  return null
}

const definedOperationPattern = new RegExp(`^\\b(${Object.values(OperationType).join(`|`)})\\b`)

/**
 * Get the _type_ (query, mutation, subscription) of operation a request will execute as.
 *
 * Compares the given operation name with document contents.
 *
 * If document is string then regular expressions are used to extract the operation type
 * to avoid document encode/decode performance costs.
 */
export const getOperationType = (request: Request.RequestInput): OperationType.OperationType | null => {
  // return null
  const { operationName, query: document } = request

  const documentUntyped = Typed.unType(document)

  if (!Str.is(documentUntyped)) {
    const operationDefinition = getOperationDefinition({ query: documentUntyped, operationName })
    if (operationDefinition) return operationDefinition.operation
    throw new Error(`Could not parse operation type from document.`)
  }

  const definedOperations = documentUntyped.split(/[{}\n]+/).map(s => s.trim()).map(line => {
    const match = line.match(definedOperationPattern)
    if (!match) return null
    return {
      line,
      operationType: match[0] as OperationType.OperationType,
    }
  }).filter(_ => _ !== null)

  // Handle obviously invalid cases that are zero cost to compute.

  // The given operation name will not match to anything.
  if (definedOperations.length > 1 && !request.operationName) return null

  // An operation name is required but was not given.
  if (definedOperations.length === 0 && request.operationName) return null

  // Handle optimistically assumed valid case short circuits.

  if (definedOperations.length === 0) {
    // Assume that the implicit query syntax is being used.
    // This is a non-validated optimistic approach for performance, not aimed at correctness.
    // For example its not checked if the document is actually of the syntactic form `{ ... }`
    return OperationType.QUERY
  }

  // Continue to the full search.

  const definedOperationToAnalyze = operationName
    ? definedOperations.find(o => o.line.includes(operationName))
    : definedOperations[0]

  // Invalid: The given operation name does not show up in the document.
  if (!definedOperationToAnalyze) return null

  return definedOperationToAnalyze.operationType
}

export const normalizeDocumentToNode = (document: Typed.TypedDocumentLike): DocumentNode => {
  const d = Typed.unType(document)
  return Str.is(d) ? parse(d) : d
}
