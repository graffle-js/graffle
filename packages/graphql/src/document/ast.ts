import { Typed } from '#~/document/typed/_.js'
import { parse, print as graphqlWebPrint } from '@0no-co/graphql.web'
import { Str } from '@wollybeard/kit'
import { print as graphqlPrint } from 'graphql'
import {
  type ArgumentNode,
  type BooleanValueNode,
  type DirectiveNode,
  type DocumentNode,
  type EnumValueNode,
  type FieldNode,
  type FloatValueNode,
  type FragmentSpreadNode,
  type InlineFragmentNode,
  type IntValueNode,
  type ListValueNode,
  type NamedTypeNode,
  type NameNode,
  type NullValueNode,
  type ObjectFieldNode,
  type ObjectValueNode,
  type OperationDefinitionNode,
  type SelectionSetNode,
  type StringValueNode,
  type TypeNode,
  type ValueNode,
  type VariableDefinitionNode,
  type VariableNode,
} from 'graphql'
import type { HasRequiredKeys } from 'type-fest'
import { Kind } from '../docpar/kind.js'
import { OperationTypeNode } from '../docpar/OperationTypeNode.js'
import { Request } from '#~/request/_.js'

export type {
  ArgumentNode,
  BooleanValueNode,
  DefinitionNode,
  DirectiveNode,
  DocumentNode,
  FieldNode,
  FloatValueNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  IntValueNode,
  ListValueNode,
  NameNode,
  NullValueNode,
  ObjectFieldNode,
  ObjectValueNode,
  OperationDefinitionNode,
  OperationTypeDefinitionNode,
  SelectionNode,
  SelectionSetNode,
  StringValueNode,
  ValueNode,
  VariableDefinitionNode,
  VariableNode,
} from 'graphql'

export { OperationTypeNode } from '../docpar/OperationTypeNode.js'

export { Kind } from '../docpar/kind.js'

export type $Any =
  | DirectiveNode
  | NameNode
  | ValueNode
  | VariableDefinitionNode
  | SelectionSetNode
  | InlineFragmentNode
  | OperationDefinitionNode
  | NamedTypeNode
  | FieldNode
  | FragmentSpreadNode
  | DocumentNode
  | ArgumentNode
  | EnumValueNode
  | ListValueNode
  | NullValueNode
  | ObjectValueNode
  | ObjectFieldNode
  | VariableNode
  | StringValueNode
  | IntValueNode
  | FloatValueNode
  | BooleanValueNode

export namespace $KindGroups {
  export type StandardScalar =
    | typeof Kind.STRING
    | typeof Kind.INT
    | typeof Kind.BOOLEAN
    | typeof Kind.FLOAT
}

export type Constructor<$Node> = (
  ...input: HasRequiredKeys<Omit<$Node, 'kind'>> extends true ? [Omit<$Node, 'kind'>] : [] | [Omit<$Node, 'kind'>]
) => $Node

export const Directive: Constructor<DirectiveNode> = (directive) => {
  return {
    kind: Kind.DIRECTIVE,
    ...directive,
  }
}

export const Name: Constructor<NameNode> = (name) => {
  return {
    kind: Kind.NAME,
    ...name,
  }
}

export const Value = (value: ValueNode) => {
  return value
}

export const Argument: Constructor<ArgumentNode> = (argument) => {
  return {
    kind: Kind.ARGUMENT,
    ...argument,
  }
}

export const Document: Constructor<DocumentNode> = (document) => {
  return {
    kind: Kind.DOCUMENT,
    ...document,
  }
}

export const isDocumentNode = (value: unknown): value is DocumentNode => {
  return typeof value === `object` && value !== null && `kind` in value && value.kind === Kind.DOCUMENT
}

