import type { GraphQLNamedType, GraphQLScalarType } from 'graphql'
import { isEnumType, isInputObjectType, isInterfaceType, isObjectType, isScalarType, isUnionType } from 'graphql'
import { casesExhausted } from '../prelude.js'
import type { KindMap } from './schema/schema.js'
import { isRootType, isScalarTypeCustom } from './schema/schema.js'

export {
  type ExecutionResult,
  type FormattedExecutionResult,
  GraphQLError,
  type GraphQLFormattedError as FormattedExecutionResultError,
} from 'graphql'

export * from './_Nodes.js'

export * from './request.js'

export const StandardScalarTypeNames = {
  String: `String`,
  ID: `ID`,
  Int: `Int`,
  Float: `Float`,
  Boolean: `Boolean`,
}

export type StandardScalarTypeNames = keyof typeof StandardScalarTypeNames

const TypeScriptPrimitiveTypeNames = {
  string: `string`,
  number: `number`,
  boolean: `boolean`,
}
type TypeScriptPrimitiveTypeNames = keyof typeof TypeScriptPrimitiveTypeNames

export const StandardScalarTypeTypeScriptMapping = {
  String: `string`,
  ID: `string`,
  Int: `number`,
  Float: `number`,
  Boolean: `boolean`,
} satisfies Record<
  StandardScalarTypeNames,
  TypeScriptPrimitiveTypeNames
>

export const isStandardScalarType = (type: GraphQLScalarType) => {
  return type.name in StandardScalarTypeNames
}

/**
 * Groups
 */

export const getTypeAndKind = (
  node: GraphQLNamedType,
): {
  typeName: string
  kindName: KindMap.KindName
} => {
  const typeName = node.name

  let kindName: KindMap.KindName

  if (isRootType(node)) {
    kindName = `Root`
  } else if (isScalarType(node)) {
    kindName = isScalarTypeCustom(node) ? `ScalarCustom` : `ScalarStandard`
  } else if (isUnionType(node)) {
    kindName = `Union`
  } else if (isInterfaceType(node)) {
    kindName = `Interface`
  } else if (isObjectType(node)) {
    kindName = `OutputObject`
  } else if (isInputObjectType(node)) {
    kindName = `InputObject`
  } else if (isEnumType(node)) {
    kindName = `Enum`
  } else {
    throw casesExhausted(node)
  }
  return { typeName, kindName }
}
