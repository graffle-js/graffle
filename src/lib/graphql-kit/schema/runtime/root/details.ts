import type { GraphQLObjectType } from 'graphql'
import { Document } from '../../../document/_.js'
import type { Map } from './map.js'
import { type StandardRootTypeName } from './standard.js'

/**
 * Details about if and how the root type name has been customized in this schema.
 */
export interface Details {
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
  operationType: Document.Ast.OperationType.OperationType
}

export const detailsFromObjectType = (
  objectType: GraphQLObjectType,
  standardName: StandardRootTypeName,
): Details => {
  return {
    name: {
      canonical: objectType.name,
      standard: standardName,
      alias: null,
    },
    type: objectType,
    operationType: Document.RootTypeToOperationType[standardName],
  }
}

export const createFromObjectTypeAndMapOrThrow = (
  objectType: GraphQLObjectType,
  rootTypeMap: Map,
): Details => {
  const standardName = rootTypeMap.names.fromActual[objectType.name]
  if (!standardName) {
    throw new Error(`Given object type does not map to any of the root type names: ${objectType.name}`)
  }
  return detailsFromObjectType(objectType, standardName)
}
