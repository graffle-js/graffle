/**
 * Type-level error reporting for the string parser.
 *
 * Instead of returning `never`, we return structured error objects
 * that tell you exactly what went wrong and where.
 */

import type { Core } from '../core/_.js'

/**
 * Failed to parse operation keyword (query/mutation/subscription).
 */
export interface ErrorInvalidOperation extends Core.ParserError {
  error: 'InvalidOperation'
  message: 'Expected operation keyword (query/mutation/subscription) or selection set'
  input: string
}

/**
 * Operation type not available in schema (e.g., no mutation defined).
 */
export interface ErrorOperationNotAvailable extends Core.ParserError {
  error: 'OperationNotAvailable'
  message: string // e.g., "Mutation operation not available in schema"
  operationType: 'query' | 'mutation' | 'subscription'
}

/**
 * Field not found on parent type.
 */
export interface ErrorFieldNotFound extends Core.ParserError {
  error: 'FieldNotFound'
  message: string // e.g., "Field 'xyz' does not exist on type 'Query'"
  fieldName: string
  parentName: string
  availableFields?: string[]
  path: string
}

/**
 * Expected object/interface type for nested selection, got scalar/enum instead.
 */
export interface ErrorInvalidSelectionOnScalar extends Core.ParserError {
  error: 'InvalidSelectionOnScalar'
  message: string // e.g., "Cannot select fields on scalar type 'String'"
  fieldName: string
  fieldType: string
  path: string
}

/**
 * Failed to parse selection set (missing braces, etc.).
 */
export interface ErrorInvalidSelectionSet extends Core.ParserError {
  error: 'InvalidSelectionSet'
  message: string
  input: string
}

/**
 * Any error type.
 */
export type AnyError =
  | ErrorInvalidOperation
  | ErrorOperationNotAvailable
  | ErrorFieldNotFound
  | ErrorInvalidSelectionOnScalar
  | ErrorInvalidSelectionSet
