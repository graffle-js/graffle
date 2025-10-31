export { InferResult } from './InferResult/_.js'
export type { InferOperation, InferOperations, InferOperationsInDocument, Parse } from './Parse.js'
export * as Static from './rootType.js'
export { Select } from './Select/_.js'
export { ToGraphQLDocument } from './ToGraphQLDocument/_.js'
export { Var } from './var/_.js'

// Re-export Graphql from parent for backward compatibility
export * as Graphql from '#~/document/_.js'
