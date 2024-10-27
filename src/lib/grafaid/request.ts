import type { GraphQLError, OperationDefinitionNode, OperationTypeNode } from 'graphql'
import type { Errors } from '../errors/__.js'
import type { Grafaid } from './__.js'
import { getOperationDefinition, normalizeDocumentToNode } from './document.js'
import type { TypedDocument } from './typed-document/__.js'

export interface RequestInput {
  query: string | TypedDocument.TypedDocumentLike
  variables?: Variables
  operationName?: string
}

export interface RequestDocumentNodeInput {
  query: TypedDocument.TypedDocumentNodeLike
  variables?: Variables
  operationName?: string
}

export interface RequestAnalyzedInput extends RequestInput {
  operation: OperationTypeNode | OperationDefinitionNode
}

export interface RequestAnalyzedDocumentNodeInput extends RequestDocumentNodeInput {
  operation: OperationDefinitionNode
}

export type Variables = {
  [key: string]: string | boolean | null | number | Variables
}

export type SomeObjectData = {
  [fieldName: string]: any // SomeFieldData <-- If we put this here tsc has crashes with OOM.
}

export type SomeFieldData =
  | null
  | Grafaid.Schema.StandardScalarRuntimeTypes
  | Grafaid.Schema.StandardScalarRuntimeTypes[]
  | {
    [fieldName: string]: SomeFieldData
  }

export type GraphQLExecutionResultError = Errors.ContextualAggregateError<GraphQLError>

// dprint-ignore
export const normalizeRequestToNode = <$R extends RequestInput | RequestAnalyzedInput>(request: $R):
	$R extends RequestAnalyzedInput ? RequestAnalyzedDocumentNodeInput :
  $R extends RequestInput ? RequestDocumentNodeInput :
						 never => {

	const query = normalizeDocumentToNode(request.query)

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
