import * as Nodes from './nodes.js'

/**
 * GraphQL-JS runtime utilities with clearer naming.
 */

/**
 * Unwraps List and NonNull wrappers to get the underlying named type.
 */
export { getNamedType } from 'graphql'

/**
 * Unwraps NonNull wrapper to get nullable variant.
 */
export { getNullableType } from 'graphql'

export const isAllInputObjectFieldsNullable = (node: Nodes.InputObjectType) => {
  return Object.values(node.getFields()).some(_ => !Nodes.isNonNullType(_.type))
}
