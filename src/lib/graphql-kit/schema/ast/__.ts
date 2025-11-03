import { type ASTNode, type ListTypeNode, type NamedTypeNode, type NonNullTypeNode, type TypeNode } from 'graphql'
import { print as toString } from 'graphql'
import * as Kind from '../../document/ast/kind.js'

export { print as toString } from 'graphql'

/**
 * Print a GraphQL AST node to SDL string without any descriptions.
 * Useful for compact type signatures in documentation.
 *
 * Accepts any AST node including schema definition nodes.
 * Uses standard graphql print (not @0no-co/graphql.web) to support schema nodes.
 */
export const toStringWithoutDescriptions = (node: ASTNode): string => {
  return toString(stripDescriptions(node))
}

/**
 * Strip all description fields from a GraphQL AST node.
 * Handles fields, arguments, enum values, and nested descriptions.
 */
export const stripDescriptions = (node: any): any => {
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

export const getNamedType = (type: TypeNode): NamedTypeNode => {
  if (type.kind === Kind.NAMED_TYPE) return type
  // ListTypeNode and NonNullTypeNode have .type property
  return getNamedType((type as ListTypeNode | NonNullTypeNode).type)
}
