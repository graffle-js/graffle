import type { Errors } from '../../errors/__.js'
import type { Interceptor } from '../Interceptor/Interceptor.js'
import type { Pipeline } from './__.js'
import type { Builder } from './builder.js'

interface Params {
  initialInput: object
  interceptors: Interceptor[]
}

type Run = <
  $Builder extends Builder,
  $Params extends Params,
>(
  pipeline: $Builder,
  params?: $Params,
) => Promise<
  | Errors.ContextualAggregateError
  | Awaited<Pipeline.GetResult<$Builder['context']>>
>

/**
 * todo
 */
export const run: Run = (pipeline, params) => {
  // todo
  return undefined as any
}
