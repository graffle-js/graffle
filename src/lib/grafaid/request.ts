import { isPlainObject } from 'es-toolkit'
import type { GraphQLError, OperationDefinitionNode, OperationTypeNode } from 'graphql'
import { mapEntriesDeep, type DeepObjectValue } from '../object-utils.js'
import type { Errors } from '../errors/_namespace.js'
import type { Grafaid } from './_namespace.js'
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
  [key: string]: VariableValue
}

export type VariableValue = string | boolean | null | number | Variables | VariableValue[]

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

/**
 * Apply a visitor function to all key-value pairs in a variables object.
 * 
 * @deprecated Use `mapEntriesDeep` from object-utils instead. This is a thin wrapper 
 * that will be removed in a future version.
 */
export const mapVariables = (
  variables: Grafaid.Variables | undefined,
  visitor: (key: string, value: Grafaid.VariableValue) => undefined | { key: string; value: Grafaid.VariableValue },
): Grafaid.Variables | undefined => {
  if (variables === undefined) return
  return mapVariableValue(variables, visitor)
}

/**
 * Apply a visitor function to all key-value pairs in a nested variable value structure.
 * 
 * @deprecated Use `mapEntriesDeep` from object-utils instead. This is a thin wrapper 
 * that will be removed in a future version.
 */
export const mapVariableValue = <$Value extends Grafaid.VariableValue>(
  value: $Value,
  visitor: (key: string, value: Grafaid.VariableValue) => undefined | { key: string; value: Grafaid.VariableValue },
): $Value => {
  return mapEntriesDeep(value as DeepObjectValue, visitor) as $Value
}
