import { Document } from '#~/__.js'
import type { OperationType } from '#~/schema/ast/OperationType/_.js'
import type { GraphQLObjectType } from 'graphql'
import type { RootTypeMap } from './RootTypeMap.js'
import { type StandardRootTypeName } from './StandardRootTypeName.js'

/**
 * Details about if and how the root type name has been customized in this schema.
 */
export interface RootDetails {
  name: {
    /**
     * If alias present then the alias, otherwise the standard.
     */
    canonical: string
    /**
     * The standard name for this root type.
     */

    standard: StandardRootTypeName
    /**
     * The custom name given for this root type in this schema, if any.
     */

    alias: string | null
  }
  type: GraphQLObjectType
  operationType: OperationType
}

export const createFromObjectType = (
  objectType: GraphQLObjectType,
  standardName: StandardRootTypeName,
): RootDetails => {
  return {
    name: {
      canonical: objectType.name,
      standard: standardName,
      alias: null,
    },
    type: objectType,
    operationType: Document.Ast.RootTypeToOperationType[standardName],
  }
}

export const createFromObjectTypeAndMapOrThrow = (
  objectType: GraphQLObjectType,
  rootTypeMap: RootTypeMap,
): RootDetails => {
  const standardName = rootTypeMap.names.fromActual[objectType.name]
  if (!standardName) {
    throw new Error(`Given object type does not map to any of the root type names: ${objectType.name}`)
  }
  return createFromObjectType(objectType, standardName)
}
