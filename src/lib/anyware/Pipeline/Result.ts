import type { Errors } from '../../errors/__.js'
import type { PipelineSpec } from './Spec.js'

export type InferResultFromSpec<$PipelineSpec extends PipelineSpec> = Result<$PipelineSpec['output']>

export type ResultFailure = Errors.ContextualAggregateError

export type Result<T = unknown> = ResultFailure | ResultSuccess<T>

export interface ResultSuccess<T = unknown> {
  value: T
}
