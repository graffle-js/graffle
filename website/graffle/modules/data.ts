/**
 * The name of the GraphQL schema.
 *
 * Used internally for client identification and configuration.
 */
export const Name = `default`

/**
 * The name of the GraphQL schema as a type.
 */
export type Name = 'default'

/**
 * The default URL of the GraphQL schema endpoint.
 *
 * Used as the default transport target when creating a client
 * without explicit URL configuration.
 */
export const defaultSchemaUrl = new URL('http://localhost:3000/graphql')
