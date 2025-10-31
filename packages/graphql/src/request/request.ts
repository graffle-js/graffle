import type { Document } from '#~/__.js'
import type { Variables } from '#~/request/variables.js'
import type { Err } from '@wollybeard/kit'
import type { GraphQLError, OperationDefinitionNode, OperationTypeNode } from 'graphql'
import { getOperationDefinition, normalizeDocumentToNode } from '../document/ast.js'
import type { Typed } from '../document/typed/_.js'

export interface RequestInput {
  query: string | Typed.TypedDocumentLike
  variables?: Variables | undefined
  operationName?: string | undefined
}

export interface RequestDocumentNodeInput {
  query: Typed.TypedDocumentNodeLike
  variables?: Variables | undefined
  operationName?: string | undefined
}

export interface RequestAnalyzedInput extends RequestInput {
  operation: OperationTypeNode | OperationDefinitionNode
}

export interface RequestAnalyzedDocumentNodeInput extends RequestDocumentNodeInput {
  operation: OperationDefinitionNode
}

export type GraphQLExecutionResultError = Err.ContextualAggregateError<GraphQLError>

// dprint-ignore
export const normalizeRequestToNode = <$R extends RequestInput | RequestAnalyzedInput>(request: $R):
	$R extends RequestAnalyzedInput ? RequestAnalyzedDocumentNodeInput :
  $R extends RequestInput ? RequestDocumentNodeInput :
						 never => {

	const query = normalizeDocumentToNode(request.query)
  // we have to strip the $ from the variables keys (enum types)

	if (`operation` in request) {
		const operation = getOperationDefinition({
			...request,
			query: normalizeDocumentToNode(request.query),
		})

		return {
			...request,
			operation,
			query,
		} as any
	}

  return {
    ...request,
    query,
	} as any
}
