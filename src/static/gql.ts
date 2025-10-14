// Re-exports for backward compatibility
// Static builders moved to docpar/object/static/
export type { Config, StaticDocumentBuilder } from '#src/docpar/object/static/rootType.js'
export { createStaticRootField, createStaticRootType, defaults } from '#src/docpar/object/static/rootType.js'

// Unified gql function moved to docpar root
export type { gql, InferOperations, ParseGraphQLObject, ParseGraphQLString } from '#src/docpar/gql.js'
export { createGql, Gql } from '#src/docpar/gql.js'
