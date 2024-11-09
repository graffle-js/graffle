import type { Errors } from '../../errors/__.js'

export type Result<T = unknown> = Errors.ContextualAggregateError | SuccessfulResult<T>

export interface SuccessfulResult<T = unknown> {
  value: T
}
