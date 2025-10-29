import type { Doc } from './$$.js'
// Temporarily disabled - string parser has schema dependencies
// import type { String } from './string/$.js'

/**
 * Parse a GraphQL query string or object into a document.
 * For context-aware parsing, see `ParseGraphQLString` and `ParseGraphQLObject` in static/gql.
 */
export type Parse<$Input> =
  $Input extends string ? Doc.Document<any> // String<Parse<$Input>>['operations']
    : never
