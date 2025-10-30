export { InferResult } from './InferResult/_.js'
export type { InferOperation, InferOperations, InferOperationsInDocument, Parse } from './Parse.js'
export * as Static from './rootType.js'
export { Select } from './Select/_.js'
export { ToGraphQLDocument } from './ToGraphQLDocument/_.js'
export { Var } from './var/_.js'

// Re-export Grafaid from parent for backward compatibility
export * as Grafaid from '#~/document/_.js'
