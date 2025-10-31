/**
 * Core error types for document parsing.
 *
 * Both string and object parsers can produce these error types.
 */

/**
 * Base error type with common fields.
 */
export interface ParserError {
  __typename: 'ParserError'
  error: string
  message: string
  context?: any
}

/**
 * Helper to create error objects.
 */
export type MakeError<$ErrorType extends string, $Context = {}> = {
  __typename: 'ParserError'
  error: $ErrorType
} & $Context
