import type { Errors } from '../../errors/__.js'
import type { Interceptor } from '../Interceptor/Interceptor.js'
import type { Pipeline } from './__.js'

interface Params {
  initialInput: object
  interceptors: Interceptor[]
}

type Run = <
  $Pipeline extends Pipeline,
  $Params extends Params,
>(
  pipeline: $Pipeline,
  params?: $Params,
) => Promise<
  | Errors.ContextualAggregateError
  | Awaited<$Pipeline['output']>
>

/**
 * todo
 */
export const run: Run = (pipeline, params) => {
  // todo
  return undefined as any
}
