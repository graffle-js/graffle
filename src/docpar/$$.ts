// String parsing exports (re-exported through namespace)
export { String } from './string/$.js'

// Object builder exports (re-exported through namespace)
export { Object } from './object/$.js'

// Shared utilities - both type and value exports for namespace support
import * as _TypedFullDocument from './typed-full-document.js'
export { _TypedFullDocument as TypedFullDocument }
export type * from './typed-full-document.js'
export type { Operation } from './typed-full-document.js'

// Re-export types and functions from gql (but avoid conflicts)
export type {
  Config,
  gql,
  InferOperations,
  ParseGraphQLObject,
  ParseGraphQLString,
  StaticDocumentBuilder,
} from './gql.js'
export { createGql, createStaticRootField, createStaticRootType, defaults, Gql } from './gql.js'

// Re-export from rootField
export * from './rootField.js'
