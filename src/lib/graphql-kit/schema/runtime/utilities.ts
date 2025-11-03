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

/**
 * Build GraphQLSchema from SDL string.
 */
export { buildSchema as fromString } from 'graphql'

/**
 * Build GraphQLSchema from introspection query result.
 */
export { buildClientSchema as fromIntrospection } from 'graphql'

/**
 * Convert GraphQLSchema to SDL string.
 */
export { printSchema as toString } from 'graphql'
