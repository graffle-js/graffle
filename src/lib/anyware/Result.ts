import type { Errors } from '../errors/_namespace.js'

export type ResultFailure = Errors.ContextualAggregateError

export type Result<T = unknown> = ResultFailure | ResultSuccess<T>

export interface ResultSuccess<T = unknown> {
  value: T
}

export const successfulResult = <$Value>(value: $Value): ResultSuccess<$Value> => ({ value })
