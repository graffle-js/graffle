import { parse, print as graphqlWebPrint } from '@0no-co/graphql.web'
import { Str } from '@wollybeard/kit'
import { print as graphqlPrint } from 'graphql'
import type {
  DocumentNode,
  ListTypeNode,
  NamedTypeNode,
  NonNullTypeNode,
  OperationDefinitionNode,
  TypeNode,
} from 'graphql'
import type { RequestDocumentNodeInput, RequestInput } from '../graphql.js'
import { Ast } from './ast/_.js'
import { isOperationDefinitionNode } from './ast/guards.js'
import * as Kind from './ast/kind.js'
import { Typed } from './typed/_.js'

export const print = (document: Typed.TypedDocumentLike): string => {
  const documentUntyped = Typed.unType(document)
  return Str.Type.is(documentUntyped) ? documentUntyped : graphqlWebPrint(documentUntyped)
}

/**
 * Strip all description fields from a GraphQL AST node.
 * Handles fields, arguments, enum values, and nested descriptions.
 */
const stripDescriptions = (node: any): any => {
  const result = { ...node, description: undefined }

  // Handle arguments on the node itself (for individual field definitions)
  if (result.arguments) {
    result.arguments = result.arguments.map((arg: any) => ({ ...arg, description: undefined }))
  }

  // Handle fields (ObjectType, InterfaceType, InputObjectType)
  if (result.fields) {
    result.fields = result.fields.map((field: any) => ({
      ...field,
      description: undefined,
      arguments: field.arguments?.map((arg: any) => ({ ...arg, description: undefined })),
    }))
  }

  // Handle enum values
  if (result.values) {
    result.values = result.values.map((value: any) => ({ ...value, description: undefined }))
  }

  return result
}

/**
 * Print a GraphQL AST node to SDL string without any descriptions.
 * Useful for compact type signatures in documentation.
 *
 * Accepts any AST node including schema definition nodes.
 * Uses standard graphql print (not @0no-co/graphql.web) to support schema nodes.
 */
export const printWithoutDescriptions = (ast: any): string => {
  return graphqlPrint(stripDescriptions(ast))
}

export const getNamedType = (type: TypeNode): NamedTypeNode => {
  if (type.kind === Kind.NAMED_TYPE) return type
  // ListTypeNode and NonNullTypeNode have .type property
  return getNamedType((type as ListTypeNode | NonNullTypeNode).type)
}

export const getOperationDefinition = (
  request: RequestDocumentNodeInput,
): OperationDefinitionNode | null => {
  for (const node of request.query.definitions) {
    const opDefNode = isOperationDefinitionNode(node) ? node : null
    if (!request.operationName) return opDefNode
    if (opDefNode?.name?.value === request.operationName) return opDefNode
  }
  return null
}

const definedOperationPattern = new RegExp(`^\\b(${Object.values(Ast.OperationType).join(`|`)})\\b`)

/**
 * Get the _type_ (query, mutation, subscription) of operation a request will execute as.
 *
 * Compares the given operation name with document contents.
 *
 * If document is string then regular expressions are used to extract the operation type
 * to avoid document encode/decode performance costs.
 */
export const getOperationType = (request: RequestInput): Ast.OperationType.OperationType | null => {
  // return null
  const { operationName, query: document } = request

  const documentUntyped = Typed.unType(document)

  if (!Str.Type.is(documentUntyped)) {
    const operationDefinition = getOperationDefinition({ query: documentUntyped, operationName })
    if (operationDefinition) return operationDefinition.operation
    throw new Error(`Could not parse operation type from document.`)
  }

  const definedOperations = documentUntyped.split(/[{}\n]+/).map(s => s.trim()).map(line => {
    const match = line.match(definedOperationPattern)
    if (!match) return null
    return {
      line,
      operationType: match[0] as Ast.OperationType.OperationType,
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
    return Ast.OperationType.QUERY
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
  return Str.Type.is(d) ? parse(d) : d
}
