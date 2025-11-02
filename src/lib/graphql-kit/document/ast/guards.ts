import type { DocumentNode, NamedTypeNode, OperationDefinitionNode } from 'graphql'
import * as Kind from './kind.js'

export const isDocumentNode = (value: unknown): value is DocumentNode => {
  return typeof value === `object` && value !== null && `kind` in value && value.kind === Kind.DOCUMENT
}

export const isOperationDefinitionNode = (value: unknown): value is OperationDefinitionNode => {
  return typeof value === `object` && value !== null && `kind` in value && value.kind === Kind.OPERATION_DEFINITION
}

export const isNamedType = (value: unknown): value is NamedTypeNode => {
  return typeof value === `object` && value !== null && `kind` in value && value.kind === Kind.NAMED_TYPE
}
