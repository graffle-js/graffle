import type { Err } from '@wollybeard/kit'
import type { GraphQLError, OperationDefinitionNode, OperationTypeNode } from 'graphql'
import type { GraphqlKit } from './_.js'
import { getOperationDefinition, normalizeDocumentToNode } from './document/__.js'
import { TypedDocument } from './document/typed/_.js'

export interface RequestInput {
  query: string | TypedDocument.TypedDocumentLike
  variables?: Variables | undefined
  operationName?: string | undefined
}

export interface RequestDocumentNodeInput {
  query: TypedDocument.TypedDocumentNodeLike
  variables?: Variables | undefined
  operationName?: string | undefined
}

export interface RequestAnalyzedInput extends RequestInput {
  operation: OperationTypeNode | OperationDefinitionNode
}

export interface RequestAnalyzedDocumentNodeInput extends RequestDocumentNodeInput {
  operation: OperationDefinitionNode
}

/**
 * GraphQL variables as they exist at runtime.
 *
 * Variables can contain any value including custom scalars (Date, Blob, File, etc.).
 * This reflects the reality that GraphQL variables are opaque to the transport layer.
 *
 * For type-safe variables limited to standard JSON-serializable scalars, use {@link VariablesStandardScalars}.
 */
export type Variables = {
  [key: string]: unknown
}

/**
 * Variables containing only standard JSON-serializable scalar values.
 *
 * Use this type when you want compile-time guarantees that variables only contain
 * primitive types (string, number, boolean, null) and nested objects/arrays of these.
 */
export type VariablesStandardScalars = {
  [key: string]: VariableValueStandardScalars
}

export type VariableValueStandardScalars =
  | string
  | boolean
  | null
  | number
  | VariablesStandardScalars
  | VariableValueStandardScalars[]

/**
 * @deprecated Use `VariableValueStandardScalars` instead. This alias exists for backwards compatibility.
 */
export type VariableValue = VariableValueStandardScalars

export type SomeObjectData = {
  [fieldName: string]: any // SomeFieldData <-- If we put this here tsc has crashes with OOM.
}

export type SomeFieldData =
  | null
  | GraphqlKit.Schema.StandardScalarRuntimeTypes
  | GraphqlKit.Schema.StandardScalarRuntimeTypes[]
  | {
    [fieldName: string]: SomeFieldData
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
