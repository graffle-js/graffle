export * from './ast/_.js'
export * from './mappings.js'
export * from './utilities.js'

// Re-export Typed namespace (TypedDocument renamed to Typed at Document level)
export { TypedDocument as Typed } from './typed/_.js'

// Re-export OperationType from schema (was in original document.ts)
export { OperationType } from '../schema/OperationType/$.js'