export const OperationDefinition: Constructor<OperationDefinitionNode> = (operationDefinition) => {
  return {
    kind: Kind.OPERATION_DEFINITION,
    ...operationDefinition,
  }
}
export const isOperationDefinitionNode = (value: unknown): value is OperationDefinitionNode => {
  return typeof value === `object` && value !== null && `kind` in value && value.kind === Kind.OPERATION_DEFINITION
}

export const SelectionSet: Constructor<SelectionSetNode> = (selectionSet) => {
  return {
    kind: Kind.SELECTION_SET,
    ...selectionSet,
  }
}

export const VariableDefinition: Constructor<VariableDefinitionNode> = (variableDefinition) => {
  return {
    kind: Kind.VARIABLE_DEFINITION,
    ...variableDefinition,
  }
}

export const InlineFragment: Constructor<InlineFragmentNode> = (inlineFragment) => {
  return {
    kind: Kind.INLINE_FRAGMENT,
    ...inlineFragment,
  }
}

export const NamedType: Constructor<NamedTypeNode> = (namedType) => {
  return {
    kind: Kind.NAMED_TYPE,
    ...namedType,
  }
}

export const isNamedType = (value: unknown): value is NamedTypeNode => {
  return typeof value === `object` && value !== null && `kind` in value && value.kind === Kind.NAMED_TYPE
}

export const Field: Constructor<FieldNode> = (field) => {
  return {
    kind: Kind.FIELD,
    ...field,
  }
}

export const EnumValue: Constructor<EnumValueNode> = (enumValue) => {
  return {
    kind: Kind.ENUM,
    ...enumValue,
  }
}

export const IntValue: Constructor<IntValueNode> = (intValue) => {
  return {
    kind: Kind.INT,
    ...intValue,
  }
}

export const FloatValue: Constructor<FloatValueNode> = (floatValue) => {
  return {
    kind: Kind.FLOAT,
    ...floatValue,
  }
}

export const StringValue: Constructor<StringValueNode> = (stringValue) => {
  return {
    kind: Kind.STRING,
    ...stringValue,
  }
}

export const BooleanValue: Constructor<BooleanValueNode> = (booleanValue) => {
  return {
    kind: Kind.BOOLEAN,
    ...booleanValue,
  }
}

export const Variable: Constructor<VariableNode> = (variable) => {
  return {
    kind: Kind.VARIABLE,
    ...variable,
  }
}

export const ListValue: Constructor<ListValueNode> = (listValue) => {
  return {
    kind: Kind.LIST,
    ...listValue,
  }
}

export const NullValue: Constructor<NullValueNode> = () => {
  return {
    kind: Kind.NULL,
  }
}

export const ObjectValue: Constructor<ObjectValueNode> = (objectValue) => {
  return {
    kind: Kind.OBJECT,
    ...objectValue,
  }
}

export const ObjectField: Constructor<ObjectFieldNode> = (objectField) => {
  return {
    kind: Kind.OBJECT_FIELD,
    ...objectField,
  }
}

export const RootTypeToOperationType = {
  Query: OperationTypeNode.QUERY,
  Mutation: OperationTypeNode.MUTATION,
  Subscription: OperationTypeNode.SUBSCRIPTION,
} as const

export type RootTypeNameToOperationName = typeof RootTypeToOperationType

export const OperationTypeToAccessKind = {
  query: `read`,
  mutation: `write`,
  subscription: `read`,
} as const

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
  return getNamedType(type.type)
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

const definedOperationPattern = new RegExp(`^\\b(${Object.values(OperationTypeNode).join(`|`)})\\b`)

/**
 * Get the _type_ (query, mutation, subscription) of operation a request will execute as.
 *
 * Compares the given operation name with document contents.
 *
 * If document is string then regular expressions are used to extract the operation type
 * to avoid document encode/decode performance costs.
 */
export const getOperationType = (request: Request.RequestInput): OperationTypeNode | null => {
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
      operationType: match[0] as OperationTypeNode,
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
    return OperationTypeNode.QUERY
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
